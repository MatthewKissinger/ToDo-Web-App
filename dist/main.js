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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-light-color: #F7F9F9;\n    --main-dark-color: #423629;\n    --main-gray-color: #6e8894;\n    --main-remove-color: #d64550;\n    --main-add-color: #78bc61;\n}\n\nsvg > * {\n    pointer-events: none;\n}\n\n.feather {\n    display: none;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 15vh 85vh 10vh;\n    color: var(--main-dark-color);\n}\n\np {\n    font-size: 1.25rem;\n    pointer-events: none;\n}\n\nbutton {\n    padding: .75rem 1.5rem;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\nheader {\n    /* border: 1px solid blue; */\n    color: var(--main-light-color);\n    background-color: var(--main-gray-color);\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain {\n    /* border: 1px solid green; */\n    display: grid;\n    grid-template-columns: 1fr 2.5fr;\n}\n\n#project-wrapper {\n    /* border: 1px solid orange; */\n    padding: 1.5rem;\n    background-color: #d3d6db;\n}\n\n.project-card, .new-project-btn, .new-project-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    padding: .75rem 1rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    background-color: var(--main-light-color);\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.active-project {\n    background-color: var(--main-gray-color);\n    color: var(--main-light-color);\n}\n\n.active-project > svg {\n    stroke: var(--main-light-color);\n}\n\n.new-project-form {\n    justify-content: flex-start;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\ninput {\n    padding: .3rem .5rem;\n    border: 1px solid var(--main-gray-color);\n    font-size: 1rem;\n}\n\ninput[type=\"radio\"], input[type=\"date\"] {\n    cursor: pointer;\n}\n\nsvg {\n    stroke: var(--main-dark-color);\n    fill: none;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\nsvg:hover {\n    stroke: var(--main-add-color);\n}\n\n.check-svg:hover {\n    stroke: var(--main-light-color);\n}\n\n.plus-svg, .save-svg {\n    margin-left: auto;\n}\n\n.minus-svg {\n    margin-left: 1rem;\n}\n\n.update-date-div > .minus-svg, .update-date-div > .save-svg {\n    margin: 0;\n    height: 1.8rem;\n    width: 1.8rem;\n}\n\n.minus-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.delete-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.star-svg {\n    stroke: var(--main-add-color);\n}\n\n.star-svg:hover {\n    stroke: var(--main-gray-color);\n}\n\n.star-fill {\n    fill: var(--main-add-color);\n}\n\n#task-wrapper {\n    padding: 1.5rem 3rem;\n    position: relative;\n    background-color: #bac5d6;\n}\n\n.task-card, .new-task-form {\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 2rem;\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    padding: .75rem 1.5rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    background-color: var(--main-light-color);\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n#new-task-card {\n    width: 20%;\n    margin: 0 auto 1rem;\n}\n\n.new-task-form {\n    flex-direction: column;\n    cursor: default;\n    width: 40%;\n    padding: 1.5rem 1.5rem;\n    margin: 0 auto 1rem;\n    position: absolute;\n    z-index: 2;\n    top: 5%;\n    left: 30%;\n    background-color: var(--main-light-color);\n}\n\n.task-form-div {\n    display: flex;\n    align-items: center;\n    width: 70%;\n}\n\n.update-date-div {\n    position: absolute;\n    right: 0%;\n    top: -80%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--main-light-color);\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    width: 275px;\n    padding: .7rem;\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n.task-minus-svg {\n    margin-left: auto;\n}\n\n.task-minus-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.task-form-div:nth-child(4) {\n    justify-content: space-between;\n}\n\n.task-date-input, .task-name-input {\n    margin-left: auto;\n}\n\n.due-date-text {\n    margin-left: auto;\n}\n\n.plus-div {\n    margin-left: auto;\n}\n\nfooter {\n    background-color: var(--main-gray-color);\n    color: var(--main-light-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hide {\n    display: none;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,0BAA0B;IAC1B,0BAA0B;IAC1B,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,yFAAyF;AAC7F;;AAEA;IACI,4BAA4B;IAC5B,8BAA8B;IAC9B,wCAAwC;IACxC,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;IAC9B,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,wCAAwC;IACxC,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,yCAAyC;IACzC,yFAAyF;AAC7F;;AAEA;IACI,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,UAAU;IACV,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,wCAAwC;IACxC,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,yCAAyC;IACzC,0FAA0F;AAC9F;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,UAAU;IACV,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,OAAO;IACP,SAAS;IACT,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,yCAAyC;IACzC,wCAAwC;IACxC,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,0FAA0F;AAC9F;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-light-color: #F7F9F9;\n    --main-dark-color: #423629;\n    --main-gray-color: #6e8894;\n    --main-remove-color: #d64550;\n    --main-add-color: #78bc61;\n}\n\nsvg > * {\n    pointer-events: none;\n}\n\n.feather {\n    display: none;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 15vh 85vh 10vh;\n    color: var(--main-dark-color);\n}\n\np {\n    font-size: 1.25rem;\n    pointer-events: none;\n}\n\nbutton {\n    padding: .75rem 1.5rem;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\nheader {\n    /* border: 1px solid blue; */\n    color: var(--main-light-color);\n    background-color: var(--main-gray-color);\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain {\n    /* border: 1px solid green; */\n    display: grid;\n    grid-template-columns: 1fr 2.5fr;\n}\n\n#project-wrapper {\n    /* border: 1px solid orange; */\n    padding: 1.5rem;\n    background-color: #d3d6db;\n}\n\n.project-card, .new-project-btn, .new-project-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    padding: .75rem 1rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    background-color: var(--main-light-color);\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.active-project {\n    background-color: var(--main-gray-color);\n    color: var(--main-light-color);\n}\n\n.active-project > svg {\n    stroke: var(--main-light-color);\n}\n\n.new-project-form {\n    justify-content: flex-start;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\ninput {\n    padding: .3rem .5rem;\n    border: 1px solid var(--main-gray-color);\n    font-size: 1rem;\n}\n\ninput[type=\"radio\"], input[type=\"date\"] {\n    cursor: pointer;\n}\n\nsvg {\n    stroke: var(--main-dark-color);\n    fill: none;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\nsvg:hover {\n    stroke: var(--main-add-color);\n}\n\n.check-svg:hover {\n    stroke: var(--main-light-color);\n}\n\n.plus-svg, .save-svg {\n    margin-left: auto;\n}\n\n.minus-svg {\n    margin-left: 1rem;\n}\n\n.update-date-div > .minus-svg, .update-date-div > .save-svg {\n    margin: 0;\n    height: 1.8rem;\n    width: 1.8rem;\n}\n\n.minus-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.delete-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.star-svg {\n    stroke: var(--main-add-color);\n}\n\n.star-svg:hover {\n    stroke: var(--main-gray-color);\n}\n\n.star-fill {\n    fill: var(--main-add-color);\n}\n\n#task-wrapper {\n    padding: 1.5rem 3rem;\n    position: relative;\n    background-color: #bac5d6;\n}\n\n.task-card, .new-task-form {\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 2rem;\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    padding: .75rem 1.5rem;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    background-color: var(--main-light-color);\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n#new-task-card {\n    width: 20%;\n    margin: 0 auto 1rem;\n}\n\n.new-task-form {\n    flex-direction: column;\n    cursor: default;\n    width: 40%;\n    padding: 1.5rem 1.5rem;\n    margin: 0 auto 1rem;\n    position: absolute;\n    z-index: 2;\n    top: 5%;\n    left: 30%;\n    background-color: var(--main-light-color);\n}\n\n.task-form-div {\n    display: flex;\n    align-items: center;\n    width: 70%;\n}\n\n.update-date-div {\n    position: absolute;\n    right: 0%;\n    top: -80%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--main-light-color);\n    border: 1px solid var(--main-gray-color);\n    border-radius: 6px;\n    width: 275px;\n    padding: .7rem;\n    box-shadow: rgba(91, 97, 102, 0.2) 0px 1px 2px 0px, rgba(71, 76, 79, 0.15) 0px 1px 3px 1px;\n}\n\n.task-minus-svg {\n    margin-left: auto;\n}\n\n.task-minus-svg:hover {\n    stroke: var(--main-remove-color);\n}\n\n.task-form-div:nth-child(4) {\n    justify-content: space-between;\n}\n\n.task-date-input, .task-name-input {\n    margin-left: auto;\n}\n\n.due-date-text {\n    margin-left: auto;\n}\n\n.plus-div {\n    margin-left: auto;\n}\n\nfooter {\n    background-color: var(--main-gray-color);\n    color: var(--main-light-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hide {\n    display: none;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
    taskMinusSvg.innerHTML = `<use href="${_minus_square_svg__WEBPACK_IMPORTED_MODULE_9__}#minus-icon"></use>`;

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

            let updateDateDiv = document.createElement('div');
            updateDateDiv.classList.add('update-date-div');
            updateDateDiv.classList.add('hide');
            let updateDateInput = document.createElement('input');
            updateDateInput.classList.add('update-date-input');
            updateDateInput.setAttribute('type', 'date');
            // add a confirm or save button svg here
            let saveSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            saveSvg.classList.add('save-svg');
            saveSvg.innerHTML = `<use href="${_save_svg__WEBPACK_IMPORTED_MODULE_8__}#save-icon"></use>`;
            let minusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            minusSvg.classList.add('minus-svg');
            minusSvg.innerHTML = `<use href="${_minus_square_svg__WEBPACK_IMPORTED_MODULE_9__}#minus-icon"></use>`;

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
/* harmony export */   "getActiveProject": () => (/* binding */ getActiveProject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// To Do List
// ** update and improve styling features





let _activeProject = 'primary';

function getActiveProject() {
    return _activeProject;
}

// Default objects that are created and pushed to the projects array
const project1 = _logic__WEBPACK_IMPORTED_MODULE_1__.newProject('primary');
_logic__WEBPACK_IMPORTED_MODULE_1__.addNewProject(project1);
const task1 = _logic__WEBPACK_IMPORTED_MODULE_1__.newTask('breakfast', 'high', '2022-04-20');
_logic__WEBPACK_IMPORTED_MODULE_1__.addNewTask(task1);

const project2 = _logic__WEBPACK_IMPORTED_MODULE_1__.newProject('groceries');
_logic__WEBPACK_IMPORTED_MODULE_1__.addNewProject(project2);

_dom__WEBPACK_IMPORTED_MODULE_2__.mainRender();

window.addEventListener('click', function (e) {
    let targetParent = e.target.parentElement;

    console.log(e.target);
    console.log(targetParent);

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
        _logic__WEBPACK_IMPORTED_MODULE_1__.projects[projectIndex].tasks[taskIndex].setDueDate(updateDate.value);
        console.log(updateDate.value);
        console.log(_logic__WEBPACK_IMPORTED_MODULE_1__.projects);

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
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "updateTaskPriority": () => (/* binding */ updateTaskPriority)
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

function updateTaskPriority(taskName) {
    let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.getActiveProject();

    if (projects[findIndexOfProject(activeProject)].tasks[findIndexOfTask(taskName)].priority === 'high') {
        projects[findIndexOfProject(activeProject)].tasks[findIndexOfTask(taskName)].priority = 'low';
    } else {
        projects[findIndexOfProject(activeProject)].tasks[findIndexOfTask(taskName)].priority = 'high';
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

module.exports = __webpack_require__.p + "5c78eee6d8785c24f0c8.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3MiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby13ZWItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLXdlYi1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8td2ViLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1saWdodC1jb2xvcjogI0Y3RjlGOTtcXG4gICAgLS1tYWluLWRhcmstY29sb3I6ICM0MjM2Mjk7XFxuICAgIC0tbWFpbi1ncmF5LWNvbG9yOiAjNmU4ODk0O1xcbiAgICAtLW1haW4tcmVtb3ZlLWNvbG9yOiAjZDY0NTUwO1xcbiAgICAtLW1haW4tYWRkLWNvbG9yOiAjNzhiYzYxO1xcbn1cXG5cXG5zdmcgPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5mZWF0aGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCA4NXZoIDEwdmg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxubWFpbiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmcjtcXG59XFxuXFxuI3Byb2plY3Qtd3JhcHBlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTsgKi9cXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkNmRiO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLCAubmV3LXByb2plY3QtYnRuLCAubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0ID4gc3ZnIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0sIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3ZnIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1hZGQtY29sb3IpO1xcbn1cXG5cXG4uY2hlY2stc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLnBsdXMtc3ZnLCAuc2F2ZS1zdmcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm1pbnVzLXN2ZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udXBkYXRlLWRhdGUtZGl2ID4gLm1pbnVzLXN2ZywgLnVwZGF0ZS1kYXRlLWRpdiA+IC5zYXZlLXN2ZyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgIHdpZHRoOiAxLjhyZW07XFxufVxcblxcbi5taW51cy1zdmc6aG92ZXIge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tcmVtb3ZlLWNvbG9yKTtcXG59XFxuXFxuLmRlbGV0ZS1zdmc6aG92ZXIge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tcmVtb3ZlLWNvbG9yKTtcXG59XFxuXFxuLnN0YXItc3ZnIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLWFkZC1jb2xvcik7XFxufVxcblxcbi5zdGFyLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG59XFxuXFxuLnN0YXItZmlsbCB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tYWRkLWNvbG9yKTtcXG59XFxuXFxuI3Rhc2std3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYWM1ZDY7XFxufVxcblxcbi50YXNrLWNhcmQsIC5uZXctdGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg5MSwgOTcsIDEwMiwgMC4yKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNzEsIDc2LCA3OSwgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG4jbmV3LXRhc2stY2FyZCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbjogMCBhdXRvIDFyZW07XFxufVxcblxcbi5uZXctdGFzay1mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxufVxcblxcbi50YXNrLWZvcm0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnVwZGF0ZS1kYXRlLWRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAlO1xcbiAgICB0b3A6IC04MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgd2lkdGg6IDI3NXB4O1xcbiAgICBwYWRkaW5nOiAuN3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg5MSwgOTcsIDEwMiwgMC4yKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNzEsIDc2LCA3OSwgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG4udGFzay1taW51cy1zdmcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2stbWludXMtc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLXJlbW92ZS1jb2xvcik7XFxufVxcblxcbi50YXNrLWZvcm0tZGl2Om50aC1jaGlsZCg0KSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stZGF0ZS1pbnB1dCwgLnRhc2stbmFtZS1pbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZHVlLWRhdGUtdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucGx1cy1kaXYge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZix5RkFBeUY7QUFDN0Y7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMseUZBQXlGO0FBQzdGOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLDBGQUEwRjtBQUM5Rjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7SUFDVCx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6Qyx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsMEZBQTBGO0FBQzlGOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tbGlnaHQtY29sb3I6ICNGN0Y5Rjk7XFxuICAgIC0tbWFpbi1kYXJrLWNvbG9yOiAjNDIzNjI5O1xcbiAgICAtLW1haW4tZ3JheS1jb2xvcjogIzZlODg5NDtcXG4gICAgLS1tYWluLXJlbW92ZS1jb2xvcjogI2Q2NDU1MDtcXG4gICAgLS1tYWluLWFkZC1jb2xvcjogIzc4YmM2MTtcXG59XFxuXFxuc3ZnID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZmVhdGhlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmggODV2aCAxMHZoO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbm1haW4ge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnI7XFxufVxcblxcbiNwcm9qZWN0LXdyYXBwZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7ICovXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDZkYjtcXG59XFxuXFxuLnByb2plY3QtY2FyZCwgLm5ldy1wcm9qZWN0LWJ0biwgLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogLjc1cmVtIDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCA+IHN2ZyB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnN2ZyB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zdmc6aG92ZXIge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tYWRkLWNvbG9yKTtcXG59XFxuXFxuLmNoZWNrLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxufVxcblxcbi5wbHVzLXN2ZywgLnNhdmUtc3ZnIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5taW51cy1zdmcge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLnVwZGF0ZS1kYXRlLWRpdiA+IC5taW51cy1zdmcsIC51cGRhdGUtZGF0ZS1kaXYgPiAuc2F2ZS1zdmcge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMS44cmVtO1xcbiAgICB3aWR0aDogMS44cmVtO1xcbn1cXG5cXG4ubWludXMtc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLXJlbW92ZS1jb2xvcik7XFxufVxcblxcbi5kZWxldGUtc3ZnOmhvdmVyIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1tYWluLXJlbW92ZS1jb2xvcik7XFxufVxcblxcbi5zdGFyLXN2ZyB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1hZGQtY29sb3IpO1xcbn1cXG5cXG4uc3Rhci1zdmc6aG92ZXIge1xcbiAgICBzdHJva2U6IHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxufVxcblxcbi5zdGFyLWZpbGwge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLWFkZC1jb2xvcik7XFxufVxcblxcbiN0YXNrLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFjNWQ2O1xcbn1cXG5cXG4udGFzay1jYXJkLCAubmV3LXRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTEsIDk3LCAxMDIsIDAuMikgMHB4IDFweCAycHggMHB4LCByZ2JhKDcxLCA3NiwgNzksIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuI25ldy10YXNrLWNhcmQge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtO1xcbn1cXG5cXG4ubmV3LXRhc2stZm9ybSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcGFkZGluZzogMS41cmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4udGFzay1mb3JtLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbi51cGRhdGUtZGF0ZS1kaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgdG9wOiAtODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdpZHRoOiAyNzVweDtcXG4gICAgcGFkZGluZzogLjdyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTEsIDk3LCAxMDIsIDAuMikgMHB4IDFweCAycHggMHB4LCByZ2JhKDcxLCA3NiwgNzksIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuLnRhc2stbWludXMtc3ZnIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50YXNrLW1pbnVzLXN2Zzpob3ZlciB7XFxuICAgIHN0cm9rZTogdmFyKC0tbWFpbi1yZW1vdmUtY29sb3IpO1xcbn1cXG5cXG4udGFzay1mb3JtLWRpdjpudGgtY2hpbGQoNCkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWRhdGUtaW5wdXQsIC50YXNrLW5hbWUtaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmR1ZS1kYXRlLXRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnBsdXMtZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBET00gaW50ZXJhY3Rpb24gYW5kIGdlbmVyYXRpb24gbW9kdWxlXG5pbXBvcnQgKiBhcyBsb2dpY01vZHVsZSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCAqIGFzIGluZGV4IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHRyYXNoQ2FuIGZyb20gJy4vdHJhc2gtMi5zdmcnO1xuaW1wb3J0IHBsdXNTcXVhcmUgZnJvbSAnLi9wbHVzLXNxdWFyZS5zdmcnO1xuaW1wb3J0IGNoZWNrTWFyayBmcm9tICcuL2NoZWNrLnN2Zyc7XG5pbXBvcnQgc3Rhckljb24gZnJvbSAnLi9zdGFyLnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJJY29uIGZyb20gJy4vY2FsZW5kYXIuc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2VkaXQuc3ZnJztcbmltcG9ydCBzYXZlSWNvbiBmcm9tICcuL3NhdmUuc3ZnJztcbmltcG9ydCBtaW51c0ljb24gZnJvbSAnLi9taW51cy1zcXVhcmUuc3ZnJztcblxuLy8gZ2xvYmFsIHZhcmlhYmxlc1xubGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbi8vIHJlbmRlciBmdW5jdGlvbnNcbi8vIGRlZmF1bHQgcmVuZGVyIGZ1bmN0aW9uIFxuZnVuY3Rpb24gbWFpblJlbmRlcigpIHtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgbGV0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXdyYXBwZXInKTtcblxuICAgIGxldCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ldy1wcm9qZWN0LWJ0bicpO1xuICAgIGxldCBuZXdQcm9qZWN0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuZXdQcm9qZWN0UGFyYS5pbm5lclRleHQgPSAnYWRkIHByb2plY3QnO1xuXG4gICAgbGV0IHBsdXNTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHBsdXNTdmcuY2xhc3NMaXN0LmFkZCgncGx1cy1zdmcnKTtcbiAgICBwbHVzU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3BsdXNTcXVhcmV9I3BsdXMtaWNvblwiPjwvdXNlPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0UGFyYSk7XG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChwbHVzU3ZnKTsgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3LXByb2plY3QtZm9ybScpO1xuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBsZXQgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdE5hbWVMYWJlbC5pbm5lclRleHQgPSAnbmFtZSc7XG4gICAgbGV0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3UHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWlucHV0Jyk7XG4gICAgbGV0IHNhdmVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHNhdmVTdmcuY2xhc3NMaXN0LmFkZCgnc2F2ZS1zdmcnKTtcbiAgICBzYXZlU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3NhdmVJY29ufSNzYXZlLWljb25cIj48L3VzZT5gO1xuICAgIGxldCBtaW51c1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbWludXNTdmcuY2xhc3NMaXN0LmFkZCgnbWludXMtc3ZnJyk7XG4gICAgbWludXNTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7bWludXNJY29ufSNtaW51cy1pY29uXCI+PC91c2U+YDtcblxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RJbnB1dCk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc2F2ZVN2Zyk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobWludXNTdmcpO1xuXG4gICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG4gICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gICAgbG9naWNNb2R1bGUucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkJyk7XG5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgICAgLy8gVUkgZGlzcGxheSBvZiB0aGUgYWN0aXZlUHJvamVjdCBzZWxlY3RlZFxuICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGluZGV4LmdldEFjdGl2ZVByb2plY3QoKTtcblxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbGV0ZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgIGRlbGV0ZVN2Zy5jbGFzc0xpc3QuYWRkKCdkZWxldGUtc3ZnJyk7XG4gICAgICAgIGRlbGV0ZVN2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHt0cmFzaENhbn0jdHJhc2gtaWNvblwiPjwvdXNlPmA7XG5cbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVTdmcpO1xuICAgICAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgfSlcblxuICAgIC8vIHNlcGFyYXRlIGludG8gaXQncyBvd24gZnVuY3Rpb25cbiAgICBsZXQgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2std3JhcHBlcicpO1xuXG4gICAgLy8gYWRkIGEgbmV3IHRhc2sgYnV0dG9uL2RpdlxuXG4gICAgbGV0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jYXJkJyk7XG4gICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idG4nKTtcbiAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LXRhc2stY2FyZCcpO1xuICAgIGxldCBuZXdUYXNrUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuZXdUYXNrUGFyYS5pbm5lclRleHQgPSAnYWRkIHRhc2snO1xuICAgIGxldCB0YXNrUGx1c1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgdGFza1BsdXNTdmcuY2xhc3NMaXN0LmFkZCgncGx1cy1zdmcnKTtcbiAgICB0YXNrUGx1c1N2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtwbHVzU3F1YXJlfSNwbHVzLWljb25cIj48L3VzZT5gO1xuXG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrUGFyYSk7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUGx1c1N2Zyk7XG5cbiAgICBsZXQgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJyk7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgbGV0IHRhc2tNaW51c1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgdGFza01pbnVzU3ZnLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWludXMtc3ZnJyk7XG4gICAgdGFza01pbnVzU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke21pbnVzSWNvbn0jbWludXMtaWNvblwiPjwvdXNlPmA7XG5cbiAgICBsZXQgdGFza05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTmFtZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tZGl2Jyk7XG4gICAgbGV0IHRhc2tOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tOYW1lTGFiZWwuaW5uZXJUZXh0ID0gJ25hbWUnO1xuICAgIGxldCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZS1pbnB1dCcpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgIHRhc2tOYW1lRGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lTGFiZWwpO1xuICAgIHRhc2tOYW1lRGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuXG4gICAgbGV0IHRhc2tEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RhdGVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWRpdicpO1xuICAgIGxldCB0YXNrRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdkYXRlJztcbiAgICBsZXQgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUtaW5wdXQnKTtcbiAgICB0YXNrRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5cbiAgICB0YXNrRGF0ZURpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZUxhYmVsKTtcbiAgICB0YXNrRGF0ZURpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcblxuICAgIGxldCB0YXNrUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWRpdicpO1xuICAgIGxldCBsb3dQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsb3dQcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdsb3cgcHJpb3JpdHknO1xuICAgIGxvd1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbG93Jyk7XG4gICAgbGV0IGxvd1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxvd1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgbG93UHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvdycpO1xuICAgIGxvd1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgbG93UHJpb3JpdHlJbnB1dC5jaGVja2VkID0gJ3RydWUnO1xuICAgIGxldCBoaWdoUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaGlnaFByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ2hpZ2ggcHJpb3JpdHknO1xuICAgIGhpZ2hQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xvdycpO1xuICAgIGxldCBoaWdoUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaGlnaFByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgaGlnaFByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdoaWdoJyk7XG4gICAgaGlnaFByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG5cbiAgICB0YXNrUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlMYWJlbCk7XG4gICAgdGFza1ByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5SW5wdXQpO1xuICAgIHRhc2tQcmlvcml0eURpdi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlMYWJlbCk7XG4gICAgdGFza1ByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eUlucHV0KTtcblxuICAgIGxldCBuZXdUYXNrQ29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tDb25maXJtLmlubmVyVGV4dCA9ICdDb25maXJtJztcbiAgICBuZXdUYXNrQ29uZmlybS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1jb25maXJtJyk7XG5cbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTWludXNTdmcpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lRGl2KTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZURpdik7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5RGl2KTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrQ29uZmlybSk7XG5cbiAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcbiAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XG5cbiAgICBpZiAoIShsb2dpY01vZHVsZS5wcm9qZWN0c1tsb2dpY01vZHVsZS5maW5kSW5kZXhPZlByb2plY3QoaW5kZXguZ2V0QWN0aXZlUHJvamVjdCgpKV0udGFza3MubGVuZ3RoIDw9IDApKSB7XG4gICAgICAgIGxvZ2ljTW9kdWxlLnByb2plY3RzW2xvZ2ljTW9kdWxlLmZpbmRJbmRleE9mUHJvamVjdChpbmRleC5nZXRBY3RpdmVQcm9qZWN0KCkpXS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFzay1jYXJkJyk7XG4gICAgICAgICAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0YXNrTmFtZS5pbm5lclRleHQgPSB0YXNrLm5hbWU7XG4gICAgXG4gICAgICAgICAgICBsZXQgY2hlY2tTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICAgICAgY2hlY2tTdmcuY2xhc3NMaXN0LmFkZCgnY2hlY2stc3ZnJyk7XG4gICAgICAgICAgICBjaGVja1N2Zy5pbm5lckhUTUwgPSBgPHVzZSBocmVmPVwiJHtjaGVja01hcmt9I2NoZWNrLWljb25cIj48L3VzZT5gO1xuICAgIFxuICAgICAgICAgICAgbGV0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUtdGV4dCcpO1xuICAgICAgICAgICAgZHVlRGF0ZVRleHQuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuICAgIFxuICAgICAgICAgICAgbGV0IGNhbGVuZGFyU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIGNhbGVuZGFyU3ZnLmNsYXNzTGlzdC5hZGQoJ2NhbGVuZGFyLXN2ZycpO1xuICAgICAgICAgICAgY2FsZW5kYXJTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7Y2FsZW5kYXJJY29ufSNjYWxlbmRhci1pY29uXCI+PC91c2U+YDtcbiAgICBcbiAgICAgICAgICAgIGxldCBzdGFyU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIHN0YXJTdmcuY2xhc3NMaXN0LmFkZCgnc3Rhci1zdmcnKTtcbiAgICAgICAgICAgIHN0YXJTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7c3Rhckljb259I3N0YXItaWNvblwiPjwvdXNlPmA7XG4gICAgXG4gICAgICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgc3RhclN2Zy5jbGFzc0xpc3QuYWRkKCdzdGFyLWZpbGwnKTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1cGRhdGVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3VwZGF0ZS1kYXRlLWRpdicpO1xuICAgICAgICAgICAgdXBkYXRlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBsZXQgdXBkYXRlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHVwZGF0ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd1cGRhdGUtZGF0ZS1pbnB1dCcpO1xuICAgICAgICAgICAgdXBkYXRlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICAvLyBhZGQgYSBjb25maXJtIG9yIHNhdmUgYnV0dG9uIHN2ZyBoZXJlXG4gICAgICAgICAgICBsZXQgc2F2ZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgICAgICBzYXZlU3ZnLmNsYXNzTGlzdC5hZGQoJ3NhdmUtc3ZnJyk7XG4gICAgICAgICAgICBzYXZlU3ZnLmlubmVySFRNTCA9IGA8dXNlIGhyZWY9XCIke3NhdmVJY29ufSNzYXZlLWljb25cIj48L3VzZT5gO1xuICAgICAgICAgICAgbGV0IG1pbnVzU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIG1pbnVzU3ZnLmNsYXNzTGlzdC5hZGQoJ21pbnVzLXN2ZycpO1xuICAgICAgICAgICAgbWludXNTdmcuaW5uZXJIVE1MID0gYDx1c2UgaHJlZj1cIiR7bWludXNJY29ufSNtaW51cy1pY29uXCI+PC91c2U+YDtcblxuICAgICAgICAgICAgdXBkYXRlRGF0ZURpdi5hcHBlbmRDaGlsZCh1cGRhdGVEYXRlSW5wdXQpO1xuICAgICAgICAgICAgdXBkYXRlRGF0ZURpdi5hcHBlbmRDaGlsZChzYXZlU3ZnKTtcbiAgICAgICAgICAgIHVwZGF0ZURhdGVEaXYuYXBwZW5kQ2hpbGQobWludXNTdmcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjaGVja1N2Zyk7XG4gICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlVGV4dCk7XG4gICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYWxlbmRhclN2Zyk7XG4gICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChzdGFyU3ZnKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHVwZGF0ZURhdGVEaXYpO1xuICAgICAgICAgICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuICAgICAgICB9KVxuICAgIH0gXG4gICAgICAgIFxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdFdyYXBwZXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5Tm9uZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVZpc2liaWxpdHkoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59XG5cbmV4cG9ydCB7IG1haW5SZW5kZXIsIHRvZ2dsZURpc3BsYXlOb25lLCB0b2dnbGVWaXNpYmlsaXR5IH07IiwiLy8gVG8gRG8gTGlzdFxuLy8gKiogdXBkYXRlIGFuZCBpbXByb3ZlIHN0eWxpbmcgZmVhdHVyZXNcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBsb2dpY01vZHVsZSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCAqIGFzIGRvbU1vZHVsZSBmcm9tICcuL2RvbSc7XG5cbmxldCBfYWN0aXZlUHJvamVjdCA9ICdwcmltYXJ5JztcblxuZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgICByZXR1cm4gX2FjdGl2ZVByb2plY3Q7XG59XG5cbi8vIERlZmF1bHQgb2JqZWN0cyB0aGF0IGFyZSBjcmVhdGVkIGFuZCBwdXNoZWQgdG8gdGhlIHByb2plY3RzIGFycmF5XG5jb25zdCBwcm9qZWN0MSA9IGxvZ2ljTW9kdWxlLm5ld1Byb2plY3QoJ3ByaW1hcnknKTtcbmxvZ2ljTW9kdWxlLmFkZE5ld1Byb2plY3QocHJvamVjdDEpO1xuY29uc3QgdGFzazEgPSBsb2dpY01vZHVsZS5uZXdUYXNrKCdicmVha2Zhc3QnLCAnaGlnaCcsICcyMDIyLTA0LTIwJyk7XG5sb2dpY01vZHVsZS5hZGROZXdUYXNrKHRhc2sxKTtcblxuY29uc3QgcHJvamVjdDIgPSBsb2dpY01vZHVsZS5uZXdQcm9qZWN0KCdncm9jZXJpZXMnKTtcbmxvZ2ljTW9kdWxlLmFkZE5ld1Byb2plY3QocHJvamVjdDIpO1xuXG5kb21Nb2R1bGUubWFpblJlbmRlcigpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCB0YXJnZXRQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGNvbnNvbGUubG9nKHRhcmdldFBhcmVudCk7XG5cbiAgICAvLyB3aGVuIHRoZSBhZGQgcHJvamVjdCBwbHVzIGJ1dHRvbiBpcyBzZWxlY3RlZCBzd2FwIG91dCB0aGUgYWRkIHByb2plY3QgZGl2IHdpdGggdGhlIGFkZCBwcm9qZWN0IGZvcm1cbiAgICBpZiAodGFyZ2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXByb2plY3QtYnRuJykpIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgZG9tTW9kdWxlLnRvZ2dsZURpc3BsYXlOb25lKHRhcmdldFBhcmVudCk7XG4gICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZShuZXdQcm9qZWN0Rm9ybSk7XG4gICAgfVxuXG4gICAgLy8gc2F2ZSBhbmQgYWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBhcnJheSBhbmQgcmVuZGVyXG4gICAgaWYgKHRhcmdldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1wcm9qZWN0LWZvcm0nKSAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NhdmUtc3ZnJykpIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtaW5wdXQnKTtcblxuICAgICAgICAvLyBhZGQgbG9naWMgdGhhdCB5b3UgY2Fubm90IG5hbWUgYSBwcm9qZWN0ICdwcmltYXJ5JyAtIGl0IGlzIHRoZSBkZWZhdWx0IHByb2plY3QgbmFtZSBnaXZlblxuICAgICAgICBpZiAoaW5wdXRWYWx1ZS52YWx1ZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICAgICAgICBhbGVydChgU29ycnkgeW91IGNhbm5vdCBtYWtlIGEgZHVwbGljYXRlIHByaW1hcnkgcHJvamVjdGApO1xuICAgICAgICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIG5hbWUgeW91ciBuZXcgcHJvamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGxvZ2ljTW9kdWxlLm5ld1Byb2plY3QoaW5wdXRWYWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICBsb2dpY01vZHVsZS5hZGROZXdQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtYnRuJyk7XG4gICAgICAgICAgICBkb21Nb2R1bGUudG9nZ2xlRGlzcGxheU5vbmUodGFyZ2V0UGFyZW50KTtcbiAgICAgICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZShuZXdQcm9qZWN0QnRuKTtcbiAgICAgICAgICAgIGRvbU1vZHVsZS5tYWluUmVuZGVyKCk7XG4gICAgICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYW5jZWwgdGhlIGFkZCBuZXcgcHJvamVjdCBmb3JtIGRpc3BsYXlcbiAgICBpZiAodGFyZ2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXByb2plY3QtZm9ybScpICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWludXMtc3ZnJykpIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtaW5wdXQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZSB0aGUgYWRkIHByb2plY3QgZm9ybSBhbmQgYWRkIHByb2plY3QgYnV0dG9uJyk7XG5cbiAgICAgICAgZG9tTW9kdWxlLnRvZ2dsZURpc3BsYXlOb25lKHRhcmdldFBhcmVudCk7XG4gICAgICAgIGRvbU1vZHVsZS5tYWluUmVuZGVyKCk7XG4gICAgICAgIGlucHV0VmFsdWUudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgcHJvamVjdCBmcm9tIGFycmF5IGFuZCByZW5kZXJpbmdcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtc3ZnJykpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IGNvbmZpcm0oJ0RlbGV0ZSBpdGVtPycpO1xuICAgICAgICBsZXQgcHJldlNpYmxpbmcgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zb2xlLmxvZyhwcmV2U2libGluZy5pbm5lclRleHQpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBmYWxzZSkge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nLmlubmVyVGV4dCA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYFNvcnJ5IHlvdSBjYW5ub3QgZGVsZXRlIHRoZSBkZWZhdWx0IHByaW1hcnkgcHJvamVjdGApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2ljTW9kdWxlLnJlbW92ZVByb2plY3QocHJldlNpYmxpbmcuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIF9hY3RpdmVQcm9qZWN0ID0gJ3ByaW1hcnknO1xuICAgICAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBfYWN0aXZlUHJvamVjdCBhbmQgZGlzcGxheSB0YXNrcyBcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWNhcmQnKSkge1xuICAgICAgICBfYWN0aXZlUHJvamVjdCA9IGUudGFyZ2V0LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdGFzay1idG4nKSkge1xuICAgICAgICBsZXQgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stZm9ybScpO1xuICAgICAgICBkb21Nb2R1bGUudG9nZ2xlVmlzaWJpbGl0eSh0YXJnZXRQYXJlbnQpO1xuICAgICAgICBkb21Nb2R1bGUudG9nZ2xlRGlzcGxheU5vbmUobmV3VGFza0Zvcm0pO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stbWludXMtc3ZnJykpIHtcbiAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgYSBuZXcgdGFzayBmcm9tIHRoZSBmb3JtXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2stY29uZmlybScpKSB7XG4gICAgICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lLWlucHV0Jyk7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kYXRlLWlucHV0Jyk7XG4gICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gJyc7XG5cbiAgICAgICAgbGV0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcbiAgICAgICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgcHJpb3JpdGllcykge1xuICAgICAgICAgICAgaWYgKHByaW9yaXR5LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlID0gcHJpb3JpdHkuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbXVzdCBoYXZlIGEgbmFtZSBiZWZvcmUgYWRkaW5nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IGxvZ2ljTW9kdWxlLm5ld1Rhc2soIGAke25hbWVJbnB1dC52YWx1ZX1gLCBgJHtwcmlvcml0eVZhbHVlfWAsIGAke2RhdGVJbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgICAgIGxvZ2ljTW9kdWxlLmFkZE5ld1Rhc2sobmV3VGFzayk7XG4gICAgICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGEgdGFzayB3aGVuIGNsaWNraW5nIG9uIHRoZSBjaGVjayBtYXJrIHN2Z1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrLXN2ZycpKSB7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IHRhcmdldFBhcmVudC5jaGlsZHJlblsxXS5pbm5lclRleHQ7XG4gICAgICAgIGxvZ2ljTW9kdWxlLnJlbW92ZVRhc2sodGFza05hbWUpO1xuICAgICAgICBkb21Nb2R1bGUubWFpblJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBwcmlvcml0eSBmdW5jdGlvblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXItc3ZnJykpIHtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gdGFyZ2V0UGFyZW50LmNoaWxkcmVuWzFdLmlubmVyVGV4dDtcbiAgICAgICAgbG9naWNNb2R1bGUudXBkYXRlVGFza1ByaW9yaXR5KHRhc2tOYW1lKTtcbiAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgZGF0ZSBmdW5jdGlvblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbGVuZGFyLXN2ZycpKSB7XG4gICAgICAgIGRvbU1vZHVsZS50b2dnbGVEaXNwbGF5Tm9uZSh0YXJnZXRQYXJlbnQubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdGhlIGRhdGUgYW5kIGNsb3NlIHRoZSB1cGRhdGUtZGF0ZS1kaXZcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzYXZlLXN2ZycpICYmIHRhcmdldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3VwZGF0ZS1kYXRlLWRpdicpKSB7XG4gICAgICAgIGxldCB1cGRhdGVEYXRlID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gdGFyZ2V0UGFyZW50LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0uaW5uZXJUZXh0O1xuICAgICAgICBsZXQgcHJvamVjdEluZGV4ID0gbG9naWNNb2R1bGUuZmluZEluZGV4T2ZQcm9qZWN0KF9hY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IGxvZ2ljTW9kdWxlLmZpbmRJbmRleE9mVGFzayh0YXNrTmFtZSk7XG4gICAgICAgIGxvZ2ljTW9kdWxlLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5zZXREdWVEYXRlKHVwZGF0ZURhdGUudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVEYXRlLnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9naWNNb2R1bGUucHJvamVjdHMpO1xuXG4gICAgICAgIGRvbU1vZHVsZS5tYWluUmVuZGVyKCk7XG5cbiAgICAgICAgdXBkYXRlRGF0ZS52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIHdoZW4gY2xpY2tpbmcgdGhlIG1pbnVzLXN2ZyBjbG9zZSB0aGUgdXBkYXRlLWRhdGUtZGl2IGFuZCBjbGVhciB0aGUgdXBkYXRlLWlucHV0LnZhbHVlXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWludXMtc3ZnJykgJiYgdGFyZ2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygndXBkYXRlLWRhdGUtZGl2JykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlIGFuZCBjbGVhciB0aGUgdXBkYXRlLWRhdGUtZGl2Jyk7XG4gICAgICAgIGxldCB1cGRhdGVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1kYXRlLWlucHV0Jyk7XG4gICAgICAgIHVwZGF0ZURhdGUudmFsdWUgPSAnJztcbiAgICAgICAgZG9tTW9kdWxlLm1haW5SZW5kZXIoKTtcbiAgICB9XG59KVxuXG5leHBvcnQgeyBnZXRBY3RpdmVQcm9qZWN0IH07XG4iLCIvLyBpbXBvcnRpbmcgYWN0aXZlUHJvamVjdCB2YXJpYWJsZSBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuaW1wb3J0ICogYXMgaW5kZXggZnJvbSAnLi9pbmRleCc7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uc1xuY29uc3QgdXBkYXRlUHJvamVjdCA9IHtcbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxufVxuXG5jb25zdCBuZXdQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcHJvamVjdCA9IE9iamVjdC5jcmVhdGUodXBkYXRlUHJvamVjdCk7XG5cbiAgICBwcm9qZWN0LnRhc2tzID0gW107XG4gICAgcHJvamVjdC5uYW1lID0gbmFtZTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5jb25zdCB1cGRhdGVUYXNrID0ge1xuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9LFxuICAgIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfSxcbiAgICBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfVxufVxuXG5jb25zdCBuZXdUYXNrID0gKG5hbWUsIHByaW9yaXR5LCBkdWVEYXRlKSA9PiB7XG4gICAgbGV0IHRhc2sgPSBPYmplY3QuY3JlYXRlKHVwZGF0ZVRhc2spO1xuICAgIHRhc2submFtZSA9IG5hbWU7XG4gICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgXG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbi8vIG1ldGhvZHNcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChvYmogPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm5hbWUgPT09IHByb2plY3ROYW1lO1xuICAgIH0pXG5cbiAgICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoZmluZEluZGV4T2ZQcm9qZWN0KHByb2plY3ROYW1lKSwgMSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2sodGFzaykge1xuICAgIHByb2plY3RzW2ZpbmRJbmRleE9mUHJvamVjdChpbmRleC5nZXRBY3RpdmVQcm9qZWN0KCkpXS50YXNrcy5wdXNoKHRhc2spO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhPZlRhc2sodGFza05hbWUpIHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGluZGV4LmdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gZmluZEluZGV4T2ZQcm9qZWN0KGFjdGl2ZVByb2plY3QpO1xuICAgIGxldCB0YXNrSW5kZXggPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleChvYmogPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm5hbWUgPT09IHRhc2tOYW1lO1xuICAgIH0pXG4gICAgcmV0dXJuIHRhc2tJbmRleDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrTmFtZSkge1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gaW5kZXguZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIHByb2plY3RzW2ZpbmRJbmRleE9mUHJvamVjdChhY3RpdmVQcm9qZWN0KV0udGFza3Muc3BsaWNlKGZpbmRJbmRleE9mVGFzayh0YXNrTmFtZSksIDEpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrUHJpb3JpdHkodGFza05hbWUpIHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGluZGV4LmdldEFjdGl2ZVByb2plY3QoKTtcblxuICAgIGlmIChwcm9qZWN0c1tmaW5kSW5kZXhPZlByb2plY3QoYWN0aXZlUHJvamVjdCldLnRhc2tzW2ZpbmRJbmRleE9mVGFzayh0YXNrTmFtZSldLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgcHJvamVjdHNbZmluZEluZGV4T2ZQcm9qZWN0KGFjdGl2ZVByb2plY3QpXS50YXNrc1tmaW5kSW5kZXhPZlRhc2sodGFza05hbWUpXS5wcmlvcml0eSA9ICdsb3cnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzW2ZpbmRJbmRleE9mUHJvamVjdChhY3RpdmVQcm9qZWN0KV0udGFza3NbZmluZEluZGV4T2ZUYXNrKHRhc2tOYW1lKV0ucHJpb3JpdHkgPSAnaGlnaCc7XG4gICAgfVxufVxuXG5leHBvcnQgeyBwcm9qZWN0cywgbmV3UHJvamVjdCwgYWRkTmV3UHJvamVjdCwgZmluZEluZGV4T2ZQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBuZXdUYXNrLCBhZGROZXdUYXNrLCBmaW5kSW5kZXhPZlRhc2ssIHJlbW92ZVRhc2ssIHVwZGF0ZVRhc2tQcmlvcml0eSB9O1xuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==