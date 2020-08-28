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
  init: function init() {
    $('.stockchart_range_options').on('click', this.update_stock_chart); // this.build_stock_chart();
  },
  build_stock_chart: function build_stock_chart() {
    var ctx = document.getElementById('stock_chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  },
  update_stock_chart: function update_stock_chart() {}
};
$(document).ready(function () {
  Company.init();
});
am4core.ready(function () {
  var data = []; // Themes begin

  am4core.useTheme(am4themes_animated); // Themes end
  // Create chart

  var chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.padding(0, 15, 0, 15); // Load data

  chart.dataSource.url = "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv";
  chart.dataSource.parser = new am4core.CSVParser();
  chart.dataSource.parser.options.useColumnNames = true;
  chart.dataSource.parser.options.reverse = true;
  console.log(chart.dataSource.parser);
  data = ['2014-08-08,43.23,43.32,42.91,43.20,28942700,43.20', '2014-08-07,42.84,43.45,42.65,43.23,30314900,43.23', '2014-08-06,42.74,43.17,42.21,42.74,24634000,42.74', '2014-08-05,43.31,43.46,42.83,43.08,26266400,43.08', '2014-08-04,42.97,43.47,42.81,43.37,34244200,43.37', '2014-08-01,43.21,43.25,42.60,42.86,31170300,42.86', '2014-07-31,43.38,43.69,43.08,43.16,31537500,43.16', '2014-07-30,44.07,44.10,43.29,43.58,31921400,43.58', '2014-07-29,43.91,44.09,43.64,43.89,27763100,43.89', '2014-07-28,44.36,44.51,43.93,43.97,29684200,43.97', '2014-07-25,44.30,44.66,44.30,44.50,26701500,44.50', '2014-07-24,44.93,45.00,44.32,44.40,30696100,44.40', '2014-07-23,45.45,45.45,44.62,44.87,52362900,44.87', '2014-07-22,45.00,45.15,44.59,44.83,43020800,44.83', '2014-07-21,44.56,45.16,44.22,44.84,37583900,44.84', '2014-07-18,44.65,44.84,44.25,44.69,43397400,44.69']; // the following line makes value axes to be arranged vertically.

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
  document.getElementById("b1m").addEventListener("click", function () {
    var max = dateAxis.groupMax["day1"];
    var date = new Date(max);
    am4core.time.add(date, "month", -1);
    zoomToDates(date);
  });
  document.getElementById("b3m").addEventListener("click", function () {
    var max = dateAxis.groupMax["day1"];
    var date = new Date(max);
    am4core.time.add(date, "month", -3);
    zoomToDates(date);
  });
  document.getElementById("b6m").addEventListener("click", function () {
    var max = dateAxis.groupMax["day1"];
    var date = new Date(max);
    am4core.time.add(date, "month", -6);
    zoomToDates(date);
  });
  document.getElementById("b1y").addEventListener("click", function () {
    var max = dateAxis.groupMax["day1"];
    var date = new Date(max);
    am4core.time.add(date, "year", -1);
    zoomToDates(date);
  });
  document.getElementById("bytd").addEventListener("click", function () {
    var max = dateAxis.groupMax["day1"];
    var date = new Date(max);
    am4core.time.round(date, "year", 1);
    zoomToDates(date);
  });
  document.getElementById("bmax").addEventListener("click", function () {
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