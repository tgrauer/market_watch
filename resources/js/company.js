// import am4core from "@amcharts/amcharts4/core";
// import am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

var Company = {

	ticker:$('.ticker').text(),

	init:function(){
		this.get_stock_chart_data();
		// $('.stockchart_range_options').on('click', this.update_stock_chart);
		$('.stockchart_date_btn').on('click', this.update_stock_chart);
	},

	build_stock_chart:function(data=[]){

		if(typeof chart != 'undefined'){
			console.log('chart is already built');
			chart.dispose();
		}
		
		am4core.ready(function() {

			am4core.useTheme(am4themes_animated);
			
			// Create chart
			var chart = am4core.create("chartdiv", am4charts.XYChart);
			chart.padding(0, 15, 0, 15);
			chart.data = data;

			// #configField
			// {
			//   "value": 100,
			//   "config": {
			//     "fill": "#F00"
			//   }
			console.log(chart.colors._list);
			console.log(am4core);
			// }

			chart.dataProvider = data;
			// the following line makes value axes to be arranged vertically.
			chart.leftAxesContainer.layout = "vertical";

			// uncomment this line if you want to change order of axes
			//chart.bottomAxesContainer.reverseOrder = true;

			var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
			dateAxis.renderer.grid.template.location = 0;
			dateAxis.renderer.ticks.template.length = 8;
			dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
			dateAxis.renderer.grid.template.disabled = true;
			dateAxis.renderer.ticks.template.disabled = false;
			dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
			dateAxis.renderer.minLabelPosition = 0.01;
			dateAxis.renderer.maxLabelPosition = 0.99;
			dateAxis.keepSelection = true;
			dateAxis.minHeight = 30;

			dateAxis.groupData = true;
			dateAxis.minZoomCount = 5;

			// these two lines makes the axis to be initially zoomed-in
			// dateAxis.start = 0.7;
			// dateAxis.keepSelection = true;

			var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
			valueAxis.tooltip.disabled = true;
			valueAxis.zIndex = 1;
			valueAxis.renderer.baseGrid.disabled = true;
			// height of axis
			valueAxis.height = am4core.percent(65);

			valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
			valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
			valueAxis.renderer.inside = true;
			valueAxis.renderer.labels.template.verticalCenter = "bottom";
			valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

			//valueAxis.renderer.maxLabelPosition = 0.95;
			valueAxis.renderer.fontSize = "0.8em"

			var series = chart.series.push(new am4charts.CandlestickSeries());
			series.dataFields.dateX = "Date";
			series.dataFields.openValueY = "Open";
			series.dataFields.valueY = "Close";
			series.dataFields.lowValueY = "Low";
			series.dataFields.highValueY = "High";
			series.clustered = false;
			series.tooltipText = "Open: {openValueY.value}\nHigh: {highValueY.value}\nLow: {lowValueY.value}\nClose: {valueY.value}";
			series.name = "MSFT";
			series.defaultState.transitionDuration = 0;

			var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
			valueAxis2.tooltip.disabled = true;
			// height of axis
			valueAxis2.height = am4core.percent(35);
			valueAxis2.zIndex = 3
			// this makes gap between panels
			valueAxis2.marginTop = 30;
			valueAxis2.renderer.baseGrid.disabled = true;
			valueAxis2.renderer.inside = true;
			valueAxis2.renderer.labels.template.verticalCenter = "bottom";
			valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
			//valueAxis.renderer.maxLabelPosition = 0.95;
			valueAxis2.renderer.fontSize = "0.8em"

			valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
			valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

			var series2 = chart.series.push(new am4charts.ColumnSeries());
			series2.dataFields.dateX = "Date";
			series2.clustered = false;
			series2.dataFields.valueY = "Volume";
			series2.yAxis = valueAxis2;
			series2.tooltipText = "{valueY.value}";
			series2.name = "Series 2";
			// volume should be summed
			series2.groupFields.valueY = "sum";
			series2.defaultState.transitionDuration = 0;

			chart.cursor = new am4charts.XYCursor();

			var scrollbarX = new am4charts.XYChartScrollbar();

			var sbSeries = chart.series.push(new am4charts.LineSeries());
			sbSeries.dataFields.valueY = "Close";
			sbSeries.dataFields.dateX = "Date";
			scrollbarX.series.push(sbSeries);
			sbSeries.disabled = true;
			scrollbarX.marginBottom = 20;
			chart.scrollbarX = scrollbarX;
			scrollbarX.scrollbarChart.xAxes.getIndex(0).minHeight = undefined;

			/**
			 * Set up external controls
			 */

			// Date format to be used in input fields
			var inputFieldFormat = "MM-dd-yyyy";

			document.getElementById("1m").addEventListener("click", function() {
				var max = dateAxis.groupMax["day1"];
				var date = new Date(max);
				am4core.time.add(date, "month", -1);
				zoomToDates(date);
			});

			document.getElementById("3m").addEventListener("click", function() {
				var max = dateAxis.groupMax["day1"];
				var date = new Date(max);
				am4core.time.add(date, "month", -3);
				zoomToDates(date);
			});

			document.getElementById("6m").addEventListener("click", function() {
				var max = dateAxis.groupMax["day1"];
				var date = new Date(max);
				am4core.time.add(date, "month", -6);
				zoomToDates(date);
			});

			document.getElementById("1y").addEventListener("click", function() {
				var max = dateAxis.groupMax["day1"];
				var date = new Date(max);
				am4core.time.add(date, "year", -1);
				zoomToDates(date);
			});

			document.getElementById("ytd").addEventListener("click", function() {
				var max = dateAxis.groupMax["day1"];
				var date = new Date(max);
				am4core.time.round(date, "year", 1);
				zoomToDates(date);
			});

			document.getElementById("max").addEventListener("click", function() {
				var min = dateAxis.groupMin["day1"];
				var date = new Date(min);
				zoomToDates(date);
			});

			dateAxis.events.on("selectionextremeschanged", function() {
				updateFields();
			});

			dateAxis.events.on("extremeschanged", updateFields);

			function updateFields() {
			 	var minZoomed = dateAxis.minZoomed + am4core.time.getDuration(dateAxis.mainBaseInterval.timeUnit, dateAxis.mainBaseInterval.count) * 0.5;
			 	document.getElementById("fromfield").value = chart.dateFormatter.format(minZoomed, inputFieldFormat);
			 	document.getElementById("tofield").value = chart.dateFormatter.format(new Date(dateAxis.maxZoomed), inputFieldFormat);
			}

			document.getElementById("fromfield").addEventListener("keyup", updateZoom);
			document.getElementById("tofield").addEventListener("keyup", updateZoom);

			var zoomTimeout;
			function updateZoom() {
				if (zoomTimeout) {
					clearTimeout(zoomTimeout);
				}
			 	zoomTimeout = setTimeout(function() {
			    	var start = document.getElementById("fromfield").value;
			    	var end = document.getElementById("tofield").value;
			    	if ((start.length < inputFieldFormat.length) || (end.length < inputFieldFormat.length)) {
			      		return;
			    	}
			    	var startDate = chart.dateFormatter.parse(start, inputFieldFormat);
			    	var endDate = chart.dateFormatter.parse(end, inputFieldFormat);

					if (startDate && endDate) {
						dateAxis.zoomToDates(startDate, endDate);
					}
				}, 500);
			}

			function zoomToDates(date) {
				var min = dateAxis.groupMin["day1"];
				var max = dateAxis.groupMax["day1"];
				dateAxis.keepSelection = true;
			  //dateAxis.start = (date.getTime() - min)/(max - min);
			  //dateAxis.end = 1;

			 	dateAxis.zoom({start:(date.getTime() - min)/(max - min), end:1});
			}

		}); // end am4core.ready()
	},

	update_stock_chart:function(){
		Company.ticker = $('.ticker').text();
		var range = $(this).attr('id') != undefined ? $(this).attr('id') : '1M';
		Company.get_stock_chart_data(Company.ticker, range);
	},

	get_stock_chart_data:function(ticker='', range=''){
		var ticker = $('.ticker').text();
		range = range != '' ? range : '1M';

		$.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var token = $('meta[name="csrf-token"]').attr('content');

    	$.ajax({
    		url: ticker+'/chart/'+range,
    		type:'GET',
    		dataType:'json',
    		data:{
    			_token:token,
    			ticker:ticker,
    			range:range
    		},
    		success:function(response){
    			var data = Company.build_array_data(response);
    			return Company.build_stock_chart(data);
    		}
    	})
	},

	build_array_data:function(response){
		var data_array =[];

		var data = response.map(function(profile, index, myArr) {
		    var candle = {
		        'Date': profile.date,
		        'Open': profile.open,
		        'High': profile.high,
		        'Low': profile.low,
		        'Close': profile.close,
		        'Volume': profile.volume,
		        'AdjClose': profile.close,
		    }

		    data_array.push(candle);
		});

		return data_array;
	}
}

$(document).ready(function(){
	Company.init();

	$('.datepicker').datepicker();
});


