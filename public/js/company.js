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

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/Registry.js ***!
  \*********************************************************************/
/*! exports provided: Registry, registry, is */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return Registry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return registry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony import */ var _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/EventDispatcher */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/EventDispatcher.js");
/* harmony import */ var _utils_Dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/Dictionary */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Dictionary.js");
/* harmony import */ var _utils_Cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Cache */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Cache.js");
/* harmony import */ var _utils_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/* harmony import */ var _utils_String__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/String */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/String.js");
/* harmony import */ var _utils_Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/Array */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Array.js");






/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Registry is used to store miscellaneous system-wide information, like ids,
 * maps, themes, and registered classes.
 *
 * @ignore Exclude from docs
 */
var Registry = /** @class */ (function () {
    function Registry() {
        var _this = this;
        /**
         * Event dispacther.
         */
        this.events = new _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]();
        /**
         * All currently applied themes. All new chart instances created will
         * automatically inherit and retain System's themes.
         */
        this.themes = [];
        /**
         * List of all loaded available themes.
         *
         * Whenever a theme loads, it registers itself in System's `loadedThemes`
         * collection.
         */
        this.loadedThemes = {};
        /**
         * An indeternal counter used to generate unique IDs.
         *
         * @ignore Exclude from docs
         */
        this._uidCount = 0;
        /**
         * Keeps register of class references so that they can be instnatiated using
         * string key.
         *
         * @ignore Exclude from docs
         */
        this.registeredClasses = {};
        /**
         * Holds all generated placeholders.
         */
        this._placeholders = {};
        /**
         * A list of invalid(ated) [[Sprite]] objects that need to be re-validated
         * during next cycle.
         *
         * @ignore Exclude from docs
         */
        this.invalidSprites = {};
        /**
         * Components are added to this list when their data provider changes to
         * a new one or data is added/removed from their data provider.
         *
         * @ignore Exclude from docs
         */
        this.invalidDatas = {};
        /**
         * Components are added to this list when values of their raw data change.
         * Used when we want a smooth animation from one set of values to another.
         *
         * @ignore Exclude from docs
         */
        this.invalidRawDatas = [];
        /**
         * Components are added to this list when values of their data changes
         * (but not data provider itself).
         *
         * @ignore Exclude from docs
         */
        this.invalidDataItems = [];
        /**
         * Components are added to this list when their data range (selection) is
         * changed, e.g. zoomed.
         *
         * @ignore Exclude from docs
         */
        this.invalidDataRange = [];
        /**
         * A list of [[Sprite]] objects that have invalid(ated) positions, that need
         * to be recalculated.
         *
         * @ignore Exclude from docs
         */
        this.invalidPositions = {};
        /**
         * A list of [[Container]] objects with invalid(ated) layouts.
         *
         * @ignore Exclude from docs
         */
        this.invalidLayouts = {};
        /**
         * An array holding all active (non-disposed) top level elemens.
         *
         * When, for example, a new chart is created, its instance will be added to
         * this array, and will be removed when the chart is disposed.
         */
        this.baseSprites = [];
        this.baseSpritesByUid = {};
        this.queue = [];
        this.uid = this.getUniqueId();
        this.invalidSprites.noBase = [];
        this.invalidDatas.noBase = [];
        this.invalidLayouts.noBase = [];
        this.invalidPositions.noBase = [];
        // This is needed to prevent charts from being cut off when printing
        addEventListener("beforeprint", function () {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["each"](_this.baseSprites, function (sprite) {
                var svg = sprite.paper.svg;
                svg.setAttribute("viewBox", "0 0 " + svg.clientWidth + " " + svg.clientHeight);
            });
        });
        addEventListener("afterprint", function () {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["each"](_this.baseSprites, function (sprite) {
                var svg = sprite.paper.svg;
                svg.removeAttribute("viewBox");
            });
        });
    }
    /**
     * Generates a unique chart system-wide ID.
     *
     * @return Generated ID
     */
    Registry.prototype.getUniqueId = function () {
        var uid = this._uidCount;
        this._uidCount += 1;
        return "id-" + uid;
    };
    Object.defineProperty(Registry.prototype, "map", {
        /**
         * Returns a universal collection for mapping ids with objects.
         *
         * @ignore Exclude from docs
         * @return Map collection
         */
        get: function () {
            if (!this._map) {
                this._map = new _utils_Dictionary__WEBPACK_IMPORTED_MODULE_1__["Dictionary"]();
            }
            return this._map;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Caches value in object's cache.
     *
     * @ignore Exclude from docs
     * @param key    Key
     * @param value  Value
     * @param ttl    TTL in seconds
     */
    Registry.prototype.setCache = function (key, value, ttl) {
        _utils_Cache__WEBPACK_IMPORTED_MODULE_2__["cache"].set(this.uid, key, value, ttl);
    };
    /**
     * Retrieves cached value.
     *
     * @ignore Exclude from docs
     * @param key    Key
     * @param value  Value to return if cache is not available
     * @return Value
     */
    Registry.prototype.getCache = function (key, value) {
        if (value === void 0) { value = undefined; }
        return _utils_Cache__WEBPACK_IMPORTED_MODULE_2__["cache"].get(this.uid, key, value);
    };
    /**
     * Dispatches an event using own event dispatcher. Will automatically
     * populate event data object with event type and target (this element).
     * It also checks if there are any handlers registered for this sepecific
     * event.
     *
     * @param eventType Event type (name)
     * @param data      Data to pass into event handler(s)
     */
    Registry.prototype.dispatch = function (eventType, data) {
        // @todo Implement proper type check
        if (this.events.isEnabled(eventType)) {
            if (data) {
                data.type = eventType;
                data.target = data.target || this;
                this.events.dispatch(eventType, {
                    type: eventType,
                    target: this
                });
            }
            else {
                this.events.dispatch(eventType, {
                    type: eventType,
                    target: this
                });
            }
        }
    };
    /**
     * Works like `dispatch`, except event is triggered immediately, without
     * waiting for the next frame cycle.
     *
     * @param eventType Event type (name)
     * @param data      Data to pass into event handler(s)
     */
    Registry.prototype.dispatchImmediately = function (eventType, data) {
        // @todo Implement proper type check
        if (this.events.isEnabled(eventType)) {
            if (data) {
                data.type = eventType;
                data.target = data.target || this;
                this.events.dispatchImmediately(eventType, data);
            }
            else {
                this.events.dispatchImmediately(eventType, {
                    type: eventType,
                    target: this
                });
            }
        }
    };
    /**
     * Returns a unique placeholder suitable for the key.
     *
     * @param key  Key
     * @return Random string to be used as placeholder
     */
    Registry.prototype.getPlaceholder = function (key) {
        if (_utils_Type__WEBPACK_IMPORTED_MODULE_3__["hasValue"](this._placeholders[key])) {
            return this._placeholders[key];
        }
        this._placeholders[key] = "__amcharts_" + key + "_" + _utils_String__WEBPACK_IMPORTED_MODULE_4__["random"](8) + "__";
        return this._placeholders[key];
    };
    /**
     * @ignore
     */
    Registry.prototype.addToInvalidComponents = function (component) {
        if (component.baseId) {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["move"](this.invalidDatas[component.baseId], component);
        }
        else {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["move"](this.invalidDatas["noBase"], component);
        }
    };
    /**
     * @ignore
     */
    Registry.prototype.removeFromInvalidComponents = function (component) {
        if (component.baseId) {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["remove"](this.invalidDatas[component.baseId], component);
        }
        _utils_Array__WEBPACK_IMPORTED_MODULE_5__["remove"](this.invalidDatas["noBase"], component);
    };
    /**
     * @ignore
     */
    Registry.prototype.addToInvalidSprites = function (sprite) {
        if (sprite.baseId) {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["add"](this.invalidSprites[sprite.baseId], sprite);
        }
        else {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["add"](this.invalidSprites["noBase"], sprite);
        }
    };
    /**
     * @ignore
     */
    Registry.prototype.removeFromInvalidSprites = function (sprite) {
        if (sprite.baseId) {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["remove"](this.invalidSprites[sprite.baseId], sprite);
        }
        _utils_Array__WEBPACK_IMPORTED_MODULE_5__["remove"](this.invalidSprites["noBase"], sprite);
    };
    /**
     * @ignore
     */
    Registry.prototype.addToInvalidPositions = function (sprite) {
        if (sprite.baseId) {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["add"](this.invalidPositions[sprite.baseId], sprite);
        }
        else {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["add"](this.invalidPositions["noBase"], sprite);
        }
    };
    /**
     * @ignore
     */
    Registry.prototype.removeFromInvalidPositions = function (sprite) {
        if (sprite.baseId) {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["remove"](this.invalidPositions[sprite.baseId], sprite);
        }
        _utils_Array__WEBPACK_IMPORTED_MODULE_5__["remove"](this.invalidPositions["noBase"], sprite);
    };
    /**
     * @ignore
     */
    Registry.prototype.addToInvalidLayouts = function (sprite) {
        if (sprite.baseId) {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["add"](this.invalidLayouts[sprite.baseId], sprite);
        }
        else {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["add"](this.invalidLayouts["noBase"], sprite);
        }
    };
    /**
     * @ignore
     */
    Registry.prototype.removeFromInvalidLayouts = function (sprite) {
        if (sprite.baseId) {
            _utils_Array__WEBPACK_IMPORTED_MODULE_5__["remove"](this.invalidLayouts[sprite.baseId], sprite);
        }
        _utils_Array__WEBPACK_IMPORTED_MODULE_5__["remove"](this.invalidLayouts["noBase"], sprite);
    };
    return Registry;
}());

/**
 * A singleton global instance of [[Registry]].
 *
 * @ignore Exclude from docs
 */
var registry = new Registry();
/**
 * Returns `true` if object is an instance of the class. It's the same as `instanceof` except it doesn't need to import the class.
 *
 * @param object Object
 * @param name Class name
 * @return Is instance of class
 */
function is(object, name) {
    var x = registry.registeredClasses[name];
    return x != null && object instanceof x;
}
//# sourceMappingURL=Registry.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Array.js":
/*!************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/Array.js ***!
  \************************************************************************/
/*! exports provided: indexOf, any, map, each, eachReverse, eachContinue, shiftLeft, last, first, insert, setIndex, pushAll, remove, move, add, replace, toArray, has, copy, slice, insertIndex, removeIndex, getSortedIndex, findIndex, find, shuffle, keepIf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachReverse", function() { return eachReverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachContinue", function() { return eachContinue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftLeft", function() { return shiftLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIndex", function() { return setIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushAll", function() { return pushAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertIndex", function() { return insertIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return removeIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedIndex", function() { return getSortedIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keepIf", function() { return keepIf; });
/* harmony import */ var _Math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Math */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Math.js");
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");


/**
 * ============================================================================
 * UTILITY FUNCTIONS
 * ============================================================================
 * @hidden
 */
/**
 * Searches `array` for `value`.
 *
 * Returns -1 if not found.
 *
 * @param array  Source array
 * @param value  Value to search
 * @returns Index
 */
function indexOf(array, value) {
    var length = array.length;
    for (var i = 0; i < length; ++i) {
        // TODO handle NaN
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
/**
 * Calls `test` for each element in `array`.
 *
 * If `test` returns `true` then it immediately returns `true`.
 *
 * If `test` returns `false` for all of the elements in `array` then it returns `false`.
 *
 * @param array  Source array
 * @param test   Function which is called on each element
 * @returns Whether `test` returned true or not
 */
function any(array, test) {
    var length = array.length;
    for (var i = 0; i < length; ++i) {
        if (test(array[i])) {
            return true;
        }
    }
    return false;
}
/**
 * Calls `fn` function for every member of array and returns a new array out
 * of all outputs.
 *
 * @param array  Source array
 * @param fn     Callback function
 * @returns New array
 */
function map(array, fn) {
    var length = array.length;
    var output = new Array(length);
    for (var i = 0; i < length; ++i) {
        output[i] = fn(array[i], i);
    }
    return output;
}
/**
 * Iterates through all items in array and calls `fn` function for each of
 * them.
 *
 * @param array  Source array
 * @param fn     Callback function
 */
function each(array, fn) {
    var length = array.length;
    for (var i = 0; i < length; ++i) {
        fn(array[i], i);
    }
}
/**
 * Iterates through all items in array in reverse order and calls `fn` function for each of
 * them.
 *
 * @param array  Source array
 * @param fn     Callback function
 */
function eachReverse(array, fn) {
    var i = array.length;
    while (i--) {
        fn(array[i], i);
    }
}
/**
 * Iterates through all items in array and calls `fn` function for each of
 * them.
 *
 * If `fn` call evaluates to `false`, further iteration is cancelled.
 *
 * @param array  Source array
 * @param fn     Callback function
 */
function eachContinue(array, fn) {
    var length = array.length;
    for (var i = 0; i < length; ++i) {
        if (!fn(array[i], i)) {
            break;
        }
    }
}
/**
 * Shifts an item at `index` towards beginning of the array.
 *
 * @param array  Source array
 * @param index  Target element index
 */
function shiftLeft(array, index) {
    var length = array.length;
    for (var i = index; i < length; ++i) {
        array[i - index] = array[i];
    }
    array.length = length - index;
}
/**
 * Returns the last item of the array.
 *
 * @param array  Source array
 * @returns Last item
 */
function last(array) {
    var length = array.length;
    return length ? array[length - 1] : undefined;
}
/**
 * Returns the first item of the array.
 *
 * @param array  Source array
 * @returns Last item
 */
function first(array) {
    return array[0];
}
/**
 * Inserts `element` into `array` at `index`.
 *
 * Caps `index` to be between `0` and `array.length`
 *
 * @param array    Source array
 * @param element  Item to insert
 * @param array    Index to insert item at
 */
function insert(array, element, index) {
    //if (array) {
    index = _Math__WEBPACK_IMPORTED_MODULE_0__["fitToRange"](index, 0, array.length);
    array.splice(index, 0, element);
    //}
}
/**
 * Removes all copies of `element` from `array` (if they exist) and then
 * inserts `element` at `index`.
 *
 * @param array    Source array
 * @param element  Item
 * @param array    Index to move item to
 */
function setIndex(array, element, index) {
    remove(array, element);
    insert(array, element, index);
}
/**
 * Pushes all of the elements from `input` into `array`.
 *
 * @param array  Output array
 * @param input  Input array
 */
function pushAll(array, input) {
    var length = input.length;
    for (var i = 0; i < length; ++i) {
        array.push(input[i]);
    }
}
/**
 * Removes `element` from `array`.
 *
 * If there are multiple copies of `element`, they are all removed.
 *
 * @param array    Source array
 * @param element  Item to remove
 */
function remove(array, element) {
    var found = false;
    var index = array.indexOf(element);
    if (index !== -1) {
        found = true;
        array.splice(index, 1);
        var length_1 = array.length;
        while (index < length_1) {
            // TODO handle NaN
            if (array[index] === element) {
                array.splice(index, 1);
                --length_1;
            }
            else {
                ++index;
            }
        }
    }
    return found;
}
/**
 * Adds an `element` to `array`.
 *
 * If array already contains and item like this, it is removed before adding
 * it again.
 *
 * Optionally `toIndex` can be specified to add element at specific index.
 *
 * @param array    Source array
 * @param element  Item to add
 * @param array    Index to move item to
 */
function move(array, element, toIndex) {
    // @todo this implementation must be the same as the List.moveValue method
    // @todo don't do anything if the desired index is the same as the current index
    var index = indexOf(array, element);
    // @todo remove all old values rather than only the first ?
    if (index !== -1) {
        removeIndex(array, index);
    }
    if (toIndex == null) {
        array.push(element);
    }
    else {
        insertIndex(array, toIndex, element);
    }
}
/**
 * Inserts `element` into `array` at `index`.
 *
 * If `index` is not provided, it will insert `element` at the end of `array`.
 *
 * @param array    Source array
 * @param element  Item to add
 * @param array    Index to add item at
 */
function add(array, element, index) {
    // Append to the end if index is not set
    if (!_Type__WEBPACK_IMPORTED_MODULE_1__["isNumber"](index)) {
        array.push(element);
    }
    // Add to the beginning of array if index is 0
    else if (index === 0) {
        array.unshift(element);
    }
    // Add to indicated place if index is set
    else {
        array.splice(index, 0, element);
    }
}
/**
 * Removes `element` from `array` (if it exists) and then inserts `element` at
 * `index`.
 *
 * If `index` is not provided, it will insert `element` at the end of `array`.
 *
 * @param array    Source array
 * @param element  Item to remove
 * @param array    Index to move item to
 */
function replace(array, element, index) {
    // check if exists
    var ind = array.indexOf(element);
    // remove if exists
    if (ind !== -1) {
        array.splice(ind, 1);
    }
    // add to end if index is not set
    if (!_Type__WEBPACK_IMPORTED_MODULE_1__["isNumber"](index)) {
        array.push(element);
    }
    // add to indicated place if index is set
    else {
        array.splice(index, 0, element);
    }
}
/**
 * Wraps `input` in an array, if it isn't already an array.
 *
 * @param input  Source value
 * @return An array
 */
function toArray(input) {
    if (Array.isArray(input)) {
        return input;
    }
    else {
        return [input];
    }
}
/**
 * Returns `true` if `element` exists in `array`.
 *
 * @param array    Source array
 * @param element  Item to search for
 * @returns Item in array?
 */
function has(array, element) {
    return indexOf(array, element) !== -1;
}
/**
 * Returns a shallow copy of `array`.
 *
 * @param array  Source array
 * @returns Copy of the array
 */
function copy(array) {
    var length = array.length;
    // It's faster to create the array with a pre-defined length
    var output = new Array(length);
    for (var i = 0; i < length; ++i) {
        // Because the array has a pre-defined length, we have to assign rather than push
        // This is also faster than pushing
        output[i] = array[i];
    }
    return output;
}
/**
 * Returns a copy of `array` which contains all the elements between `start`
 * and `end`. (including `start` and excluding `end`)
 *
 * If `end` is not provided, it defaults to `array.length`.
 *
 * @param array  Source array
 * @param start  Start index
 * @param end    End index
 * @returns Part of the array
 */
function slice(array, start, end) {
    if (end === void 0) { end = array.length; }
    var output = new Array(end - start);
    for (var i = start; i < end; ++i) {
        output[i - start] = array[i];
    }
    return output;
}
/**
 * Inserts a value into array at specific index.
 *
 * @param array  Source array
 * @param index  Index
 * @param value  Value to insert
 */
function insertIndex(array, index, value) {
    array.splice(index, 0, value);
}
/**
 * Removes a value from array at specific index.
 *
 * @param array  Source array
 * @param index  Index
 */
function removeIndex(array, index) {
    array.splice(index, 1);
}
/**
 * Orders an array using specific `ordering` function and returns index of
 * the `value`.
 *
 * @ignore Exclude from docs
 * @param array     Source array
 * @param ordering  An ordering function
 * @param value     Value to search for
 * @returns Result of the search
 */
function getSortedIndex(array, ordering, value) {
    var start = 0;
    var end = array.length;
    var found = false;
    while (start < end) {
        // TODO is this faster/slower than using Math.floor ?
        var pivot = (start + end) >> 1;
        var order = ordering(value, array[pivot]);
        // less
        if (order < 0) {
            end = pivot;
            // equal
        }
        else if (order === 0) {
            found = true;
            start = pivot + 1;
            // more
        }
        else {
            start = pivot + 1;
        }
    }
    return {
        found: found,
        index: (found ? start - 1 : start)
    };
}
/**
 * Searches the array using custom function and returns index of the item if
 * found.
 *
 * Will call `matches` function on all items of the array. If return value
 * evaluates to `true`, index is returned.
 *
 * Otherwise returns -1.
 *
 * @param array    Source array
 * @param matches  Search function
 * @returns Index of the item if found
 */
function findIndex(array, matches) {
    var length = array.length;
    for (var i = 0; i < length; ++i) {
        if (matches(array[i], i)) {
            return i;
        }
    }
    return -1;
}
/**
 * Searches the array using custom function and returns item if found.
 *
 * Will call `matches` function on all items of the array. If return value
 * evaluates to `true`, index is returned.
 *
 * Otherwise returns `undefined`.
 *
 * @param array    Source array
 * @param matches  Search function
 * @returns Item if found
 */
function find(array, matches) {
    var index = findIndex(array, matches);
    if (index !== -1) {
        return array[index];
    }
}
/**
 * Iterates through all items in array and calls `fn` function for each of
 * them.
 *
 * @param array  Source array
 * @param fn     Callback function
 */
function shuffle(array) {
    // https://stackoverflow.com/a/2450976/449477
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}
function keepIf(array, keep) {
    var length = array.length;
    var i = 0;
    while (i < length) {
        if (keep(array[i])) {
            ++i;
        }
        else {
            array.splice(i, 1);
            --length;
        }
    }
}
//# sourceMappingURL=Array.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/AsyncPending.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/AsyncPending.js ***!
  \*******************************************************************************/
/*! exports provided: raf, nextFrame, readFrame, writeFrame, whenIdle, triggerIdle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextFrame", function() { return nextFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFrame", function() { return readFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeFrame", function() { return writeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenIdle", function() { return whenIdle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerIdle", function() { return triggerIdle; });
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Array.js");
/**
 * A collection of low-level async operation stuff.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */

var pendingFrame = false;
var nextQueue = [];
var readQueue = [];
var writeQueue = [];
var idleQueue = [];
var fps = 1000 / 60;
/**
 * [raf description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
var raf = (typeof requestAnimationFrame === "function"
    ? function (fn) {
        requestAnimationFrame(fn);
    }
    : function (fn) {
        setTimeout(fn, fps);
    });
/**
 * [frameLoop description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function frameLoop() {
    var now = Date.now();
    var length = nextQueue.length;
    for (var i = 0; i < length; ++i) {
        nextQueue[i](now);
    }
    _Array__WEBPACK_IMPORTED_MODULE_0__["shiftLeft"](nextQueue, length);
    for (var i = 0; i < readQueue.length; ++i) {
        readQueue[i](now);
    }
    readQueue.length = 0;
    for (var i = 0; i < writeQueue.length; ++i) {
        writeQueue[i](now);
    }
    writeQueue.length = 0;
    if (nextQueue.length === 0 && readQueue.length === 0) {
        pendingFrame = false;
    }
    else {
        raf(frameLoop);
    }
}
/**
 * [pendFrame description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function pendFrame() {
    if (!pendingFrame) {
        pendingFrame = true;
        raf(frameLoop);
    }
}
/**
 * [nextFrame description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param fn [description]
 */
function nextFrame(fn) {
    nextQueue.push(fn);
    pendFrame();
}
/**
 * [readFrame description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param fn [description]
 */
function readFrame(fn) {
    readQueue.push(fn);
    pendFrame();
}
/**
 * [writeFrame description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param fn [description]
 */
function writeFrame(fn) {
    writeQueue.push(fn);
    pendFrame();
}
/**
 * [whenIdle description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param fn [description]
 */
function whenIdle(fn) {
    idleQueue.push(fn);
}
/**
 * [triggerIdle description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @todo Maybe don't trigger a callback which was added while in the middle of triggering?
 */
function triggerIdle() {
    var now = Date.now();
    var length = idleQueue.length;
    for (var i = 0; i < length; ++i) {
        idleQueue.shift()(now);
    }
}
//# sourceMappingURL=AsyncPending.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Cache.js":
/*!************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/Cache.js ***!
  \************************************************************************/
/*! exports provided: Cache, cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var _Dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dictionary */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Dictionary.js");
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */


/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Represents object cache.
 *
 * @ignore Exclude from docs
 * @todo Better storage
 * @todo TTL logging
 * @todo Garbage collector
 */
var Cache = /** @class */ (function () {
    function Cache() {
        /**
         * Storage for cache items.
         */
        this._storage = new _Dictionary__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]();
        /**
         * Default TTL in milliseconds.
         */
        this.ttl = 1000;
    }
    /**
     * Caches or updates cached value, resets TTL.
     *
     * If `ttl` is set to zero, item will never expire.
     *
     * @param owner  An id of the object that owns this cache
     * @param key    Index key
     * @param value  Value
     * @param ttl    TTL of the cache to live in milliseconds
     */
    Cache.prototype.set = function (owner, key, value, ttl) {
        // Create if storage does not exist for this owner
        var ownerStorage = this._storage.insertKeyIfEmpty(owner, function () { return new _Dictionary__WEBPACK_IMPORTED_MODULE_0__["Dictionary"](); });
        // Create cache item
        var item = {
            "touched": new Date().getTime(),
            "ttl": _Type__WEBPACK_IMPORTED_MODULE_1__["isNumber"](ttl) ? ttl : this.ttl,
            "value": value
        };
        // Set
        ownerStorage.setKey(key, item);
    };
    /**
     * Rerturns cached item, respecting TTL.
     *
     * @param owner  An id of the object that owns this cache
     * @param key    Index key
     * @param value  Value to return if cache not available
     * @return Value, or `undefined` if not set
     */
    Cache.prototype.get = function (owner, key, value) {
        if (value === void 0) { value = undefined; }
        // 		 || ypeof this._storage[owner][key] === "undefined" || this._storage[owner][key].expired === true) {
        if (this._storage.hasKey(owner)) {
            var ownerStorage = this._storage.getKey(owner);
            if (ownerStorage.hasKey(key)) {
                var cacheItem = ownerStorage.getKey(key);
                if (cacheItem.ttl && ((cacheItem.touched + cacheItem.ttl) < new Date().getTime())) {
                    cacheItem.expired = true;
                }
                if (cacheItem.expired) {
                    ownerStorage.removeKey(key);
                    return value;
                }
                return cacheItem.value;
            }
            else {
                return value;
            }
        }
        else {
            return value;
        }
    };
    /**
     * Clears cache for specific owner or everything.
     *
     * @param owner Owner to clear cache for
     */
    Cache.prototype.clear = function (owner) {
        if (owner) {
            this._storage.removeKey(owner);
        }
        else {
            this._storage.clear();
        }
    };
    return Cache;
}());

/**
 * ============================================================================
 * GLOBAL INSTANCE
 * ============================================================================
 * @hidden
 */
/**
 * A global instance of cache. Use this instance to cache any values.
 *
 * @ignore Exclude from docs
 */
var cache = new Cache();
//# sourceMappingURL=Cache.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Dictionary.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/Dictionary.js ***!
  \*****************************************************************************/
/*! exports provided: DictionaryDisposer, Dictionary, DictionaryTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryDisposer", function() { return DictionaryDisposer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryTemplate", function() { return DictionaryTemplate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Disposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Disposer */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Disposer.js");
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventDispatcher */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/EventDispatcher.js");
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Object */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Object.js");
/* harmony import */ var _Iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Iterator */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Iterator.js");
/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./String */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/String.js");

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */





/**
 * A disposable dictionary, which when disposed itself will call `dispose()`
 * method on all its items.
 */
var DictionaryDisposer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DictionaryDisposer, _super);
    function DictionaryDisposer(dict) {
        var _this = this;
        var disposer = dict.events.on("removed", function (x) {
            x.oldValue.dispose();
        }, undefined, false);
        _this = _super.call(this, function () {
            disposer.dispose();
            // TODO clear the dictionary ?
            _Iterator__WEBPACK_IMPORTED_MODULE_4__["each"](dict.iterator(), function (a) {
                var v = a[1];
                v.dispose();
            });
        }) || this;
        return _this;
    }
    return DictionaryDisposer;
}(_Disposer__WEBPACK_IMPORTED_MODULE_1__["Disposer"]));

/**
 * A Dictionary is collection where values of some type can be mapped to
 * string keys.
 *
 * You might call it an "associative list" or "associative array".
 */
var Dictionary = /** @class */ (function () {
    /**
     * Constructor
     */
    function Dictionary() {
        /**
         * Event dispatcher.
         */
        this.events = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["EventDispatcher"]();
        this._dictionary = {};
    }
    /**
     * Returns `true` if key exists in Dictionary.
     *
     * @param key  The key to search for
     * @return `true` if key exists, `false` if it doesn't
     */
    Dictionary.prototype.hasKey = function (key) {
        return _Object__WEBPACK_IMPORTED_MODULE_3__["hasKey"](this._dictionary, key);
    };
    /**
     * Returns the value for a specific key.
     *
     * @param key  The key to search for
     * @return Value for the key, or `undefined` if it doesn't exist
     */
    Dictionary.prototype.getKey = function (key) {
        return this._dictionary[key];
    };
    /**
     * Inserts value at specific key.
     *
     * Will thrown an exception if the key already exists in the dictionary.
     *
     * @param key    Key
     * @param value  Value
     */
    Dictionary.prototype.insertKey = function (key, value) {
        if (_Object__WEBPACK_IMPORTED_MODULE_3__["hasKey"](this._dictionary, key)) {
            throw new Error("Key " + key + " already exists in dictionary");
        }
        else {
            this._dictionary[key] = value;
            if (this.events.isEnabled("insertKey")) {
                this.events.dispatchImmediately("insertKey", {
                    type: "insertKey",
                    target: this,
                    key: key,
                    newValue: value
                });
            }
        }
    };
    /**
     * Adds or updates key/value into dictionary.
     *
     * If the key already exists, the old value will be overwritten.
     *
     * If the new value is exactly the same as the old value (using ===), it won't do anything.
     *
     * @param key    Key
     * @param value  Value
     */
    Dictionary.prototype.setKey = function (key, value) {
        if (_Object__WEBPACK_IMPORTED_MODULE_3__["hasKey"](this._dictionary, key)) {
            var oldValue = this._dictionary[key];
            if (oldValue !== value) {
                this._dictionary[key] = value;
                if (this.events.isEnabled("setKey")) {
                    this.events.dispatchImmediately("setKey", {
                        type: "setKey",
                        target: this,
                        key: key,
                        oldValue: oldValue,
                        newValue: value
                    });
                }
                if (this.events.isEnabled("removed")) {
                    this.events.dispatchImmediately("removed", {
                        type: "removed",
                        target: this,
                        oldValue: oldValue
                    });
                }
            }
        }
        else {
            this._dictionary[key] = value;
            if (this.events.isEnabled("insertKey")) {
                this.events.dispatchImmediately("insertKey", {
                    type: "insertKey",
                    target: this,
                    key: key,
                    newValue: value
                });
            }
        }
    };
    /**
     * Updates the value at specific `key` using custom function.
     *
     * Passes in current value into the function, and uses its output as a new
     * value.
     *
     * If the new value is exactly the same as the old value (using ===), it won't do anything.
     *
     * @ignore Exclude from docs
     * @param key  Key
     * @param fn   Function to transform the value
     */
    Dictionary.prototype.updateKey = function (key, fn) {
        if (_Object__WEBPACK_IMPORTED_MODULE_3__["hasKey"](this._dictionary, key)) {
            var oldValue = this._dictionary[key];
            var newValue = fn(oldValue);
            if (oldValue !== newValue) {
                this._dictionary[key] = newValue;
                if (this.events.isEnabled("setKey")) {
                    this.events.dispatchImmediately("setKey", {
                        type: "setKey",
                        target: this,
                        key: key,
                        oldValue: oldValue,
                        newValue: newValue
                    });
                }
                if (this.events.isEnabled("removed")) {
                    this.events.dispatchImmediately("removed", {
                        type: "removed",
                        target: this,
                        oldValue: oldValue
                    });
                }
            }
        }
        else {
            throw new Error("Key " + key + " doesn't exist in dictionary");
        }
    };
    /**
     * Removes value at specific `key` from dictionary.
     *
     * @param key  Key to remove
     */
    Dictionary.prototype.removeKey = function (key) {
        if (_Object__WEBPACK_IMPORTED_MODULE_3__["hasKey"](this._dictionary, key)) {
            var oldValue = this._dictionary[key];
            delete this._dictionary[key];
            if (this.events.isEnabled("removeKey")) {
                this.events.dispatchImmediately("removeKey", {
                    type: "removeKey",
                    target: this,
                    key: key,
                    oldValue: oldValue
                });
            }
            if (this.events.isEnabled("removed")) {
                this.events.dispatchImmediately("removed", {
                    type: "removed",
                    target: this,
                    oldValue: oldValue
                });
            }
        }
    };
    /**
     * [insertKeyIfEmpty description]
     *
     * @ignore Exclude from docs
     * @todo description
     * @param key      [description]
     * @param ifEmpty  [description]
     * @return [description]
     */
    Dictionary.prototype.insertKeyIfEmpty = function (key, ifEmpty) {
        if (!this.hasKey(key)) {
            this.insertKey(key, ifEmpty());
        }
        return this.getKey(key);
    };
    /**
     * Removes all items from the dictionary.
     */
    Dictionary.prototype.clear = function () {
        var _this = this;
        // TODO dispatch this after clear
        if (this.events.isEnabled("removed")) {
            _Object__WEBPACK_IMPORTED_MODULE_3__["each"](this._dictionary, function (key, value) {
                _this.events.dispatchImmediately("removed", {
                    type: "removed",
                    target: _this,
                    oldValue: value
                });
            });
        }
        this._dictionary = {};
        if (this.events.isEnabled("cleared")) {
            this.events.dispatchImmediately("cleared", {
                type: "cleared",
                target: this
            });
        }
    };
    /**
     * Copies items from another Dictionary.
     *
     * @param source  A Dictionary to copy items from
     */
    Dictionary.prototype.copyFrom = function (source) {
        var _this = this;
        _Iterator__WEBPACK_IMPORTED_MODULE_4__["each"](source.iterator(), function (a) {
            // TODO fix this type cast
            _this.setKey(a[0], a[1]);
        });
    };
    /**
     * Returns an interator that can be used to iterate through all items in
     * the dictionary.
     *
     * @return Iterator
     */
    Dictionary.prototype.iterator = function () {
        // @todo fix this type after the Iterator bug is fixed
        // https://github.com/Microsoft/TypeScript/issues/16730
        return _Object__WEBPACK_IMPORTED_MODULE_3__["entries"](this._dictionary);
    };
    /**
     * Returns an ES6 iterator for the keys/values of the dictionary.
     */
    Dictionary.prototype[Symbol.iterator] = function () {
        var _a, _b, _i, key;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = [];
                    for (_b in this._dictionary)
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    key = _a[_i];
                    if (!_Object__WEBPACK_IMPORTED_MODULE_3__["hasKey"](this._dictionary, key)) return [3 /*break*/, 3];
                    return [4 /*yield*/, [key, this._dictionary[key]]];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    /**
     * Calls `f` for each key/value in the dictionary.
     */
    Dictionary.prototype.each = function (f) {
        _Iterator__WEBPACK_IMPORTED_MODULE_4__["each"](this.iterator(), function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _b[0], value = _b[1];
            return f(key, value);
        });
    };
    /**
     * Returns an iterator that can be used to iterate through all items in
     * the dictionary, ordered by key.
     *
     * @ignore Exclude from docs
     * @return Iterator
     */
    Dictionary.prototype.sortedIterator = function () {
        return _Iterator__WEBPACK_IMPORTED_MODULE_4__["sort"](this.iterator(), function (x, y) { return _String__WEBPACK_IMPORTED_MODULE_5__["order"](x[0], y[0]); });
    };
    return Dictionary;
}());

/**
 * A version of a [[Dictionary]] that has a "template".
 *
 * A template is an instance of an object, that can be used to create new
 * elements in the list without actually needing to create instances for those.
 *
 * When new element is created in the list, e.g. by calling its `create()`
 * method, an exact copy of the element is created (including properties and
 * other attributes), inserted into the list and returned.
 */
var DictionaryTemplate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DictionaryTemplate, _super);
    /**
     * Constructor
     *
     * @param t Template object
     */
    function DictionaryTemplate(t) {
        var _this = _super.call(this) || this;
        _this.template = t;
        return _this;
    }
    Object.defineProperty(DictionaryTemplate.prototype, "template", {
        /**
         * @return Template object
         */
        get: function () {
            return this._template;
        },
        /**
         * A "template" object to copy all properties from when creating new list
         * items.
         *
         * @param v  Template object
         */
        set: function (v) {
            v.isTemplate = true;
            this._template = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Copies all elements from other dictionary.
     *
     * @param source  Source dictionary
     */
    DictionaryTemplate.prototype.copyFrom = function (source) {
        var _this = this;
        _Iterator__WEBPACK_IMPORTED_MODULE_4__["each"](source.iterator(), function (a) {
            // TODO fix this type cast
            // TODO why does this need to clone ?
            _this.setKey(a[0], a[1].clone());
        });
    };
    /**
     * Instantiates a new object of the specified type, adds it to specified
     * `key` in the dictionary, and returns it.
     *
     * @param make  Item type to use. Will use the default type for the dictionary if not specified.
     * @return      Newly created item
     */
    DictionaryTemplate.prototype.create = function (key) {
        var _this = this;
        return this.insertKeyIfEmpty(key, function () { return _this.template.clone(); });
    };
    return DictionaryTemplate;
}(Dictionary));

//# sourceMappingURL=Dictionary.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Disposer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/Disposer.js ***!
  \***************************************************************************/
/*! exports provided: Disposer, MultiDisposer, MutableValueDisposer, CounterDisposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disposer", function() { return Disposer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDisposer", function() { return MultiDisposer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableValueDisposer", function() { return MutableValueDisposer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDisposer", function() { return CounterDisposer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Array */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Array.js");
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */


/**
 * A base class for disposable objects.
 *
 * @ignore Exclude from docs
 */
var Disposer = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param dispose  Function that disposes object
     */
    function Disposer(dispose) {
        this._disposed = false;
        this._dispose = dispose;
    }
    /**
     * Checks if object is disposed.
     *
     * @return Disposed?
     */
    Disposer.prototype.isDisposed = function () {
        return this._disposed;
    };
    /**
     * Disposes the object.
     */
    Disposer.prototype.dispose = function () {
        if (!this._disposed) {
            this._disposed = true;
            this._dispose();
        }
    };
    return Disposer;
}());

/**
 * A collection of related disposers that can be disposed in one go.
 *
 * @ignore Exclude from docs
 */
var MultiDisposer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MultiDisposer, _super);
    function MultiDisposer(disposers) {
        return _super.call(this, function () {
            _Array__WEBPACK_IMPORTED_MODULE_1__["each"](disposers, function (x) {
                x.dispose();
            });
        }) || this;
    }
    return MultiDisposer;
}(Disposer));

/**
 * A special kind of Disposer that has attached value set.
 *
 * If a new value is set using `set()` method, the old disposer value is
 * disposed.
 *
 * @ignore Exclude from docs
 * @todo Description
 */
var MutableValueDisposer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MutableValueDisposer, _super);
    /**
     * Constructor.
     */
    function MutableValueDisposer() {
        var _this = _super.call(this, function () {
            if (_Type__WEBPACK_IMPORTED_MODULE_2__["hasValue"](_this._disposer)) {
                _this._disposer.dispose();
                _this._disposer = undefined;
            }
        }) || this;
        return _this;
    }
    /**
     * Returns current value.
     *
     * @return Value
     */
    MutableValueDisposer.prototype.get = function () {
        return this._value;
    };
    /**
     * Sets value and disposes previous disposer if it was set.
     *
     * @param value     New value
     * @param disposer  Disposer
     */
    MutableValueDisposer.prototype.set = function (value, disposer) {
        if (_Type__WEBPACK_IMPORTED_MODULE_2__["hasValue"](this._disposer)) {
            this._disposer.dispose();
        }
        this._disposer = disposer;
        this._value = value;
    };
    /**
     * Resets the disposer value.
     */
    MutableValueDisposer.prototype.reset = function () {
        this.set(undefined, undefined);
    };
    return MutableValueDisposer;
}(Disposer));

/**
 * @ignore Exclude from docs
 * @todo Description
 */
var CounterDisposer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CounterDisposer, _super);
    function CounterDisposer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * [_counter description]
         *
         * @todo Description
         */
        _this._counter = 0;
        return _this;
    }
    /**
     * [increment description]
     *
     * @todo Description
     */
    CounterDisposer.prototype.increment = function () {
        var _this = this;
        // TODO throw an error if it is disposed
        ++this._counter;
        // TODO make this more efficient
        return new Disposer(function () {
            --_this._counter;
            if (_this._counter === 0) {
                _this.dispose();
            }
        });
    };
    return CounterDisposer;
}(Disposer));

//# sourceMappingURL=Disposer.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/EventDispatcher.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/EventDispatcher.js ***!
  \**********************************************************************************/
/*! exports provided: EventDispatcher, TargetedEventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetedEventDispatcher", function() { return TargetedEventDispatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Disposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Disposer */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Disposer.js");
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Array */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Array.js");
/* harmony import */ var _AsyncPending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AsyncPending */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/AsyncPending.js");
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/**
 * Event Dispatcher module is used for registering listeners and dispatching
 * events across amCharts system.
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */




/*export interface IEventDispatcher<T> {
    isDisposed(): boolean;
    dispose(): void;
    hasListeners(): boolean;
    enable(): void;
    disable(): void;
    enableType<Key extends keyof T>(type: Key): void;
    disableType<Key extends keyof T>(type: Key, amount?: number): void;
    isEnabled<Key extends keyof T>(type: Key): boolean;
    has<C, Key extends keyof T>(type: Key, callback?: (this: C, event: T[Key]) => void, context?: C): boolean;
    dispatchImmediately<Key extends keyof T>(type: Key, event: T[Key]): void;
    dispatch<Key extends keyof T>(type: Key, event: T[Key]): void;
    onAll<C, Key extends keyof T>(callback: (this: C, type: Key, event: T[Key]) => void, context?: C): IDisposer;
    on<C, Key extends keyof T>(type: Key, callback: (this: C, event: T[Key]) => void, context?: C): IDisposer;
    once<C, Key extends keyof T>(type: Key, callback: (this: C, event: T[Key]) => void, context?: C): IDisposer;
    off<C, Key extends keyof T>(type: Key, callback: (this: C, event: T[Key]) => void, context?: C): void;
    off<C, Key extends keyof T>(type: Key, callback: (this: C, event: T[Key]) => void, context?: C): void;
    copyFrom(source: this): void;
}*/
/**
 * Universal Event Dispatcher.
 *
 * @important
 */
var EventDispatcher = /** @class */ (function () {
    /**
     * Constructor
     */
    function EventDispatcher() {
        this._listeners = [];
        this._killed = [];
        this._disabled = {};
        this._iterating = 0;
        this._enabled = true;
        this._disposed = false;
    }
    /**
     * Returns if this object has been already disposed.
     *
     * @return Disposed?
     */
    EventDispatcher.prototype.isDisposed = function () {
        return this._disposed;
    };
    /**
     * Dispose (destroy) this object.
     */
    EventDispatcher.prototype.dispose = function () {
        if (!this._disposed) {
            this._disposed = true;
            var a = this._listeners;
            this._iterating = 1;
            this._listeners = null;
            this._disabled = null;
            try {
                _Array__WEBPACK_IMPORTED_MODULE_2__["each"](a, function (x) {
                    x.disposer.dispose();
                });
            }
            finally {
                this._killed = null;
                this._iterating = null;
            }
        }
    };
    /**
     * Checks if this particular event dispatcher has any listeners set.
     *
     * @return Has listeners?
     */
    EventDispatcher.prototype.hasListeners = function () {
        return this._listeners.length !== 0;
    };
    /**
     * Checks if this particular event dispatcher has any particular listeners set.
     *
     * @return Has particular event listeners?
     */
    EventDispatcher.prototype.hasListenersByType = function (type) {
        return _Array__WEBPACK_IMPORTED_MODULE_2__["any"](this._listeners, function (x) { return (x.type === null || x.type === type) && !x.killed; });
    };
    /**
     * Enable dispatching of events if they were previously disabled by
     * `disable()`.
     */
    EventDispatcher.prototype.enable = function () {
        this._enabled = true;
    };
    /**
     * Disable dispatching of events until re-enabled by `enable()`.
     */
    EventDispatcher.prototype.disable = function () {
        this._enabled = false;
    };
    /**
     * Enable dispatching particular event, if it was disabled before by
     * `disableType()`.
     *
     * @param type Event type
     */
    EventDispatcher.prototype.enableType = function (type) {
        delete this._disabled[type];
    };
    /**
     * Disable dispatching of events for a certain event type.
     *
     * Optionally, can set how many dispatches to skip before automatically
     * re-enabling the dispatching.
     *
     * @param type    Event type
     * @param amount  Number of event dispatches to skip
     */
    EventDispatcher.prototype.disableType = function (type, amount) {
        if (amount === void 0) { amount = Infinity; }
        this._disabled[type] = amount;
    };
    /**
     * Removes listener from dispatcher.
     *
     * Will throw an exception if such listener does not exists.
     *
     * @param listener Listener to remove
     */
    EventDispatcher.prototype._removeListener = function (listener) {
        if (this._iterating === 0) {
            var index = this._listeners.indexOf(listener);
            if (index === -1) {
                throw new Error("Invalid state: could not remove listener");
            }
            this._listeners.splice(index, 1);
        }
        else {
            this._killed.push(listener);
        }
    };
    /**
     * Removes existing listener by certain parameters.
     *
     * @param once         Listener's once setting
     * @param type         Listener's type
     * @param callback     Callback function
     * @param context      Callback context
     */
    EventDispatcher.prototype._removeExistingListener = function (once, type, callback, context) {
        if (this._disposed) {
            throw new Error("EventDispatcher is disposed");
        }
        this._eachListener(function (info) {
            if (info.once === once && // TODO is this correct ?
                info.type === type &&
                (callback == null || info.callback === callback) &&
                info.context === context) {
                info.disposer.dispose();
            }
        });
    };
    /**
     * Checks if dispatching for particular event type is enabled.
     *
     * @param type  Event type
     * @return Enabled?
     */
    EventDispatcher.prototype.isEnabled = function (type) {
        if (this._disposed) {
            throw new Error("EventDispatcher is disposed");
        }
        // TODO is this check correct ?
        return this._enabled && this._listeners.length > 0 && this.hasListenersByType(type) && this._disabled[type] == null;
    };
    /**
     * Checks if there's already a listener with specific parameters.
     *
     * @param type      Listener's type
     * @param callback  Callback function
     * @param context   Callback context
     * @return Has listener?
     */
    EventDispatcher.prototype.has = function (type, callback, context) {
        var index = _Array__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this._listeners, function (info) {
            return info.once !== true && // Ignoring "once" listeners
                info.type === type &&
                (callback == null || info.callback === callback) &&
                info.context === context;
        });
        return index !== -1;
    };
    /**
     * Checks whether event of the particular type should be dispatched.
     *
     * @param type  Event type
     * @return Dispatch?
     */
    EventDispatcher.prototype._shouldDispatch = function (type) {
        if (this._disposed) {
            throw new Error("EventDispatcher is disposed");
        }
        var count = this._disabled[type];
        if (!_Type__WEBPACK_IMPORTED_MODULE_4__["isNumber"](count)) {
            return this._enabled;
        }
        else {
            if (count <= 1) {
                delete this._disabled[type];
            }
            else {
                --this._disabled[type];
            }
            return false;
        }
    };
    /**
     * [_eachListener description]
     *
     * All of this extra code is needed when a listener is removed while iterating
     *
     * @todo Description
     * @param fn [description]
     */
    EventDispatcher.prototype._eachListener = function (fn) {
        var _this = this;
        ++this._iterating;
        try {
            _Array__WEBPACK_IMPORTED_MODULE_2__["each"](this._listeners, fn);
        }
        finally {
            --this._iterating;
            // TODO should this be inside or outside the finally ?
            if (this._iterating === 0 && this._killed.length !== 0) {
                // Remove killed listeners
                _Array__WEBPACK_IMPORTED_MODULE_2__["each"](this._killed, function (killed) {
                    _this._removeListener(killed);
                });
                this._killed.length = 0;
            }
        }
    };
    /**
     * Dispatches an event immediately without waiting for next cycle.
     *
     * @param type   Event type
     * @param event  Event object
     * @todo automatically add in type and target properties if they are missing
     */
    EventDispatcher.prototype.dispatchImmediately = function (type, event) {
        if (this._shouldDispatch(type)) {
            // TODO check if it's faster to use an object of listeners rather than a single big array
            // TODO if the function throws, maybe it should keep going ?
            this._eachListener(function (listener) {
                if (!listener.killed && (listener.type === null || listener.type === type)) {
                    listener.dispatch(type, event);
                }
            });
        }
    };
    /**
     * Shelves the event to be dispatched within next update cycle.
     *
     * @param type   Event type
     * @param event  Event object
     * @todo automatically add in type and target properties if they are missing
     */
    EventDispatcher.prototype.dispatch = function (type, event) {
        if (this._shouldDispatch(type)) {
            this._eachListener(function (listener) {
                // TODO check if it's faster to use an object of listeners rather than a single big array
                if (!listener.killed && (listener.type === null || listener.type === type)) {
                    // TODO if the function throws, maybe it should keep going ?
                    // TODO dispatch during the update cycle, rather than using whenIdle
                    _AsyncPending__WEBPACK_IMPORTED_MODULE_3__["whenIdle"](function () {
                        if (!listener.killed) {
                            listener.dispatch(type, event);
                        }
                    });
                }
            });
        }
    };
    /**
     * Creates, catalogs and returns an [[EventListener]].
     *
     * Event listener can be disposed.
     *
     * @param once         Listener's once setting
     * @param type         Listener's type
     * @param callback     Callback function
     * @param context      Callback context
     * @param shouldClone  Whether the listener should be copied when the EventDispatcher is copied
     * @param dispatch
     * @returns An event listener
     */
    EventDispatcher.prototype._on = function (once, type, callback, context, shouldClone, dispatch) {
        var _this = this;
        if (this._disposed) {
            throw new Error("EventDispatcher is disposed");
        }
        this._removeExistingListener(once, type, callback, context);
        var info = {
            type: type,
            callback: callback,
            context: context,
            shouldClone: shouldClone,
            dispatch: dispatch,
            killed: false,
            once: once,
            disposer: new _Disposer__WEBPACK_IMPORTED_MODULE_1__["Disposer"](function () {
                info.killed = true;
                _this._removeListener(info);
            })
        };
        this._listeners.push(info);
        return info;
    };
    /**
     * Creates an event listener to be invoked on **any** event.
     *
     * @param callback     Callback function
     * @param context      Callback context
     * @param shouldClone  Whether the listener should be copied when the EventDispatcher is copied
     * @returns A disposable event listener
     * @todo what if `listen` is called on the same function twice ?
     */
    EventDispatcher.prototype.onAll = function (callback, context, shouldClone) {
        if (shouldClone === void 0) { shouldClone = true; }
        return this._on(false, null, callback, context, shouldClone, function (type, event) { return callback.call(context, type, event); }).disposer;
    };
    /**
     * Creates an event listener to be invoked on a specific event type.
     *
     * ```TypeScript
     * series.events.on("hidden", (ev) => {
     *   console.log("Series hidden: " + ev.target.name);
     * }, this);
     * ```
     * ```JavaScript
     * series.events.on("hidden", function(ev) {
     *   console.log("Series hidden: " + ev.target.name);
     * }, this);
     * ```
     * ```JSON
     * {
     *   // ...
     *   "series": [{
     *     // ...
     *     "events": {
     *     	"hidden": function(ev) {
     *     	  console.log("Series hidden: " + ev.target.name);
     *     	}
     *     }
     *   }]
     * }
     * ```
     *
     * The above will invoke our custom event handler whenever series we put
     * event on is hidden.
     *
     * @param type         Listener's type
     * @param callback     Callback function
     * @param context      Callback context
     * @param shouldClone  Whether the listener should be copied when the EventDispatcher is copied
     * @returns A disposable event listener
     * @todo what if `listen` is called on the same function twice ?
     */
    EventDispatcher.prototype.on = function (type, callback, context, shouldClone) {
        if (shouldClone === void 0) { shouldClone = true; }
        return this._on(false, type, callback, context, shouldClone, function (type, event) { return callback.call(context, event); }).disposer;
    };
    /**
     * Creates an event listener to be invoked on a specific event type once.
     *
     * Once the event listener is invoked, it is automatically disposed.
     *
     * ```TypeScript
     * series.events.on("hidden", (ev) => {
     *   console.log("Series hidden: " + ev.target.name);
     * }, this);
     * ```
     * ```JavaScript
     * series.events.on("hidden", function(ev) {
     *   console.log("Series hidden: " + ev.target.name);
     * }, this);
     * ```
     * ```JSON
     * {
     *   // ...
     *   "series": [{
     *     // ...
     *     "events": {
     *     	"hidden": function(ev) {
     *     	  console.log("Series hidden: " + ev.target.name);
     *     	}
     *     }
     *   }]
     * }
     * ```
     *
     * The above will invoke our custom event handler the first time series we
     * put event on is hidden.
     *
     * @param type         Listener's type
     * @param callback     Callback function
     * @param context      Callback context
     * @param shouldClone  Whether the listener should be copied when the EventDispatcher is copied
     * @returns A disposable event listener
     * @todo what if `listen` is called on the same function twice ?
     */
    EventDispatcher.prototype.once = function (type, callback, context, shouldClone) {
        if (shouldClone === void 0) { shouldClone = true; }
        var x = this._on(true, type, callback, context, shouldClone, function (type, event) {
            x.disposer.dispose();
            callback.call(context, event);
        });
        // TODO maybe this should return a different Disposer ?
        return x.disposer;
    };
    /**
     * Removes the event listener with specific parameters.
     *
     * @param type         Listener's type
     * @param callback     Callback function
     * @param context      Callback context
     */
    EventDispatcher.prototype.off = function (type, callback, context) {
        this._removeExistingListener(false, type, callback, context);
    };
    /**
     * Copies all dispatcher parameters, including listeners, from another event
     * dispatcher.
     *
     * @param source Source event dispatcher
     */
    EventDispatcher.prototype.copyFrom = function (source) {
        var _this = this;
        if (this._disposed) {
            throw new Error("EventDispatcher is disposed");
        }
        if (source === this) {
            throw new Error("Cannot copyFrom the same TargetedEventDispatcher");
        }
        _Array__WEBPACK_IMPORTED_MODULE_2__["each"](source._listeners, function (x) {
            // TODO is this correct ?
            if (!x.killed && x.shouldClone) {
                if (x.type === null) {
                    _this.onAll(x.callback, x.context);
                }
                else if (x.once) {
                    _this.once(x.type, x.callback, x.context);
                }
                else {
                    _this.on(x.type, x.callback, x.context);
                }
            }
        });
    };
    return EventDispatcher;
}());

/**
 * A version of the [[EventDispatcher]] that dispatches events for a specific
 * target object.
 *
 * @important
 */
var TargetedEventDispatcher = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TargetedEventDispatcher, _super);
    /**
     * Constructor
     *
     * @param target Event dispatcher target
     */
    function TargetedEventDispatcher(target) {
        var _this = _super.call(this) || this;
        _this.target = target;
        return _this;
    }
    /**
     * Copies all dispatcher parameters, including listeners, from another event
     * dispatcher.
     *
     * @param source Source event dispatcher
     */
    TargetedEventDispatcher.prototype.copyFrom = function (source) {
        var _this = this;
        if (this._disposed) {
            throw new Error("EventDispatcher is disposed");
        }
        if (source === this) {
            throw new Error("Cannot copyFrom the same TargetedEventDispatcher");
        }
        _Array__WEBPACK_IMPORTED_MODULE_2__["each"](source._listeners, function (x) {
            // TODO very hacky
            if (x.context === source.target) {
                return;
            }
            // TODO is this correct ?
            if (!x.killed && x.shouldClone) {
                if (x.type === null) {
                    _this.onAll(x.callback, x.context);
                }
                else if (x.once) {
                    _this.once(x.type, x.callback, x.context);
                }
                else {
                    _this.on(x.type, x.callback, x.context);
                }
            }
        });
    };
    return TargetedEventDispatcher;
}(EventDispatcher));

//# sourceMappingURL=EventDispatcher.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/Iterator.js ***!
  \***************************************************************************/
/*! exports provided: fromArray, length, toArray, eachContinue, each, sort, map, filter, concat, flatten, indexed, findIndex, find, findMap, contains, foldl, min, max, join, ListIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachContinue", function() { return eachContinue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexed", function() { return indexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMap", function() { return findMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return foldl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIterator", function() { return ListIterator; });
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Array.js");

/**
 * @ignore Exclude from docs
 * @todo Description
 */
function fromArray(array) {
    return function (push) {
        var length = array.length;
        for (var i = 0; i < length; ++i) {
            if (!push(array[i])) {
                break;
            }
        }
    };
}
/**
 * @ignore Exclude from docs
 * @todo Description
 */
function length(iter) {
    var sum = 0;
    iter(function (_) {
        ++sum;
        return true;
    });
    return sum;
}
/**
 * @ignore Exclude from docs
 * @todo Description
 */
function toArray(iter) {
    var output = [];
    iter(function (value) {
        output.push(value);
        return true;
    });
    return output;
}
/**
 * [iter description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function eachContinue(iter, fn) {
    iter(fn);
}
/**
 * [iter description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function each(iter, fn) {
    iter(function (value) {
        fn(value);
        return true;
    });
}
/**
 * [iter description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function sort(iter, fn) {
    return fromArray(toArray(iter).sort(fn));
}
/**
 * [A description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function map(iter, fn) {
    return function (push) { return iter(function (value) { return push(fn(value)); }); };
}
/**
 * [iter description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function filter(iter, fn) {
    return function (push) { return iter(function (value) {
        if (fn(value)) {
            return push(value);
        }
        else {
            return true;
        }
    }); };
}
/**
 * @ignore Exclude from docs
 * @todo Description
 */
function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (push) {
        var go = true;
        var push2 = function (value) { return (go = push(value)); };
        var length = args.length;
        for (var i = 0; i < length; ++i) {
            args[i](push2);
            if (!go) {
                break;
            }
        }
    };
}
/**
 * @ignore Exclude from docs
 * @todo Description
 */
function flatten(iter) {
    return function (push) {
        var go = true;
        var push2 = function (value) { return (go = push(value)); };
        iter(function (value) {
            value(push2);
            return go;
        });
    };
}
/**
 * [number description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function indexed(iter) {
    return function (push) {
        var index = 0;
        iter(function (value) { return push([index++, value]); });
    };
}
/**
 * [iter description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function findIndex(iter, matches) {
    var found = false;
    var i = 0;
    iter(function (value) {
        if (matches(value)) {
            found = true;
            return false;
        }
        else {
            ++i;
            return true;
        }
    });
    return (found ? i : -1);
}
/**
 * [iter description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function find(iter, matches) {
    var output;
    iter(function (value) {
        if (matches(value)) {
            output = value;
            return false;
        }
        else {
            return true;
        }
    });
    return output;
}
/**
 * [A description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function findMap(iter, matches) {
    var output;
    iter(function (value) {
        var v = matches(value);
        if (v !== null) {
            output = v;
            return false;
        }
        else {
            return true;
        }
    });
    return output;
}
/**
 * [iter description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function contains(iter, matches) {
    var output = false;
    iter(function (value) {
        if (matches(value)) {
            output = true;
            return false;
        }
        else {
            return true;
        }
    });
    return output;
}
/**
 * [A description]
 *
 * @ignore Exclude from docs
 * @todo Description
 */
function foldl(iter, init, fn) {
    iter(function (value) {
        init = fn(init, value);
        return true;
    });
    return init;
}
/**
 * [min2 description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param left [description]
 * @param right [description]
 * @return [description]
 */
function min2(left, right) {
    if (left == null || right < left) {
        return right;
    }
    else {
        return left;
    }
}
/**
 * [min description]
 *
 * @ignore Exclude from docs
 * @todo Verify that this works correctly
 * @todo Description
 * @param a [description]
 * @return [description]
 */
function min(a) {
    return foldl(a, null, min2);
}
/**
 * [max2 description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param left [description]
 * @param right [description]
 * @return [description]
 */
function max2(left, right) {
    if (left == null || right > left) {
        return right;
    }
    else {
        return left;
    }
}
/**
 * [max description]
 *
 * @ignore Exclude from docs
 * @todo Verify that this works correctly
 * @todo Description
 * @param a [description]
 * @return [description]
 */
function max(a) {
    return foldl(a, null, max2);
}
/**
 * [join description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param iter [description]
 * @param separator [description]
 * @return [description]
 */
function join(iter, separator) {
    if (separator === void 0) { separator = ""; }
    var first = true;
    var init = "";
    iter(function (value) {
        if (first) {
            first = false;
        }
        else {
            init += separator;
        }
        init += value;
        return true;
    });
    return init;
}
/**
 * @ignore Exclude from docs
 * @todo Description
 */
var ListIterator = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param list [description]
     * @param create [description]
     */
    function ListIterator(list, create) {
        // flag specifies if iterator should create new list item if it is reqested for a nextItem but there is no more left in the list
        this.createNewItems = false;
        this.list = list;
        this._create = create;
        this.reset();
    }
    ListIterator.prototype.reset = function () {
        this._listCopy = toArray(this.list.iterator());
    };
    ListIterator.prototype.clear = function () {
        this._listCopy.length = 0;
    };
    ListIterator.prototype.getFirst = function () {
        return this.returnItem(0);
    };
    ListIterator.prototype.getLast = function () {
        return this.returnItem(this._listCopy.length - 1);
    };
    ListIterator.prototype.find = function (fn) {
        var index = _Array__WEBPACK_IMPORTED_MODULE_0__["findIndex"](this._listCopy, fn);
        if (index !== -1) {
            var item = this._listCopy[index];
            // TODO use removeIndex instead ?
            _Array__WEBPACK_IMPORTED_MODULE_0__["remove"](this._listCopy, item);
            return item;
        }
        else {
            return this.getLast();
        }
    };
    ListIterator.prototype.removeItem = function (item) {
        return _Array__WEBPACK_IMPORTED_MODULE_0__["remove"](this._listCopy, item);
    };
    ListIterator.prototype.returnItem = function (index) {
        if (index >= 0 && index < this._listCopy.length) {
            var item = this._listCopy[index];
            // TODO use removeIndex instead ?
            _Array__WEBPACK_IMPORTED_MODULE_0__["remove"](this._listCopy, item);
            return item;
        }
        else if (this.createNewItems) {
            return this._create();
        }
    };
    ListIterator.prototype.iterator = function () {
        return fromArray(this._listCopy);
    };
    return ListIterator;
}());

//# sourceMappingURL=Iterator.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Math.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/Math.js ***!
  \***********************************************************************/
/*! exports provided: PI, HALFPI, RADIANS, DEGREES, toNumberRange, round, ceil, stretch, fitToRange, sin, tan, cos, max, min, closest, intersect, invertRange, intersection, getDistance, getHorizontalDistance, getVerticalDistance, getCubicCurveDistance, getScale, getMidPoint, getRotation, getAngle, getCenterShift, getBBox, getCommonRectangle, getPointOnQuadraticCurve, getPointOnCubicCurve, getCubicControlPointA, getCubicControlPointB, adjustTension, normalizeAngle, fitAngleToRange, getArcRect, getArcPoint, isInRectangle, getLineIntersection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PI", function() { return PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HALFPI", function() { return HALFPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIANS", function() { return RADIANS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEGREES", function() { return DEGREES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumberRange", function() { return toNumberRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stretch", function() { return stretch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitToRange", function() { return fitToRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invertRange", function() { return invertRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return intersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistance", function() { return getDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHorizontalDistance", function() { return getHorizontalDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalDistance", function() { return getVerticalDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCubicCurveDistance", function() { return getCubicCurveDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScale", function() { return getScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMidPoint", function() { return getMidPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAngle", function() { return getAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterShift", function() { return getCenterShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBBox", function() { return getBBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonRectangle", function() { return getCommonRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointOnQuadraticCurve", function() { return getPointOnQuadraticCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointOnCubicCurve", function() { return getPointOnCubicCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCubicControlPointA", function() { return getCubicControlPointA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCubicControlPointB", function() { return getCubicControlPointB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustTension", function() { return adjustTension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeAngle", function() { return normalizeAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitAngleToRange", function() { return fitAngleToRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArcRect", function() { return getArcRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArcPoint", function() { return getArcPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInRectangle", function() { return isInRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineIntersection", function() { return getLineIntersection; });
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/**
 * A collection of Math-related functions
 *
 * @todo Comment trigonometric functions?
 */

/**
 * ============================================================================
 * CONSTANTS
 * ============================================================================
 * @hidden
 */
var PI = Math.PI;
var HALFPI = PI / 2;
var RADIANS = PI / 180;
var DEGREES = 180 / PI;
/**
 * Converts any value and fits it into a specific value range.
 *
 * @param value  Source value
 * @param min    Minimum allowable value
 * @param max    Maximum allowable value
 * @return Number
 */
function toNumberRange(value, min, max) {
    if (_Type__WEBPACK_IMPORTED_MODULE_0__["hasValue"](value)) {
        value = _Type__WEBPACK_IMPORTED_MODULE_0__["toNumber"](value);
        return fitToRange(value, min, max);
    }
    return value;
}
/**
 * Rounds the numeric value to whole number or specific precision of set.
 *
 * @param value      Value
 * @param precision  Precision (number of decimal points)
 * @param floor  In case value ends with 0.5 and precision is 0, we might need to floor the value instead of ceiling it.
 * @return Rounded value
 */
function round(value, precision, floor) {
    if (!_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](precision) || precision <= 0) {
        var rounded = Math.round(value);
        if (floor) {
            if (rounded - value == 0.5) {
                rounded--;
            }
        }
        return rounded;
    }
    else {
        var d = Math.pow(10, precision);
        return Math.round(value * d) / d;
    }
}
/**
 * Ceils the numeric value to whole number or specific precision of set.
 *
 * @param value      Value
 * @param precision  Precision (number of decimal points)
 * @return Rounded value
 */
function ceil(value, precision) {
    if (!_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](precision) || precision <= 0) {
        return Math.ceil(value);
    }
    else {
        var d = Math.pow(10, precision);
        return Math.ceil(value * d) / d;
    }
}
/**
 * Stretches `t` so that it will always be between `from` and `to`.
 *
 * @param t     Number from 0 to 1
 * @param from  Lowest possible value
 * @param to    Highest possible value
 * @return Adjusted value
 */
function stretch(t, from, to) {
    return (t * (to - from)) + from;
}
/**
 * Adjust numeric value so it fits to specific value range.
 *
 * @param value     Value
 * @param minValue  Lowest possible value
 * @param maxValue  Highest possible value
 * @return Adjusted value
 */
function fitToRange(value, minValue, maxValue) {
    if (_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](minValue)) {
        if (_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](maxValue) && maxValue < minValue) {
            var temp = maxValue;
            maxValue = minValue;
            minValue = temp;
        }
        if (value < minValue) {
            value = minValue;
        }
    }
    if (_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](maxValue)) {
        if (value > maxValue) {
            value = maxValue;
        }
    }
    return value;
}
/**
 * Returns sine of a number.
 *
 * @param value  Value
 * @return Sine
 */
function sin(value) {
    return round(Math.sin(RADIANS * value), 10);
}
/**
 * Returns tan of a number.
 *
 * @param value  Value
 * @return Sine
 */
function tan(value) {
    return round(Math.tan(RADIANS * value), 10);
}
/**
 * Returns cosine of a number.
 *
 * @param value  Value
 * @return Cosine
 */
function cos(value) {
    return round(Math.cos(RADIANS * value), 10);
}
function max(left, right) {
    if (_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](left)) {
        if (_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](right)) {
            if (right > left) {
                return right;
            }
            else {
                return left;
            }
        }
        else {
            return left;
        }
    }
    else if (_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](right)) {
        return right;
    }
    else {
        return null;
    }
}
function min(left, right) {
    if (_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](left)) {
        if (_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](right)) {
            if (right < left) {
                return right;
            }
            else {
                return left;
            }
        }
        else {
            return left;
        }
    }
    else if (_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](right)) {
        return right;
    }
    else {
        return null;
    }
}
/**
 * Returns the closest value from the array of values to the reference value.
 *
 * @param values  Array of values
 * @param value   Reference value
 * @return Closes value from the array
 */
function closest(values, referenceValue) {
    return values.reduce(function (prev, curr) {
        return (Math.abs(curr - referenceValue) < Math.abs(prev - referenceValue) ? curr : prev);
    });
}
/**
 * Checks whether two ranges of values intersect.
 *
 * @param range1  Range 1
 * @param range2  Range 2
 * @return Any intersecting numbers?
 */
function intersect(range1, range2) {
    var start1 = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range1.start);
    var start2 = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range2.start);
    var end1 = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range1.end);
    var end2 = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range2.end);
    return Math.max(start1, start2) <= Math.min(end1, end2);
}
/**
 * Inverts the range of values.
 *
 * @param range  Range
 */
function invertRange(range) {
    var start = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range.start);
    var end = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range.end);
    return { start: 1 - end, end: 1 - start };
}
/**
 * Returns an intersection range between two ranges of values.
 *
 * @param range1  Range 1
 * @param range2  Range 2
 * @return Intersecting value range
 */
function intersection(range1, range2) {
    var start1 = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range1.start);
    var start2 = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range2.start);
    var end1 = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range1.end);
    var end2 = _Type__WEBPACK_IMPORTED_MODULE_0__["getValue"](range2.end);
    var startMax = Math.max(start1, start2);
    var endMin = Math.min(end1, end2);
    if (endMin < startMax) {
        return undefined;
    }
    else {
        return { start: startMax, end: endMin };
    }
}
/**
 * Returns pixel "distance" between two points.
 *
 * If second point is not specified, distance from {x:0, y:0} point is
 * calculated.
 *
 * @param point1  Point 1
 * @param point2  Point 2
 * @return Distance in relative pixels
 */
function getDistance(point1, point2) {
    if (!point1) {
        return 0;
    }
    if (!point2) {
        point2 = { x: 0, y: 0 };
    }
    return Math.sqrt(Math.pow(Math.abs(point1.x - point2.x), 2) + Math.pow(Math.abs(point1.y - point2.y), 2));
}
/**
 * Returns pixel "horizontal distance" between two points.
 *
 * If second point is not specified, distance from {x:0, y:0} point is
 * calculated.
 *
 * @param point1  Point 1
 * @param point2  Point 2
 * @return Distance in relative pixels
 */
function getHorizontalDistance(point1, point2) {
    if (!point1) {
        return 0;
    }
    if (!point2) {
        point2 = { x: 0, y: 0 };
    }
    return Math.abs(point1.x - point2.x);
}
/**
 * Returns pixel "vertical distance" between two points.
 *
 * If second point is not specified, distance from {x:0, y:0} point is
 * calculated.
 *
 * @param point1  Point 1
 * @param point2  Point 2
 * @return Distance in relative pixels
 */
function getVerticalDistance(point1, point2) {
    if (!point1) {
        return 0;
    }
    if (!point2) {
        point2 = { x: 0, y: 0 };
    }
    return Math.abs(point1.y - point2.y);
}
/**
 * Returns approximate pixel "distance" between two points of cubic curve
 *
 * If second point is not specified, distance from {x:0, y:0} point is
 * calculated.
 *
 * @param point1  Point 1
 * @param point2  Point 2
 * @param controlPointA  Control Point 1
 * @param controlPointB  Control Point 2
 * @param stepCount  number of steps (the more, the more accurate result)
 * @return Distance in relative pixels
 */
function getCubicCurveDistance(point1, point2, controlPointA, controlPointB, stepCount) {
    if (!point1) {
        return 0;
    }
    if (!point2) {
        point2 = { x: 0, y: 0 };
    }
    var distance = 0;
    var prevPoint = point1;
    if (stepCount > 0) {
        for (var s = 0; s <= stepCount; s++) {
            var point = getPointOnCubicCurve(point1, point2, controlPointA, controlPointB, s / stepCount);
            distance += getDistance(prevPoint, point);
            prevPoint = point;
        }
    }
    return distance;
}
/**
 * Returns scale based on original and end position of the two points.
 *
 * @param point1       Current position of point 1
 * @param startPoint1  Start position of point 1
 * @param point2       Current position of point 1
 * @param startPoint2  Start position of point 2
 * @return Scale        Calculated scale
 */
function getScale(point1, startPoint1, point2, startPoint2) {
    var initialDistance = getDistance(startPoint1, startPoint2);
    var currentDistance = getDistance(point1, point2);
    return Math.abs(currentDistance / initialDistance);
}
/**
 * Returns an exact mid point between two points.
 *
 * @param point1     Position of point 1
 * @param point2     Position of point 2
 * @return Mid point  Position of mid-point
 */
function getMidPoint(point1, point2, position) {
    if (!_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](position)) {
        position = 0.5;
    }
    return {
        "x": (point1.x + (point2.x - point1.x) * position),
        "y": (point1.y + (point2.y - point1.y) * position)
    };
}
/**
 * Returns difference in angles between starting and ending position of two
 * vectors.
 *
 * @param point1       Current position of point 1
 * @param startPoint1  Start position of point 1
 * @param point2       Current position of point 1
 * @param startPoint2  Start position of point 2
 * @return Angle difference in degrees
 */
function getRotation(point1, startPoint1, point2, startPoint2) {
    // Get start and end angles
    var startAngle = getAngle(startPoint1, startPoint2);
    var angle = getAngle(point1, point2);
    // Calculate angle
    var diff = startAngle - angle;
    if (diff < 0) {
        diff += 360;
    }
    return diff;
}
/**
 * Calculates angle of the vector based on two or one point.
 *
 * @param point1  Point 1
 * @param point2  Point 2
 * @return Angle in degrees
 */
function getAngle(point1, point2) {
    if (!point2) {
        point2 = { x: point1.x * 2, y: point1.y * 2 };
    }
    var diffX = point2.x - point1.x;
    var diffY = point2.y - point1.y;
    var angle = Math.atan2(diffY, diffX) * DEGREES;
    if (angle < 0) {
        angle += 360;
    }
    return normalizeAngle(angle);
}
/**
 * Returns the shift in coordinates of the center when item is rotated, moved
 * and scaled at the same time.
 *
 * @param center       Current center
 * @param point1       Frst reference point
 * @param startPoint1  Original position of the first reference point
 * @param point2       Second reference point
 * @param startPoint2  Original position of the first reference point
 * @return Shift in center point coordinates
 */
function getCenterShift(center, point1, startPoint1, point2, startPoint2) {
    // Get angle
    var angle = getRotation(point1, startPoint1, point2, startPoint2) - 90;
    if (angle < 0) {
        angle += 360;
    }
    // Get distance between new position
    var distance = getDistance(point1, point2);
    // Calculate new X
    var x = Math.cos(angle) / distance + point1.x;
    var y = Math.cos(angle) / distance + point1.y;
    var shift = {
        "x": x - center.x,
        "y": y - center.y
    };
    return shift;
}
/**
 * Converts an array of points into a bounding box rectangle.
 *
 * Array can contain any number of points.
 *
 * @param points  Points
 * @return Bounding box rectangle
 */
function getBBox(points) {
    if (points) {
        var length_1 = points.length;
        if (length_1 !== 0) {
            var left = void 0;
            var right = void 0;
            var top_1;
            var bottom = void 0;
            for (var i = 0; i < length_1; i++) {
                var point = points[i];
                if (!_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](right) || (point.x > right)) {
                    right = point.x;
                }
                if (!_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](left) || (point.x < left)) {
                    left = point.x;
                }
                if (!_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](top_1) || (point.y < top_1)) {
                    top_1 = point.y;
                }
                if (!_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](bottom) || (point.y > bottom)) {
                    bottom = point.y;
                }
            }
            return { x: left, y: top_1, width: right - left, height: bottom - top_1 };
        }
    }
    return { x: 0, y: 0, width: 0, height: 0 };
}
/**
 * Returns a [[IRectangle]] object representing a common rectangle that fits
 * all passed in rectangles in it.
 *
 * @param rectangles  An array of rectangles
 * @return Common rectangle
 */
function getCommonRectangle(rectangles) {
    var length = rectangles.length;
    if (length !== 0) {
        var minX = void 0;
        var minY = void 0;
        var maxX = void 0;
        var maxY = void 0;
        for (var i = 0; i < length; i++) {
            var rectangle = rectangles[i];
            minX = min(rectangle.x, minX);
            minY = min(rectangle.y, minY);
            maxX = max(rectangle.x + rectangle.width, maxX);
            maxY = max(rectangle.y + rectangle.height, maxY);
        }
        return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
    }
}
/**
 * [getPointOnQuadraticCurve description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param pointA        [description]
 * @param pointB        [description]
 * @param controlPoint  [description]
 * @param position      [description]
 * @return [description]
 */
function getPointOnQuadraticCurve(pointA, pointB, controlPoint, position) {
    var x = (1 - position) * (1 - position) * pointA.x + 2 * (1 - position) * position * controlPoint.x + position * position * pointB.x;
    var y = (1 - position) * (1 - position) * pointA.y + 2 * (1 - position) * position * controlPoint.y + position * position * pointB.y;
    return { x: x, y: y };
}
/**
 * [getPointOnCubicCurve description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param pointA         [description]
 * @param pointB         [description]
 * @param controlPointA  [description]
 * @param controlPointB  [description]
 * @param position       [description]
 * @return [description]
 */
function getPointOnCubicCurve(pointA, pointB, controlPointA, controlPointB, position) {
    var point = { x: 0, y: 0 };
    var mt1 = 1 - position;
    var mt2 = mt1 * mt1;
    var mt3 = mt2 * mt1;
    point.x = pointA.x * mt3 + controlPointA.x * 3 * mt2 * position + controlPointB.x * 3 * mt1 * position * position + pointB.x * position * position * position;
    point.y = pointA.y * mt3 + controlPointA.y * 3 * mt2 * position + controlPointB.y * 3 * mt1 * position * position + pointB.y * position * position * position;
    return point;
}
/**
 * [getCubicControlPointA description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param p0        [description]
 * @param p1        [description]
 * @param p2        [description]
 * @param p3        [description]
 * @param tensionX  [description]
 * @param tensionY  [description]
 * @return [description]
 */
function getCubicControlPointA(p0, p1, p2, p3, tensionX, tensionY) {
    tensionX = adjustTension(tensionX);
    tensionY = adjustTension(tensionY);
    return { x: ((-p0.x + p1.x / tensionX + p2.x) * tensionX), y: ((-p0.y + p1.y / tensionY + p2.y) * tensionY) };
}
/**
 * [getCubicControlPointB description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param p0        [description]
 * @param p1        [description]
 * @param p2        [description]
 * @param p3        [description]
 * @param tensionX  [description]
 * @param tensionY  [description]
 * @return [description]
 */
function getCubicControlPointB(p0, p1, p2, p3, tensionX, tensionY) {
    tensionX = adjustTension(tensionX);
    tensionY = adjustTension(tensionY);
    return { x: ((p1.x + p2.x / tensionX - p3.x) * tensionX), y: ((p1.y + p2.y / tensionY - p3.y) * tensionY) };
}
/**
 * [adjustTension description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param tension  [description]
 * @return [description]
 */
function adjustTension(tension) {
    return 1 - tension + 0.00001;
}
/**
 * [normalizeAngle description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @param value  [description]
 * @return [description]
 */
function normalizeAngle(value) {
    if (value == 360) {
        return 360;
    }
    return value % 360;
}
/**
 * [normalizeAngleToRange description]
 *
 * @ignore Exclude from docs
 * @todo Description
 * @todo review this with various angles, can be tested on radar chart with custom start/end angles
 * @param value       [description]
 * @param startAngle  [description]
 * @param endAngle    [description]
 * @return [description]
 */
function fitAngleToRange(value, startAngle, endAngle) {
    if (startAngle > endAngle) {
        var temp = startAngle;
        startAngle = endAngle;
        endAngle = temp;
    }
    value = normalizeAngle(value);
    var count = (startAngle - normalizeAngle(startAngle)) / 360;
    if (value < startAngle) {
        value += 360 * (count + 1);
    }
    var maxEnd = startAngle + (endAngle - startAngle) / 2 + 180;
    var maxStart = startAngle + (endAngle - startAngle) / 2 - 180;
    if (value > endAngle) {
        if (value - 360 > startAngle) {
            value -= 360;
        }
        else {
            if (value < maxEnd) {
                value = endAngle;
            }
            else {
                value = startAngle;
            }
        }
    }
    if (value < startAngle) {
        if (value > maxStart) {
            value = startAngle;
        }
        else {
            value = endAngle;
        }
    }
    return value;
}
/**
 * Returns [[IRectangle]] of an arc in relative values, assuming that the
 * center is at the circle center.
 *
 * Used to find out max radius of an arc.
 *
 * @ignore Exclude from docs
 * @param startAngle  Start angle
 * @param endAngle    End angle
 * @param radius    	 Relative radius
 * @return Rectangle
 */
function getArcRect(startAngle, endAngle, radius) {
    var minX = Number.MAX_VALUE;
    var minY = Number.MAX_VALUE;
    var maxX = -Number.MAX_VALUE;
    var maxY = -Number.MAX_VALUE;
    var bpoints = [];
    if (!_Type__WEBPACK_IMPORTED_MODULE_0__["isNumber"](radius)) {
        radius = 1;
    }
    bpoints.push(getArcPoint(radius, startAngle));
    bpoints.push(getArcPoint(radius, endAngle));
    var fromAngle = Math.min(Math.floor(startAngle / 90) * 90, Math.floor(endAngle / 90) * 90);
    var toAngle = Math.max(Math.ceil(startAngle / 90) * 90, Math.ceil(endAngle / 90) * 90);
    for (var angle = fromAngle; angle <= toAngle; angle += 90) {
        if (angle >= startAngle && angle <= endAngle) {
            bpoints.push(getArcPoint(radius, angle));
        }
    }
    for (var i = 0; i < bpoints.length; i++) {
        var pt = bpoints[i];
        if (pt.x < minX) {
            minX = pt.x;
        }
        if (pt.y < minY) {
            minY = pt.y;
        }
        if (pt.x > maxX) {
            maxX = pt.x;
        }
        if (pt.y > maxY) {
            maxY = pt.y;
        }
    }
    return ({ x: minX, y: minY, width: maxX - minX, height: maxY - minY });
}
/**
 * Returns point on arc
 *
 * @param center point
 * @param radius
 * @param arc
 * @return {boolean}
 */
function getArcPoint(radius, arc) {
    return ({ x: radius * cos(arc), y: radius * sin(arc) });
}
/**
 * Returns true if a point is within rectangle
 *
 * @param point
 * @param rectangle
 * @return {boolean}
 */
function isInRectangle(point, rectangle) {
    if (point.x >= rectangle.x && point.x <= rectangle.x + rectangle.width && point.y > rectangle.y && point.y < rectangle.y + rectangle.height) {
        return true;
    }
    return false;
}
function getLineIntersection(pointA1, pointA2, pointB1, pointB2) {
    var x = ((pointA1.x * pointA2.y - pointA2.x * pointA1.y) * (pointB1.x - pointB2.x) - (pointA1.x - pointA2.x) * (pointB1.x * pointB2.y - pointB1.y * pointB2.x)) / ((pointA1.x - pointA2.x) * (pointB1.y - pointB2.y) - (pointA1.y - pointA2.y) * (pointB1.x - pointB2.x));
    var y = ((pointA1.x * pointA2.y - pointA2.x * pointA1.y) * (pointB1.y - pointB2.y) - (pointA1.y - pointA2.y) * (pointB1.x * pointB2.y - pointB1.y * pointB2.x)) / ((pointA1.x - pointA2.x) * (pointB1.y - pointB2.y) - (pointA1.y - pointA2.y) * (pointB1.x - pointB2.x));
    return { x: x, y: y };
}
//# sourceMappingURL=Math.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Object.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/Object.js ***!
  \*************************************************************************/
/*! exports provided: entries, keys, keysOrdered, hasKey, getKey, eachContinue, each, eachOrdered, copy, merge, clone, copyProperties, softCopyProperties, forceCopyProperties, copyAllProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keysOrdered", function() { return keysOrdered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasKey", function() { return hasKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKey", function() { return getKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachContinue", function() { return eachContinue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachOrdered", function() { return eachOrdered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyProperties", function() { return copyProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softCopyProperties", function() { return softCopyProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceCopyProperties", function() { return forceCopyProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAllProperties", function() { return copyAllProperties; });
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Array.js");
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Type */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */


/**
 * ============================================================================
 * UTILITY FUNCTIONS
 * ============================================================================
 * @hidden
 */
/**
 * Returns an iterator for all entries in object.
 *
 * Can be used to safely iterate through all properties of the object.
 *
 * @param object  Source object
 * @returns Iterator
 */
function entries(object) {
    return function (push) {
        // TODO make this more efficient ?
        for (var key in object) {
            if (hasKey(object, key)) {
                if (!push([key, object[key]])) {
                    break;
                }
            }
        }
    };
}
/**
 * Returns an array of object's property names.
 *
 * @param object  Source object
 * @returns Object property names
 */
function keys(object) {
    var output = [];
    for (var key in object) {
        if (hasKey(object, key)) {
            output.push(key);
        }
    }
    return output;
}
/**
 * Returns an array of object's property names ordered using specific ordering
 * function.
 *
 * @param object  Source object
 * @param order   Ordering function
 * @returns Object property names
 */
function keysOrdered(object, order) {
    return keys(object).sort(order);
}
/**
 * Checks if `object` has a specific `key`.
 *
 * @param object  Source object
 * @param key     Property name
 * @returns Has key?
 */
function hasKey(object, key) {
    return {}.hasOwnProperty.call(object, key);
}
/**
 * Returns value of the specific `key`.
 *
 * @param object  Source object
 * @param key     Property name
 * @returns Key value
 */
function getKey(object, key) {
    return object[key];
}
/**
 * Iterates through all properties of the object calling `fn` for each of them.
 *
 * If return value of the function evaluates to `false` further iteration is
 * cancelled.
 *
 * @param object  Source object
 * @param fn      Callback function
 */
function eachContinue(object, fn) {
    for (var key in object) {
        if (hasKey(object, key)) {
            if (!fn(key, object[key])) {
                break;
            }
        }
    }
}
/**
 * Iterates through all properties of the object calling `fn` for each of them.
 *
 * @param object  Source object
 * @param fn      Callback function
 */
function each(object, fn) {
    eachContinue(object, function (key, value) {
        fn(key, value);
        return true;
    });
}
/**
 * Orders object properties using custom `ord` function and iterates through
 * them calling `fn` for each of them.
 *
 * @param object  Source object
 * @param fn      Callback function
 * @param order   Ordering function
 */
function eachOrdered(object, fn, ord) {
    _Array__WEBPACK_IMPORTED_MODULE_0__["each"](keysOrdered(object, ord), function (key) {
        fn(key, object[key]);
    });
}
/**
 * Returns a copy of the object.
 *
 * @param object  Source object
 * @returns Copy of the object
 */
function copy(object) {
    return Object.assign({}, object);
}
/**
 * Merges two objects and returns a new object that contains properties from
 * both source objects.
 *
 * @param object1  Source object #1
 * @param object2  Source object #2
 * @returns Combined object
 */
function merge(object1, object2) {
    return Object.assign({}, object1, object2);
}
/**
 * Returns object clone.
 *
 * @param object  Source object
 * @returns       Clone
 */
function clone(object) {
    return JSON.parse(JSON.stringify(object));
}
/**
 * Copies a list of properties from one object to another.
 *
 * Will not copy empty properties.
 *
 * @param source  Source object
 * @param target    Target object
 * @param keys  List of keys to copy
 */
function copyProperties(source, target, keys) {
    _Array__WEBPACK_IMPORTED_MODULE_0__["each"](keys, function (key) {
        if (_Type__WEBPACK_IMPORTED_MODULE_1__["hasValue"](source[key])) {
            target[key] = source[key];
        }
    });
}
/**
 * Copies a list of properties from one object to another only if target does't have value of the property set.
 *
 * Will not copy empty properties.
 *
 * @param source  Source object
 * @param target    Target object
 * @param keys  List of keys to copy
 */
function softCopyProperties(source, target, keys) {
    _Array__WEBPACK_IMPORTED_MODULE_0__["each"](keys, function (key) {
        if (_Type__WEBPACK_IMPORTED_MODULE_1__["hasValue"](source[key]) && !(_Type__WEBPACK_IMPORTED_MODULE_1__["hasValue"](target[key]))) {
            target[key] = source[key];
        }
    });
}
/**
 * Copies a list of properties from one object to another.
 *
 * Will copy empty properties.
 *
 * @param source  Source object
 * @param target    Target object
 * @param keys  List of keys to copy
 */
function forceCopyProperties(source, target, keys) {
    _Array__WEBPACK_IMPORTED_MODULE_0__["each"](keys, function (key) {
        target[key] = source[key];
    });
}
/**
 * Copies all properties from one object to another.
 *
 * @param from  Source object
 * @param to    Target object
 */
function copyAllProperties(from, to) {
    copyProperties(from, to, keys(from));
}
//# sourceMappingURL=Object.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Percent.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/Percent.js ***!
  \**************************************************************************/
/*! exports provided: Percent, percent, isPercent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Percent", function() { return Percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPercent", function() { return isPercent; });
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Represents a relative value (percent).
 *
 * The Percent object, can be instantiated using two ways:
 *
 * * Via `new Percent(X)`.
 * * Via `am4core.percent(X)`.
 *
 * `Percent` type objects can be used in a number of dual-measuring or
 * positioning properties, like `width`. E.g.:
 *
 * ```TypeScript
 * chart.paddingRight = new Percent(10);
 * // or
 * chart.paddingRight = am4core.percent(10);
 * ```
 * ```JavaScript
 * chart.paddingRight = new Percent(10);
 * // or
 * chart.paddingRight = am4core.percent(10);
 * ```
 * ```JSON
 * {
 *   // ...
 *   "paddingRight": "10%"
 * }
 * ```
 */
var Percent = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param percent  Percent value
     */
    function Percent(percent) {
        this._value = percent;
    }
    Object.defineProperty(Percent.prototype, "value", {
        /**
         * Relative value.
         *
         * E.g. 100% is 1, 50% is 0.5, etc.
         *
         * This is useful to apply transformations to other values. E.g.:
         *
         * ```TypeScript
         * let value = 256;
         * let percent = new am4core.Percent(50);
         * console.log(value * percent.value); // outputs 128
         * ```
         * ```JavaScript
         * var value = 256;
         * var percent = new am4core.Percent(50);
         * console.log(value * percent.value); // outputs 128
         * ```
         *
         * Alternatively, you can use `am4core.percent()` helper function:
         *
         * ```TypeScript
         * let value = 256;
         * let percent = am4core.percent(50);
         * console.log(value * percent.value); // outputs 128
         * ```
         * ```JavaScript
         * var value = 256;
         * var percent = am4core.percent(50);
         * console.log(value * percent.value); // outputs 128
         * ```
         *
         * @readonly
         * @return Relative value
         */
        get: function () {
            return this._value / 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Percent.prototype, "percent", {
        /**
         * Value in percent.
         *
         * @return Percent
         */
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Percent.prototype.toString = function () {
        return "" + this._value + "%";
    };
    return Percent;
}());

/**
 * Converts numeric percent value to a proper [[Percent]] object.
 *
 * ```TypeScript
 * pieSeries.radius = am4core.percent(80);
 * ```
 * ```JavaScript
 * pieSeries.radius = am4core.percent(80);
 * ```
 *
 * @param value  Percent
 * @return Percent object
 */
function percent(value) {
    return new Percent(value);
}
/**
 * Checks if value is a [[Percent]] object.
 *
 * @ignore Exclude from docs
 * @param value  Input value
 * @return Is percent?
 */
function isPercent(value) {
    return value instanceof Percent;
}
//# sourceMappingURL=Percent.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/String.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/String.js ***!
  \*************************************************************************/
/*! exports provided: order, repeat, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order", function() { return order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/**
 * ============================================================================
 * COMPARING FUNCTIONS
 * ============================================================================
 * @hidden
 */
/**
 * Comparing function used for ordering.
 *
 * @ignore Exclude from docs
 * @todo Use localeCompare
 * @param a  Item 1
 * @param b  Item 2
 * @return Result
 */
function order(a, b) {
    if (a === b) {
        return 0;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 1;
    }
}
/**
 * ============================================================================
 * OTHER FUNCTIONS
 * ============================================================================
 * @hidden
 */
/**
 * Repeats a `string` number of times as set in `amount`.
 *
 * @ignore Exclude from docs
 * @todo Make this faster
 * @param string  Source string
 * @param amount  Number of times to repeat string
 * @return New string
 */
function repeat(string, amount) {
    return new Array(amount + 1).join(string);
}
/**
 * Generates a random string `characters` length.
 *
 * @param chars  Number of characters
 * @return Random string
 */
function random(chars) {
    var res = "";
    var choice = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < chars; i++) {
        res += choice.charAt(Math.floor(Math.random() * choice.length));
    }
    return res;
}
//# sourceMappingURL=String.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js ***!
  \***********************************************************************/
/*! exports provided: isNaN, getType, getDefault, checkString, checkBoolean, checkNumber, checkObject, checkArray, checkDate, castString, castNumber, toBoolean, toNumber, toText, toNumberOrPercent, hasValue, getValue, getValueDefault, isDate, isString, isNumber, isObject, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefault", function() { return getDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkString", function() { return checkString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBoolean", function() { return checkBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNumber", function() { return checkNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkObject", function() { return checkObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkArray", function() { return checkArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDate", function() { return checkDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castString", function() { return castString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castNumber", function() { return castNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toText", function() { return toText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumberOrPercent", function() { return toNumberOrPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueDefault", function() { return getValueDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony import */ var _Percent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Percent */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Percent.js");
/**
 * A collection of utility functions for various type checks and conversion
 * @todo Review unused functions for removal
 * @hidden
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */

/**
 * ============================================================================
 * TYPE CHECK
 * ============================================================================
 * @hidden
 */
/**
 * Returns `true` if value is not a number (NaN).
 *
 * @param value Input value
 * @return Is NaN?
 * @deprecated Is not used anywhere. JS built-in isNaN is used everywhere. Maybe we don't need this, or if we do, then we should use it everywhere
 */
function isNaN(value) {
    return Number(value) !== value;
}
/**
 * Returns a type of the value.
 *
 * @param value  Input value
 * @return Type of the value
 */
function getType(value) {
    return ({}).toString.call(value);
}
/**
 * Returns a default value if the passed in value is empty.
 *
 * @param value     Input value
 * @param optional  Default value
 * @return Value or default value whichever is available
 * @deprecated Not used anywhere
 */
function getDefault(value, optional) {
    return value || optional;
}
/**
 * Checks if the passed in value is a string.
 *
 * @param value  Value
 * @return Is string?
 * @throws {Error}
 * @deprecated Not used anywhere
 */
function checkString(value) {
    if (typeof value === "string") {
        return true;
    }
    else {
        throw new Error("Expected a string but got " + getType(value));
    }
}
/**
 * Checks if the passed in value is a boolean.
 *
 * @param value  Value
 * @return Is boolean?
 * @throws {Error}
 * @deprecated Not used anywhere
 */
function checkBoolean(value) {
    if (typeof value === "boolean") {
        return true;
    }
    else {
        throw new Error("Expected a boolean but got " + getType(value));
    }
}
/**
 * Checks if the passed in value is a number.
 *
 * @param value  Value
 * @return Is number?
 * @throws {Error}
 */
function checkNumber(value) {
    if (typeof value === "number") {
        if (isNaN(value)) {
            throw new Error("Expected a number but got NaN");
        }
    }
    else {
        throw new Error("Expected a number but got " + getType(value));
    }
    return true;
}
/**
 * Checks if the passed in value is an object.
 *
 * @param value  Value
 * @return Is object?
 * @throws {Error}
 * @todo Is the input type correct?
 * @deprecated Not used anywhere
 */
function checkObject(value) {
    var t = getType(value);
    if (t === "[object Object]") {
        return true;
    }
    else {
        throw new Error("Expected an object but got " + t);
    }
}
/**
 * Checks if the passed in value is an array.
 *
 * @param value  Value
 * @return Is array?
 * @throws {Error}
 * @deprecated Not used anywhere
 */
function checkArray(value) {
    if (Array.isArray(value)) {
        return true;
    }
    else {
        throw new Error("Expected an array but got " + getType(value));
    }
}
/**
 * Checks if the passed in value is a Date object.
 *
 * @param value  Value
 * @return Is Date object?
 * @throws {Error}
 * @deprecated Not used anywhere
 */
function checkDate(value) {
    var t = getType(value);
    if (t === "[object Date]") {
        return true;
    }
    else {
        throw new Error("Expected a date but got " + t);
    }
}
/**
 * ============================================================================
 * TYPE CASTING
 * ============================================================================
 * @hidden
 */
/**
 * Casts string or a number into string.
 *
 * @param value  Input
 * @return String value
 * @deprecated Not used anywhere
 */
function castString(value) {
    if (typeof value === "string") {
        return value;
    }
    else if (typeof value === "number") {
        return "" + value;
    }
    else {
        throw new Error("Expected a string or number but got " + getType(value));
    }
}
/**
 * Casts string or a number into a number.
 *
 * @param value   Input value
 * @return Number  value
 * @throws {Error}
 */
function castNumber(value) {
    if (typeof value === "string") {
        var number = +value;
        if (isNaN(number)) {
            throw new Error("Cannot cast string " + JSON.stringify(value) + " to a number");
        }
        else {
            return number;
        }
    }
    else if (typeof value === "number") {
        if (isNaN(value)) {
            throw new Error("Expected a number but got NaN");
        }
        else {
            return value;
        }
    }
    else {
        var t = getType(value);
        if (t === "[object Date]") {
            return value.getTime();
        }
        else {
            throw new Error("Expected a string, number, or date but got " + t);
        }
    }
}
/**
 * Casts number, string or Date into a Date object.
 *
 * @param value  Input value
 * @return Date object
 * @deprecated Not used anywhere
 * @throws {Error}
 * @hidden
 * @deprecated
 */
/*export function castDate(value: string | number | Date, formatter?: DateFormatter): Date {
    if (typeof value === "string") {
        if (formatter) {
            return formatter.parse(value);
        }
        return new Date(value);

    } else if (typeof value === "number") {
        return new Date(value);

    } else {
        const t = getType(value);

        if (t === "[object Date]") {
            return value;

        } else {
            throw new Error("Expected a string, number, or date but got " + t);
        }
    }
}*/
/**
 * ============================================================================
 * QUICK CONVERSION
 * ============================================================================
 * @hidden
 */
/**
 * Converts any value into `boolean`.
 *
 * @param value  Source value
 * @return `true` or `false`
 */
function toBoolean(value) {
    return value ? true : false;
}
/**
 * Converts any value into a `number`.
 *
 * @param value  Source value
 * @return Number representation of value
 */
function toNumber(value) {
    if (hasValue(value) && !isNumber(value)) {
        var converted = Number(value);
        if (isNaN(converted) && isString(value) && value != "") {
            return toNumber(value.replace(/[^0-9.\-]+/g, ''));
        }
        return converted;
    }
    return value;
}
/**
 * Converts any value into a string (text).
 *
 * @param value  Source value
 * @return String representation of the input
 */
function toText(value) {
    if (hasValue(value) && !isString(value)) {
        if (isNumber(value)) {
            return castString(value);
        }
        else if (isObject(value)) {
            return value.toString();
        }
    }
    return value;
}
/**
 * Converts any value to a number or [[Percent]].
 *
 * If the parameter is a string and contains "%", it will
 * convert it into a [[Percent]].
 *
 * Otherwise, it will convert into a number.
 *
 * @param value  Number or percent
 * @return Percent object
 */
function toNumberOrPercent(value) {
    if (!hasValue(value) || isNumber(value) || Object(_Percent__WEBPACK_IMPORTED_MODULE_0__["isPercent"])(value)) {
        return value;
    }
    if (isString(value) && value.indexOf("%") != -1) {
        return Object(_Percent__WEBPACK_IMPORTED_MODULE_0__["percent"])(toNumber(value));
    }
    return toNumber(value);
}
/**
 * Checks if a variable has a value.
 *
 * @param a  Input value
 * @returns                        Has value?
 */
function hasValue(a) {
    return a != null;
}
/**
 * Returns a value or throws an {Error} exception if the variable has not
 * value.
 *
 * @param a  Input value
 * @returns                        Value
 */
function getValue(a) {
    if (hasValue(a)) {
        return a;
    }
    else {
        throw new Error("Value doesn't exist");
    }
}
/**
 * Returns a value, or returns the default value if it doesn't have a value.
 *
 * @param a  Input value
 * @returns                        Value
 */
function getValueDefault(a, defaultValue) {
    if (hasValue(a)) {
        return a;
    }
    else {
        return defaultValue;
    }
}
/**
 * ============================================================================
 * TYPE CHECK
 * ============================================================================
 * @hidden
 */
/**
 * Checks if parameter is `Date`.
 *
 * @param value  Input value
 * @return Is Date?
 */
function isDate(value) {
    return getType(value) === "[object Date]";
}
/**
 * Checks if parameter is `string`.
 *
 * @param value  Input value
 * @return Is string?
 */
function isString(value) {
    return typeof value === "string";
}
/**
 * Checks if parameter is `number`.
 *
 * @param value  Input value
 * @return Is number?
 */
function isNumber(value) {
    return typeof value === "number" && Number(value) == value;
}
/**
 * Checks if parameter is `object`.
 *
 * @param value  Input value
 * @return Is object?
 */
function isObject(value) {
    return typeof value === "object" && value != null;
}
/**
 * Checks if parameter is `Array`.
 *
 * @param value  Input value
 * @return Is Array?
 */
function isArray(value) {
    return Array.isArray(value);
}
//# sourceMappingURL=Type.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/themes/animated.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/themes/animated.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");

var theme = function (object) {
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "SpriteState")) {
        object.transitionDuration = 400;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Component")) {
        object.rangeChangeDuration = 500;
        object.interpolationDuration = 500;
        object.sequencedInterpolation = false;
        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "SankeyDiagram")) {
            object.sequencedInterpolation = true;
        }
        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "FunnelSeries")) {
            object.sequencedInterpolation = true;
        }
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Chart")) {
        object.defaultState.transitionDuration = 2000;
        object.hiddenState.transitionDuration = 1000;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Tooltip")) {
        object.animationDuration = 400;
        object.defaultState.transitionDuration = 400;
        object.hiddenState.transitionDuration = 400;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Scrollbar")) {
        object.animationDuration = 500;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Series")) {
        object.defaultState.transitionDuration = 1000;
        object.hiddenState.transitionDuration = 700;
        object.hiddenState.properties.opacity = 1;
        object.showOnInit = true;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "MapSeries")) {
        object.hiddenState.properties.opacity = 0;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "PercentSeries")) {
        object.hiddenState.properties.opacity = 0;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "FunnelSlice")) {
        object.defaultState.transitionDuration = 800;
        object.hiddenState.transitionDuration = 1000;
        object.hiddenState.properties.opacity = 1;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Slice")) {
        object.defaultState.transitionDuration = 700;
        object.hiddenState.transitionDuration = 1000;
        object.hiddenState.properties.opacity = 1;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Preloader")) {
        object.hiddenState.transitionDuration = 2000;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Column")) {
        object.defaultState.transitionDuration = 700;
        object.hiddenState.transitionDuration = 1000;
        object.hiddenState.properties.opacity = 1;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Column3D")) {
        object.hiddenState.properties.opacity = 0;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);
//# sourceMappingURL=animated.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/themes/animated.js":
/*!*************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/themes/animated.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/themes/animated */ "./node_modules/@amcharts/amcharts4/.internal/themes/animated.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=animated.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./resources/js/company.js":
/*!*********************************!*\
  !*** ./resources/js/company.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
// import am4core from "@amcharts/amcharts4/core";
// import am4charts from "@amcharts/amcharts4/charts";

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
      am4core.useTheme(_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_0__["default"]); // Create chart

      var chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.padding(0, 15, 0, 15);
      chart.data = data; // #configField
      // {
      //   "value": 100,
      //   "config": {
      //     "fill": "#F00"
      //   }

      console.log(chart.colors._list);
      console.log(am4core); // }

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
  $('.datepicker').datepicker();
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