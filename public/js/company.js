/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/company.js":
/*!*********************************!*\
  !*** ./resources/js/company.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
var Company = {
  ticker: $('.ticker').text(),
  init: function init() {
    this.get_stock_chart_data(); // $('.stockchart_range_options').on('click', this.update_stock_chart);

    $('.stockchart_date_btn').on('click', this.update_stock_chart);
  },
  build_stock_chart: function build_stock_chart() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (typeof chart != 'undefined') {
      chart.dispose();
    }

    am4core.ready(function () {
      // var data=[];
      // Themes begin
      // am4core.useTheme(am4themes_animated);
      am4core.useTheme(am4themes_animated); // Themes end
      // Create chart

      var chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.padding(0, 15, 0, 15);
      chart.data = data; // #configField
      // {
      //   "value": 100,
      //   "config": {
      //     "fill": "#F00"
      //   }
      // }

      chart.dataProvider = data; // the following line makes value axes to be arranged vertically.

      chart.leftAxesContainer.layout = "vertical"; // uncomment this line if you want to change order of axes
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
      dateAxis.minZoomCount = 5; // these two lines makes the axis to be initially zoomed-in
      // dateAxis.start = 0.7;
      // dateAxis.keepSelection = true;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.zIndex = 1;
      valueAxis.renderer.baseGrid.disabled = true; // height of axis

      valueAxis.height = am4core.percent(65);
      valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
      valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.verticalCenter = "bottom";
      valueAxis.renderer.labels.template.padding(2, 2, 2, 2); //valueAxis.renderer.maxLabelPosition = 0.95;

      valueAxis.renderer.fontSize = "0.8em";
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
      valueAxis2.tooltip.disabled = true; // height of axis

      valueAxis2.height = am4core.percent(35);
      valueAxis2.zIndex = 3; // this makes gap between panels

      valueAxis2.marginTop = 30;
      valueAxis2.renderer.baseGrid.disabled = true;
      valueAxis2.renderer.inside = true;
      valueAxis2.renderer.labels.template.verticalCenter = "bottom";
      valueAxis2.renderer.labels.template.padding(2, 2, 2, 2); //valueAxis.renderer.maxLabelPosition = 0.95;

      valueAxis2.renderer.fontSize = "0.8em";
      valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
      valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;
      var series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.dataFields.dateX = "Date";
      series2.clustered = false;
      series2.dataFields.valueY = "Volume";
      series2.yAxis = valueAxis2;
      series2.tooltipText = "{valueY.value}";
      series2.name = "Series 2"; // volume should be summed

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
      document.getElementById("1m").addEventListener("click", function () {
        var max = dateAxis.groupMax["day1"];
        var date = new Date(max);
        am4core.time.add(date, "month", -1);
        zoomToDates(date);
      });
      document.getElementById("3m").addEventListener("click", function () {
        var max = dateAxis.groupMax["day1"];
        var date = new Date(max);
        am4core.time.add(date, "month", -3);
        zoomToDates(date);
      });
      document.getElementById("6m").addEventListener("click", function () {
        var max = dateAxis.groupMax["day1"];
        var date = new Date(max);
        am4core.time.add(date, "month", -6);
        zoomToDates(date);
      });
      document.getElementById("1y").addEventListener("click", function () {
        var max = dateAxis.groupMax["day1"];
        var date = new Date(max);
        am4core.time.add(date, "year", -1);
        zoomToDates(date);
      });
      document.getElementById("ytd").addEventListener("click", function () {
        var max = dateAxis.groupMax["day1"];
        var date = new Date(max);
        am4core.time.round(date, "year", 1);
        zoomToDates(date);
      });
      document.getElementById("max").addEventListener("click", function () {
        var min = dateAxis.groupMin["day1"];
        var date = new Date(min);
        zoomToDates(date);
      });
      dateAxis.events.on("selectionextremeschanged", function () {
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

        zoomTimeout = setTimeout(function () {
          var start = document.getElementById("fromfield").value;
          var end = document.getElementById("tofield").value;

          if (start.length < inputFieldFormat.length || end.length < inputFieldFormat.length) {
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
        dateAxis.keepSelection = true; //dateAxis.start = (date.getTime() - min)/(max - min);
        //dateAxis.end = 1;

        dateAxis.zoom({
          start: (date.getTime() - min) / (max - min),
          end: 1
        });
      }
    }); // end am4core.ready()
  },
  update_stock_chart: function update_stock_chart() {
    Company.ticker = $('.ticker').text();
    var range = $(this).attr('id') != undefined ? $(this).attr('id') : '1M';
    Company.get_stock_chart_data(Company.ticker, range);
  },
  get_stock_chart_data: function get_stock_chart_data() {
    var ticker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return function (ticker) {
      var ticker = $('.ticker').text();
      range = range != '' ? range : '1M';
      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
      });
      var token = $('meta[name="csrf-token"]').attr('content');
      $.ajax({
        url: ticker + '/chart/' + range,
        type: 'GET',
        dataType: 'json',
        data: {
          _token: token,
          ticker: ticker,
          range: range
        },
        success: function success(response) {
          var data = Company.build_array_data(response);
          return Company.build_stock_chart(data);
        }
      });
    }(ticker);
  },
  build_array_data: function build_array_data(response) {
    var data_array = [];
    var data = response.map(function (profile, index, myArr) {
      var candle = {
        'Date': profile.date,
        'Open': profile.open,
        'High': profile.high,
        'Low': profile.low,
        'Close': profile.close,
        'Volume': profile.volume,
        'AdjClose': profile.close
      };
      data_array.push(candle);
    });
    return data_array;
  }
};
$(document).ready(function () {
  Company.init();
});

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi ./resources/js/company.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thomasgrauer/Sites/market_watch/resources/js/company.js */"./resources/js/company.js");


/***/ })

/******/ });