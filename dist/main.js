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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nsvg > * {\n    pointer-events: none;\n}\n\n.feather {\n    display: none;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 15vh 85vh 10vh;\n}\n\np {\n    font-size: 1.25rem;\n    pointer-events: none;\n}\n\nbutton {\n    padding: .75rem 1.5rem;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\nheader {\n    border: 1px solid blue;\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain {\n    border: 1px solid green;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr;\n}\n\n#project-wrapper {\n    border: 1px solid orange;\n    padding: 1.5rem;\n}\n\n.project-card, .new-project-btn, .new-project-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid blue;\n    border-radius: 6px;\n    padding: .75rem 1rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.new-project-form {\n    justify-content: flex-start;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\ninput {\n    padding: .3rem .5rem;\n    border: 1px solid lightgray;\n    font-size: 1rem;\n}\n\ninput[type=\"radio\"], input[type=\"date\"] {\n    cursor: pointer;\n}\n\nsvg {\n    stroke: black;\n    fill: none;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\nsvg:hover {\n    stroke: green;\n}\n\n.plus-svg, .save-svg {\n    margin-left: auto;\n}\n\n.minus-svg {\n    margin-left: 1rem;\n}\n\n.minus-svg:hover {\n    stroke: red;\n}\n\n.delete-svg:hover {\n    stroke: red;\n}\n\n.star-fill {\n    fill: yellow;\n}\n\n#task-wrapper {\n    padding: 1.5rem 3rem;\n    position: relative;\n}\n\n.task-card, .new-task-form {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    border: 1px solid blue;\n    border-radius: 6px;\n    padding: .75rem 1.5rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n#new-task-card {\n    width: 20%;\n    margin: 0 auto 1rem;\n}\n\n.new-task-form {\n    flex-direction: column;\n    cursor: default;\n    width: 40%;\n    padding: 1.5rem 1.5rem;\n    margin: 0 auto 1rem;\n    position: absolute;\n    z-index: 2;\n    top: 5%;\n    left: 30%;\n    background-color: white;\n}\n\n.task-form-div {\n    display: flex;\n    align-items: center;\n    width: 70%;\n}\n\n.task-form-div:nth-child(3) {\n    justify-content: space-between;\n}\n\n.task-date-input, .task-name-input {\n    margin-left: auto;\n}\n\n.due-date-text {\n    margin-left: auto;\n}\n\n.plus-div {\n    margin-left: auto;\n}\n\nfooter {\n    border: 1px solid purple;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hide {\n    display: none;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,yFAAyF;AAC7F;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,yFAAyF;AAC7F;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,0FAA0F;AAC9F;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,UAAU;IACV,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,OAAO;IACP,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nsvg > * {\n    pointer-events: none;\n}\n\n.feather {\n    display: none;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 15vh 85vh 10vh;\n}\n\np {\n    font-size: 1.25rem;\n    pointer-events: none;\n}\n\nbutton {\n    padding: .75rem 1.5rem;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\nheader {\n    border: 1px solid blue;\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain {\n    border: 1px solid green;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr;\n}\n\n#project-wrapper {\n    border: 1px solid orange;\n    padding: 1.5rem;\n}\n\n.project-card, .new-project-btn, .new-project-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid blue;\n    border-radius: 6px;\n    padding: .75rem 1rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.new-project-form {\n    justify-content: flex-start;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\ninput {\n    padding: .3rem .5rem;\n    border: 1px solid lightgray;\n    font-size: 1rem;\n}\n\ninput[type=\"radio\"], input[type=\"date\"] {\n    cursor: pointer;\n}\n\nsvg {\n    stroke: black;\n    fill: none;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\nsvg:hover {\n    stroke: green;\n}\n\n.plus-svg, .save-svg {\n    margin-left: auto;\n}\n\n.minus-svg {\n    margin-left: 1rem;\n}\n\n.minus-svg:hover {\n    stroke: red;\n}\n\n.delete-svg:hover {\n    stroke: red;\n}\n\n.star-fill {\n    fill: yellow;\n}\n\n#task-wrapper {\n    padding: 1.5rem 3rem;\n    position: relative;\n}\n\n.task-card, .new-task-form {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    border: 1px solid blue;\n    border-radius: 6px;\n    padding: .75rem 1.5rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n#new-task-card {\n    width: 20%;\n    margin: 0 auto 1rem;\n}\n\n.new-task-form {\n    flex-direction: column;\n    cursor: default;\n    width: 40%;\n    padding: 1.5rem 1.5rem;\n    margin: 0 auto 1rem;\n    position: absolute;\n    z-index: 2;\n    top: 5%;\n    left: 30%;\n    background-color: white;\n}\n\n.task-form-div {\n    display: flex;\n    align-items: center;\n    width: 70%;\n}\n\n.task-form-div:nth-child(3) {\n    justify-content: space-between;\n}\n\n.task-date-input, .task-name-input {\n    margin-left: auto;\n}\n\n.due-date-text {\n    margin-left: auto;\n}\n\n.plus-div {\n    margin-left: auto;\n}\n\nfooter {\n    border: 1px solid purple;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hide {\n    display: none;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "toggleDisplayNone": () => (/* binding */ toggleDisplayNone),
/* harmony export */   "toggleVisibility": () => (/* binding */ toggleVisibility)
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
    newTaskDiv.classList.add('new-task-btn');
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
    newTaskForm.classList.add('hide');

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
    lowPriorityInput.checked = 'true';
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

function toggleVisibility(element) {
    element.classList.toggle('hidden');
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

    if (targetParent.classList.contains('new-task-btn')) {
        let newTaskForm = document.querySelector('.new-task-form');
        _dom__WEBPACK_IMPORTED_MODULE_2__.toggleVisibility(targetParent);
        _dom__WEBPACK_IMPORTED_MODULE_2__.toggleDisplayNone(newTaskForm);
    }

    if (e.target.classList.contains('new-task-confirm')) {
        console.log('get the input values');
        let nameInput = document.querySelector('.task-name-input');
        let dateInput = document.querySelector('.task-date-input');

        let priorities = document.getElementsByName('priority');
        for (let priority of priorities) {
            if (priority.checked) {
                console.log(priority.id);
            }
        }

        console.log(nameInput.value);
        console.log(dateInput.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxjQUFjLG9CQUFvQixHQUFHLFVBQVUsb0JBQW9CLHlDQUF5QyxHQUFHLE9BQU8seUJBQXlCLDJCQUEyQixHQUFHLFlBQVksNkJBQTZCLHlCQUF5QixtQkFBbUIsc0JBQXNCLGdHQUFnRyxHQUFHLFlBQVksNkJBQTZCLG9CQUFvQiwwQkFBMEIsb0JBQW9CLEdBQUcsVUFBVSw4QkFBOEIsb0JBQW9CLHVDQUF1QyxHQUFHLHNCQUFzQiwrQkFBK0Isc0JBQXNCLEdBQUcsd0RBQXdELG9CQUFvQixxQ0FBcUMsMEJBQTBCLDZCQUE2Qix5QkFBeUIsMkJBQTJCLDBCQUEwQixzQkFBc0IsZ0dBQWdHLEdBQUcsdUJBQXVCLGtDQUFrQyxHQUFHLFdBQVcseUJBQXlCLEdBQUcsV0FBVywyQkFBMkIsa0NBQWtDLHNCQUFzQixHQUFHLGlEQUFpRCxzQkFBc0IsR0FBRyxTQUFTLG9CQUFvQixpQkFBaUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsR0FBRyxlQUFlLG9CQUFvQixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsbUJBQW1CLDJCQUEyQix5QkFBeUIsR0FBRyxnQ0FBZ0Msb0JBQW9CLDBCQUEwQixnQkFBZ0IsNkJBQTZCLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLHNCQUFzQixpR0FBaUcsR0FBRyxvQkFBb0IsaUJBQWlCLDBCQUEwQixHQUFHLG9CQUFvQiw2QkFBNkIsc0JBQXNCLGlCQUFpQiw2QkFBNkIsMEJBQTBCLHlCQUF5QixpQkFBaUIsY0FBYyxnQkFBZ0IsOEJBQThCLEdBQUcsb0JBQW9CLG9CQUFvQiwwQkFBMEIsaUJBQWlCLEdBQUcsaUNBQWlDLHFDQUFxQyxHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxZQUFZLCtCQUErQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsYUFBYSx5QkFBeUIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksNkJBQTZCLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxjQUFjLG9CQUFvQixHQUFHLFVBQVUsb0JBQW9CLHlDQUF5QyxHQUFHLE9BQU8seUJBQXlCLDJCQUEyQixHQUFHLFlBQVksNkJBQTZCLHlCQUF5QixtQkFBbUIsc0JBQXNCLGdHQUFnRyxHQUFHLFlBQVksNkJBQTZCLG9CQUFvQiwwQkFBMEIsb0JBQW9CLEdBQUcsVUFBVSw4QkFBOEIsb0JBQW9CLHVDQUF1QyxHQUFHLHNCQUFzQiwrQkFBK0Isc0JBQXNCLEdBQUcsd0RBQXdELG9CQUFvQixxQ0FBcUMsMEJBQTBCLDZCQUE2Qix5QkFBeUIsMkJBQTJCLDBCQUEwQixzQkFBc0IsZ0dBQWdHLEdBQUcsdUJBQXVCLGtDQUFrQyxHQUFHLFdBQVcseUJBQXlCLEdBQUcsV0FBVywyQkFBMkIsa0NBQWtDLHNCQUFzQixHQUFHLGlEQUFpRCxzQkFBc0IsR0FBRyxTQUFTLG9CQUFvQixpQkFBaUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsR0FBRyxlQUFlLG9CQUFvQixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsbUJBQW1CLDJCQUEyQix5QkFBeUIsR0FBRyxnQ0FBZ0Msb0JBQW9CLDBCQUEwQixnQkFBZ0IsNkJBQTZCLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLHNCQUFzQixpR0FBaUcsR0FBRyxvQkFBb0IsaUJBQWlCLDBCQUEwQixHQUFHLG9CQUFvQiw2QkFBNkIsc0JBQXNCLGlCQUFpQiw2QkFBNkIsMEJBQTBCLHlCQUF5QixpQkFBaUIsY0FBYyxnQkFBZ0IsOEJBQThCLEdBQUcsb0JBQW9CLG9CQUFvQiwwQkFBMEIsaUJBQWlCLEdBQUcsaUNBQWlDLHFDQUFxQyxHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxZQUFZLCtCQUErQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsYUFBYSx5QkFBeUIsR0FBRyxtQkFBbUI7QUFDNzNPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDdUM7QUFDTjtBQUNJO0FBQ007QUFDUDtBQUNGO0FBQ1E7QUFDUjtBQUNBO0FBQ1M7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLDZDQUFVLENBQUM7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBUSxDQUFDO0FBQy9DO0FBQ0E7QUFDQSx1Q0FBdUMsOENBQVMsQ0FBQzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLG9EQUE0QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLHlDQUFRLENBQUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDZDQUFVLENBQUM7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVLDRDQUFvQixDQUFDLHNEQUE4QixDQUFDLG9EQUFzQjtBQUNwRixRQUFRLDRDQUFvQixDQUFDLHNEQUE4QixDQUFDLG9EQUFzQjs7QUFFbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsdUNBQVMsQ0FBQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCwwQ0FBWSxDQUFDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQ0FBUSxDQUFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNDQUFRLENBQUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHcUI7QUFDa0I7QUFDSjs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDhDQUFzQjtBQUN2QyxpREFBeUI7QUFDekIsY0FBYywyQ0FBbUI7QUFDakMsOENBQXNCOztBQUV0QixpQkFBaUIsOENBQXNCO0FBQ3ZDLGlEQUF5Qjs7QUFFekIsNENBQW9COztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBMkI7QUFDbkMsUUFBUSxtREFBMkI7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsOENBQXNCO0FBQ25ELFlBQVksaURBQXlCO0FBQ3JDO0FBQ0EsWUFBWSxtREFBMkI7QUFDdkMsWUFBWSxtREFBMkI7QUFDdkMsWUFBWSw0Q0FBb0I7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsbURBQTJCO0FBQ25DLFFBQVEsNENBQW9CO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBeUI7QUFDckM7QUFDQSxZQUFZLDRDQUFvQjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQW9CO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGtEQUEwQjtBQUNsQyxRQUFRLG1EQUEyQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVINUI7QUFDaUM7O0FBRWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG9EQUFzQjtBQUN0RDs7QUFFQTtBQUNBLHdCQUF3QixvREFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isb0RBQXNCO0FBQzlDO0FBQ0E7O0FBRW9JOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRnBJO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnN2ZyA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmZlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDg1dmggMTB2aDtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyO1xcbn1cXG5cXG4jcHJvamVjdC13cmFwcGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWNhcmQsIC5uZXctcHJvamVjdC1idG4sIC5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogLjNyZW0gLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnN2ZyB7XFxuICAgIHN0cm9rZTogYmxhY2s7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiBncmVlbjtcXG59XFxuXFxuLnBsdXMtc3ZnLCAuc2F2ZS1zdmcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm1pbnVzLXN2ZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubWludXMtc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiByZWQ7XFxufVxcblxcbi5kZWxldGUtc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiByZWQ7XFxufVxcblxcbi5zdGFyLWZpbGwge1xcbiAgICBmaWxsOiB5ZWxsb3c7XFxufVxcblxcbiN0YXNrLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay1jYXJkLCAubmV3LXRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTEsIDk3LCAxMDIsIDAuMikgMHB4IDFweCAycHggMHB4LCByZ2JhKDcxLCA3NiwgNzksIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuI25ldy10YXNrLWNhcmQge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtO1xcbn1cXG5cXG4ubmV3LXRhc2stZm9ybSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcGFkZGluZzogMS41cmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1mb3JtLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbi50YXNrLWZvcm0tZGl2Om50aC1jaGlsZCgzKSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stZGF0ZS1pbnB1dCwgLnRhc2stbmFtZS1pbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZHVlLWRhdGUtdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucGx1cy1kaXYge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YseUZBQXlGO0FBQzdGOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlGQUF5RjtBQUM3Rjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEZBQTBGO0FBQzlGOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5zdmcgPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5mZWF0aGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCA4NXZoIDEwdmg7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmcjtcXG59XFxuXFxuI3Byb2plY3Qtd3JhcHBlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLCAubmV3LXByb2plY3QtYnRuLCAubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zdmcge1xcbiAgICBzdHJva2U6IGJsYWNrO1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogZ3JlZW47XFxufVxcblxcbi5wbHVzLXN2ZywgLnNhdmUtc3ZnIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5taW51cy1zdmcge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm1pbnVzLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogcmVkO1xcbn1cXG5cXG4uZGVsZXRlLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogcmVkO1xcbn1cXG5cXG4uc3Rhci1maWxsIHtcXG4gICAgZmlsbDogeWVsbG93O1xcbn1cXG5cXG4jdGFzay13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stY2FyZCwgLm5ldy10YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDkxLCA5NywgMTAyLCAwLjIpIDBweCAxcHggMnB4IDBweCwgcmdiYSg3MSwgNzYsIDc5LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XFxufVxcblxcbiNuZXctdGFzay1jYXJkIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvIDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgdG9wOiA1JTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZm9ybS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4udGFzay1mb3JtLWRpdjpudGgtY2hpbGQoMykge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWRhdGUtaW5wdXQsIC50YXNrLW5hbWUtaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmR1ZS1kYXRlLXRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnBsdXMtZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBET00gaW50ZXJhY3Rpb24gYW5kIGdlbmVyYXRpb24gbW9kdWxlXG5pbXBvcnQgKiBhcyBsb2dpY01vZHVsZSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCAqIGFzIGluZGV4IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHRyYXNoQ2FuIGZyb20gJy4vdHJhc2gtMi5zdmcnO1xuaW1wb3J0IHBsdXNTcXVhcmUgZnJvbSAnLi9wbHVzLXNxdWFyZS5zdmcnO1xuaW1wb3J0IGNoZWNrTWFyayBmcm9tICcuL2NoZWNrLnN2Zyc7XG5pbXBvcnQgc3Rhckljb24gZnJvbSAnLi9zdGFyLnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJJY29uIGZyb20gJy4vY2FsZW5kYXIuc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2VkaXQuc3ZnJztcbmltcG9ydCBzYXZlSWNvbiBmcm9tICcuL3NhdmUuc3ZnJztcbmltcG9ydCBtaW51c0ljb24gZnJvbSAnLi9taW51cy1zcXVhcmUuc3ZnJztcblxuLy8gZ2xvYmFsIHZhcmlhYmxlc1xubGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbi8vIHJlbmRlciBmdW5jdGlvbnNcbi8vIGRlZmF1bHQgcmVuZGVyIGZ1bmN0aW9uIFxuZnVuY3Rpb24gbWFpblJlbmRlcigpIHtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgbGV0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXdyYXBwZXInKTtcblxuICAgIGxldCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ldy1wcm9qZWN0LWJ0bicpO1xuICAgIGxldCBuZXdQcm9qZWN0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuZXdQcm9qZWN0UGFyYS5pbm5lclRleHQgPSAnYWRkIHByb2plY3QnO1xuXG4gICAgbGV0IHBsdXNTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHBsdXNTdmcuY2xhc3NMaXN0LmFkZCgncGx1cy1zdmcnKTtcbiAgICBwbHVzU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3BsdXNTcXVhcmV9I3BsdXMtaWNvblwiPjwvdXNlPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0UGFyYSk7XG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChwbHVzU3ZnKTsgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3LXByb2plY3QtZm9ybScpO1xuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBsZXQgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdE5hbWVMYWJlbC5pbm5lclRleHQgPSAnbmFtZSc7XG4gICAgbGV0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3UHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWlucHV0Jyk7XG4gICAgbGV0IHNhdmVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHNhdmVTdmcuY2xhc3NMaXN0LmFkZCgnc2F2ZS1zdmcnKTtcbiAgICBzYXZlU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3NhdmVJY29ufSNzYXZlLWljb25cIj48L3VzZT5gO1xuICAgIGxldCBtaW51c1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbWludXNTdmcuY2xhc3NMaXN0LmFkZCgnbWludXMtc3ZnJyk7XG4gICAgbWludXNTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7bWludXNJY29ufSNtaW51cy1pY29uXCI+PC91c2U+YDtcblxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RJbnB1dCk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc2F2ZVN2Zyk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobWludXNTdmcpO1xuXG4gICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG4gICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gICAgbG9naWNNb2R1bGUucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkJyk7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIGxldCBkZWxldGVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICBkZWxldGVTdmcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXN2ZycpO1xuICAgICAgICBkZWxldGVTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7dHJhc2hDYW59I3RyYXNoLWljb25cIj48L3VzZT5gO1xuXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlU3ZnKTtcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgIH0pXG5cblxuICAgIC8vIHNlcGFyYXRlIGludG8gaXQncyBvd24gZnVuY3Rpb25cbiAgICBsZXQgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2std3JhcHBlcicpO1xuXG4gICAgLy8gYWRkIGEgbmV3IHRhc2sgYnV0dG9uL2RpdlxuXG4gICAgbGV0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jYXJkJyk7XG4gICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idG4nKTtcbiAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LXRhc2stY2FyZCcpO1xuICAgIGxldCBuZXdUYXNrUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuZXdUYXNrUGFyYS5pbm5lclRleHQgPSAnYWRkIHRhc2snO1xuICAgIGxldCB0YXNrUGx1c1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgdGFza1BsdXNTdmcuY2xhc3NMaXN0LmFkZCgncGx1cy1zdmcnKTtcbiAgICB0YXNrUGx1c1N2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtwbHVzU3F1YXJlfSNwbHVzLWljb25cIj48L3VzZT5gO1xuXG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrUGFyYSk7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUGx1c1N2Zyk7XG5cbiAgICBsZXQgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJyk7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgbGV0IHRhc2tOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza05hbWVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWRpdicpO1xuICAgIGxldCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrTmFtZUxhYmVsLmlubmVyVGV4dCA9ICduYW1lJztcbiAgICBsZXQgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUtaW5wdXQnKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICB0YXNrTmFtZURpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcbiAgICB0YXNrTmFtZURpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcblxuICAgIGxldCB0YXNrRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1kaXYnKTtcbiAgICBsZXQgdGFza0RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0RhdGVMYWJlbC5pbm5lclRleHQgPSAnZGF0ZSc7XG4gICAgbGV0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlLWlucHV0Jyk7XG4gICAgdGFza0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuXG4gICAgdGFza0RhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGVMYWJlbCk7XG4gICAgdGFza0RhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dCk7XG5cbiAgICBsZXQgdGFza1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1kaXYnKTtcbiAgICBsZXQgbG93UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbG93UHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnbG93IHByaW9yaXR5JztcbiAgICBsb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xvdycpO1xuICAgIGxldCBsb3dQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsb3dQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIGxvd1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdsb3cnKTtcbiAgICBsb3dQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgIGxvd1ByaW9yaXR5SW5wdXQuY2hlY2tlZCA9ICd0cnVlJztcbiAgICBsZXQgaGlnaFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGhpZ2hQcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdoaWdoIHByaW9yaXR5JztcbiAgICBoaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsb3cnKTtcbiAgICBsZXQgaGlnaFByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhpZ2hQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIGhpZ2hQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlnaCcpO1xuICAgIGhpZ2hQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuXG4gICAgdGFza1ByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5TGFiZWwpO1xuICAgIHRhc2tQcmlvcml0eURpdi5hcHBlbmRDaGlsZChsb3dQcmlvcml0eUlucHV0KTtcbiAgICB0YXNrUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5TGFiZWwpO1xuICAgIHRhc2tQcmlvcml0eURpdi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlJbnB1dCk7XG5cbiAgICBsZXQgbmV3VGFza0NvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQ29uZmlybS5pbm5lclRleHQgPSAnQ29uZmlybSc7XG4gICAgbmV3VGFza0NvbmZpcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stY29uZmlybScpO1xuXG5cbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZURpdik7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVEaXYpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eURpdik7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0NvbmZpcm0pO1xuXG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xuXG4gICAgaWYgKCEobG9naWNNb2R1bGUucHJvamVjdHNbbG9naWNNb2R1bGUuZmluZEluZGV4T2ZQcm9qZWN0KGluZGV4LmdldEFjdGl2ZVByb2plY3QoKSldLnRhc2tzLmxlbmd0aCA8PSAwKSkge1xuICAgICAgICBsb2dpY01vZHVsZS5wcm9qZWN0c1tsb2dpY01vZHVsZS5maW5kSW5kZXhPZlByb2plY3QoaW5kZXguZ2V0QWN0aXZlUHJvamVjdCgpKV0udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZCcpO1xuICAgICAgICAgICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFza05hbWUuaW5uZXJUZXh0ID0gdGFzay5uYW1lO1xuICAgIFxuICAgICAgICAgICAgbGV0IGNoZWNrU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIGNoZWNrU3ZnLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLXN2ZycpO1xuICAgICAgICAgICAgY2hlY2tTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7Y2hlY2tNYXJrfSNjaGVjay1pY29uXCI+PC91c2U+YDtcbiAgICBcbiAgICAgICAgICAgIGxldCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlLXRleHQnKTtcbiAgICAgICAgICAgIGR1ZURhdGVUZXh0LmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbiAgICBcbiAgICAgICAgICAgIGxldCBjYWxlbmRhclN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgICAgICBjYWxlbmRhclN2Zy5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhci1zdmcnKTtcbiAgICAgICAgICAgIGNhbGVuZGFyU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke2NhbGVuZGFySWNvbn0jY2FsZW5kYXItaWNvblwiPjwvdXNlPmA7XG4gICAgXG4gICAgICAgICAgICBsZXQgc3RhclN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgICAgICBzdGFyU3ZnLmNsYXNzTGlzdC5hZGQoJ3N0YXItc3ZnJyk7XG4gICAgICAgICAgICBzdGFyU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3N0YXJJY29ufSNzdGFyLWljb25cIj48L3VzZT5gO1xuICAgIFxuICAgICAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgICAgIHN0YXJTdmcuY2xhc3NMaXN0LmFkZCgnc3Rhci1maWxsJyk7IFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgbGV0IGVkaXRTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICAgICAgZWRpdFN2Zy5jbGFzc0xpc3QuYWRkKCdlZGl0LXN2ZycpO1xuICAgICAgICAgICAgZWRpdFN2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtlZGl0SWNvbn0jZWRpdC1pY29uXCI+PC91c2U+YDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2hlY2tTdmcpO1xuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FsZW5kYXJTdmcpO1xuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoc3RhclN2Zyk7XG4gICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChlZGl0U3ZnKTtcbiAgICAgICAgICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgICAgICAgfSlcbiAgICB9IFxuICAgICAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RXcmFwcGVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheU5vbmUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVWaXNpYmlsaXR5KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgeyBtYWluUmVuZGVyLCB0b2dnbGVEaXNwbGF5Tm9uZSwgdG9nZ2xlVmlzaWJpbGl0eSB9OyIsIi8vIFRvIERvIExpc3Rcbi8vIDEpIEZvcm0gdG8gYWRkIG5ldyB0YXNrXG4vLyAgLS0gaGlkZSB0aGUgYWRkIHRhc2sgYnV0dG9uIGRpdiBhbmQgcmV2ZWFsIHRoZSBhZGQgbmV3IHRhc2sgZm9ybSBvbiBjbGlja1xuLy8gMikgZWRpdCB0aGUgYXBwcm9wcmlhdGUgdGFzayBmaWVsZHMgZm9yIGVhY2ggaWNvblxuLy8gMykgcmVtb3ZlIGEgdGFzayB3aGVuIGNsaWNraW5nIG9uIHRoZSBjaGVjayBpY29uXG4vLyA0KSB1cGRhdGUgYW5kIGltcHJvdmUgc3R5bGluZyBmZWF0dXJlc1xuXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgbG9naWNNb2R1bGUgZnJvbSAnLi9sb2dpYyc7XG5pbXBvcnQgKiBhcyBkb21Nb2R1bGUgZnJvbSAnLi9kb20nO1xuXG5sZXQgX2FjdGl2ZVByb2plY3QgPSAncHJpbWFyeSc7XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4gICAgcmV0dXJuIF9hY3RpdmVQcm9qZWN0O1xufVxuXG4vLyBEZWZhdWx0IG9iamVjdHMgdGhhdCBhcmUgY3JlYXRlZCBhbmQgcHVzaGVkIHRvIHRoZSBwcm9qZWN0cyBhcnJheVxuY29uc3QgcHJvamVjdDEgPSBsb2dpY01vZHVsZS5uZXdQcm9qZWN0KCdwcmltYXJ5Jyk7XG5sb2dpY01vZHVsZS5hZGROZXdQcm9qZWN0KHByb2plY3QxKTtcbmNvbnN0IHRhc2sxID0gbG9naWNNb2R1bGUubmV3VGFzaygnYnJlYWtmYXN0JywgJ2hpZ2gnLCAnZWF0IG1vcmUgb2F0bWVhbCBhbmQgd2hvbGUgZnJ1aXQnLCAnNC8yMC8yMicpO1xubG9naWNNb2R1bGUuYWRkTmV3VGFzayh0YXNrMSk7XG5cbmNvbnN0IHByb2plY3QyID0gbG9naWNNb2R1bGUubmV3UHJvamVjdCgnZ3JvY2VyaWVzJyk7XG5sb2dpY01vZHVsZS5hZGROZXdQcm9qZWN0KHByb2plY3QyKTtcblxuZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgdGFyZ2V0UGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRQYXJlbnQpO1xuXG4gICAgLy8gd2hlbiB0aGUgYWRkIHByb2plY3QgcGx1cyBidXR0b24gaXMgc2VsZWN0ZWQgc3dhcCBvdXQgdGhlIGFkZCBwcm9qZWN0IGRpdiB3aXRoIHRoZSBhZGQgcHJvamVjdCBmb3JtXG4gICAgaWYgKHRhcmdldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1wcm9qZWN0LWJ0bicpKSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZSh0YXJnZXRQYXJlbnQpO1xuICAgICAgICBkb21Nb2R1bGUudG9nZ2xlRGlzcGxheU5vbmUobmV3UHJvamVjdEZvcm0pO1xuICAgIH1cblxuICAgIC8vIHNhdmUgYW5kIGFkZCB0aGUgcHJvamVjdCB0byB0aGUgYXJyYXkgYW5kIHJlbmRlclxuICAgIGlmICh0YXJnZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctcHJvamVjdC1mb3JtJykgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzYXZlLXN2ZycpKSB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWlucHV0Jyk7XG5cbiAgICAgICAgLy8gYWRkIGxvZ2ljIHRoYXQgeW91IGNhbm5vdCBuYW1lIGEgcHJvamVjdCAncHJpbWFyeScgLSBpdCBpcyB0aGUgZGVmYXVsdCBwcm9qZWN0IG5hbWUgZ2l2ZW5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUudmFsdWUgPT09ICdwcmltYXJ5Jykge1xuICAgICAgICAgICAgYWxlcnQoYFNvcnJ5IHlvdSBjYW5ub3QgbWFrZSBhIGR1cGxpY2F0ZSBwcmltYXJ5IHByb2plY3RgKTtcbiAgICAgICAgICAgIGlucHV0VmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dFZhbHVlLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBuYW1lIHlvdXIgbmV3IHByb2plY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dFZhbHVlLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBsb2dpY01vZHVsZS5uZXdQcm9qZWN0KGlucHV0VmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgbG9naWNNb2R1bGUuYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWJ0bicpO1xuICAgICAgICAgICAgZG9tTW9kdWxlLnRvZ2dsZURpc3BsYXlOb25lKHRhcmdldFBhcmVudCk7XG4gICAgICAgICAgICBkb21Nb2R1bGUudG9nZ2xlRGlzcGxheU5vbmUobmV3UHJvamVjdEJ0bik7XG4gICAgICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgICAgICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FuY2VsIHRoZSBhZGQgbmV3IHByb2plY3QgZm9ybSBkaXNwbGF5XG4gICAgaWYgKHRhcmdldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1wcm9qZWN0LWZvcm0nKSAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pbnVzLXN2ZycpKSB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGUgdGhlIGFkZCBwcm9qZWN0IGZvcm0gYW5kIGFkZCBwcm9qZWN0IGJ1dHRvbicpO1xuXG4gICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZSh0YXJnZXRQYXJlbnQpO1xuICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIHByb2plY3QgZnJvbSBhcnJheSBhbmQgcmVuZGVyaW5nXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXN2ZycpKSB7XG4gICAgICAgIGxldCBhbnN3ZXIgPSBjb25maXJtKCdEZWxldGUgaXRlbT8nKTtcbiAgICAgICAgbGV0IHByZXZTaWJsaW5nID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc29sZS5sb2cocHJldlNpYmxpbmcuaW5uZXJUZXh0KTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5pbm5lclRleHQgPT09ICdwcmltYXJ5Jykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGBTb3JyeSB5b3UgY2Fubm90IGRlbGV0ZSB0aGUgZGVmYXVsdCBwcmltYXJ5IHByb2plY3RgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dpY01vZHVsZS5yZW1vdmVQcm9qZWN0KHByZXZTaWJsaW5nLmlubmVyVGV4dCk7XG4gICAgICAgICAgICBfYWN0aXZlUHJvamVjdCA9ICdwcmltYXJ5JztcbiAgICAgICAgICAgIGRvbU1vZHVsZS5tYWluUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgX2FjdGl2ZVByb2plY3QgYW5kIGRpc3BsYXkgdGFza3MgXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1jYXJkJykpIHtcbiAgICAgICAgX2FjdGl2ZVByb2plY3QgPSBlLnRhcmdldC5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2stYnRuJykpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZvcm0nKTtcbiAgICAgICAgZG9tTW9kdWxlLnRvZ2dsZVZpc2liaWxpdHkodGFyZ2V0UGFyZW50KTtcbiAgICAgICAgZG9tTW9kdWxlLnRvZ2dsZURpc3BsYXlOb25lKG5ld1Rhc2tGb3JtKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdGFzay1jb25maXJtJykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCB0aGUgaW5wdXQgdmFsdWVzJyk7XG4gICAgICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lLWlucHV0Jyk7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kYXRlLWlucHV0Jyk7XG5cbiAgICAgICAgbGV0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcbiAgICAgICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgcHJpb3JpdGllcykge1xuICAgICAgICAgICAgaWYgKHByaW9yaXR5LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRlSW5wdXQudmFsdWUpO1xuICAgIH1cbn0pXG5cbmV4cG9ydCB7IGdldEFjdGl2ZVByb2plY3QgfTtcbiIsIi8vIGltcG9ydGluZyBhY3RpdmVQcm9qZWN0IHZhcmlhYmxlIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG5pbXBvcnQgKiBhcyBpbmRleCBmcm9tICcuL2luZGV4JztcblxubGV0IHByb2plY3RzID0gW107XG5cbi8vIGZhY3RvcnkgZnVuY3Rpb25zXG5jb25zdCB1cGRhdGVQcm9qZWN0ID0ge1xuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG59XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGxldCBwcm9qZWN0ID0gT2JqZWN0LmNyZWF0ZSh1cGRhdGVQcm9qZWN0KTtcblxuICAgIHByb2plY3QudGFza3MgPSBbXTtcbiAgICBwcm9qZWN0Lm5hbWUgPSBuYW1lO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmNvbnN0IHVwZGF0ZVRhc2sgPSB7XG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH0sXG4gICAgc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9LFxuICAgIHNldE5vdGVzKG5ld05vdGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGVzID0gbmV3Tm90ZXM7XG4gICAgfSxcbiAgICBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfVxufVxuXG5jb25zdCBuZXdUYXNrID0gKG5hbWUsIHByaW9yaXR5LCBub3RlcywgZHVlRGF0ZSkgPT4ge1xuICAgIGxldCB0YXNrID0gT2JqZWN0LmNyZWF0ZSh1cGRhdGVUYXNrKTtcbiAgICB0YXNrLm5hbWUgPSBuYW1lO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrLm5vdGVzID0gbm90ZXM7XG4gICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBcbiAgICByZXR1cm4gdGFzaztcbn1cblxuLy8gbWV0aG9kc1xuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4T2ZQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KG9iaiA9PiB7XG4gICAgICAgIHJldHVybiBvYmoubmFtZSA9PT0gcHJvamVjdE5hbWU7XG4gICAgfSlcblxuICAgIHJldHVybiBpbmRleDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHByb2plY3RzLnNwbGljZShmaW5kSW5kZXhPZlByb2plY3QocHJvamVjdE5hbWUpLCAxKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3VGFzayh0YXNrKSB7XG4gICAgcHJvamVjdHNbZmluZEluZGV4T2ZQcm9qZWN0KGluZGV4LmdldEFjdGl2ZVByb2plY3QoKSldLnRhc2tzLnB1c2godGFzayk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mVGFzayh0YXNrTmFtZSkge1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gaW5kZXguZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIGxldCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXhPZlByb2plY3QoYWN0aXZlUHJvamVjdCk7XG4gICAgbGV0IHRhc2tJbmRleCA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZmluZEluZGV4KG9iaiA9PiB7XG4gICAgICAgIHJldHVybiBvYmoubmFtZSA9PT0gdGFza05hbWU7XG4gICAgfSlcbiAgICByZXR1cm4gdGFza0luZGV4O1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBpbmRleC5nZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgcHJvamVjdHNbZmluZEluZGV4T2ZQcm9qZWN0KGFjdGl2ZVByb2plY3QpXS50YXNrcy5zcGxpY2UoZmluZEluZGV4T2ZUYXNrKHRhc2tOYW1lKSwgMSk7XG59XG5cbmV4cG9ydCB7IHByb2plY3RzLCBuZXdQcm9qZWN0LCBhZGROZXdQcm9qZWN0LCBmaW5kSW5kZXhPZlByb2plY3QsIHJlbW92ZVByb2plY3QsIG5ld1Rhc2ssIGFkZE5ld1Rhc2ssIGZpbmRJbmRleE9mVGFzaywgcmVtb3ZlVGFzayB9O1xuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==