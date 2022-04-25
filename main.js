/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nsvg > * {\n    pointer-events: none;\n}\n\n.feather {\n    display: none;\n}\n\n\n\nbody {\n    display: grid;\n    grid-template-rows: 15vh 85vh 10vh;\n}\n\np {\n    font-size: 1.25rem;\n    pointer-events: none;\n}\n\nbutton {\n    padding: .75rem 1.5rem;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\nheader {\n    border: 1px solid blue;\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain {\n    border: 1px solid green;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr;\n}\n\n#project-wrapper {\n    border: 1px solid orange;\n    padding: 1.5rem;\n}\n\n.project-card, .new-project-btn, .new-project-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid blue;\n    border-radius: 6px;\n    padding: .75rem 1rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.new-project-form {\n    justify-content: flex-start;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\ninput {\n    padding: .3rem .5rem;\n    border: 1px solid lightgray;\n    font-size: 1rem;\n}\n\ninput[type=\"radio\"], input[type=\"date\"] {\n    cursor: pointer;\n}\n\nsvg {\n    stroke: black;\n    fill: none;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\nsvg:hover {\n    stroke: green;\n}\n\n.plus-svg, .save-svg {\n    margin-left: auto;\n}\n\n.minus-svg {\n    margin-left: 1rem;\n}\n\n.minus-svg:hover {\n    stroke: red;\n}\n\n.delete-svg:hover {\n    stroke: red;\n}\n\n.star-fill {\n    fill: yellow;\n}\n\n#task-wrapper {\n    padding: 1.5rem 3rem;\n    position: relative;\n}\n\n.task-card, .new-task-form {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    border: 1px solid blue;\n    border-radius: 6px;\n    padding: .75rem 1.5rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n#new-task-card {\n    width: 20%;\n    margin: 0 auto 1rem;\n}\n\n.new-task-form {\n    flex-direction: column;\n    cursor: default;\n    width: 40%;\n    padding: 1.5rem 1.5rem;\n    margin: 0 auto 1rem;\n    position: absolute;\n    z-index: 2;\n    top: 21%;\n    left: 30%;\n    background-color: white;\n}\n\n.task-form-div {\n    display: flex;\n    align-items: center;\n    width: 70%;\n}\n\n.task-form-div:nth-child(3) {\n    justify-content: space-between;\n}\n\n.task-date-input, .task-name-input {\n    margin-left: auto;\n}\n\n.due-date-text {\n    margin-left: auto;\n}\n\n.plus-div {\n    margin-left: auto;\n}\n\nfooter {\n    border: 1px solid purple;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hide {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;;;AAIA;IACI,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,yFAAyF;AAC7F;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,yFAAyF;AAC7F;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,0FAA0F;AAC9F;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,UAAU;IACV,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nsvg > * {\n    pointer-events: none;\n}\n\n.feather {\n    display: none;\n}\n\n\n\nbody {\n    display: grid;\n    grid-template-rows: 15vh 85vh 10vh;\n}\n\np {\n    font-size: 1.25rem;\n    pointer-events: none;\n}\n\nbutton {\n    padding: .75rem 1.5rem;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\nheader {\n    border: 1px solid blue;\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain {\n    border: 1px solid green;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr;\n}\n\n#project-wrapper {\n    border: 1px solid orange;\n    padding: 1.5rem;\n}\n\n.project-card, .new-project-btn, .new-project-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid blue;\n    border-radius: 6px;\n    padding: .75rem 1rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.new-project-form {\n    justify-content: flex-start;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\ninput {\n    padding: .3rem .5rem;\n    border: 1px solid lightgray;\n    font-size: 1rem;\n}\n\ninput[type=\"radio\"], input[type=\"date\"] {\n    cursor: pointer;\n}\n\nsvg {\n    stroke: black;\n    fill: none;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\nsvg:hover {\n    stroke: green;\n}\n\n.plus-svg, .save-svg {\n    margin-left: auto;\n}\n\n.minus-svg {\n    margin-left: 1rem;\n}\n\n.minus-svg:hover {\n    stroke: red;\n}\n\n.delete-svg:hover {\n    stroke: red;\n}\n\n.star-fill {\n    fill: yellow;\n}\n\n#task-wrapper {\n    padding: 1.5rem 3rem;\n    position: relative;\n}\n\n.task-card, .new-task-form {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    border: 1px solid blue;\n    border-radius: 6px;\n    padding: .75rem 1.5rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n#new-task-card {\n    width: 20%;\n    margin: 0 auto 1rem;\n}\n\n.new-task-form {\n    flex-direction: column;\n    cursor: default;\n    width: 40%;\n    padding: 1.5rem 1.5rem;\n    margin: 0 auto 1rem;\n    position: absolute;\n    z-index: 2;\n    top: 21%;\n    left: 30%;\n    background-color: white;\n}\n\n.task-form-div {\n    display: flex;\n    align-items: center;\n    width: 70%;\n}\n\n.task-form-div:nth-child(3) {\n    justify-content: space-between;\n}\n\n.task-date-input, .task-name-input {\n    margin-left: auto;\n}\n\n.due-date-text {\n    margin-left: auto;\n}\n\n.plus-div {\n    margin-left: auto;\n}\n\nfooter {\n    border: 1px solid purple;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hide {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainRender": () => (/* binding */ mainRender),
/* harmony export */   "toggleDisplayNone": () => (/* binding */ toggleDisplayNone)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _trash_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash-2.svg */ "./src/trash-2.svg");
/* harmony import */ var _plus_square_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus-square.svg */ "./src/plus-square.svg");
/* harmony import */ var _check_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check.svg */ "./src/check.svg");
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./star.svg */ "./src/star.svg");
/* harmony import */ var _calendar_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.svg */ "./src/calendar.svg");
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit.svg */ "./src/edit.svg");
/* harmony import */ var _save_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./save.svg */ "./src/save.svg");
/* harmony import */ var _minus_square_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./minus-square.svg */ "./src/minus-square.svg");
// DOM interaction and generation module











// global variables
let main = document.querySelector('main');

// render functions
// default render function 
function mainRender() {
    main.innerHTML = '';

    let projectWrapper = document.createElement('div');
    projectWrapper.setAttribute('id', 'project-wrapper');

    let newProjectDiv = document.createElement('div');
    newProjectDiv.setAttribute('class', 'new-project-btn');
    let newProjectPara = document.createElement('p');
    newProjectPara.innerText = 'add project';

    let plusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    plusSvg.classList.add('plus-svg');
    plusSvg.innerHTML = `<use href="${_plus_square_svg__WEBPACK_IMPORTED_MODULE_3__}#plus-icon"></use>`;
                            
    newProjectDiv.appendChild(newProjectPara);
    newProjectDiv.appendChild(plusSvg);                        

    let newProjectForm = document.createElement('div');
    newProjectForm.setAttribute('class', 'new-project-form');
    newProjectForm.classList.add('hide');
    let projectNameLabel = document.createElement('label');
    projectNameLabel.innerText = 'name';
    let newProjectInput = document.createElement('input');
    newProjectInput.classList.add('new-project-input');
    let saveSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    saveSvg.classList.add('save-svg');
    saveSvg.innerHTML = `<use href="${_save_svg__WEBPACK_IMPORTED_MODULE_8__}#save-icon"></use>`;
    let minusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    minusSvg.classList.add('minus-svg');
    minusSvg.innerHTML = `<use href="${_minus_square_svg__WEBPACK_IMPORTED_MODULE_9__}#minus-icon"></use>`;

    newProjectForm.appendChild(projectNameLabel);
    newProjectForm.appendChild(newProjectInput);
    newProjectForm.appendChild(saveSvg);
    newProjectForm.appendChild(minusSvg);

    projectWrapper.appendChild(newProjectDiv);
    projectWrapper.appendChild(newProjectForm);

    _logic__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
        let projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        let projectName = document.createElement('p');
        projectName.innerText = project.name;

        let deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        deleteSvg.classList.add('delete-svg');
        deleteSvg.innerHTML = `<use href="${_trash_2_svg__WEBPACK_IMPORTED_MODULE_2__}#trash-icon"></use>`;

        projectCard.appendChild(projectName);
        projectCard.appendChild(deleteSvg);
        projectWrapper.appendChild(projectCard);
    })


    // separate into it's own function
    let taskWrapper = document.createElement('div');
    taskWrapper.setAttribute('id', 'task-wrapper');

    // add a new task button/div

    let newTaskDiv = document.createElement('div');
    newTaskDiv.setAttribute('class', 'task-card');
    newTaskDiv.setAttribute('id', 'new-task-card');
    let newTaskPara = document.createElement('p');
    newTaskPara.innerText = 'add task';
    let taskPlusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    taskPlusSvg.classList.add('plus-svg');
    taskPlusSvg.innerHTML = `<use href="${_plus_square_svg__WEBPACK_IMPORTED_MODULE_3__}#plus-icon"></use>`;

    newTaskDiv.appendChild(newTaskPara);
    newTaskDiv.appendChild(taskPlusSvg);

    let newTaskForm = document.createElement('div');
    newTaskForm.classList.add('new-task-form');

    let taskNameDiv = document.createElement('div');
    taskNameDiv.classList.add('task-form-div');
    let taskNameLabel = document.createElement('label');
    taskNameLabel.innerText = 'name';
    let taskNameInput = document.createElement('input');
    taskNameInput.classList.add('task-name-input');
    taskNameInput.setAttribute('type', 'text');

    taskNameDiv.appendChild(taskNameLabel);
    taskNameDiv.appendChild(taskNameInput);

    let taskDateDiv = document.createElement('div');
    taskDateDiv.classList.add('task-form-div');
    let taskDateLabel = document.createElement('label');
    taskDateLabel.innerText = 'date';
    let taskDateInput = document.createElement('input');
    taskDateInput.classList.add('task-date-input');
    taskDateInput.setAttribute('type', 'date');

    taskDateDiv.appendChild(taskDateLabel);
    taskDateDiv.appendChild(taskDateInput);

    let taskPriorityDiv = document.createElement('div');
    taskPriorityDiv.classList.add('task-form-div');
    let lowPriorityLabel = document.createElement('label');
    lowPriorityLabel.innerText = 'low priority';
    lowPriorityLabel.setAttribute('for', 'low');
    let lowPriorityInput = document.createElement('input');
    lowPriorityInput.setAttribute('type', 'radio');
    lowPriorityInput.setAttribute('id', 'low');
    lowPriorityInput.setAttribute('name', 'priority');
    let highPriorityLabel = document.createElement('label');
    highPriorityLabel.innerText = 'high priority';
    highPriorityLabel.setAttribute('for', 'low');
    let highPriorityInput = document.createElement('input');
    highPriorityInput.setAttribute('type', 'radio');
    highPriorityInput.setAttribute('id', 'high');
    highPriorityInput.setAttribute('name', 'priority');

    taskPriorityDiv.appendChild(lowPriorityLabel);
    taskPriorityDiv.appendChild(lowPriorityInput);
    taskPriorityDiv.appendChild(highPriorityLabel);
    taskPriorityDiv.appendChild(highPriorityInput);

    let newTaskConfirm = document.createElement('button');
    newTaskConfirm.innerText = 'Confirm';
    newTaskConfirm.classList.add('new-task-confirm');


    newTaskForm.appendChild(taskNameDiv);
    newTaskForm.appendChild(taskDateDiv);
    newTaskForm.appendChild(taskPriorityDiv);
    newTaskForm.appendChild(newTaskConfirm);

    taskWrapper.appendChild(newTaskDiv);
    taskWrapper.appendChild(newTaskForm);

    if (!(_logic__WEBPACK_IMPORTED_MODULE_0__.projects[_logic__WEBPACK_IMPORTED_MODULE_0__.findIndexOfProject(_index__WEBPACK_IMPORTED_MODULE_1__.getActiveProject())].tasks.length <= 0)) {
        _logic__WEBPACK_IMPORTED_MODULE_0__.projects[_logic__WEBPACK_IMPORTED_MODULE_0__.findIndexOfProject(_index__WEBPACK_IMPORTED_MODULE_1__.getActiveProject())].tasks.forEach((task) => {

            let taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            let taskName = document.createElement('p');
            taskName.innerText = task.name;
    
            let checkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            checkSvg.classList.add('check-svg');
            checkSvg.innerHTML = `<use href="${_check_svg__WEBPACK_IMPORTED_MODULE_4__}#check-icon"></use>`;
    
            let dueDateText = document.createElement('p');
            dueDateText.classList.add('due-date-text');
            dueDateText.innerText = task.dueDate;
    
            let calendarSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            calendarSvg.classList.add('calendar-svg');
            calendarSvg.innerHTML = `<use href="${_calendar_svg__WEBPACK_IMPORTED_MODULE_6__}#calendar-icon"></use>`;
    
            let starSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            starSvg.classList.add('star-svg');
            starSvg.innerHTML = `<use href="${_star_svg__WEBPACK_IMPORTED_MODULE_5__}#star-icon"></use>`;
    
            if (task.priority === 'high') {
                starSvg.classList.add('star-fill'); 
            }
    
            let editSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            editSvg.classList.add('edit-svg');
            editSvg.innerHTML = `<use href="${_edit_svg__WEBPACK_IMPORTED_MODULE_7__}#edit-icon"></use>`;
            
            taskCard.appendChild(checkSvg);
            taskCard.appendChild(taskName);
            taskCard.appendChild(dueDateText);
            taskCard.appendChild(calendarSvg);
            taskCard.appendChild(starSvg);
            taskCard.appendChild(editSvg);
            taskWrapper.appendChild(taskCard);
        })
    } 
        
    main.appendChild(projectWrapper);
    main.appendChild(taskWrapper);
}

function toggleDisplayNone(element) {
    element.classList.toggle('hide');
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActiveProject": () => (/* binding */ getActiveProject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// To Do List
// 1) Form to add new task
//  -- hide the add task button div and reveal the add new task form on click
// 2) edit the appropriate task fields for each icon
// 3) remove a task when clicking on the check icon
// 4) update and improve styling features






let _activeProject = 'primary';

function getActiveProject() {
    return _activeProject;
}

// Default objects that are created and pushed to the projects array
const project1 = _logic__WEBPACK_IMPORTED_MODULE_1__.newProject('primary');
_logic__WEBPACK_IMPORTED_MODULE_1__.addNewProject(project1);
const task1 = _logic__WEBPACK_IMPORTED_MODULE_1__.newTask('breakfast', 'high', 'eat more oatmeal and whole fruit', '4/20/22');
_logic__WEBPACK_IMPORTED_MODULE_1__.addNewTask(task1);

const project2 = _logic__WEBPACK_IMPORTED_MODULE_1__.newProject('groceries');
_logic__WEBPACK_IMPORTED_MODULE_1__.addNewProject(project2);

_dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();

window.addEventListener('click', function (e) {
    let targetParent = e.target.parentElement;

    console.log(e.target);
    // console.log(targetParent);

    // when the add project plus button is selected swap out the add project div with the add project form
    if (targetParent.classList.contains('new-project-btn')) {
        let newProjectForm = document.querySelector('.new-project-form');
        _dom__WEBPACK_IMPORTED_MODULE_2__.toggleDisplayNone(targetParent);
        _dom__WEBPACK_IMPORTED_MODULE_2__.toggleDisplayNone(newProjectForm);
    }

    // save and add the project to the array and render
    if (targetParent.classList.contains('new-project-form') && e.target.classList.contains('save-svg')) {
        let inputValue = document.querySelector('.new-project-input');

        // add logic that you cannot name a project 'primary' - it is the default project name given
        if (inputValue.value === 'primary') {
            alert(`Sorry you cannot make a duplicate primary project`);
            inputValue.value = '';
            return;
        }

        if (inputValue.value === '') {
            alert('Please name your new project');
        }

        if (inputValue.value !== '') {
            let newProject = _logic__WEBPACK_IMPORTED_MODULE_1__.newProject(inputValue.value);
            _logic__WEBPACK_IMPORTED_MODULE_1__.addNewProject(newProject);
            let newProjectBtn = document.querySelector('.new-project-btn');
            _dom__WEBPACK_IMPORTED_MODULE_2__.toggleDisplayNone(targetParent);
            _dom__WEBPACK_IMPORTED_MODULE_2__.toggleDisplayNone(newProjectBtn);
            _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();
            inputValue.value = '';
        }
    }

    // cancel the add new project form display
    if (targetParent.classList.contains('new-project-form') && e.target.classList.contains('minus-svg')) {
        let inputValue = document.querySelector('.new-project-input');
        console.log('toggle the add project form and add project button');

        _dom__WEBPACK_IMPORTED_MODULE_2__.toggleDisplayNone(targetParent);
        _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();
        inputValue.value = '';
    }

    // remove project from array and rendering
    if (e.target.classList.contains('delete-svg')) {
        let answer = confirm('Delete item?');
        let prevSibling = e.target.previousElementSibling;
        console.log(prevSibling.innerText);
        if (answer === false) {
        } else {
            if (prevSibling.innerText === 'primary') {
                alert(`Sorry you cannot delete the default primary project`);
                return;
            }
            _logic__WEBPACK_IMPORTED_MODULE_1__.removeProject(prevSibling.innerText);
            _activeProject = 'primary';
            _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();
        }
    }

    // update _activeProject and display tasks 
    if (e.target.classList.contains('project-card')) {
        _activeProject = e.target.firstChild.innerText;
        _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();
    }
})




/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "findIndexOfProject": () => (/* binding */ findIndexOfProject),
/* harmony export */   "findIndexOfTask": () => (/* binding */ findIndexOfTask),
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
// importing activeProject variable for testing purposes


let projects = [];

// factory functions
const updateProject = {
    setName(newName) {
        return this.name = newName;
    }
}

const newProject = (name) => {
    let project = Object.create(updateProject);

    project.tasks = [];
    project.name = name;

    return project;
}

const updateTask = {
    setName(newName) {
        return this.name = newName;
    },
    setPriority(newPriority) {
        return this.priority = newPriority;
    },
    setNotes(newNotes) {
        return this.notes = newNotes;
    },
    setDueDate(newDueDate) {
        return this.dueDate = newDueDate;
    }
}

const newTask = (name, priority, notes, dueDate) => {
    let task = Object.create(updateTask);
    task.name = name;
    task.priority = priority;
    task.notes = notes;
    task.dueDate = dueDate;
    
    return task;
}

// methods
function addNewProject(project) {
    projects.push(project);
}

function findIndexOfProject(projectName) {
    let index = projects.findIndex(obj => {
        return obj.name === projectName;
    })

    return index;
}

function removeProject(projectName) {
    projects.splice(findIndexOfProject(projectName), 1);
}

function addNewTask(task) {
    projects[findIndexOfProject(_index__WEBPACK_IMPORTED_MODULE_0__.getActiveProject())].tasks.push(task);
}

function findIndexOfTask(taskName) {
    let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.getActiveProject();
    let projectIndex = findIndexOfProject(activeProject);
    let taskIndex = projects[projectIndex].tasks.findIndex(obj => {
        return obj.name === taskName;
    })
    return taskIndex;
}

function removeTask(taskName) {
    let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.getActiveProject();
    projects[findIndexOfProject(activeProject)].tasks.splice(findIndexOfTask(taskName), 1);
}







/***/ }),

/***/ "./src/calendar.svg":
/*!**************************!*\
  !*** ./src/calendar.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f701f5f03bce1a87caca.svg";

/***/ }),

/***/ "./src/check.svg":
/*!***********************!*\
  !*** ./src/check.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f13190618d793efd0d9.svg";

/***/ }),

/***/ "./src/edit.svg":
/*!**********************!*\
  !*** ./src/edit.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c0bd3d686b62ef0add5.svg";

/***/ }),

/***/ "./src/minus-square.svg":
/*!******************************!*\
  !*** ./src/minus-square.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72fd914dbd3282f1c2b4.svg";

/***/ }),

/***/ "./src/plus-square.svg":
/*!*****************************!*\
  !*** ./src/plus-square.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5e9abc29ef5d6fc6de9.svg";

/***/ }),

/***/ "./src/save.svg":
/*!**********************!*\
  !*** ./src/save.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08f1e543075ae1bb926a.svg";

/***/ }),

/***/ "./src/star.svg":
/*!**********************!*\
  !*** ./src/star.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54d7a90c138e7853127c.svg";

/***/ }),

/***/ "./src/trash-2.svg":
/*!*************************!*\
  !*** ./src/trash-2.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "404fffe6f342b0a02138.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG9EQUFzQjtBQUN0RDs7QUFFQTtBQUNBLHdCQUF3QixvREFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isb0RBQXNCO0FBQzlDO0FBQ0E7O0FBRW9JOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRnBJO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnN2ZyA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmZlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDg1dmggMTB2aDtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyO1xcbn1cXG5cXG4jcHJvamVjdC13cmFwcGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWNhcmQsIC5uZXctcHJvamVjdC1idG4sIC5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogLjNyZW0gLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnN2ZyB7XFxuICAgIHN0cm9rZTogYmxhY2s7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiBncmVlbjtcXG59XFxuXFxuLnBsdXMtc3ZnLCAuc2F2ZS1zdmcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm1pbnVzLXN2ZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubWludXMtc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiByZWQ7XFxufVxcblxcbi5kZWxldGUtc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiByZWQ7XFxufVxcblxcbi5zdGFyLWZpbGwge1xcbiAgICBmaWxsOiB5ZWxsb3c7XFxufVxcblxcbiN0YXNrLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay1jYXJkLCAubmV3LXRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTEsIDk3LCAxMDIsIDAuMikgMHB4IDFweCAycHggMHB4LCByZ2JhKDcxLCA3NiwgNzksIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuI25ldy10YXNrLWNhcmQge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtO1xcbn1cXG5cXG4ubmV3LXRhc2stZm9ybSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcGFkZGluZzogMS41cmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0b3A6IDIxJTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZm9ybS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4udGFzay1mb3JtLWRpdjpudGgtY2hpbGQoMykge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWRhdGUtaW5wdXQsIC50YXNrLW5hbWUtaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmR1ZS1kYXRlLXRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnBsdXMtZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YseUZBQXlGO0FBQzdGOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlGQUF5RjtBQUM3Rjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEZBQTBGO0FBQzlGOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5zdmcgPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5mZWF0aGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCA4NXZoIDEwdmg7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmcjtcXG59XFxuXFxuI3Byb2plY3Qtd3JhcHBlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLCAubmV3LXByb2plY3QtYnRuLCAubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zdmcge1xcbiAgICBzdHJva2U6IGJsYWNrO1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogZ3JlZW47XFxufVxcblxcbi5wbHVzLXN2ZywgLnNhdmUtc3ZnIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5taW51cy1zdmcge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm1pbnVzLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogcmVkO1xcbn1cXG5cXG4uZGVsZXRlLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogcmVkO1xcbn1cXG5cXG4uc3Rhci1maWxsIHtcXG4gICAgZmlsbDogeWVsbG93O1xcbn1cXG5cXG4jdGFzay13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stY2FyZCwgLm5ldy10YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDkxLCA5NywgMTAyLCAwLjIpIDBweCAxcHggMnB4IDBweCwgcmdiYSg3MSwgNzYsIDc5LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XFxufVxcblxcbiNuZXctdGFzay1jYXJkIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvIDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgdG9wOiAyMSU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWZvcm0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnRhc2stZm9ybS1kaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1kYXRlLWlucHV0LCAudGFzay1uYW1lLWlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5kdWUtZGF0ZS10ZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5wbHVzLWRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gRE9NIGludGVyYWN0aW9uIGFuZCBnZW5lcmF0aW9uIG1vZHVsZVxuaW1wb3J0ICogYXMgbG9naWNNb2R1bGUgZnJvbSAnLi9sb2dpYyc7XG5pbXBvcnQgKiBhcyBpbmRleCBmcm9tICcuL2luZGV4JztcbmltcG9ydCB0cmFzaENhbiBmcm9tICcuL3RyYXNoLTIuc3ZnJztcbmltcG9ydCBwbHVzU3F1YXJlIGZyb20gJy4vcGx1cy1zcXVhcmUuc3ZnJztcbmltcG9ydCBjaGVja01hcmsgZnJvbSAnLi9jaGVjay5zdmcnO1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJy4vc3Rhci5zdmcnO1xuaW1wb3J0IGNhbGVuZGFySWNvbiBmcm9tICcuL2NhbGVuZGFyLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9lZGl0LnN2Zyc7XG5pbXBvcnQgc2F2ZUljb24gZnJvbSAnLi9zYXZlLnN2Zyc7XG5pbXBvcnQgbWludXNJY29uIGZyb20gJy4vbWludXMtc3F1YXJlLnN2Zyc7XG5cbi8vIGdsb2JhbCB2YXJpYWJsZXNcbmxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4vLyByZW5kZXIgZnVuY3Rpb25zXG4vLyBkZWZhdWx0IHJlbmRlciBmdW5jdGlvbiBcbmZ1bmN0aW9uIG1haW5SZW5kZXIoKSB7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC13cmFwcGVyJyk7XG5cbiAgICBsZXQgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3REaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXctcHJvamVjdC1idG4nKTtcbiAgICBsZXQgbmV3UHJvamVjdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmV3UHJvamVjdFBhcmEuaW5uZXJUZXh0ID0gJ2FkZCBwcm9qZWN0JztcblxuICAgIGxldCBwbHVzU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBwbHVzU3ZnLmNsYXNzTGlzdC5hZGQoJ3BsdXMtc3ZnJyk7XG4gICAgcGx1c1N2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtwbHVzU3F1YXJlfSNwbHVzLWljb25cIj48L3VzZT5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFBhcmEpO1xuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQocGx1c1N2Zyk7ICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ldy1wcm9qZWN0LWZvcm0nKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgbGV0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3ROYW1lTGFiZWwuaW5uZXJUZXh0ID0gJ25hbWUnO1xuICAgIGxldCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld1Byb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1pbnB1dCcpO1xuICAgIGxldCBzYXZlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzYXZlU3ZnLmNsYXNzTGlzdC5hZGQoJ3NhdmUtc3ZnJyk7XG4gICAgc2F2ZVN2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtzYXZlSWNvbn0jc2F2ZS1pY29uXCI+PC91c2U+YDtcbiAgICBsZXQgbWludXNTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIG1pbnVzU3ZnLmNsYXNzTGlzdC5hZGQoJ21pbnVzLXN2ZycpO1xuICAgIG1pbnVzU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke21pbnVzSWNvbn0jbWludXMtaWNvblwiPjwvdXNlPmA7XG5cbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SW5wdXQpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHNhdmVTdmcpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG1pbnVzU3ZnKTtcblxuICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcblxuICAgIGxvZ2ljTW9kdWxlLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2FyZCcpO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBsZXQgZGVsZXRlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgZGVsZXRlU3ZnLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1zdmcnKTtcbiAgICAgICAgZGVsZXRlU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3RyYXNoQ2FufSN0cmFzaC1pY29uXCI+PC91c2U+YDtcblxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVN2Zyk7XG4gICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbiAgICB9KVxuXG5cbiAgICAvLyBzZXBhcmF0ZSBpbnRvIGl0J3Mgb3duIGZ1bmN0aW9uXG4gICAgbGV0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1dyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXdyYXBwZXInKTtcblxuICAgIC8vIGFkZCBhIG5ldyB0YXNrIGJ1dHRvbi9kaXZcblxuICAgIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stY2FyZCcpO1xuICAgIG5ld1Rhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsICduZXctdGFzay1jYXJkJyk7XG4gICAgbGV0IG5ld1Rhc2tQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5ld1Rhc2tQYXJhLmlubmVyVGV4dCA9ICdhZGQgdGFzayc7XG4gICAgbGV0IHRhc2tQbHVzU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICB0YXNrUGx1c1N2Zy5jbGFzc0xpc3QuYWRkKCdwbHVzLXN2ZycpO1xuICAgIHRhc2tQbHVzU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3BsdXNTcXVhcmV9I3BsdXMtaWNvblwiPjwvdXNlPmA7XG5cbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tQYXJhKTtcbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tQbHVzU3ZnKTtcblxuICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKTtcblxuICAgIGxldCB0YXNrTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tOYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1kaXYnKTtcbiAgICBsZXQgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza05hbWVMYWJlbC5pbm5lclRleHQgPSAnbmFtZSc7XG4gICAgbGV0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lLWlucHV0Jyk7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXG4gICAgdGFza05hbWVEaXYuYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbCk7XG4gICAgdGFza05hbWVEaXYuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICBsZXQgdGFza0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tZGl2Jyk7XG4gICAgbGV0IHRhc2tEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tEYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ2RhdGUnO1xuICAgIGxldCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZS1pbnB1dCcpO1xuICAgIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgIHRhc2tEYXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlTGFiZWwpO1xuICAgIHRhc2tEYXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuXG4gICAgbGV0IHRhc2tQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tZGl2Jyk7XG4gICAgbGV0IGxvd1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxvd1ByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ2xvdyBwcmlvcml0eSc7XG4gICAgbG93UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsb3cnKTtcbiAgICBsZXQgbG93UHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbG93UHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBsb3dQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG93Jyk7XG4gICAgbG93UHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICBsZXQgaGlnaFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGhpZ2hQcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdoaWdoIHByaW9yaXR5JztcbiAgICBoaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsb3cnKTtcbiAgICBsZXQgaGlnaFByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhpZ2hQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIGhpZ2hQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlnaCcpO1xuICAgIGhpZ2hQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuXG4gICAgdGFza1ByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5TGFiZWwpO1xuICAgIHRhc2tQcmlvcml0eURpdi5hcHBlbmRDaGlsZChsb3dQcmlvcml0eUlucHV0KTtcbiAgICB0YXNrUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5TGFiZWwpO1xuICAgIHRhc2tQcmlvcml0eURpdi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlJbnB1dCk7XG5cbiAgICBsZXQgbmV3VGFza0NvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQ29uZmlybS5pbm5lclRleHQgPSAnQ29uZmlybSc7XG4gICAgbmV3VGFza0NvbmZpcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stY29uZmlybScpO1xuXG5cbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZURpdik7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVEaXYpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eURpdik7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0NvbmZpcm0pO1xuXG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xuXG4gICAgaWYgKCEobG9naWNNb2R1bGUucHJvamVjdHNbbG9naWNNb2R1bGUuZmluZEluZGV4T2ZQcm9qZWN0KGluZGV4LmdldEFjdGl2ZVByb2plY3QoKSldLnRhc2tzLmxlbmd0aCA8PSAwKSkge1xuICAgICAgICBsb2dpY01vZHVsZS5wcm9qZWN0c1tsb2dpY01vZHVsZS5maW5kSW5kZXhPZlByb2plY3QoaW5kZXguZ2V0QWN0aXZlUHJvamVjdCgpKV0udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZCcpO1xuICAgICAgICAgICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFza05hbWUuaW5uZXJUZXh0ID0gdGFzay5uYW1lO1xuICAgIFxuICAgICAgICAgICAgbGV0IGNoZWNrU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIGNoZWNrU3ZnLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLXN2ZycpO1xuICAgICAgICAgICAgY2hlY2tTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7Y2hlY2tNYXJrfSNjaGVjay1pY29uXCI+PC91c2U+YDtcbiAgICBcbiAgICAgICAgICAgIGxldCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlLXRleHQnKTtcbiAgICAgICAgICAgIGR1ZURhdGVUZXh0LmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbiAgICBcbiAgICAgICAgICAgIGxldCBjYWxlbmRhclN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgICAgICBjYWxlbmRhclN2Zy5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhci1zdmcnKTtcbiAgICAgICAgICAgIGNhbGVuZGFyU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke2NhbGVuZGFySWNvbn0jY2FsZW5kYXItaWNvblwiPjwvdXNlPmA7XG4gICAgXG4gICAgICAgICAgICBsZXQgc3RhclN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgICAgICBzdGFyU3ZnLmNsYXNzTGlzdC5hZGQoJ3N0YXItc3ZnJyk7XG4gICAgICAgICAgICBzdGFyU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3N0YXJJY29ufSNzdGFyLWljb25cIj48L3VzZT5gO1xuICAgIFxuICAgICAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgICAgIHN0YXJTdmcuY2xhc3NMaXN0LmFkZCgnc3Rhci1maWxsJyk7IFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgbGV0IGVkaXRTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICAgICAgZWRpdFN2Zy5jbGFzc0xpc3QuYWRkKCdlZGl0LXN2ZycpO1xuICAgICAgICAgICAgZWRpdFN2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtlZGl0SWNvbn0jZWRpdC1pY29uXCI+PC91c2U+YDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2hlY2tTdmcpO1xuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FsZW5kYXJTdmcpO1xuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoc3RhclN2Zyk7XG4gICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChlZGl0U3ZnKTtcbiAgICAgICAgICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgICAgICAgfSlcbiAgICB9IFxuICAgICAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RXcmFwcGVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheU5vbmUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5leHBvcnQgeyBtYWluUmVuZGVyLCB0b2dnbGVEaXNwbGF5Tm9uZSB9OyIsIi8vIFRvIERvIExpc3Rcbi8vIDEpIEZvcm0gdG8gYWRkIG5ldyB0YXNrXG4vLyAgLS0gaGlkZSB0aGUgYWRkIHRhc2sgYnV0dG9uIGRpdiBhbmQgcmV2ZWFsIHRoZSBhZGQgbmV3IHRhc2sgZm9ybSBvbiBjbGlja1xuLy8gMikgZWRpdCB0aGUgYXBwcm9wcmlhdGUgdGFzayBmaWVsZHMgZm9yIGVhY2ggaWNvblxuLy8gMykgcmVtb3ZlIGEgdGFzayB3aGVuIGNsaWNraW5nIG9uIHRoZSBjaGVjayBpY29uXG4vLyA0KSB1cGRhdGUgYW5kIGltcHJvdmUgc3R5bGluZyBmZWF0dXJlc1xuXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgbG9naWNNb2R1bGUgZnJvbSAnLi9sb2dpYyc7XG5pbXBvcnQgKiBhcyBkb21Nb2R1bGUgZnJvbSAnLi9kb20nO1xuXG5sZXQgX2FjdGl2ZVByb2plY3QgPSAncHJpbWFyeSc7XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4gICAgcmV0dXJuIF9hY3RpdmVQcm9qZWN0O1xufVxuXG4vLyBEZWZhdWx0IG9iamVjdHMgdGhhdCBhcmUgY3JlYXRlZCBhbmQgcHVzaGVkIHRvIHRoZSBwcm9qZWN0cyBhcnJheVxuY29uc3QgcHJvamVjdDEgPSBsb2dpY01vZHVsZS5uZXdQcm9qZWN0KCdwcmltYXJ5Jyk7XG5sb2dpY01vZHVsZS5hZGROZXdQcm9qZWN0KHByb2plY3QxKTtcbmNvbnN0IHRhc2sxID0gbG9naWNNb2R1bGUubmV3VGFzaygnYnJlYWtmYXN0JywgJ2hpZ2gnLCAnZWF0IG1vcmUgb2F0bWVhbCBhbmQgd2hvbGUgZnJ1aXQnLCAnNC8yMC8yMicpO1xubG9naWNNb2R1bGUuYWRkTmV3VGFzayh0YXNrMSk7XG5cbmNvbnN0IHByb2plY3QyID0gbG9naWNNb2R1bGUubmV3UHJvamVjdCgnZ3JvY2VyaWVzJyk7XG5sb2dpY01vZHVsZS5hZGROZXdQcm9qZWN0KHByb2plY3QyKTtcblxuZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgdGFyZ2V0UGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRQYXJlbnQpO1xuXG4gICAgLy8gd2hlbiB0aGUgYWRkIHByb2plY3QgcGx1cyBidXR0b24gaXMgc2VsZWN0ZWQgc3dhcCBvdXQgdGhlIGFkZCBwcm9qZWN0IGRpdiB3aXRoIHRoZSBhZGQgcHJvamVjdCBmb3JtXG4gICAgaWYgKHRhcmdldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1wcm9qZWN0LWJ0bicpKSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZSh0YXJnZXRQYXJlbnQpO1xuICAgICAgICBkb21Nb2R1bGUudG9nZ2xlRGlzcGxheU5vbmUobmV3UHJvamVjdEZvcm0pO1xuICAgIH1cblxuICAgIC8vIHNhdmUgYW5kIGFkZCB0aGUgcHJvamVjdCB0byB0aGUgYXJyYXkgYW5kIHJlbmRlclxuICAgIGlmICh0YXJnZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctcHJvamVjdC1mb3JtJykgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzYXZlLXN2ZycpKSB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWlucHV0Jyk7XG5cbiAgICAgICAgLy8gYWRkIGxvZ2ljIHRoYXQgeW91IGNhbm5vdCBuYW1lIGEgcHJvamVjdCAncHJpbWFyeScgLSBpdCBpcyB0aGUgZGVmYXVsdCBwcm9qZWN0IG5hbWUgZ2l2ZW5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUudmFsdWUgPT09ICdwcmltYXJ5Jykge1xuICAgICAgICAgICAgYWxlcnQoYFNvcnJ5IHlvdSBjYW5ub3QgbWFrZSBhIGR1cGxpY2F0ZSBwcmltYXJ5IHByb2plY3RgKTtcbiAgICAgICAgICAgIGlucHV0VmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dFZhbHVlLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBuYW1lIHlvdXIgbmV3IHByb2plY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dFZhbHVlLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBsb2dpY01vZHVsZS5uZXdQcm9qZWN0KGlucHV0VmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgbG9naWNNb2R1bGUuYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWJ0bicpO1xuICAgICAgICAgICAgZG9tTW9kdWxlLnRvZ2dsZURpc3BsYXlOb25lKHRhcmdldFBhcmVudCk7XG4gICAgICAgICAgICBkb21Nb2R1bGUudG9nZ2xlRGlzcGxheU5vbmUobmV3UHJvamVjdEJ0bik7XG4gICAgICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgICAgICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FuY2VsIHRoZSBhZGQgbmV3IHByb2plY3QgZm9ybSBkaXNwbGF5XG4gICAgaWYgKHRhcmdldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1wcm9qZWN0LWZvcm0nKSAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pbnVzLXN2ZycpKSB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGUgdGhlIGFkZCBwcm9qZWN0IGZvcm0gYW5kIGFkZCBwcm9qZWN0IGJ1dHRvbicpO1xuXG4gICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZSh0YXJnZXRQYXJlbnQpO1xuICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIHByb2plY3QgZnJvbSBhcnJheSBhbmQgcmVuZGVyaW5nXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXN2ZycpKSB7XG4gICAgICAgIGxldCBhbnN3ZXIgPSBjb25maXJtKCdEZWxldGUgaXRlbT8nKTtcbiAgICAgICAgbGV0IHByZXZTaWJsaW5nID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc29sZS5sb2cocHJldlNpYmxpbmcuaW5uZXJUZXh0KTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5pbm5lclRleHQgPT09ICdwcmltYXJ5Jykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGBTb3JyeSB5b3UgY2Fubm90IGRlbGV0ZSB0aGUgZGVmYXVsdCBwcmltYXJ5IHByb2plY3RgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dpY01vZHVsZS5yZW1vdmVQcm9qZWN0KHByZXZTaWJsaW5nLmlubmVyVGV4dCk7XG4gICAgICAgICAgICBfYWN0aXZlUHJvamVjdCA9ICdwcmltYXJ5JztcbiAgICAgICAgICAgIGRvbU1vZHVsZS5tYWluUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgX2FjdGl2ZVByb2plY3QgYW5kIGRpc3BsYXkgdGFza3MgXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1jYXJkJykpIHtcbiAgICAgICAgX2FjdGl2ZVByb2plY3QgPSBlLnRhcmdldC5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICB9XG59KVxuXG5leHBvcnQgeyBnZXRBY3RpdmVQcm9qZWN0IH07XG4iLCIvLyBpbXBvcnRpbmcgYWN0aXZlUHJvamVjdCB2YXJpYWJsZSBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuaW1wb3J0ICogYXMgaW5kZXggZnJvbSAnLi9pbmRleCc7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uc1xuY29uc3QgdXBkYXRlUHJvamVjdCA9IHtcbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxufVxuXG5jb25zdCBuZXdQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcHJvamVjdCA9IE9iamVjdC5jcmVhdGUodXBkYXRlUHJvamVjdCk7XG5cbiAgICBwcm9qZWN0LnRhc2tzID0gW107XG4gICAgcHJvamVjdC5uYW1lID0gbmFtZTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5jb25zdCB1cGRhdGVUYXNrID0ge1xuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9LFxuICAgIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfSxcbiAgICBzZXROb3RlcyhuZXdOb3Rlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RlcyA9IG5ld05vdGVzO1xuICAgIH0sXG4gICAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH1cbn1cblxuY29uc3QgbmV3VGFzayA9IChuYW1lLCBwcmlvcml0eSwgbm90ZXMsIGR1ZURhdGUpID0+IHtcbiAgICBsZXQgdGFzayA9IE9iamVjdC5jcmVhdGUodXBkYXRlVGFzayk7XG4gICAgdGFzay5uYW1lID0gbmFtZTtcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGFzay5ub3RlcyA9IG5vdGVzO1xuICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgXG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbi8vIG1ldGhvZHNcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChvYmogPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm5hbWUgPT09IHByb2plY3ROYW1lO1xuICAgIH0pXG5cbiAgICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoZmluZEluZGV4T2ZQcm9qZWN0KHByb2plY3ROYW1lKSwgMSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2sodGFzaykge1xuICAgIHByb2plY3RzW2ZpbmRJbmRleE9mUHJvamVjdChpbmRleC5nZXRBY3RpdmVQcm9qZWN0KCkpXS50YXNrcy5wdXNoKHRhc2spO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhPZlRhc2sodGFza05hbWUpIHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGluZGV4LmdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gZmluZEluZGV4T2ZQcm9qZWN0KGFjdGl2ZVByb2plY3QpO1xuICAgIGxldCB0YXNrSW5kZXggPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleChvYmogPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm5hbWUgPT09IHRhc2tOYW1lO1xuICAgIH0pXG4gICAgcmV0dXJuIHRhc2tJbmRleDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrTmFtZSkge1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gaW5kZXguZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIHByb2plY3RzW2ZpbmRJbmRleE9mUHJvamVjdChhY3RpdmVQcm9qZWN0KV0udGFza3Muc3BsaWNlKGZpbmRJbmRleE9mVGFzayh0YXNrTmFtZSksIDEpO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0cywgbmV3UHJvamVjdCwgYWRkTmV3UHJvamVjdCwgZmluZEluZGV4T2ZQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBuZXdUYXNrLCBhZGROZXdUYXNrLCBmaW5kSW5kZXhPZlRhc2ssIHJlbW92ZVRhc2sgfTtcblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=