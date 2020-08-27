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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/analystratings.js":
/*!****************************************!*\
  !*** ./resources/js/analystratings.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Chart.pluginService.register({
  beforeDraw: function beforeDraw(chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx; //Get options from the center object in options

      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = '#333';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = sidePadding / 100 * (chart.innerRadius * 2); //Start with a base font of 30px

      ctx.font = "40px " + fontStyle; //Get the width of the string and also the width of the element minus 10 to give it 5px side padding

      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated; // Find out how much the font can grow in width.

      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(20 * widthRatio);
      var elementHeight = chart.innerRadius * 2; // Pick a new font size so it will not be larger than the height of label.

      var fontSizeToUse = Math.min(newFontSize, elementHeight); //Set font settings to draw it correctly.

      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 1.7;
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color; //Draw text in center

      ctx.fillText(txt, centerX, centerY);
    }
  }
});
var ticker = $('.ticker').text();
var rating_types = ['ratingBuy', 'ratingOverweight', 'ratingHold', 'ratingUnderweight', 'ratingSell']; // GET ANALYST DATA

function get_analyst_ratings(ticker) {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
    }
  });
  var token = $('meta[name="csrf-token"]').attr('content');
  $.ajax({
    url: '/company/' + ticker + '/get_analyst_ratings/',
    type: 'GET',
    dataType: 'json',
    data: {
      _token: token,
      ticker: ticker
    },
    success: function success(response) {
      build_charts(response);
    }
  });
}

get_analyst_ratings(ticker); // BUILD ALL CHARTS

function build_charts(response) {
  // BUY CONSENSUS CHART
  var ctx = document.getElementById("buy_consensus");
  var buy_consensus = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
        data: [response.buy_consensus, 100 - response.buy_consensus],
        backgroundColor: ['#42A458', '#ccc'],
        borderColor: ['#ccc'],
        borderWidth: 1
      }]
    },
    options: {
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      responsive: true,
      legend: {
        display: false,
        fontColor: '#000'
      },
      tooltips: {
        enabled: false
      },
      elements: {
        center: {
          text: response.buy_consensus + '%',
          color: '#000',
          fontStyle: 'Arial',
          sidePadding: 15
        }
      }
    }
  }); // CURRENT ANALYST RATINGS

  var current_analyst_ratings_data = {
    labels: ['Strong Buy', 'Buy', 'Hold', 'Sell', 'Strong Sell'],
    datasets: [{
      data: response.current_ratings,
      backgroundColor: ['#3B954F', '#38c172', '#aaa', '#EB4B46', '#C72D29']
    }],
    elements: {
      center: {
        color: '#203047',
        fontStyle: 'Segoeui',
        sidePadding: 15
      }
    }
  };
  var current_analyst_ratings_options = {
    scales: {
      xAxes: [{
        ticks: {// fontColor: Master.tick_color,
        },
        gridLines: {// color: Master.gridline_color,
        }
      }],
      yAxes: [{
        ticks: {// fontColor: Master.tick_color,
        },
        gridLines: {// color: Master.gridline_color,
        }
      }]
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: true,
      mode: 'single' // callbacks: {
      //     label: function (tooltipItem, data) {
      // return Master.convertSecsToHrsMinsSecs(data['datasets'][0]['data'][tooltipItem['index']]);
      //     }
      // }

    }
  };
  var ctx = document.getElementById('current_analyst_ratings_chart').getContext('2d'); // if (window.current_analyst_ratings_chart != undefined) {
  //     window.current_analyst_ratings_chart.destroy();
  // }

  console.log(response.historic_ratings.strong_buy);
  window.current_analyst_ratings_chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: current_analyst_ratings_data,
    options: current_analyst_ratings_options
  }); // HISTORIC ANALYSTS RATINGS

  var historic_analyst_ratings_data = {
    labels: response.historic_dates,
    // /['#3B954F', '#38c172', '#aaa', '#EB4B46', '#C72D29']
    datasets: [{
      label: 'Strong Buy',
      backgroundColor: '#3B954F',
      data: response.historic_ratings.strong_buy
    }, {
      label: 'Buy',
      backgroundColor: '#38c172',
      data: response.historic_ratings.buy
    }, {
      label: 'Hold',
      backgroundColor: '#aaa',
      data: response.historic_ratings.hold
    }, {
      label: 'Sell',
      backgroundColor: '#EB4B46',
      data: response.historic_ratings.sell
    }, {
      label: 'Strong Sell',
      backgroundColor: '#C72D29',
      data: response.historic_ratings.strong_sell
    }]
  };
  var historic_analyst_ratings_options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      // display:false,
      position: 'bottom',
      labels: {
        boxWidth: 12 // fontColor: Master.tick_color,

      }
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          // fontColor: Master.tick_color,
          beginAtZero: true // userCallback: function (label, index, labels) {
          //     if (Math.floor(label) === label) {
          //         return label;
          //     }
          // },

        },
        scaleLabel: {
          display: true,
          labelString: 'Ratings by Date' // fontColor: Master.tick_color

        },
        gridLines: {// color: Master.gridline_color,
        }
      }],
      yAxes: [{
        ticks: {// fontColor: Master.tick_color,
        },
        gridLines: {// color: Master.gridline_color,
        },
        stacked: true,
        position: 'left',
        scalePositionLeft: true,
        scaleLabel: {
          display: true,
          labelString: '# of Ratings' // fontColor: Master.tick_color

        }
      }]
    },
    tooltips: {
      enabled: true,
      mode: 'label' // filter: function (tooltipItem, data) {
      //     var datapointValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
      //     if (datapointValue) {
      //         return true;
      //     }
      // }

    }
  };

  if (window.historic_analyst_ratings_chart != undefined) {// window.historic_analyst_ratings_chart.destroy();
  }

  var ctx = document.getElementById('historic_analyst_ratings_chart').getContext('2d');
  window.historic_analyst_ratings_chart = new Chart(ctx, {
    type: 'bar',
    data: historic_analyst_ratings_data,
    options: historic_analyst_ratings_options
  });
}

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./resources/js/analystratings.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thomasgrauer/Sites/market_watch/resources/js/analystratings.js */"./resources/js/analystratings.js");


/***/ })

/******/ });