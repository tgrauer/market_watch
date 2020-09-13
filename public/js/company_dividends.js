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

/***/ "./resources/js/company_dividends.js":
/*!*******************************************!*\
  !*** ./resources/js/company_dividends.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Chart.pluginService.register({\n  beforeDraw: function beforeDraw(chart) {\n    if (chart.config.options.elements.center) {\n      //Get ctx from string\n      var ctx = chart.chart.ctx; //Get options from the center object in options\n\n      var centerConfig = chart.config.options.elements.center;\n      var fontStyle = centerConfig.fontStyle || 'Arial';\n      var txt = centerConfig.text;\n      var color = '#333';\n      var sidePadding = centerConfig.sidePadding || 20;\n      var sidePaddingCalculated = sidePadding / 100 * (chart.innerRadius * 2); //Start with a base font of 30px\n\n      ctx.font = \"40px \" + fontStyle; //Get the width of the string and also the width of the element minus 10 to give it 5px side padding\n\n      var stringWidth = ctx.measureText(txt).width;\n      var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated; // Find out how much the font can grow in width.\n\n      var widthRatio = elementWidth / stringWidth;\n      var newFontSize = Math.floor(20 * widthRatio);\n      var elementHeight = chart.innerRadius * 2; // Pick a new font size so it will not be larger than the height of label.\n\n      var fontSizeToUse = Math.min(newFontSize, elementHeight); //Set font settings to draw it correctly.\n\n      ctx.textAlign = 'center';\n      ctx.textBaseline = 'top';\n      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;\n      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 1.7;\n      ctx.font = fontSizeToUse + \"px \" + fontStyle;\n      ctx.fillStyle = color; //Draw text in center\n\n      ctx.fillText(txt, centerX, centerY);\n    }\n  }\n});\nvar ticker = $('.ticker').text();\n\nfunction get_dividends(ticker) {\n  $.ajaxSetup({\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"_token\"]').attr('content')\n    }\n  });\n  var token = $('meta[name=\"csrf-token\"]').attr('content');\n  $.ajax({\n    url: '/company/' + ticker + '/get_dividends/',\n    type: 'GET',\n    dataType: 'json',\n    data: {\n      _token: token,\n      ticker: ticker\n    },\n    success: function success(response) {\n      console.log(response);\n      build_charts(response);\n    }\n  });\n}\n\nfunction build_charts(response) {\n  var dates = [];\n  var div_amounts = [];\n\n  for (var i = 0; i < response.length; i++) {\n    dates.push(response[i].paymentDate);\n    div_amounts.push(response[i].amount);\n  }\n\n  var config = {\n    type: 'line',\n    data: {\n      labels: dates,\n      datasets: [{\n        label: 'Dividend Amount',\n        data: div_amounts,\n        backgroundColor: '#3490dc',\n        borderColor: '#97BDDC',\n        fill: false,\n        borderDash: [5, 5],\n        pointRadius: 8,\n        pointHoverRadius: 11\n      }]\n    },\n    options: {\n      responsive: true,\n      legend: {\n        display: false\n      },\n      hover: {\n        mode: 'index'\n      },\n      scales: {\n        xAxes: [{\n          display: true,\n          scaleLabel: {\n            display: true,\n            labelString: 'Payment Date'\n          }\n        }],\n        yAxes: [{\n          display: true,\n          scaleLabel: {\n            display: true,\n            labelString: 'Amount Paid'\n          }\n        }]\n      },\n      title: {\n        display: true,\n        text: 'Dividend Payments by Payment Date'\n      }\n    }\n  };\n  var ctx = document.getElementById('dividend_histroy_chart').getContext('2d');\n  window.myLine = new Chart(ctx, config);\n}\n\nget_dividends(ticker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcGFueV9kaXZpZGVuZHMuanM/NjIwNSJdLCJuYW1lcyI6WyJDaGFydCIsInBsdWdpblNlcnZpY2UiLCJyZWdpc3RlciIsImJlZm9yZURyYXciLCJjaGFydCIsImNvbmZpZyIsIm9wdGlvbnMiLCJlbGVtZW50cyIsImNlbnRlciIsImN0eCIsImNlbnRlckNvbmZpZyIsImZvbnRTdHlsZSIsInR4dCIsInRleHQiLCJjb2xvciIsInNpZGVQYWRkaW5nIiwic2lkZVBhZGRpbmdDYWxjdWxhdGVkIiwiaW5uZXJSYWRpdXMiLCJmb250Iiwic3RyaW5nV2lkdGgiLCJtZWFzdXJlVGV4dCIsIndpZHRoIiwiZWxlbWVudFdpZHRoIiwid2lkdGhSYXRpbyIsIm5ld0ZvbnRTaXplIiwiTWF0aCIsImZsb29yIiwiZWxlbWVudEhlaWdodCIsImZvbnRTaXplVG9Vc2UiLCJtaW4iLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJjZW50ZXJYIiwiY2hhcnRBcmVhIiwibGVmdCIsInJpZ2h0IiwiY2VudGVyWSIsInRvcCIsImJvdHRvbSIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwidGlja2VyIiwiJCIsImdldF9kaXZpZGVuZHMiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsInRva2VuIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImRhdGEiLCJfdG9rZW4iLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiYnVpbGRfY2hhcnRzIiwiZGF0ZXMiLCJkaXZfYW1vdW50cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwicGF5bWVudERhdGUiLCJhbW91bnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJmaWxsIiwiYm9yZGVyRGFzaCIsInBvaW50UmFkaXVzIiwicG9pbnRIb3ZlclJhZGl1cyIsInJlc3BvbnNpdmUiLCJsZWdlbmQiLCJkaXNwbGF5IiwiaG92ZXIiLCJtb2RlIiwic2NhbGVzIiwieEF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJ5QXhlcyIsInRpdGxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJ3aW5kb3ciLCJteUxpbmUiXSwibWFwcGluZ3MiOiJBQUFBQSxLQUFLLENBQUNDLGFBQU4sQ0FBb0JDLFFBQXBCLENBQTZCO0FBQ3pCQyxZQUFVLEVBQUUsb0JBQVVDLEtBQVYsRUFBaUI7QUFDekIsUUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxNQUFsQyxFQUEwQztBQUN0QztBQUNBLFVBQUlDLEdBQUcsR0FBR0wsS0FBSyxDQUFDQSxLQUFOLENBQVlLLEdBQXRCLENBRnNDLENBSXRDOztBQUNBLFVBQUlDLFlBQVksR0FBR04sS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxNQUFqRDtBQUNBLFVBQUlHLFNBQVMsR0FBR0QsWUFBWSxDQUFDQyxTQUFiLElBQTBCLE9BQTFDO0FBQ0EsVUFBSUMsR0FBRyxHQUFHRixZQUFZLENBQUNHLElBQXZCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLE1BQVo7QUFDQSxVQUFJQyxXQUFXLEdBQUdMLFlBQVksQ0FBQ0ssV0FBYixJQUE0QixFQUE5QztBQUNBLFVBQUlDLHFCQUFxQixHQUFJRCxXQUFXLEdBQUcsR0FBZixJQUF1QlgsS0FBSyxDQUFDYSxXQUFOLEdBQW9CLENBQTNDLENBQTVCLENBVnNDLENBV3RDOztBQUNBUixTQUFHLENBQUNTLElBQUosR0FBVyxVQUFVUCxTQUFyQixDQVpzQyxDQWN0Qzs7QUFDQSxVQUFJUSxXQUFXLEdBQUdWLEdBQUcsQ0FBQ1csV0FBSixDQUFnQlIsR0FBaEIsRUFBcUJTLEtBQXZDO0FBQ0EsVUFBSUMsWUFBWSxHQUFJbEIsS0FBSyxDQUFDYSxXQUFOLEdBQW9CLENBQXJCLEdBQTBCRCxxQkFBN0MsQ0FoQnNDLENB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UEMsbUJBQVcsRUFBRSxTQUpOO0FBS1BDLFlBQUksRUFBRSxLQUxDO0FBTVBDLGtCQUFVLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQU5MO0FBT1BDLG1CQUFXLEVBQUUsQ0FQTjtBQVFQQyx3QkFBZ0IsRUFBRTtBQVJYLE9BQUQ7QUFGUixLQUZHO0FBZVRwRSxXQUFPLEVBQUU7QUFDTHFFLGdCQUFVLEVBQUUsSUFEUDtBQUVMQyxZQUFNLEVBQUU7QUFDSkMsZUFBTyxFQUFDO0FBREosT0FGSDtBQUtMQyxXQUFLLEVBQUU7QUFDSEMsWUFBSSxFQUFFO0FBREgsT0FMRjtBQVFMQyxZQUFNLEVBQUU7QUFDSkMsYUFBSyxFQUFFLENBQUM7QUFDSkosaUJBQU8sRUFBRSxJQURMO0FBRUpLLG9CQUFVLEVBQUU7QUFDUkwsbUJBQU8sRUFBRSxJQUREO0FBRVJNLHVCQUFXLEVBQUU7QUFGTDtBQUZSLFNBQUQsQ0FESDtBQVFKQyxhQUFLLEVBQUUsQ0FBQztBQUNKUCxpQkFBTyxFQUFFLElBREw7QUFFSkssb0JBQVUsRUFBRTtBQUNSTCxtQkFBTyxFQUFFLElBREQ7QUFFUk0sdUJBQVcsRUFBRTtBQUZMO0FBRlIsU0FBRDtBQVJILE9BUkg7QUF3QkxFLFdBQUssRUFBRTtBQUNIUixlQUFPLEVBQUUsSUFETjtBQUVIaEUsWUFBSSxFQUFFO0FBRkg7QUF4QkY7QUFmQSxHQUFiO0FBOENJLE1BQUlKLEdBQUcsR0FBRzZFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix3QkFBeEIsRUFBa0RDLFVBQWxELENBQTZELElBQTdELENBQVY7QUFDQUMsUUFBTSxDQUFDQyxNQUFQLEdBQWdCLElBQUkxRixLQUFKLENBQVVTLEdBQVYsRUFBZUosTUFBZixDQUFoQjtBQUNQOztBQUVEc0MsYUFBYSxDQUFDRixNQUFELENBQWIiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcGFueV9kaXZpZGVuZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJDaGFydC5wbHVnaW5TZXJ2aWNlLnJlZ2lzdGVyKHtcbiAgICBiZWZvcmVEcmF3OiBmdW5jdGlvbiAoY2hhcnQpIHtcbiAgICAgICAgaWYgKGNoYXJ0LmNvbmZpZy5vcHRpb25zLmVsZW1lbnRzLmNlbnRlcikge1xuICAgICAgICAgICAgLy9HZXQgY3R4IGZyb20gc3RyaW5nXG4gICAgICAgICAgICB2YXIgY3R4ID0gY2hhcnQuY2hhcnQuY3R4O1xuXG4gICAgICAgICAgICAvL0dldCBvcHRpb25zIGZyb20gdGhlIGNlbnRlciBvYmplY3QgaW4gb3B0aW9uc1xuICAgICAgICAgICAgdmFyIGNlbnRlckNvbmZpZyA9IGNoYXJ0LmNvbmZpZy5vcHRpb25zLmVsZW1lbnRzLmNlbnRlcjtcbiAgICAgICAgICAgIHZhciBmb250U3R5bGUgPSBjZW50ZXJDb25maWcuZm9udFN0eWxlIHx8ICdBcmlhbCc7XG4gICAgICAgICAgICB2YXIgdHh0ID0gY2VudGVyQ29uZmlnLnRleHQ7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSAnIzMzMyc7XG4gICAgICAgICAgICB2YXIgc2lkZVBhZGRpbmcgPSBjZW50ZXJDb25maWcuc2lkZVBhZGRpbmcgfHwgMjA7XG4gICAgICAgICAgICB2YXIgc2lkZVBhZGRpbmdDYWxjdWxhdGVkID0gKHNpZGVQYWRkaW5nIC8gMTAwKSAqIChjaGFydC5pbm5lclJhZGl1cyAqIDIpXG4gICAgICAgICAgICAvL1N0YXJ0IHdpdGggYSBiYXNlIGZvbnQgb2YgMzBweFxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjQwcHggXCIgKyBmb250U3R5bGU7XG5cbiAgICAgICAgICAgIC8vR2V0IHRoZSB3aWR0aCBvZiB0aGUgc3RyaW5nIGFuZCBhbHNvIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudCBtaW51cyAxMCB0byBnaXZlIGl0IDVweCBzaWRlIHBhZGRpbmdcbiAgICAgICAgICAgIHZhciBzdHJpbmdXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0eHQpLndpZHRoO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRXaWR0aCA9IChjaGFydC5pbm5lclJhZGl1cyAqIDIpIC0gc2lkZVBhZGRpbmdDYWxjdWxhdGVkO1xuXG4gICAgICAgICAgICAvLyBGaW5kIG91dCBob3cgbXVjaCB0aGUgZm9udCBjYW4gZ3JvdyBpbiB3aWR0aC5cbiAgICAgICAgICAgIHZhciB3aWR0aFJhdGlvID0gZWxlbWVudFdpZHRoIC8gc3RyaW5nV2lkdGg7XG4gICAgICAgICAgICB2YXIgbmV3Rm9udFNpemUgPSBNYXRoLmZsb29yKDIwICogd2lkdGhSYXRpbyk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudEhlaWdodCA9IChjaGFydC5pbm5lclJhZGl1cyAqIDIpO1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgbmV3IGZvbnQgc2l6ZSBzbyBpdCB3aWxsIG5vdCBiZSBsYXJnZXIgdGhhbiB0aGUgaGVpZ2h0IG9mIGxhYmVsLlxuICAgICAgICAgICAgdmFyIGZvbnRTaXplVG9Vc2UgPSBNYXRoLm1pbihuZXdGb250U2l6ZSwgZWxlbWVudEhlaWdodCk7XG5cbiAgICAgICAgICAgIC8vU2V0IGZvbnQgc2V0dGluZ3MgdG8gZHJhdyBpdCBjb3JyZWN0bHkuXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICAgICAgICB2YXIgY2VudGVyWCA9ICgoY2hhcnQuY2hhcnRBcmVhLmxlZnQgKyBjaGFydC5jaGFydEFyZWEucmlnaHQpIC8gMik7XG4gICAgICAgICAgICB2YXIgY2VudGVyWSA9ICgoY2hhcnQuY2hhcnRBcmVhLnRvcCArIGNoYXJ0LmNoYXJ0QXJlYS5ib3R0b20pIC8gMS43KTtcbiAgICAgICAgICAgIGN0eC5mb250ID0gZm9udFNpemVUb1VzZSArIFwicHggXCIgKyBmb250U3R5bGU7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG5cbiAgICAgICAgICAgIC8vRHJhdyB0ZXh0IGluIGNlbnRlclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHR4dCwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxudmFyIHRpY2tlciA9ICQoJy50aWNrZXInKS50ZXh0KCk7XG5cbmZ1bmN0aW9uIGdldF9kaXZpZGVuZHModGlja2VyKXtcbiAgICAkLmFqYXhTZXR1cCh7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJfdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHRva2VuID0gJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9jb21wYW55LycrdGlja2VyKycvZ2V0X2RpdmlkZW5kcy8nLFxuICAgICAgICB0eXBlOidHRVQnLFxuICAgICAgICBkYXRhVHlwZTonanNvbicsXG4gICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgX3Rva2VuOnRva2VuLFxuICAgICAgICAgICAgdGlja2VyOnRpY2tlclxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTsgXG5cbiAgICAgICAgICAgIGJ1aWxkX2NoYXJ0cyhyZXNwb25zZSk7ICAgICAgIFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkX2NoYXJ0cyhyZXNwb25zZSl7XG5cbiAgICB2YXIgZGF0ZXM9W107XG4gICAgdmFyIGRpdl9hbW91bnRzPVtdO1xuXG4gICAgZm9yKGxldCBpPTA7aTxyZXNwb25zZS5sZW5ndGg7aSsrKXtcbiAgICAgICAgZGF0ZXMucHVzaChyZXNwb25zZVtpXS5wYXltZW50RGF0ZSk7XG4gICAgICAgIGRpdl9hbW91bnRzLnB1c2gocmVzcG9uc2VbaV0uYW1vdW50KTtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGxhYmVsczogZGF0ZXMsXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0RpdmlkZW5kIEFtb3VudCcsXG4gICAgICAgICAgICAgICAgZGF0YTogZGl2X2Ftb3VudHMsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzM0OTBkYycsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjOTdCRERDJyxcbiAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbNSwgNV0sXG4gICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDgsXG4gICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTEsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgbW9kZTogJ2luZGV4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdQYXltZW50IERhdGUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnQW1vdW50IFBhaWQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnRGl2aWRlbmQgUGF5bWVudHMgYnkgUGF5bWVudCBEYXRlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdmlkZW5kX2hpc3Ryb3lfY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB3aW5kb3cubXlMaW5lID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcbn1cblxuZ2V0X2RpdmlkZW5kcyh0aWNrZXIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/company_dividends.js\n");

/***/ }),

/***/ 2:
/*!*************************************************!*\
  !*** multi ./resources/js/company_dividends.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thomasgrauer/Sites/market_watch/resources/js/company_dividends.js */"./resources/js/company_dividends.js");


/***/ })

/******/ });