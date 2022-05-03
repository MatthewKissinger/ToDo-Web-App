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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-light-color: #F7F9F9;\n    --main-dark-color: #423629;\n    --main-gray-color: #6e8894;\n    --main-remove-color: #d64550;\n    --main-add-color: #78bc61;\n}\n\nsvg > * {\n    pointer-events: none;\n}\n\n.feather {\n    display: none;\n}\n\nbody {\n    font-family: 'Open Sans', sans-serif;\n    display: grid;\n    grid-template-rows: 15vh 85vh 10vh;\n    color: var(--main-dark-color);\n}\n\np {\n    font-size: 1.25rem;\n    pointer-events: none;\n}\n\nbutton {\n    padding: .75rem 1.5rem;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\nheader {\n    /* border: 1px solid blue; */\n    color: var(--main-light-color);\n    background-color: var(--main-gray-color);\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain {\n    /* border: 1px solid green; */\n    display: grid;\n    grid-template-columns: 1fr 2.5fr;\n}\n\n#project-wrapper {\n    /* border: 1px solid orange; */\n    padding: 1.5rem;\n    background-color: #d3d6db;\n}\n\n.project-card, .new-project-btn, .new-project-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    padding: .75rem 1rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    background-color: var(--main-light-color);\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.active-project {\n    background-color: var(--main-gray-color);\n    color: var(--main-light-color);\n}\n\n.active-project > svg {\n    stroke: var(--main-light-color);\n}\n\n.new-project-form {\n    justify-content: flex-start;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\ninput {\n    padding: .3rem .5rem;\n    border: 1px solid var(--main-gray-color);\n    font-size: 1rem;\n}\n\ninput[type=\"radio\"], input[type=\"date\"] {\n    cursor: pointer;\n}\n\nsvg {\n    stroke: var(--main-dark-color);\n    fill: none;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\nsvg:hover {\n    stroke: var(--main-add-color);\n}\n\n.check-svg:hover {\n    stroke: var(--main-light-color);\n}\n\n.plus-svg, .save-svg {\n    margin-left: auto;\n}\n\n.minus-svg {\n    margin-left: 1rem;\n}\n\n.update-date-div > .minus-svg, .update-date-div > .save-svg {\n    margin: 0;\n    height: 1.8rem;\n    width: 1.8rem;\n}\n\n.minus-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.delete-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.star-svg {\n    stroke: var(--main-add-color);\n}\n\n.star-svg:hover {\n    stroke: var(--main-gray-color);\n}\n\n.star-fill {\n    fill: var(--main-add-color);\n}\n\n#task-wrapper {\n    padding: 1.5rem 3rem;\n    position: relative;\n    background-color: #bac5d6;\n}\n\n.task-card, .new-task-form {\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 2rem;\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    padding: .75rem 1.5rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    background-color: var(--main-light-color);\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n#new-task-card {\n    width: 20%;\n    margin: 0 auto 1rem;\n}\n\n.new-task-form {\n    flex-direction: column;\n    cursor: default;\n    width: 40%;\n    padding: 1.5rem 1.5rem;\n    margin: 0 auto 1rem;\n    position: absolute;\n    z-index: 2;\n    top: 5%;\n    left: 30%;\n    background-color: var(--main-light-color);\n}\n\n.task-form-div {\n    display: flex;\n    align-items: center;\n    width: 70%;\n}\n\n.update-date-div {\n    position: absolute;\n    right: 0%;\n    top: -80%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--main-light-color);\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    width: 275px;\n    padding: .7rem;\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n.task-minus-svg {\n    margin-left: auto;\n}\n\n.task-minus-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.task-form-div:nth-child(4) {\n    justify-content: space-between;\n}\n\n.task-date-input, .task-name-input {\n    margin-left: auto;\n}\n\n.due-date-text {\n    margin-left: auto;\n}\n\n.plus-div {\n    margin-left: auto;\n}\n\nfooter {\n    background-color: var(--main-gray-color);\n    color: var(--main-light-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hide {\n    display: none;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,0BAA0B;IAC1B,0BAA0B;IAC1B,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,kCAAkC;IAClC,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,yFAAyF;AAC7F;;AAEA;IACI,4BAA4B;IAC5B,8BAA8B;IAC9B,wCAAwC;IACxC,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;IAC9B,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,wCAAwC;IACxC,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,yCAAyC;IACzC,yFAAyF;AAC7F;;AAEA;IACI,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,UAAU;IACV,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,wCAAwC;IACxC,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,yCAAyC;IACzC,0FAA0F;AAC9F;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,UAAU;IACV,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,OAAO;IACP,SAAS;IACT,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,yCAAyC;IACzC,wCAAwC;IACxC,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,0FAA0F;AAC9F;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-light-color: #F7F9F9;\n    --main-dark-color: #423629;\n    --main-gray-color: #6e8894;\n    --main-remove-color: #d64550;\n    --main-add-color: #78bc61;\n}\n\nsvg > * {\n    pointer-events: none;\n}\n\n.feather {\n    display: none;\n}\n\nbody {\n    font-family: 'Open Sans', sans-serif;\n    display: grid;\n    grid-template-rows: 15vh 85vh 10vh;\n    color: var(--main-dark-color);\n}\n\np {\n    font-size: 1.25rem;\n    pointer-events: none;\n}\n\nbutton {\n    padding: .75rem 1.5rem;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\nheader {\n    /* border: 1px solid blue; */\n    color: var(--main-light-color);\n    background-color: var(--main-gray-color);\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain {\n    /* border: 1px solid green; */\n    display: grid;\n    grid-template-columns: 1fr 2.5fr;\n}\n\n#project-wrapper {\n    /* border: 1px solid orange; */\n    padding: 1.5rem;\n    background-color: #d3d6db;\n}\n\n.project-card, .new-project-btn, .new-project-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    padding: .75rem 1rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    background-color: var(--main-light-color);\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.active-project {\n    background-color: var(--main-gray-color);\n    color: var(--main-light-color);\n}\n\n.active-project > svg {\n    stroke: var(--main-light-color);\n}\n\n.new-project-form {\n    justify-content: flex-start;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\ninput {\n    padding: .3rem .5rem;\n    border: 1px solid var(--main-gray-color);\n    font-size: 1rem;\n}\n\ninput[type=\"radio\"], input[type=\"date\"] {\n    cursor: pointer;\n}\n\nsvg {\n    stroke: var(--main-dark-color);\n    fill: none;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\nsvg:hover {\n    stroke: var(--main-add-color);\n}\n\n.check-svg:hover {\n    stroke: var(--main-light-color);\n}\n\n.plus-svg, .save-svg {\n    margin-left: auto;\n}\n\n.minus-svg {\n    margin-left: 1rem;\n}\n\n.update-date-div > .minus-svg, .update-date-div > .save-svg {\n    margin: 0;\n    height: 1.8rem;\n    width: 1.8rem;\n}\n\n.minus-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.delete-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.star-svg {\n    stroke: var(--main-add-color);\n}\n\n.star-svg:hover {\n    stroke: var(--main-gray-color);\n}\n\n.star-fill {\n    fill: var(--main-add-color);\n}\n\n#task-wrapper {\n    padding: 1.5rem 3rem;\n    position: relative;\n    background-color: #bac5d6;\n}\n\n.task-card, .new-task-form {\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 2rem;\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    padding: .75rem 1.5rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    background-color: var(--main-light-color);\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n#new-task-card {\n    width: 20%;\n    margin: 0 auto 1rem;\n}\n\n.new-task-form {\n    flex-direction: column;\n    cursor: default;\n    width: 40%;\n    padding: 1.5rem 1.5rem;\n    margin: 0 auto 1rem;\n    position: absolute;\n    z-index: 2;\n    top: 5%;\n    left: 30%;\n    background-color: var(--main-light-color);\n}\n\n.task-form-div {\n    display: flex;\n    align-items: center;\n    width: 70%;\n}\n\n.update-date-div {\n    position: absolute;\n    right: 0%;\n    top: -80%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--main-light-color);\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    width: 275px;\n    padding: .7rem;\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n.task-minus-svg {\n    margin-left: auto;\n}\n\n.task-minus-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.task-form-div:nth-child(4) {\n    justify-content: space-between;\n}\n\n.task-date-input, .task-name-input {\n    margin-left: auto;\n}\n\n.due-date-text {\n    margin-left: auto;\n}\n\n.plus-div {\n    margin-left: auto;\n}\n\nfooter {\n    background-color: var(--main-gray-color);\n    color: var(--main-light-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hide {\n    display: none;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _save_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./save.svg */ "./src/save.svg");
/* harmony import */ var _minus_square_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./minus-square.svg */ "./src/minus-square.svg");
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
    saveSvg.innerHTML = `<use href="${_save_svg__WEBPACK_IMPORTED_MODULE_7__}#save-icon"></use>`;
    let minusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    minusSvg.classList.add('minus-svg');
    minusSvg.innerHTML = `<use href="${_minus_square_svg__WEBPACK_IMPORTED_MODULE_8__}#minus-icon"></use>`;

    newProjectForm.appendChild(projectNameLabel);
    newProjectForm.appendChild(newProjectInput);
    newProjectForm.appendChild(saveSvg);
    newProjectForm.appendChild(minusSvg);

    projectWrapper.appendChild(newProjectDiv);
    projectWrapper.appendChild(newProjectForm);

    _index__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {
        let projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        let projectName = document.createElement('p');
        projectName.innerText = project.name;

        // UI display of the activeProject selected
        let activeProject = _index__WEBPACK_IMPORTED_MODULE_1__.getActiveProject();

        if (project.name === activeProject) {
            projectCard.classList.add('active-project');
        }

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

    let taskMinusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    taskMinusSvg.classList.add('task-minus-svg');
    taskMinusSvg.innerHTML = `<use href="${_minus_square_svg__WEBPACK_IMPORTED_MODULE_8__}#minus-icon"></use>`;

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

    newTaskForm.appendChild(taskMinusSvg);
    newTaskForm.appendChild(taskNameDiv);
    newTaskForm.appendChild(taskDateDiv);
    newTaskForm.appendChild(taskPriorityDiv);
    newTaskForm.appendChild(newTaskConfirm);

    taskWrapper.appendChild(newTaskDiv);
    taskWrapper.appendChild(newTaskForm);

    if (!(_index__WEBPACK_IMPORTED_MODULE_1__.projects[_logic__WEBPACK_IMPORTED_MODULE_0__.findIndexOfProject(_index__WEBPACK_IMPORTED_MODULE_1__.getActiveProject())].tasks.length <= 0)) {
        _index__WEBPACK_IMPORTED_MODULE_1__.projects[_logic__WEBPACK_IMPORTED_MODULE_0__.findIndexOfProject(_index__WEBPACK_IMPORTED_MODULE_1__.getActiveProject())].tasks.forEach((task) => {

            let taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            let taskName = document.createElement('p');
            taskName.innerText = task.name;
    
            let checkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            checkSvg.classList.add('check-svg');
            checkSvg.innerHTML = `<use href="${_check_svg__WEBPACK_IMPORTED_MODULE_4__}#check-icon-light"></use>`;
    
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

            let updateDateDiv = document.createElement('div');
            updateDateDiv.classList.add('update-date-div');
            updateDateDiv.classList.add('hide');
            let updateDateInput = document.createElement('input');
            updateDateInput.classList.add('update-date-input');
            updateDateInput.setAttribute('type', 'date');
            // add a confirm or save button svg here
            let saveSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            saveSvg.classList.add('save-svg');
            saveSvg.innerHTML = `<use href="${_save_svg__WEBPACK_IMPORTED_MODULE_7__}#save-icon"></use>`;
            let minusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            minusSvg.classList.add('minus-svg');
            minusSvg.innerHTML = `<use href="${_minus_square_svg__WEBPACK_IMPORTED_MODULE_8__}#minus-icon"></use>`;

            updateDateDiv.appendChild(updateDateInput);
            updateDateDiv.appendChild(saveSvg);
            updateDateDiv.appendChild(minusSvg);
            
            taskCard.appendChild(checkSvg);
            taskCard.appendChild(taskName);
            taskCard.appendChild(dueDateText);
            taskCard.appendChild(calendarSvg);
            taskCard.appendChild(starSvg);
            taskCard.appendChild(updateDateDiv);
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
/* harmony export */   "getActiveProject": () => (/* binding */ getActiveProject),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _check_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check.svg */ "./src/check.svg");
// To Do List
// add in local storage saving system






let _activeProject = 'primary';

function getActiveProject() {
    return _activeProject;
}

// Default objects that are created and pushed to the projects array

console.log(localStorage)
let projects = [];

const project1 = _logic__WEBPACK_IMPORTED_MODULE_1__.newProject('primary');
_logic__WEBPACK_IMPORTED_MODULE_1__.addNewProject(project1);
const task1 = _logic__WEBPACK_IMPORTED_MODULE_1__.newTask('breakfast', 'high', '2022-04-20');
_logic__WEBPACK_IMPORTED_MODULE_1__.addNewTask(task1);

const project2 = _logic__WEBPACK_IMPORTED_MODULE_1__.newProject('groceries');
_logic__WEBPACK_IMPORTED_MODULE_1__.addNewProject(project2);

_dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();

window.addEventListener('click', function (e) {
    let targetParent = e.target.parentElement;

    // console.log(e.target);
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

    if (e.target.classList.contains('task-minus-svg')) {
        _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();
    }

    // add a new task from the form
    if (e.target.classList.contains('new-task-confirm')) {
        let nameInput = document.querySelector('.task-name-input');
        let dateInput = document.querySelector('.task-date-input');
        let priorityValue = '';

        let priorities = document.getElementsByName('priority');
        for (let priority of priorities) {
            if (priority.checked) {
                priorityValue = priority.id;
            }
        }

        if (nameInput.value === '') {
            alert('Task must have a name before adding');
        } else {
            let newTask = _logic__WEBPACK_IMPORTED_MODULE_1__.newTask( `${nameInput.value}`, `${priorityValue}`, `${dateInput.value}`);
            _logic__WEBPACK_IMPORTED_MODULE_1__.addNewTask(newTask);
            _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();
        }
    }

    // remove a task when clicking on the check mark svg
    if (e.target.classList.contains('check-svg')) {
        let taskName = targetParent.children[1].innerText;
        _logic__WEBPACK_IMPORTED_MODULE_1__.removeTask(taskName);
        _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();
    }

    // update priority function
    if (e.target.classList.contains('star-svg')) {
        let taskName = targetParent.children[1].innerText;
        _logic__WEBPACK_IMPORTED_MODULE_1__.updateTaskPriority(taskName);
        _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();
    }

    // update date function
    if (e.target.classList.contains('calendar-svg')) {
        _dom__WEBPACK_IMPORTED_MODULE_2__.toggleDisplayNone(targetParent.lastChild);
    }

    // update the date and close the update-date-div
    if (e.target.classList.contains('save-svg') && targetParent.classList.contains('update-date-div')) {
        let updateDate = e.target.previousElementSibling;
        let taskName = targetParent.parentNode.children[1].innerText;
        let projectIndex = _logic__WEBPACK_IMPORTED_MODULE_1__.findIndexOfProject(_activeProject);
        let taskIndex = _logic__WEBPACK_IMPORTED_MODULE_1__.findIndexOfTask(taskName);
        projects[projectIndex].tasks[taskIndex].setDueDate(updateDate.value);
        // console.log(updateDate.value);
        // console.log(projects);

        _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();

        updateDate.value = '';
    }

    // when clicking the minus-svg close the update-date-div and clear the update-input.value
    if (e.target.classList.contains('minus-svg') && targetParent.classList.contains('update-date-div')) {
        console.log('close and clear the update-date-div');
        let updateDate = document.querySelector('.update-date-input');
        updateDate.value = '';
        _dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();
    }
})

// mouseover Event listener to change the color of the check-svg background color to dark
window.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('check-svg')) {
        e.target.innerHTML = `<use href="${_check_svg__WEBPACK_IMPORTED_MODULE_3__}#check-icon-dark"></use>`
    }
})

// mouseout event listener to change the color of the check-svg background color back to light
window.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('check-svg')) {
        e.target.innerHTML = `<use href="${_check_svg__WEBPACK_IMPORTED_MODULE_3__}#check-icon-light"></use>`
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
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "updateTaskPriority": () => (/* binding */ updateTaskPriority)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
// importing activeProject variable for testing purposes


// let projects = [];

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
    setDueDate(newDueDate) {
        return this.dueDate = newDueDate;
    }
}

const newTask = (name, priority, dueDate) => {
    let task = Object.create(updateTask);
    task.name = name;
    task.priority = priority;
    task.dueDate = dueDate;
    
    return task;
}

// methods
function addNewProject(project) {
    _index__WEBPACK_IMPORTED_MODULE_0__.projects.push(project);
}

function findIndexOfProject(projectName) {
    let projectIndex = _index__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(obj => {
        return obj.name === projectName;
    })

    return projectIndex;
}

function removeProject(projectName) {
    _index__WEBPACK_IMPORTED_MODULE_0__.projects.splice(findIndexOfProject(projectName), 1);
}

function addNewTask(task) {
    _index__WEBPACK_IMPORTED_MODULE_0__.projects[findIndexOfProject(_index__WEBPACK_IMPORTED_MODULE_0__.getActiveProject())].tasks.push(task);
}

function findIndexOfTask(taskName) {
    let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.getActiveProject();
    let projectIndex = findIndexOfProject(activeProject);
    let taskIndex = _index__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks.findIndex(obj => {
        return obj.name === taskName;
    })
    return taskIndex;
}

function removeTask(taskName) {
    let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.getActiveProject();
    _index__WEBPACK_IMPORTED_MODULE_0__.projects[findIndexOfProject(activeProject)].tasks.splice(findIndexOfTask(taskName), 1);
}

function updateTaskPriority(taskName) {
    let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.getActiveProject();

    if (_index__WEBPACK_IMPORTED_MODULE_0__.projects[findIndexOfProject(activeProject)].tasks[findIndexOfTask(taskName)].priority === 'high') {
        _index__WEBPACK_IMPORTED_MODULE_0__.projects[findIndexOfProject(activeProject)].tasks[findIndexOfTask(taskName)].priority = 'low';
    } else {
        _index__WEBPACK_IMPORTED_MODULE_0__.projects[findIndexOfProject(activeProject)].tasks[findIndexOfTask(taskName)].priority = 'high';
    }
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

module.exports = __webpack_require__.p + "ce315589f3170c2bd0b2.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEdBQUcsV0FBVyxrQ0FBa0MsaUNBQWlDLGlDQUFpQyxtQ0FBbUMsZ0NBQWdDLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxjQUFjLG9CQUFvQixHQUFHLFVBQVUsMkNBQTJDLG9CQUFvQix5Q0FBeUMsb0NBQW9DLEdBQUcsT0FBTyx5QkFBeUIsMkJBQTJCLEdBQUcsWUFBWSw2QkFBNkIseUJBQXlCLG1CQUFtQixzQkFBc0IsZ0dBQWdHLEdBQUcsWUFBWSxpQ0FBaUMsdUNBQXVDLCtDQUErQyxvQkFBb0IsMEJBQTBCLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLHNCQUFzQix1Q0FBdUMsR0FBRyxzQkFBc0IsbUNBQW1DLHdCQUF3QixnQ0FBZ0MsR0FBRyx3REFBd0Qsb0JBQW9CLHFDQUFxQywwQkFBMEIsK0NBQStDLHlCQUF5QiwyQkFBMkIsMEJBQTBCLHNCQUFzQixnREFBZ0QsZ0dBQWdHLEdBQUcscUJBQXFCLCtDQUErQyxxQ0FBcUMsR0FBRywyQkFBMkIsc0NBQXNDLEdBQUcsdUJBQXVCLGtDQUFrQyxHQUFHLFdBQVcseUJBQXlCLEdBQUcsV0FBVywyQkFBMkIsK0NBQStDLHNCQUFzQixHQUFHLGlEQUFpRCxzQkFBc0IsR0FBRyxTQUFTLHFDQUFxQyxpQkFBaUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsR0FBRyxlQUFlLG9DQUFvQyxHQUFHLHNCQUFzQixzQ0FBc0MsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLGlFQUFpRSxnQkFBZ0IscUJBQXFCLG9CQUFvQixHQUFHLHNCQUFzQix1Q0FBdUMsR0FBRyx1QkFBdUIsdUNBQXVDLEdBQUcsZUFBZSxvQ0FBb0MsR0FBRyxxQkFBcUIscUNBQXFDLEdBQUcsZ0JBQWdCLGtDQUFrQyxHQUFHLG1CQUFtQiwyQkFBMkIseUJBQXlCLGdDQUFnQyxHQUFHLGdDQUFnQyxvQkFBb0IsMEJBQTBCLHlCQUF5QixnQkFBZ0IsK0NBQStDLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLHNCQUFzQixnREFBZ0QsaUdBQWlHLEdBQUcsb0JBQW9CLGlCQUFpQiwwQkFBMEIsR0FBRyxvQkFBb0IsNkJBQTZCLHNCQUFzQixpQkFBaUIsNkJBQTZCLDBCQUEwQix5QkFBeUIsaUJBQWlCLGNBQWMsZ0JBQWdCLGdEQUFnRCxHQUFHLG9CQUFvQixvQkFBb0IsMEJBQTBCLGlCQUFpQixHQUFHLHNCQUFzQix5QkFBeUIsZ0JBQWdCLGdCQUFnQixvQkFBb0IscUNBQXFDLDBCQUEwQixnREFBZ0QsK0NBQStDLHlCQUF5QixtQkFBbUIscUJBQXFCLGlHQUFpRyxHQUFHLHFCQUFxQix3QkFBd0IsR0FBRywyQkFBMkIsdUNBQXVDLEdBQUcsaUNBQWlDLHFDQUFxQyxHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxZQUFZLCtDQUErQyxxQ0FBcUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxXQUFXLG9CQUFvQixHQUFHLGFBQWEseUJBQXlCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksNkJBQTZCLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEdBQUcsV0FBVyxrQ0FBa0MsaUNBQWlDLGlDQUFpQyxtQ0FBbUMsZ0NBQWdDLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxjQUFjLG9CQUFvQixHQUFHLFVBQVUsMkNBQTJDLG9CQUFvQix5Q0FBeUMsb0NBQW9DLEdBQUcsT0FBTyx5QkFBeUIsMkJBQTJCLEdBQUcsWUFBWSw2QkFBNkIseUJBQXlCLG1CQUFtQixzQkFBc0IsZ0dBQWdHLEdBQUcsWUFBWSxpQ0FBaUMsdUNBQXVDLCtDQUErQyxvQkFBb0IsMEJBQTBCLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLHNCQUFzQix1Q0FBdUMsR0FBRyxzQkFBc0IsbUNBQW1DLHdCQUF3QixnQ0FBZ0MsR0FBRyx3REFBd0Qsb0JBQW9CLHFDQUFxQywwQkFBMEIsK0NBQStDLHlCQUF5QiwyQkFBMkIsMEJBQTBCLHNCQUFzQixnREFBZ0QsZ0dBQWdHLEdBQUcscUJBQXFCLCtDQUErQyxxQ0FBcUMsR0FBRywyQkFBMkIsc0NBQXNDLEdBQUcsdUJBQXVCLGtDQUFrQyxHQUFHLFdBQVcseUJBQXlCLEdBQUcsV0FBVywyQkFBMkIsK0NBQStDLHNCQUFzQixHQUFHLGlEQUFpRCxzQkFBc0IsR0FBRyxTQUFTLHFDQUFxQyxpQkFBaUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsR0FBRyxlQUFlLG9DQUFvQyxHQUFHLHNCQUFzQixzQ0FBc0MsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLGlFQUFpRSxnQkFBZ0IscUJBQXFCLG9CQUFvQixHQUFHLHNCQUFzQix1Q0FBdUMsR0FBRyx1QkFBdUIsdUNBQXVDLEdBQUcsZUFBZSxvQ0FBb0MsR0FBRyxxQkFBcUIscUNBQXFDLEdBQUcsZ0JBQWdCLGtDQUFrQyxHQUFHLG1CQUFtQiwyQkFBMkIseUJBQXlCLGdDQUFnQyxHQUFHLGdDQUFnQyxvQkFBb0IsMEJBQTBCLHlCQUF5QixnQkFBZ0IsK0NBQStDLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLHNCQUFzQixnREFBZ0QsaUdBQWlHLEdBQUcsb0JBQW9CLGlCQUFpQiwwQkFBMEIsR0FBRyxvQkFBb0IsNkJBQTZCLHNCQUFzQixpQkFBaUIsNkJBQTZCLDBCQUEwQix5QkFBeUIsaUJBQWlCLGNBQWMsZ0JBQWdCLGdEQUFnRCxHQUFHLG9CQUFvQixvQkFBb0IsMEJBQTBCLGlCQUFpQixHQUFHLHNCQUFzQix5QkFBeUIsZ0JBQWdCLGdCQUFnQixvQkFBb0IscUNBQXFDLDBCQUEwQixnREFBZ0QsK0NBQStDLHlCQUF5QixtQkFBbUIscUJBQXFCLGlHQUFpRyxHQUFHLHFCQUFxQix3QkFBd0IsR0FBRywyQkFBMkIsdUNBQXVDLEdBQUcsaUNBQWlDLHFDQUFxQyxHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxZQUFZLCtDQUErQyxxQ0FBcUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxXQUFXLG9CQUFvQixHQUFHLGFBQWEseUJBQXlCLEdBQUcsbUJBQW1CO0FBQzU2VztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDdUM7QUFDTjtBQUNJO0FBQ007QUFDUDtBQUNGO0FBQ1E7QUFDUjtBQUNTOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyw2Q0FBVSxDQUFDO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0NBQVEsQ0FBQztBQUMvQztBQUNBO0FBQ0EsdUNBQXVDLDhDQUFTLENBQUM7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxvREFBc0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG9EQUFzQjs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMseUNBQVEsQ0FBQzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw2Q0FBVSxDQUFDOztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFTLENBQUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVSw0Q0FBYyxDQUFDLHNEQUE4QixDQUFDLG9EQUFzQjtBQUM5RSxRQUFRLDRDQUFjLENBQUMsc0RBQThCLENBQUMsb0RBQXNCOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx1Q0FBUyxDQUFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDBDQUFZLENBQUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNDQUFRLENBQUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNDQUFRLENBQUM7QUFDdkQ7QUFDQTtBQUNBLCtDQUErQyw4Q0FBUyxDQUFDOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE9BO0FBQ0E7O0FBRXFCO0FBQ2tCO0FBQ0o7QUFDQzs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDhDQUFzQjtBQUN2QyxpREFBeUI7QUFDekIsY0FBYywyQ0FBbUI7QUFDakMsOENBQXNCOztBQUV0QixpQkFBaUIsOENBQXNCO0FBQ3ZDLGlEQUF5Qjs7QUFFekIsNENBQW9COztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBMkI7QUFDbkMsUUFBUSxtREFBMkI7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsOENBQXNCO0FBQ25ELFlBQVksaURBQXlCO0FBQ3JDO0FBQ0EsWUFBWSxtREFBMkI7QUFDdkMsWUFBWSxtREFBMkI7QUFDdkMsWUFBWSw0Q0FBb0I7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsbURBQTJCO0FBQ25DLFFBQVEsNENBQW9CO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBeUI7QUFDckM7QUFDQSxZQUFZLDRDQUFvQjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQW9CO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGtEQUEwQjtBQUNsQyxRQUFRLG1EQUEyQjtBQUNuQzs7QUFFQTtBQUNBLFFBQVEsNENBQW9CO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsMEJBQTBCLDJDQUFtQixLQUFLLGdCQUFnQixNQUFNLGNBQWMsTUFBTSxnQkFBZ0I7QUFDNUcsWUFBWSw4Q0FBc0I7QUFDbEMsWUFBWSw0Q0FBb0I7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFzQjtBQUM5QixRQUFRLDRDQUFvQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUE4QjtBQUN0QyxRQUFRLDRDQUFvQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxtREFBMkI7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQThCO0FBQ3pELHdCQUF3QixtREFBMkI7QUFDbkQ7QUFDQTtBQUNBOztBQUVBLFFBQVEsNENBQW9COztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDRDQUFvQjtBQUM1QjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVDQUFTLENBQUM7QUFDckQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1Q0FBUyxDQUFDO0FBQ3JEO0FBQ0EsQ0FBQzs7O0FBR3FDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTHRDO0FBQ2lDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpREFBbUI7QUFDdkI7O0FBRUE7QUFDQSx1QkFBdUIsc0RBQXdCO0FBQy9DO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBcUI7QUFDekI7O0FBRUE7QUFDQSxJQUFJLDRDQUFjLG9CQUFvQixvREFBc0I7QUFDNUQ7O0FBRUE7QUFDQSx3QkFBd0Isb0RBQXNCO0FBQzlDO0FBQ0Esb0JBQW9CLDRDQUFjO0FBQ2xDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isb0RBQXNCO0FBQzlDLElBQUksNENBQWM7QUFDbEI7O0FBRUE7QUFDQSx3QkFBd0Isb0RBQXNCOztBQUU5QyxRQUFRLDRDQUFjO0FBQ3RCLFFBQVEsNENBQWM7QUFDdEIsTUFBTTtBQUNOLFFBQVEsNENBQWM7QUFDdEI7QUFDQTs7QUFFOEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkY5STtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8td2ViLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1saWdodC1jb2xvcjogI0Y3RjlGOTtcXG4gICAgLS1tYWluLWRhcmstY29sb3I6ICM0MjM2Mjk7XFxuICAgIC0tbWFpbi1ncmF5LWNvbG9yOiAjNmU4ODk0O1xcbiAgICAtLW1haW4tcmVtb3ZlLWNvbG9yOiAjZDY0NTUwO1xcbiAgICAtLW1haW4tYWRkLWNvbG9yOiAjNzhiYzYxO1xcbn1cXG5cXG5zdmcgPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5mZWF0aGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDg1dmggMTB2aDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG4gICAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyO1xcbn1cXG5cXG4jcHJvamVjdC13cmFwcGVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgb3JhbmdlOyAqL1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2Q2ZGI7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQsIC5uZXctcHJvamVjdC1idG4sIC5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3QgPiBzdmcge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogLjNyZW0gLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zdmcge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWFkZC1jb2xvcik7XFxufVxcblxcbi5jaGVjay1zdmc6aG92ZXIge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4ucGx1cy1zdmcsIC5zYXZlLXN2ZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubWludXMtc3ZnIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi51cGRhdGUtZGF0ZS1kaXYgPiAubWludXMtc3ZnLCAudXBkYXRlLWRhdGUtZGl2ID4gLnNhdmUtc3ZnIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG59XFxuXFxuLm1pbnVzLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1yZW1vdmUtY29sb3IpO1xcbn1cXG5cXG4uZGVsZXRlLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1yZW1vdmUtY29sb3IpO1xcbn1cXG5cXG4uc3Rhci1zdmcge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tYWRkLWNvbG9yKTtcXG59XFxuXFxuLnN0YXItc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbn1cXG5cXG4uc3Rhci1maWxsIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi1hZGQtY29sb3IpO1xcbn1cXG5cXG4jdGFzay13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhYzVkNjtcXG59XFxuXFxuLnRhc2stY2FyZCwgLm5ldy10YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDkxLCA5NywgMTAyLCAwLjIpIDBweCAxcHggMnB4IDBweCwgcmdiYSg3MSwgNzYsIDc5LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XFxufVxcblxcbiNuZXctdGFzay1jYXJkIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvIDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgdG9wOiA1JTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLnRhc2stZm9ybS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4udXBkYXRlLWRhdGUtZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMCU7XFxuICAgIHRvcDogLTgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aWR0aDogMjc1cHg7XFxuICAgIHBhZGRpbmc6IC43cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDkxLCA5NywgMTAyLCAwLjIpIDBweCAxcHggMnB4IDBweCwgcmdiYSg3MSwgNzYsIDc5LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XFxufVxcblxcbi50YXNrLW1pbnVzLXN2ZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udGFzay1taW51cy1zdmc6aG92ZXIge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tcmVtb3ZlLWNvbG9yKTtcXG59XFxuXFxuLnRhc2stZm9ybS1kaXY6bnRoLWNoaWxkKDQpIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1kYXRlLWlucHV0LCAudGFzay1uYW1lLWlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5kdWUtZGF0ZS10ZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5wbHVzLWRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMz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LDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tbGlnaHQtY29sb3I6ICNGN0Y5Rjk7XFxuICAgIC0tbWFpbi1kYXJrLWNvbG9yOiAjNDIzNjI5O1xcbiAgICAtLW1haW4tZ3JheS1jb2xvcjogIzZlODg5NDtcXG4gICAgLS1tYWluLXJlbW92ZS1jb2xvcjogI2Q2NDU1MDtcXG4gICAgLS1tYWluLWFkZC1jb2xvcjogIzc4YmM2MTtcXG59XFxuXFxuc3ZnID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZmVhdGhlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCA4NXZoIDEwdmg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxubWFpbiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmcjtcXG59XFxuXFxuI3Byb2plY3Qtd3JhcHBlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTsgKi9cXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkNmRiO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLCAubmV3LXByb2plY3QtYnRuLCAubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0ID4gc3ZnIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0sIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3ZnIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1hZGQtY29sb3IpO1xcbn1cXG5cXG4uY2hlY2stc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLnBsdXMtc3ZnLCAuc2F2ZS1zdmcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm1pbnVzLXN2ZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udXBkYXRlLWRhdGUtZGl2ID4gLm1pbnVzLXN2ZywgLnVwZGF0ZS1kYXRlLWRpdiA+IC5zYXZlLXN2ZyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgIHdpZHRoOiAxLjhyZW07XFxufVxcblxcbi5taW51cy1zdmc6aG92ZXIge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tcmVtb3ZlLWNvbG9yKTtcXG59XFxuXFxuLmRlbGV0ZS1zdmc6aG92ZXIge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tcmVtb3ZlLWNvbG9yKTtcXG59XFxuXFxuLnN0YXItc3ZnIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWFkZC1jb2xvcik7XFxufVxcblxcbi5zdGFyLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG59XFxuXFxuLnN0YXItZmlsbCB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tYWRkLWNvbG9yKTtcXG59XFxuXFxuI3Rhc2std3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYWM1ZDY7XFxufVxcblxcbi50YXNrLWNhcmQsIC5uZXctdGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg5MSwgOTcsIDEwMiwgMC4yKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNzEsIDc2LCA3OSwgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG4jbmV3LXRhc2stY2FyZCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbjogMCBhdXRvIDFyZW07XFxufVxcblxcbi5uZXctdGFzay1mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxufVxcblxcbi50YXNrLWZvcm0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnVwZGF0ZS1kYXRlLWRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAlO1xcbiAgICB0b3A6IC04MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgd2lkdGg6IDI3NXB4O1xcbiAgICBwYWRkaW5nOiAuN3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg5MSwgOTcsIDEwMiwgMC4yKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNzEsIDc2LCA3OSwgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG4udGFzay1taW51cy1zdmcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2stbWludXMtc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLXJlbW92ZS1jb2xvcik7XFxufVxcblxcbi50YXNrLWZvcm0tZGl2Om50aC1jaGlsZCg0KSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stZGF0ZS1pbnB1dCwgLnRhc2stbmFtZS1pbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZHVlLWRhdGUtdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucGx1cy1kaXYge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIERPTSBpbnRlcmFjdGlvbiBhbmQgZ2VuZXJhdGlvbiBtb2R1bGVcbmltcG9ydCAqIGFzIGxvZ2ljTW9kdWxlIGZyb20gJy4vbG9naWMnO1xuaW1wb3J0ICogYXMgaW5kZXggZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgdHJhc2hDYW4gZnJvbSAnLi90cmFzaC0yLnN2Zyc7XG5pbXBvcnQgcGx1c1NxdWFyZSBmcm9tICcuL3BsdXMtc3F1YXJlLnN2Zyc7XG5pbXBvcnQgY2hlY2tNYXJrIGZyb20gJy4vY2hlY2suc3ZnJztcbmltcG9ydCBzdGFySWNvbiBmcm9tICcuL3N0YXIuc3ZnJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9jYWxlbmRhci5zdmcnO1xuaW1wb3J0IHNhdmVJY29uIGZyb20gJy4vc2F2ZS5zdmcnO1xuaW1wb3J0IG1pbnVzSWNvbiBmcm9tICcuL21pbnVzLXNxdWFyZS5zdmcnO1xuXG4vLyBnbG9iYWwgdmFyaWFibGVzXG5sZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuLy8gcmVuZGVyIGZ1bmN0aW9uc1xuLy8gZGVmYXVsdCByZW5kZXIgZnVuY3Rpb24gXG5mdW5jdGlvbiBtYWluUmVuZGVyKCkge1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsZXQgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3Qtd3JhcHBlcicpO1xuXG4gICAgbGV0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3LXByb2plY3QtYnRuJyk7XG4gICAgbGV0IG5ld1Byb2plY3RQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5ld1Byb2plY3RQYXJhLmlubmVyVGV4dCA9ICdhZGQgcHJvamVjdCc7XG5cbiAgICBsZXQgcGx1c1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgcGx1c1N2Zy5jbGFzc0xpc3QuYWRkKCdwbHVzLXN2ZycpO1xuICAgIHBsdXNTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7cGx1c1NxdWFyZX0jcGx1cy1pY29uXCI+PC91c2U+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RQYXJhKTtcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHBsdXNTdmcpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgbGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXctcHJvamVjdC1mb3JtJyk7XG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGxldCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TmFtZUxhYmVsLmlubmVyVGV4dCA9ICduYW1lJztcbiAgICBsZXQgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtaW5wdXQnKTtcbiAgICBsZXQgc2F2ZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgc2F2ZVN2Zy5jbGFzc0xpc3QuYWRkKCdzYXZlLXN2ZycpO1xuICAgIHNhdmVTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7c2F2ZUljb259I3NhdmUtaWNvblwiPjwvdXNlPmA7XG4gICAgbGV0IG1pbnVzU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBtaW51c1N2Zy5jbGFzc0xpc3QuYWRkKCdtaW51cy1zdmcnKTtcbiAgICBtaW51c1N2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHttaW51c0ljb259I21pbnVzLWljb25cIj48L3VzZT5gO1xuXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzYXZlU3ZnKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChtaW51c1N2Zyk7XG5cbiAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcbiAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgICBpbmRleC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcmQnKTtcblxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICAvLyBVSSBkaXNwbGF5IG9mIHRoZSBhY3RpdmVQcm9qZWN0IHNlbGVjdGVkXG4gICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gaW5kZXguZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGFjdGl2ZVByb2plY3QpIHtcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVsZXRlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgZGVsZXRlU3ZnLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1zdmcnKTtcbiAgICAgICAgZGVsZXRlU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3RyYXNoQ2FufSN0cmFzaC1pY29uXCI+PC91c2U+YDtcblxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVN2Zyk7XG4gICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbiAgICB9KVxuXG4gICAgLy8gc2VwYXJhdGUgaW50byBpdCdzIG93biBmdW5jdGlvblxuICAgIGxldCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay13cmFwcGVyJyk7XG5cbiAgICAvLyBhZGQgYSBuZXcgdGFzayBidXR0b24vZGl2XG5cbiAgICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNhcmQnKTtcbiAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ0bicpO1xuICAgIG5ld1Rhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsICduZXctdGFzay1jYXJkJyk7XG4gICAgbGV0IG5ld1Rhc2tQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5ld1Rhc2tQYXJhLmlubmVyVGV4dCA9ICdhZGQgdGFzayc7XG4gICAgbGV0IHRhc2tQbHVzU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICB0YXNrUGx1c1N2Zy5jbGFzc0xpc3QuYWRkKCdwbHVzLXN2ZycpO1xuICAgIHRhc2tQbHVzU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3BsdXNTcXVhcmV9I3BsdXMtaWNvblwiPjwvdXNlPmA7XG5cbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tQYXJhKTtcbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tQbHVzU3ZnKTtcblxuICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKTtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICBsZXQgdGFza01pbnVzU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICB0YXNrTWludXNTdmcuY2xhc3NMaXN0LmFkZCgndGFzay1taW51cy1zdmcnKTtcbiAgICB0YXNrTWludXNTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7bWludXNJY29ufSNtaW51cy1pY29uXCI+PC91c2U+YDtcblxuICAgIGxldCB0YXNrTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tOYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1kaXYnKTtcbiAgICBsZXQgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza05hbWVMYWJlbC5pbm5lclRleHQgPSAnbmFtZSc7XG4gICAgbGV0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lLWlucHV0Jyk7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXG4gICAgdGFza05hbWVEaXYuYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbCk7XG4gICAgdGFza05hbWVEaXYuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICBsZXQgdGFza0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tZGl2Jyk7XG4gICAgbGV0IHRhc2tEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tEYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ2RhdGUnO1xuICAgIGxldCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZS1pbnB1dCcpO1xuICAgIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgIHRhc2tEYXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlTGFiZWwpO1xuICAgIHRhc2tEYXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuXG4gICAgbGV0IHRhc2tQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tZGl2Jyk7XG4gICAgbGV0IGxvd1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxvd1ByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ2xvdyBwcmlvcml0eSc7XG4gICAgbG93UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsb3cnKTtcbiAgICBsZXQgbG93UHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbG93UHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBsb3dQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG93Jyk7XG4gICAgbG93UHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICBsb3dQcmlvcml0eUlucHV0LmNoZWNrZWQgPSAndHJ1ZSc7XG4gICAgbGV0IGhpZ2hQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBoaWdoUHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnaGlnaCBwcmlvcml0eSc7XG4gICAgaGlnaFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbG93Jyk7XG4gICAgbGV0IGhpZ2hQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoaWdoUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBoaWdoUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZ2gnKTtcbiAgICBoaWdoUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcblxuICAgIHRhc2tQcmlvcml0eURpdi5hcHBlbmRDaGlsZChsb3dQcmlvcml0eUxhYmVsKTtcbiAgICB0YXNrUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlJbnB1dCk7XG4gICAgdGFza1ByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eUxhYmVsKTtcbiAgICB0YXNrUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5SW5wdXQpO1xuXG4gICAgbGV0IG5ld1Rhc2tDb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0NvbmZpcm0uaW5uZXJUZXh0ID0gJ0NvbmZpcm0nO1xuICAgIG5ld1Rhc2tDb25maXJtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWNvbmZpcm0nKTtcblxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tNaW51c1N2Zyk7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVEaXYpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlRGl2KTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlEaXYpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tDb25maXJtKTtcblxuICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xuICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcblxuICAgIGlmICghKGluZGV4LnByb2plY3RzW2xvZ2ljTW9kdWxlLmZpbmRJbmRleE9mUHJvamVjdChpbmRleC5nZXRBY3RpdmVQcm9qZWN0KCkpXS50YXNrcy5sZW5ndGggPD0gMCkpIHtcbiAgICAgICAgaW5kZXgucHJvamVjdHNbbG9naWNNb2R1bGUuZmluZEluZGV4T2ZQcm9qZWN0KGluZGV4LmdldEFjdGl2ZVByb2plY3QoKSldLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblxuICAgICAgICAgICAgbGV0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNhcmQnKTtcbiAgICAgICAgICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRhc2tOYW1lLmlubmVyVGV4dCA9IHRhc2submFtZTtcbiAgICBcbiAgICAgICAgICAgIGxldCBjaGVja1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgICAgICBjaGVja1N2Zy5jbGFzc0xpc3QuYWRkKCdjaGVjay1zdmcnKTtcbiAgICAgICAgICAgIGNoZWNrU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke2NoZWNrTWFya30jY2hlY2staWNvbi1saWdodFwiPjwvdXNlPmA7XG4gICAgXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkdWVEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZS10ZXh0Jyk7XG4gICAgICAgICAgICBkdWVEYXRlVGV4dC5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGU7XG4gICAgXG4gICAgICAgICAgICBsZXQgY2FsZW5kYXJTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICAgICAgY2FsZW5kYXJTdmcuY2xhc3NMaXN0LmFkZCgnY2FsZW5kYXItc3ZnJyk7XG4gICAgICAgICAgICBjYWxlbmRhclN2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtjYWxlbmRhckljb259I2NhbGVuZGFyLWljb25cIj48L3VzZT5gO1xuICAgIFxuICAgICAgICAgICAgbGV0IHN0YXJTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICAgICAgc3RhclN2Zy5jbGFzc0xpc3QuYWRkKCdzdGFyLXN2ZycpO1xuICAgICAgICAgICAgc3RhclN2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtzdGFySWNvbn0jc3Rhci1pY29uXCI+PC91c2U+YDtcbiAgICBcbiAgICAgICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgICAgICBzdGFyU3ZnLmNsYXNzTGlzdC5hZGQoJ3N0YXItZmlsbCcpOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVwZGF0ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVwZGF0ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgndXBkYXRlLWRhdGUtZGl2Jyk7XG4gICAgICAgICAgICB1cGRhdGVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdXBkYXRlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3VwZGF0ZS1kYXRlLWlucHV0Jyk7XG4gICAgICAgICAgICB1cGRhdGVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIC8vIGFkZCBhIGNvbmZpcm0gb3Igc2F2ZSBidXR0b24gc3ZnIGhlcmVcbiAgICAgICAgICAgIGxldCBzYXZlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIHNhdmVTdmcuY2xhc3NMaXN0LmFkZCgnc2F2ZS1zdmcnKTtcbiAgICAgICAgICAgIHNhdmVTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7c2F2ZUljb259I3NhdmUtaWNvblwiPjwvdXNlPmA7XG4gICAgICAgICAgICBsZXQgbWludXNTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICAgICAgbWludXNTdmcuY2xhc3NMaXN0LmFkZCgnbWludXMtc3ZnJyk7XG4gICAgICAgICAgICBtaW51c1N2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHttaW51c0ljb259I21pbnVzLWljb25cIj48L3VzZT5gO1xuXG4gICAgICAgICAgICB1cGRhdGVEYXRlRGl2LmFwcGVuZENoaWxkKHVwZGF0ZURhdGVJbnB1dCk7XG4gICAgICAgICAgICB1cGRhdGVEYXRlRGl2LmFwcGVuZENoaWxkKHNhdmVTdmcpO1xuICAgICAgICAgICAgdXBkYXRlRGF0ZURpdi5hcHBlbmRDaGlsZChtaW51c1N2Zyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNoZWNrU3ZnKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhbGVuZGFyU3ZnKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHN0YXJTdmcpO1xuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodXBkYXRlRGF0ZURpdik7XG4gICAgICAgICAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gICAgICAgIH0pXG4gICAgfSBcbiAgICAgICAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0V3JhcHBlcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlOb25lKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVmlzaWJpbGl0eShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IHsgbWFpblJlbmRlciwgdG9nZ2xlRGlzcGxheU5vbmUsIHRvZ2dsZVZpc2liaWxpdHkgfTsiLCIvLyBUbyBEbyBMaXN0XG4vLyBhZGQgaW4gbG9jYWwgc3RvcmFnZSBzYXZpbmcgc3lzdGVtXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgbG9naWNNb2R1bGUgZnJvbSAnLi9sb2dpYyc7XG5pbXBvcnQgKiBhcyBkb21Nb2R1bGUgZnJvbSAnLi9kb20nO1xuaW1wb3J0IGNoZWNrTWFyayBmcm9tICcuL2NoZWNrLnN2Zyc7XG5cbmxldCBfYWN0aXZlUHJvamVjdCA9ICdwcmltYXJ5JztcblxuZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgICByZXR1cm4gX2FjdGl2ZVByb2plY3Q7XG59XG5cbi8vIERlZmF1bHQgb2JqZWN0cyB0aGF0IGFyZSBjcmVhdGVkIGFuZCBwdXNoZWQgdG8gdGhlIHByb2plY3RzIGFycmF5XG5cbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBwcm9qZWN0MSA9IGxvZ2ljTW9kdWxlLm5ld1Byb2plY3QoJ3ByaW1hcnknKTtcbmxvZ2ljTW9kdWxlLmFkZE5ld1Byb2plY3QocHJvamVjdDEpO1xuY29uc3QgdGFzazEgPSBsb2dpY01vZHVsZS5uZXdUYXNrKCdicmVha2Zhc3QnLCAnaGlnaCcsICcyMDIyLTA0LTIwJyk7XG5sb2dpY01vZHVsZS5hZGROZXdUYXNrKHRhc2sxKTtcblxuY29uc3QgcHJvamVjdDIgPSBsb2dpY01vZHVsZS5uZXdQcm9qZWN0KCdncm9jZXJpZXMnKTtcbmxvZ2ljTW9kdWxlLmFkZE5ld1Byb2plY3QocHJvamVjdDIpO1xuXG5kb21Nb2R1bGUubWFpblJlbmRlcigpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCB0YXJnZXRQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldFBhcmVudCk7XG5cbiAgICAvLyB3aGVuIHRoZSBhZGQgcHJvamVjdCBwbHVzIGJ1dHRvbiBpcyBzZWxlY3RlZCBzd2FwIG91dCB0aGUgYWRkIHByb2plY3QgZGl2IHdpdGggdGhlIGFkZCBwcm9qZWN0IGZvcm1cbiAgICBpZiAodGFyZ2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXByb2plY3QtYnRuJykpIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgZG9tTW9kdWxlLnRvZ2dsZURpc3BsYXlOb25lKHRhcmdldFBhcmVudCk7XG4gICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZShuZXdQcm9qZWN0Rm9ybSk7XG4gICAgfVxuXG4gICAgLy8gc2F2ZSBhbmQgYWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBhcnJheSBhbmQgcmVuZGVyXG4gICAgaWYgKHRhcmdldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1wcm9qZWN0LWZvcm0nKSAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NhdmUtc3ZnJykpIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtaW5wdXQnKTtcblxuICAgICAgICAvLyBhZGQgbG9naWMgdGhhdCB5b3UgY2Fubm90IG5hbWUgYSBwcm9qZWN0ICdwcmltYXJ5JyAtIGl0IGlzIHRoZSBkZWZhdWx0IHByb2plY3QgbmFtZSBnaXZlblxuICAgICAgICBpZiAoaW5wdXRWYWx1ZS52YWx1ZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICAgICAgICBhbGVydChgU29ycnkgeW91IGNhbm5vdCBtYWtlIGEgZHVwbGljYXRlIHByaW1hcnkgcHJvamVjdGApO1xuICAgICAgICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIG5hbWUgeW91ciBuZXcgcHJvamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGxvZ2ljTW9kdWxlLm5ld1Byb2plY3QoaW5wdXRWYWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICBsb2dpY01vZHVsZS5hZGROZXdQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtYnRuJyk7XG4gICAgICAgICAgICBkb21Nb2R1bGUudG9nZ2xlRGlzcGxheU5vbmUodGFyZ2V0UGFyZW50KTtcbiAgICAgICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZShuZXdQcm9qZWN0QnRuKTtcbiAgICAgICAgICAgIGRvbU1vZHVsZS5tYWluUmVuZGVyKCk7XG4gICAgICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYW5jZWwgdGhlIGFkZCBuZXcgcHJvamVjdCBmb3JtIGRpc3BsYXlcbiAgICBpZiAodGFyZ2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXByb2plY3QtZm9ybScpICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWludXMtc3ZnJykpIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtaW5wdXQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZSB0aGUgYWRkIHByb2plY3QgZm9ybSBhbmQgYWRkIHByb2plY3QgYnV0dG9uJyk7XG5cbiAgICAgICAgZG9tTW9kdWxlLnRvZ2dsZURpc3BsYXlOb25lKHRhcmdldFBhcmVudCk7XG4gICAgICAgIGRvbU1vZHVsZS5tYWluUmVuZGVyKCk7XG4gICAgICAgIGlucHV0VmFsdWUudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgcHJvamVjdCBmcm9tIGFycmF5IGFuZCByZW5kZXJpbmdcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtc3ZnJykpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IGNvbmZpcm0oJ0RlbGV0ZSBpdGVtPycpO1xuICAgICAgICBsZXQgcHJldlNpYmxpbmcgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zb2xlLmxvZyhwcmV2U2libGluZy5pbm5lclRleHQpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBmYWxzZSkge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nLmlubmVyVGV4dCA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYFNvcnJ5IHlvdSBjYW5ub3QgZGVsZXRlIHRoZSBkZWZhdWx0IHByaW1hcnkgcHJvamVjdGApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2ljTW9kdWxlLnJlbW92ZVByb2plY3QocHJldlNpYmxpbmcuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIF9hY3RpdmVQcm9qZWN0ID0gJ3ByaW1hcnknO1xuICAgICAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBfYWN0aXZlUHJvamVjdCBhbmQgZGlzcGxheSB0YXNrcyBcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWNhcmQnKSkge1xuICAgICAgICBfYWN0aXZlUHJvamVjdCA9IGUudGFyZ2V0LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdGFzay1idG4nKSkge1xuICAgICAgICBsZXQgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stZm9ybScpO1xuICAgICAgICBkb21Nb2R1bGUudG9nZ2xlVmlzaWJpbGl0eSh0YXJnZXRQYXJlbnQpO1xuICAgICAgICBkb21Nb2R1bGUudG9nZ2xlRGlzcGxheU5vbmUobmV3VGFza0Zvcm0pO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stbWludXMtc3ZnJykpIHtcbiAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgYSBuZXcgdGFzayBmcm9tIHRoZSBmb3JtXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2stY29uZmlybScpKSB7XG4gICAgICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lLWlucHV0Jyk7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kYXRlLWlucHV0Jyk7XG4gICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gJyc7XG5cbiAgICAgICAgbGV0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcbiAgICAgICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgcHJpb3JpdGllcykge1xuICAgICAgICAgICAgaWYgKHByaW9yaXR5LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlID0gcHJpb3JpdHkuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbXVzdCBoYXZlIGEgbmFtZSBiZWZvcmUgYWRkaW5nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IGxvZ2ljTW9kdWxlLm5ld1Rhc2soIGAke25hbWVJbnB1dC52YWx1ZX1gLCBgJHtwcmlvcml0eVZhbHVlfWAsIGAke2RhdGVJbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgICAgIGxvZ2ljTW9kdWxlLmFkZE5ld1Rhc2sobmV3VGFzayk7XG4gICAgICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGEgdGFzayB3aGVuIGNsaWNraW5nIG9uIHRoZSBjaGVjayBtYXJrIHN2Z1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrLXN2ZycpKSB7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IHRhcmdldFBhcmVudC5jaGlsZHJlblsxXS5pbm5lclRleHQ7XG4gICAgICAgIGxvZ2ljTW9kdWxlLnJlbW92ZVRhc2sodGFza05hbWUpO1xuICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBwcmlvcml0eSBmdW5jdGlvblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXItc3ZnJykpIHtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gdGFyZ2V0UGFyZW50LmNoaWxkcmVuWzFdLmlubmVyVGV4dDtcbiAgICAgICAgbG9naWNNb2R1bGUudXBkYXRlVGFza1ByaW9yaXR5KHRhc2tOYW1lKTtcbiAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgZGF0ZSBmdW5jdGlvblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbGVuZGFyLXN2ZycpKSB7XG4gICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZSh0YXJnZXRQYXJlbnQubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdGhlIGRhdGUgYW5kIGNsb3NlIHRoZSB1cGRhdGUtZGF0ZS1kaXZcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzYXZlLXN2ZycpICYmIHRhcmdldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3VwZGF0ZS1kYXRlLWRpdicpKSB7XG4gICAgICAgIGxldCB1cGRhdGVEYXRlID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gdGFyZ2V0UGFyZW50LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0uaW5uZXJUZXh0O1xuICAgICAgICBsZXQgcHJvamVjdEluZGV4ID0gbG9naWNNb2R1bGUuZmluZEluZGV4T2ZQcm9qZWN0KF9hY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IGxvZ2ljTW9kdWxlLmZpbmRJbmRleE9mVGFzayh0YXNrTmFtZSk7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5zZXREdWVEYXRlKHVwZGF0ZURhdGUudmFsdWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cGRhdGVEYXRlLnZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG4gICAgICAgIGRvbU1vZHVsZS5tYWluUmVuZGVyKCk7XG5cbiAgICAgICAgdXBkYXRlRGF0ZS52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIHdoZW4gY2xpY2tpbmcgdGhlIG1pbnVzLXN2ZyBjbG9zZSB0aGUgdXBkYXRlLWRhdGUtZGl2IGFuZCBjbGVhciB0aGUgdXBkYXRlLWlucHV0LnZhbHVlXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWludXMtc3ZnJykgJiYgdGFyZ2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygndXBkYXRlLWRhdGUtZGl2JykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlIGFuZCBjbGVhciB0aGUgdXBkYXRlLWRhdGUtZGl2Jyk7XG4gICAgICAgIGxldCB1cGRhdGVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1kYXRlLWlucHV0Jyk7XG4gICAgICAgIHVwZGF0ZURhdGUudmFsdWUgPSAnJztcbiAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICB9XG59KVxuXG4vLyBtb3VzZW92ZXIgRXZlbnQgbGlzdGVuZXIgdG8gY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgY2hlY2stc3ZnIGJhY2tncm91bmQgY29sb3IgdG8gZGFya1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stc3ZnJykpIHtcbiAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7Y2hlY2tNYXJrfSNjaGVjay1pY29uLWRhcmtcIj48L3VzZT5gXG4gICAgfVxufSlcblxuLy8gbW91c2VvdXQgZXZlbnQgbGlzdGVuZXIgdG8gY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgY2hlY2stc3ZnIGJhY2tncm91bmQgY29sb3IgYmFjayB0byBsaWdodFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay1zdmcnKSkge1xuICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtjaGVja01hcmt9I2NoZWNrLWljb24tbGlnaHRcIj48L3VzZT5gXG4gICAgfVxufSlcblxuXG5leHBvcnQgeyBwcm9qZWN0cywgZ2V0QWN0aXZlUHJvamVjdCB9O1xuIiwiLy8gaW1wb3J0aW5nIGFjdGl2ZVByb2plY3QgdmFyaWFibGUgZm9yIHRlc3RpbmcgcHVycG9zZXNcbmltcG9ydCAqIGFzIGluZGV4IGZyb20gJy4vaW5kZXgnO1xuXG4vLyBsZXQgcHJvamVjdHMgPSBbXTtcblxuLy8gZmFjdG9yeSBmdW5jdGlvbnNcbmNvbnN0IHVwZGF0ZVByb2plY3QgPSB7XG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cbn1cblxuY29uc3QgbmV3UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHByb2plY3QgPSBPYmplY3QuY3JlYXRlKHVwZGF0ZVByb2plY3QpO1xuXG4gICAgcHJvamVjdC50YXNrcyA9IFtdO1xuICAgIHByb2plY3QubmFtZSA9IG5hbWU7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuY29uc3QgdXBkYXRlVGFzayA9IHtcbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfSxcbiAgICBzZXRQcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH0sXG4gICAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH1cbn1cblxuY29uc3QgbmV3VGFzayA9IChuYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSkgPT4ge1xuICAgIGxldCB0YXNrID0gT2JqZWN0LmNyZWF0ZSh1cGRhdGVUYXNrKTtcbiAgICB0YXNrLm5hbWUgPSBuYW1lO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIFxuICAgIHJldHVybiB0YXNrO1xufVxuXG4vLyBtZXRob2RzXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KHByb2plY3QpIHtcbiAgICBpbmRleC5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhPZlByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gaW5kZXgucHJvamVjdHMuZmluZEluZGV4KG9iaiA9PiB7XG4gICAgICAgIHJldHVybiBvYmoubmFtZSA9PT0gcHJvamVjdE5hbWU7XG4gICAgfSlcblxuICAgIHJldHVybiBwcm9qZWN0SW5kZXg7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBpbmRleC5wcm9qZWN0cy5zcGxpY2UoZmluZEluZGV4T2ZQcm9qZWN0KHByb2plY3ROYW1lKSwgMSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2sodGFzaykge1xuICAgIGluZGV4LnByb2plY3RzW2ZpbmRJbmRleE9mUHJvamVjdChpbmRleC5nZXRBY3RpdmVQcm9qZWN0KCkpXS50YXNrcy5wdXNoKHRhc2spO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhPZlRhc2sodGFza05hbWUpIHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGluZGV4LmdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gZmluZEluZGV4T2ZQcm9qZWN0KGFjdGl2ZVByb2plY3QpO1xuICAgIGxldCB0YXNrSW5kZXggPSBpbmRleC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleChvYmogPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm5hbWUgPT09IHRhc2tOYW1lO1xuICAgIH0pXG4gICAgcmV0dXJuIHRhc2tJbmRleDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrTmFtZSkge1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gaW5kZXguZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIGluZGV4LnByb2plY3RzW2ZpbmRJbmRleE9mUHJvamVjdChhY3RpdmVQcm9qZWN0KV0udGFza3Muc3BsaWNlKGZpbmRJbmRleE9mVGFzayh0YXNrTmFtZSksIDEpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrUHJpb3JpdHkodGFza05hbWUpIHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGluZGV4LmdldEFjdGl2ZVByb2plY3QoKTtcblxuICAgIGlmIChpbmRleC5wcm9qZWN0c1tmaW5kSW5kZXhPZlByb2plY3QoYWN0aXZlUHJvamVjdCldLnRhc2tzW2ZpbmRJbmRleE9mVGFzayh0YXNrTmFtZSldLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgaW5kZXgucHJvamVjdHNbZmluZEluZGV4T2ZQcm9qZWN0KGFjdGl2ZVByb2plY3QpXS50YXNrc1tmaW5kSW5kZXhPZlRhc2sodGFza05hbWUpXS5wcmlvcml0eSA9ICdsb3cnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4LnByb2plY3RzW2ZpbmRJbmRleE9mUHJvamVjdChhY3RpdmVQcm9qZWN0KV0udGFza3NbZmluZEluZGV4T2ZUYXNrKHRhc2tOYW1lKV0ucHJpb3JpdHkgPSAnaGlnaCc7XG4gICAgfVxufVxuXG5leHBvcnQgeyBuZXdQcm9qZWN0LCBhZGROZXdQcm9qZWN0LCBmaW5kSW5kZXhPZlByb2plY3QsIHJlbW92ZVByb2plY3QsIG5ld1Rhc2ssIGFkZE5ld1Rhc2ssIGZpbmRJbmRleE9mVGFzaywgcmVtb3ZlVGFzaywgdXBkYXRlVGFza1ByaW9yaXR5IH07XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9