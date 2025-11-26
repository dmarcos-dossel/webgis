System.register(["jimu-core","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/proximidade-linha/src/runtime/styles.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/proximidade-linha/src/runtime/styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/* ===============================
   Widget: Proximidade até Linha
   Layout organizado + visual limpo
   =============================== */
.widget-proximidade-linha {
  /* -----------------------------
     Base
     ----------------------------- */
  padding: 12px;
  background-color: var(--calcite-color-foreground-1, #fff);
  color: var(--calcite-color-text-1, #1f1f1f);
  font: 400 0.95rem/1.4 var(--calcite-sans-font-family, system-ui);
  /* -----------------------------
     1) Texto informativo (discreto)
     ----------------------------- */
  /* -----------------------------
     2) Linha: Raio + Aplicar
     ----------------------------- */
  /* label | input | botão aplicar */
  /* -----------------------------
     3) Contadores + 4) Exportar
     ----------------------------- */
  /* cont1 | cont2 | espaço | exportar */
  /* -----------------------------
     5) Tabela de resultados
     ----------------------------- */
  /* -----------------------------
     Responsividade (painel estreito)
     ----------------------------- */
}
.widget-proximidade-linha .wpl-info-text {
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: var(--calcite-color-text-2, #555);
  line-height: 1.4;
}
.widget-proximidade-linha .wpl-info-text p {
  margin: 0;
}
.widget-proximidade-linha .wpl-row {
  display: grid;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.widget-proximidade-linha .wpl-radius-row {
  grid-template-columns: max-content 120px auto;
}
.widget-proximidade-linha .wpl-label {
  color: var(--calcite-color-text-2, #666);
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
}
.widget-proximidade-linha .wpl-input {
  height: 34px;
  padding: 0 10px;
  border: 1px solid var(--calcite-color-border-2, #d8d8d8);
  border-radius: 6px;
  background-color: var(--calcite-color-foreground-1, #fff);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.widget-proximidade-linha .wpl-input:focus {
  outline: none;
  border-color: var(--calcite-color-brand, #007ac2);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--calcite-color-brand, #007ac2) 22%, transparent);
}
.widget-proximidade-linha .wpl-btn-primary {
  height: 38px; /* botão maior */
  padding: 0 16px;
  min-width: 112px; /* largura mínima para dar presença */
  border-radius: 8px;
  font-weight: 700;
  border: 1px solid transparent;
  background-color: var(--calcite-color-brand, #007ac2);
  color: var(--calcite-color-text-inverse, #fff);
  transition: background-color 0.15s ease, transform 0.02s ease;
}
.widget-proximidade-linha .wpl-btn-primary:hover {
  background-color: var(--calcite-color-brand-hover, #00619b);
}
.widget-proximidade-linha .wpl-btn-primary:active {
  transform: translateY(1px);
}
.widget-proximidade-linha .wpl-btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.widget-proximidade-linha .wpl-counters-row {
  grid-template-columns: auto auto 1fr auto;
  column-gap: 12px;
}
.widget-proximidade-linha .wpl-counter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 8px;
  border: 1px solid var(--calcite-color-border-2, #d8d8d8);
  border-radius: 12px;
  background-color: var(--calcite-color-foreground-2, #f5f5f5);
}
.widget-proximidade-linha .wpl-counter-label {
  color: var(--calcite-color-text-2, #666);
  font-weight: 600;
}
.widget-proximidade-linha .wpl-counter-value {
  color: var(--calcite-color-text-1, #1f1f1f);
  font-weight: 800;
}
.widget-proximidade-linha .wpl-actions {
  justify-self: end;
}
.widget-proximidade-linha .wpl-btn-ghost {
  height: 34px;
  padding: 0 12px;
  border-radius: 6px;
  font-weight: 600;
  background-color: var(--calcite-color-foreground-1, #fff);
  border: 1px solid var(--calcite-color-border-2, #d8d8d8);
  color: inherit;
  transition: background-color 0.15s ease;
}
.widget-proximidade-linha .wpl-btn-ghost:hover {
  background-color: var(--calcite-color-foreground-2, #f5f5f5);
}
.widget-proximidade-linha .wpl-btn-ghost:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.widget-proximidade-linha .wpl-table-wrap {
  margin-top: 6px;
  max-height: 240px;
  overflow: auto;
  border: 1px solid var(--calcite-color-border-2, #d8d8d8);
  border-radius: 6px;
  background-color: var(--calcite-color-foreground-1, #fff);
}
.widget-proximidade-linha .wpl-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.94rem;
}
.widget-proximidade-linha .wpl-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--calcite-color-foreground-1, #fff);
  color: var(--calcite-color-text-2, #6a6a6a);
  font-weight: 700;
  border-bottom: 1px solid var(--calcite-color-border-2, #d8d8d8);
  padding: 8px 10px;
  text-align: left;
  white-space: nowrap;
}
.widget-proximidade-linha .wpl-table tbody td {
  padding: 8px 10px;
  border-bottom: 1px solid var(--calcite-color-border-2, #e6e6e6);
  vertical-align: middle;
}
.widget-proximidade-linha .wpl-table tbody tr:nth-child(even) td {
  background-color: color-mix(in srgb, var(--calcite-color-foreground-2, #f5f5f5) 55%, transparent);
}
.widget-proximidade-linha .wpl-table tbody tr:hover td {
  background-color: color-mix(in srgb, var(--calcite-color-brand, #007ac2) 4%, transparent);
}
@media (max-width: 460px) {
  .widget-proximidade-linha .wpl-radius-row {
    grid-template-columns: 1fr 1fr; /* label quebra para linha acima */
  }
  .widget-proximidade-linha .wpl-label {
    grid-column: 1/-1;
  }
  .widget-proximidade-linha .wpl-counters-row {
    grid-template-columns: 1fr 1fr; /* contadores lado a lado */
  }
  .widget-proximidade-linha .wpl-actions {
    grid-column: 1/-1;
    justify-self: start;
    margin-top: 6px; /* exportar desce */
  }
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/proximidade-linha/src/runtime/styles.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;;;oCAAA;AAKA;EACE;;oCAAA;EAGA,aAAA;EACA,yDAAA;EACA,2CAAA;EACA,gEAAA;EAEA;;oCAAA;EAWA;;oCAAA;EAUA,kCAAA;EAyCA;;oCAAA;EAGA,sCAAA;EAwCA;;oCAAA;EA4CA;;oCAAA;AArIF;AAbE;EACE,mBAAA;EACA,iBAAA;EACA,wCAAA;EACA,gBAAA;AAeJ;AAbE;EAAmB,SAAA;AAgBrB;AAXE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,kBAAA;AAaJ;AATE;EACE,6CAAA;AAWJ;AARE;EACE,wCAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AAUJ;AAPE;EACE,YAAA;EACA,eAAA;EACA,wDAAA;EACA,kBAAA;EACA,yDAAA;EACA,0DAAA;AASJ;AARI;EACE,aAAA;EACA,iDAAA;EACA,8FAAA;AAUN;AANE;EACE,YAAA,EAAA,gBAAA;EACA,eAAA;EACA,gBAAA,EAAA,qCAAA;EACA,kBAAA;EACA,gBAAA;EACA,6BAAA;EACA,qDAAA;EACA,8CAAA;EACA,6DAAA;AAQJ;AAPI;EAAU,2DAAA;AAUd;AATI;EAAW,0BAAA;AAYf;AAXI;EAAa,YAAA;EAAa,mBAAA;AAe9B;AARE;EACE,yCAAA;EACA,gBAAA;AAUJ;AAPE;EACE,oBAAA;EACA,mBAAA;EACA,QAAA;EACA,YAAA;EACA,cAAA;EACA,wDAAA;EACA,mBAAA;EACA,4DAAA;AASJ;AAPE;EACE,wCAAA;EACA,gBAAA;AASJ;AAPE;EACE,2CAAA;EACA,gBAAA;AASJ;AANE;EAAe,iBAAA;AASjB;AAPE;EACE,YAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yDAAA;EACA,wDAAA;EACA,cAAA;EACA,uCAAA;AASJ;AARI;EAAU,4DAAA;AAWd;AAVI;EAAa,YAAA;EAAa,mBAAA;AAc9B;AARE;EACE,eAAA;EACA,iBAAA;EACA,cAAA;EACA,wDAAA;EACA,kBAAA;EACA,yDAAA;AAUJ;AAPE;EACE,WAAA;EACA,yBAAA;EACA,kBAAA;AASJ;AANE;EACE,gBAAA;EACA,MAAA;EACA,UAAA;EACA,yDAAA;EACA,2CAAA;EACA,gBAAA;EACA,+DAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;AAQJ;AALE;EACE,iBAAA;EACA,+DAAA;EACA,sBAAA;AAOJ;AAJE;EACE,iGAAA;AAMJ;AAJE;EACE,yFAAA;AAMJ;AAAE;EACE;IACE,8BAAA,EAAA,kCAAA;EAEJ;EAAE;IAAa,iBAAA;EAGf;EADE;IACE,8BAAA,EAAA,2BAAA;EAGJ;EADE;IACE,iBAAA;IACA,mBAAA;IACA,eAAA,EAAA,mBAAA;EAGJ;AACF","sourcesContent":["/* ===============================\r\n   Widget: Proximidade até Linha\r\n   Layout organizado + visual limpo\r\n   =============================== */\r\n\r\n.widget-proximidade-linha {\r\n  /* -----------------------------\r\n     Base\r\n     ----------------------------- */\r\n  padding: 12px;\r\n  background-color: var(--calcite-color-foreground-1, #fff);\r\n  color: var(--calcite-color-text-1, #1f1f1f);\r\n  font: 400 0.95rem/1.4 var(--calcite-sans-font-family, system-ui);\r\n\r\n  /* -----------------------------\r\n     1) Texto informativo (discreto)\r\n     ----------------------------- */\r\n  .wpl-info-text {\r\n    margin-bottom: 10px;\r\n    font-size: 0.9rem;\r\n    color: var(--calcite-color-text-2, #555);\r\n    line-height: 1.4;\r\n  }\r\n  .wpl-info-text p { margin: 0; }\r\n\r\n  /* -----------------------------\r\n     2) Linha: Raio + Aplicar\r\n     ----------------------------- */\r\n  .wpl-row {\r\n    display: grid;\r\n    align-items: center;\r\n    gap: 8px;\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  /* label | input | botão aplicar */\r\n  .wpl-radius-row {\r\n    grid-template-columns: max-content 120px auto;\r\n  }\r\n\r\n  .wpl-label {\r\n    color: var(--calcite-color-text-2, #666);\r\n    font-weight: 600;\r\n    margin: 0;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  .wpl-input {\r\n    height: 34px;\r\n    padding: 0 10px;\r\n    border: 1px solid var(--calcite-color-border-2, #d8d8d8);\r\n    border-radius: 6px;\r\n    background-color: var(--calcite-color-foreground-1, #fff);\r\n    transition: border-color .15s ease, box-shadow .15s ease;\r\n    &:focus {\r\n      outline: none;\r\n      border-color: var(--calcite-color-brand, #007ac2);\r\n      box-shadow: 0 0 0 2px color-mix(in srgb, var(--calcite-color-brand, #007ac2) 22%, transparent);\r\n    }\r\n  }\r\n\r\n  .wpl-btn-primary {\r\n    height: 38px;               /* botão maior */\r\n    padding: 0 16px;\r\n    min-width: 112px;           /* largura mínima para dar presença */\r\n    border-radius: 8px;\r\n    font-weight: 700;\r\n    border: 1px solid transparent;\r\n    background-color: var(--calcite-color-brand, #007ac2);\r\n    color: var(--calcite-color-text-inverse, #fff);\r\n    transition: background-color .15s ease, transform .02s ease;\r\n    &:hover { background-color: var(--calcite-color-brand-hover, #00619b); }\r\n    &:active { transform: translateY(1px); }\r\n    &:disabled { opacity: .6; cursor: not-allowed; }\r\n  }\r\n\r\n  /* -----------------------------\r\n     3) Contadores + 4) Exportar\r\n     ----------------------------- */\r\n  /* cont1 | cont2 | espaço | exportar */\r\n  .wpl-counters-row {\r\n    grid-template-columns: auto auto 1fr auto;\r\n    column-gap: 12px;\r\n  }\r\n\r\n  .wpl-counter {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    height: 30px;\r\n    padding: 0 8px;\r\n    border: 1px solid var(--calcite-color-border-2, #d8d8d8);\r\n    border-radius: 12px;\r\n    background-color: var(--calcite-color-foreground-2, #f5f5f5);\r\n  }\r\n  .wpl-counter-label {\r\n    color: var(--calcite-color-text-2, #666);\r\n    font-weight: 600;\r\n  }\r\n  .wpl-counter-value {\r\n    color: var(--calcite-color-text-1, #1f1f1f);\r\n    font-weight: 800;\r\n  }\r\n\r\n  .wpl-actions { justify-self: end; }\r\n\r\n  .wpl-btn-ghost {\r\n    height: 34px;\r\n    padding: 0 12px;\r\n    border-radius: 6px;\r\n    font-weight: 600;\r\n    background-color: var(--calcite-color-foreground-1, #fff);\r\n    border: 1px solid var(--calcite-color-border-2, #d8d8d8);\r\n    color: inherit;\r\n    transition: background-color .15s ease;\r\n    &:hover { background-color: var(--calcite-color-foreground-2, #f5f5f5); }\r\n    &:disabled { opacity: .5; cursor: not-allowed; }\r\n  }\r\n\r\n  /* -----------------------------\r\n     5) Tabela de resultados\r\n     ----------------------------- */\r\n  .wpl-table-wrap {\r\n    margin-top: 6px;\r\n    max-height: 240px;\r\n    overflow: auto;\r\n    border: 1px solid var(--calcite-color-border-2, #d8d8d8);\r\n    border-radius: 6px;\r\n    background-color: var(--calcite-color-foreground-1, #fff);\r\n  }\r\n\r\n  .wpl-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    font-size: 0.94rem;\r\n  }\r\n\r\n  .wpl-table thead th {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1;\r\n    background-color: var(--calcite-color-foreground-1, #fff);\r\n    color: var(--calcite-color-text-2, #6a6a6a);\r\n    font-weight: 700;\r\n    border-bottom: 1px solid var(--calcite-color-border-2, #d8d8d8);\r\n    padding: 8px 10px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  .wpl-table tbody td {\r\n    padding: 8px 10px;\r\n    border-bottom: 1px solid var(--calcite-color-border-2, #e6e6e6);\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .wpl-table tbody tr:nth-child(even) td {\r\n    background-color: color-mix(in srgb, var(--calcite-color-foreground-2, #f5f5f5) 55%, transparent);\r\n  }\r\n  .wpl-table tbody tr:hover td {\r\n    background-color: color-mix(in srgb, var(--calcite-color-brand, #007ac2) 4%, transparent);\r\n  }\r\n\r\n  /* -----------------------------\r\n     Responsividade (painel estreito)\r\n     ----------------------------- */\r\n  @media (max-width: 460px) {\r\n    .wpl-radius-row {\r\n      grid-template-columns: 1fr 1fr; /* label quebra para linha acima */\r\n    }\r\n    .wpl-label { grid-column: 1 / -1; }\r\n\r\n    .wpl-counters-row {\r\n      grid-template-columns: 1fr 1fr;  /* contadores lado a lado */\r\n    }\r\n    .wpl-actions {\r\n      grid-column: 1 / -1;\r\n      justify-self: start;\r\n      margin-top: 6px;                 /* exportar desce */\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/components/Controls.tsx":
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/components/Controls.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controls: () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./your-extensions/widgets/proximidade-linha/src/runtime/types.ts");



const Controls = ({ status, radiusKmInput, onRadiusChange, onRadiusKeyDown, useGeodesicDistanceRuntime, onGeodesicChange, onApply, isComputing, hasMap }) => {
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "wpl-info-text" }, status),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "wpl-row wpl-radius-row" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: "wpl-label" }, _types__WEBPACK_IMPORTED_MODULE_2__.TXT.radiusKm),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "number", min: 0, step: 0.1, className: "wpl-input", value: radiusKmInput, onChange: (e) => onRadiusChange(e.target.value), onKeyDown: onRadiusKeyDown }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "wpl-btn-primary", onClick: onApply, disabled: isComputing || !hasMap }, isComputing ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, null) : _types__WEBPACK_IMPORTED_MODULE_2__.TXT.apply)),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "wpl-row wpl-geodesic-row" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", checked: useGeodesicDistanceRuntime, onChange: (e) => onGeodesicChange(e.target.checked) }),
                "Usar dist\u00E2ncia geod\u00E9sica"))));
};


/***/ }),

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/components/Counters.tsx":
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/components/Counters.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Counters: () => (/* binding */ Counters)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./your-extensions/widgets/proximidade-linha/src/runtime/types.ts");



const Counters = ({ scannedLayersCount, rows, onExportCSV, onExportPDF, isGeneratingPDF = false }) => {
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "wpl-row wpl-counters-row" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "wpl-counter", title: "Camadas varridas" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "wpl-counter-label" }, "Camadas:"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "wpl-counter-value" }, scannedLayersCount)),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "wpl-counter", title: "Fei\u00E7\u00F5es no resultado" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "wpl-counter-label" }, "Fei\u00E7\u00F5es:"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "wpl-counter-value" }, rows.length)),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "wpl-actions" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "wpl-btn-ghost", onClick: onExportCSV, disabled: !rows.length }, _types__WEBPACK_IMPORTED_MODULE_2__.TXT.exportCsv),
            onExportPDF && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "wpl-btn-ghost", onClick: onExportPDF, disabled: !rows.length || isGeneratingPDF, style: { marginLeft: '8px' } }, isGeneratingPDF ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, null) : '📄 Relatório PDF')))));
};


/***/ }),

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/components/MapFeedback.tsx":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/components/MapFeedback.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapFeedback: () => (/* binding */ MapFeedback)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let modulesRef = {};
const ensureModules = () => __awaiter(void 0, void 0, void 0, function* () {
    if (modulesRef.GraphicsLayer)
        return modulesRef;
    const [GraphicsLayer, Graphic, Polyline, TextSymbol] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
        'esri/layers/GraphicsLayer',
        'esri/Graphic',
        'esri/geometry/Polyline',
        'esri/symbols/TextSymbol'
    ]);
    modulesRef = { GraphicsLayer, Graphic, Polyline, TextSymbol };
    return modulesRef;
});
const MapFeedback = ({ jmv, selectedLineGeom, selectedLineMeta, bufferGeom, featureWithPoints, intersectionLines }) => {
    const selectionGLRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const bufferGLRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const resultsGLRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const proximityLinesGLRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const ensureGraphicLayers = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (!jmv)
            return;
        const { GraphicsLayer } = yield ensureModules();
        const view = jmv.view;
        const map = view.map;
        if (!selectionGLRef.current) {
            selectionGLRef.current = new GraphicsLayer({ listMode: 'hide' });
            map.add(selectionGLRef.current);
        }
        if (!bufferGLRef.current) {
            bufferGLRef.current = new GraphicsLayer({ listMode: 'hide' });
            map.add(bufferGLRef.current);
        }
        if (!resultsGLRef.current) {
            resultsGLRef.current = new GraphicsLayer({ listMode: 'hide' });
            map.add(resultsGLRef.current);
        }
        if (!proximityLinesGLRef.current) {
            proximityLinesGLRef.current = new GraphicsLayer({ listMode: 'hide' });
            map.add(proximityLinesGLRef.current);
        }
    }), [jmv]);
    const drawSelectionAndBuffer = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((line, buffer) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const { Graphic } = yield ensureModules();
        yield ensureGraphicLayers();
        (_a = selectionGLRef.current) === null || _a === void 0 ? void 0 : _a.removeAll();
        (_b = bufferGLRef.current) === null || _b === void 0 ? void 0 : _b.removeAll();
        const lineSymbol = {
            type: 'simple-line',
            color: [0, 255, 255, 1],
            width: 3
        };
        (_c = selectionGLRef.current) === null || _c === void 0 ? void 0 : _c.add(new Graphic({ geometry: line, symbol: lineSymbol }));
        if (buffer) {
            const fillSymbol = {
                type: 'simple-fill',
                color: [0, 255, 255, 0.12],
                outline: { type: 'simple-line', color: [0, 255, 255, 0.8], width: 1.5 }
            };
            (_d = bufferGLRef.current) === null || _d === void 0 ? void 0 : _d.add(new Graphic({ geometry: buffer, symbol: fillSymbol }));
        }
    }), [ensureGraphicLayers]);
    const drawResults = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((featureWithPoints, intersectionLines) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        const { Graphic, Polyline, TextSymbol } = yield ensureModules();
        yield ensureGraphicLayers();
        (_a = resultsGLRef.current) === null || _a === void 0 ? void 0 : _a.removeAll();
        (_b = proximityLinesGLRef.current) === null || _b === void 0 ? void 0 : _b.removeAll();
        const pointSymbol = {
            type: 'simple-marker',
            color: [255, 102, 0, 0.9],
            size: 8,
            outline: { type: 'simple-line', color: [255, 255, 255, 1], width: 1 }
        };
        const proximityLineSymbol = {
            type: 'simple-line',
            color: [255, 165, 0, 0.7],
            width: 2,
            style: 'dash'
        };
        const intersectionLineSymbol = {
            type: 'simple-line',
            color: [255, 0, 0, 0.9],
            width: 3
        };
        const textSymbol = {
            type: 'text',
            color: [0, 0, 0, 1],
            haloColor: [255, 255, 255, 1],
            haloSize: 1,
            font: { size: 10, family: 'Arial' },
            horizontalAlignment: 'center',
            verticalAlignment: 'middle'
        };
        const pins = [];
        const lines = [];
        const texts = [];
        featureWithPoints.forEach(({ pointOnFeature, pointOnLine, distanceM }) => {
            if (pointOnFeature) {
                pins.push(new Graphic({ geometry: pointOnFeature, symbol: pointSymbol }));
            }
            if (pointOnFeature && pointOnLine) {
                const lineGeom = new Polyline({
                    paths: [[pointOnFeature.x, pointOnFeature.y], [pointOnLine.x, pointOnLine.y]],
                    spatialReference: pointOnFeature.spatialReference
                });
                lines.push(new Graphic({ geometry: lineGeom, symbol: proximityLineSymbol }));
                const midX = (pointOnFeature.x + pointOnLine.x) / 2;
                const midY = (pointOnFeature.y + pointOnLine.y) / 2;
                const midPoint = { type: 'point', x: midX, y: midY, spatialReference: pointOnFeature.spatialReference };
                const textSym = Object.assign(Object.assign({}, textSymbol), { text: (distanceM === null || distanceM === void 0 ? void 0 : distanceM.toFixed(0)) + ' m' });
                texts.push(new Graphic({ geometry: midPoint, symbol: textSym }));
            }
        });
        intersectionLines.forEach(({ line, lengthKm }) => {
            lines.push(new Graphic({ geometry: line, symbol: intersectionLineSymbol }));
            const extent = line.extent;
            if (extent) {
                const center = extent.center;
                const textSym = Object.assign(Object.assign({}, textSymbol), { text: lengthKm.toFixed(2) + ' km' });
                texts.push(new Graphic({ geometry: center, symbol: textSym }));
            }
        });
        if (pins.length)
            (_c = resultsGLRef.current) === null || _c === void 0 ? void 0 : _c.addMany(pins);
        if (lines.length)
            (_d = proximityLinesGLRef.current) === null || _d === void 0 ? void 0 : _d.addMany(lines);
        if (texts.length)
            (_e = resultsGLRef.current) === null || _e === void 0 ? void 0 : _e.addMany(texts);
    }), [ensureGraphicLayers]);
    // Efeitos para atualizar o mapa
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (jmv) {
            ensureGraphicLayers();
        }
    }, [jmv, ensureGraphicLayers]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        var _a, _b;
        if (selectedLineGeom && selectedLineMeta) {
            drawSelectionAndBuffer(selectedLineGeom, bufferGeom || undefined);
        }
        else {
            (_a = selectionGLRef.current) === null || _a === void 0 ? void 0 : _a.removeAll();
            (_b = bufferGLRef.current) === null || _b === void 0 ? void 0 : _b.removeAll();
        }
    }, [selectedLineGeom, selectedLineMeta, bufferGeom, drawSelectionAndBuffer]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        drawResults(featureWithPoints, intersectionLines);
    }, [featureWithPoints, intersectionLines, drawResults]);
    // Cleanup
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        return () => {
            var _a, _b, _c, _d;
            (_a = selectionGLRef.current) === null || _a === void 0 ? void 0 : _a.removeAll();
            (_b = bufferGLRef.current) === null || _b === void 0 ? void 0 : _b.removeAll();
            (_c = resultsGLRef.current) === null || _c === void 0 ? void 0 : _c.removeAll();
            (_d = proximityLinesGLRef.current) === null || _d === void 0 ? void 0 : _d.removeAll();
        };
    }, []);
    return null; // Este componente não renderiza nada na UI, apenas gerencia o mapa
};


/***/ }),

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/components/ResultsTable.tsx":
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/components/ResultsTable.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultsTable: () => (/* binding */ ResultsTable)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const ResultsTable = ({ rows }) => {
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "wpl-table-wrap" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("table", { className: "table table-sm wpl-table" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("thead", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", null, "Camada"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", null, "OBJECTID"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", null, "Geom"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", null, "Status"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", null, "Comprimento (km)"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", null, "Dist\u00E2ncia (m)"))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tbody", null, rows.map((r, i) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", { key: `${r.layerTitle}-${r.objectId}-${i}` },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, r.layerTitle),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, r.objectId),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, r.geomType),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, r.status),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, r.lengthKm ? r.lengthKm.toFixed(2) : ''),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, r.distanceM ? r.distanceM.toFixed(2) : ''))))))));
};


/***/ }),

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/components/index.ts":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/components/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controls: () => (/* reexport safe */ _Controls__WEBPACK_IMPORTED_MODULE_0__.Controls),
/* harmony export */   Counters: () => (/* reexport safe */ _Counters__WEBPACK_IMPORTED_MODULE_1__.Counters),
/* harmony export */   MapFeedback: () => (/* reexport safe */ _MapFeedback__WEBPACK_IMPORTED_MODULE_3__.MapFeedback),
/* harmony export */   ResultsTable: () => (/* reexport safe */ _ResultsTable__WEBPACK_IMPORTED_MODULE_2__.ResultsTable)
/* harmony export */ });
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controls */ "./your-extensions/widgets/proximidade-linha/src/runtime/components/Controls.tsx");
/* harmony import */ var _Counters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counters */ "./your-extensions/widgets/proximidade-linha/src/runtime/components/Counters.tsx");
/* harmony import */ var _ResultsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultsTable */ "./your-extensions/widgets/proximidade-linha/src/runtime/components/ResultsTable.tsx");
/* harmony import */ var _MapFeedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapFeedback */ "./your-extensions/widgets/proximidade-linha/src/runtime/components/MapFeedback.tsx");






/***/ }),

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/hooks/usePDFReport.ts":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/hooks/usePDFReport.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePDFReport: () => (/* binding */ usePDFReport)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// Função simplificada para gerar relatório usando print do navegador
const generatePrintReport = (jmv, selectedLineMeta, rows, scannedLayersCount, radiusKm, config) => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    // Capturar screenshot do mapa usando API nativa do ArcGIS
    let screenshotDataUrl = '';
    try {
        const screenshot = yield jmv.view.takeScreenshot({
            format: 'png',
            quality: 80,
            width: 800,
            height: 600
        });
        screenshotDataUrl = screenshot.dataUrl;
    }
    catch (error) {
        console.log('Erro ao capturar screenshot do mapa:', error);
        // Fallback para continuar sem imagem
    }
    // Filtrar dados
    const intersections = rows.filter(r => r.status === 'interseção');
    const proximities = rows.filter(r => r.status === 'dentro do buffer');
    // Criar conteúdo HTML
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; text-align: center; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
        RELATÓRIO DE PROXIMIDADE À LINHA
      </h1>

      <p style="text-align: center; color: #666; font-size: 14px;">
        Gerado em: ${now.toLocaleString('pt-BR')}
      </p>

      <div style="margin: 30px 0; padding: 15px; background: #f8f9fa; border-radius: 5px;">
        <h2 style="color: #007acc; margin-top: 0;">1. INFORMAÇÕES GERAIS</h2>
        <ul style="line-height: 1.6;">
          <li><strong>Linha selecionada:</strong> ${selectedLineMeta.layerTitle}</li>
          <li><strong>ID da feição:</strong> ${selectedLineMeta.objectId || 'N/A'}</li>
          <li><strong>Raio de análise:</strong> ${radiusKm} km</li>
          <li><strong>Camadas analisadas:</strong> ${scannedLayersCount}</li>
          <li><strong>Feições encontradas:</strong> ${rows.length}</li>
          <li><strong>Tipo de distância:</strong> ${config.useGeodesicDistance ? 'Geodésica' : 'Plana'}</li>
        </ul>
      </div>

      ${screenshotDataUrl ? `
      <div style="margin: 30px 0;">
        <h2 style="color: #007acc;">2. VISUALIZAÇÃO DO MAPA</h2>
        <img src="${screenshotDataUrl}" alt="Mapa da análise de proximidade" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <p style="font-size: 12px; color: #666; font-style: italic; margin-top: 8px; text-align: center;">
          Captura do mapa mostrando: linha selecionada (ciano), buffer de análise e pontos de proximidade/interseção
        </p>
      </div>
      ` : `
      <div style="margin: 30px 0; padding: 15px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px;">
        <h2 style="color: #856404; margin-top: 0;">2. VISUALIZAÇÃO DO MAPA</h2>
        <p style="margin: 10px 0; color: #856404;">
          <strong>Nota:</strong> Para visualizar o mapa com a linha selecionada, buffer e pontos de interseção/proximidade,
          consulte a interface principal do widget no ArcGIS Experience Builder.
        </p>
      </div>
      `}

      <div style="margin: 30px 0;">
        <h2 style="color: #007acc;">3. RESULTADOS DETALHADOS</h2>

        ${intersections.length > 0 ? `
        <h3 style="color: #d9534f;">3.1 INTERSEÇÕES COM A LINHA</h3>
        <div style="margin: 15px 0;">
          ${intersections.map((row, index) => `
            <div style="margin: 10px 0; padding: 10px; background: #fff5f5; border-left: 4px solid #d9534f; border-radius: 3px;">
              <strong>${index + 1}. ${row.layerTitle} - OID ${row.objectId}</strong><br>
              ${row.lengthKm ? `<span style="margin-left: 15px;">Comprimento da interseção: ${row.lengthKm.toFixed(2)} km</span><br>` : ''}
              <span style="margin-left: 15px;">Tipo de geometria: ${row.geomType}</span>
            </div>
          `).join('')}
        </div>
        ` : ''}

        ${proximities.length > 0 ? `
        <h3 style="color: #f0ad4e;">3.2 FEIÇÕES DENTRO DO BUFFER</h3>
        <div style="margin: 15px 0;">
          ${proximities.map((row, index) => `
            <div style="margin: 10px 0; padding: 10px; background: #fffbf0; border-left: 4px solid #f0ad4e; border-radius: 3px;">
              <strong>${index + 1}. ${row.layerTitle} - OID ${row.objectId}</strong><br>
              ${row.distanceM ? `<span style="margin-left: 15px;">Distância até a linha: ${row.distanceM.toFixed(2)} metros</span><br>` : ''}
              <span style="margin-left: 15px;">Tipo de geometria: ${row.geomType}</span>
            </div>
          `).join('')}
        </div>
        ` : ''}
      </div>

      <div style="margin: 30px 0; padding: 15px; background: #f8f9fa; border-radius: 5px;">
        <h2 style="color: #007acc; margin-top: 0;">4. ESTATÍSTICAS RESUMIDAS</h2>
        <ul style="line-height: 1.8;">
          <li>Total de feições analisadas: <strong>${rows.length}</strong></li>
          <li>Interseções diretas: <strong>${intersections.length}</strong></li>
          <li>Feições dentro do buffer: <strong>${proximities.length}</strong></li>
          <li>Camadas processadas: <strong>${scannedLayersCount}</strong></li>
          <li>Raio de análise: <strong>${radiusKm} km</strong></li>
        </ul>
      </div>

      <div style="text-align: center; margin-top: 50px; padding-top: 20px; border-top: 1px solid #ccc; color: #666; font-size: 12px;">
        Relatório gerado pelo Widget de Proximidade até Linha - ArcGIS Experience Builder
      </div>
    </div>
  `;
    // Criar e abrir janela de impressão
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) {
        alert('Por favor, permita popups para gerar o relatório.');
        return;
    }
    printWindow.document.open();
    printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Relatório de Proximidade - ${now.toLocaleDateString('pt-BR')}</title>
      <style>
        @media print {
          body { margin: 0; }
          @page { margin: 15mm; }
        }
      </style>
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `);
    printWindow.document.close();
    // Aguardar carregamento e imprimir
    printWindow.onload = () => {
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 500);
    };
});
const usePDFReport = () => {
    const [isGenerating, setIsGenerating] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const generatePDFReport = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((jmv, selectedLineMeta, rows, scannedLayersCount, radiusKm, config) => __awaiter(void 0, void 0, void 0, function* () {
        setIsGenerating(true);
        try {
            yield generatePrintReport(jmv, selectedLineMeta, rows, scannedLayersCount, radiusKm, config);
        }
        catch (error) {
            console.error('Erro ao gerar relatório:', error);
            alert('Erro ao gerar o relatório. Verifique o console para mais detalhes.');
        }
        finally {
            setIsGenerating(false);
        }
    }), []);
    return {
        isGenerating,
        generatePDFReport
    };
};


/***/ }),

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/hooks/useProximityCalculation.ts":
/*!************************************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/hooks/useProximityCalculation.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useProximityCalculation: () => (/* binding */ useProximityCalculation)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _utils_geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/geometry */ "./your-extensions/widgets/proximidade-linha/src/runtime/utils/geometry.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const useProximityCalculation = () => {
    const [isComputing, setIsComputing] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [rows, setRows] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [scannedLayersCount, setScannedLayersCount] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(0);
    const [bufferGeom, setBufferGeom] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [featureWithPoints, setFeatureWithPoints] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [intersectionLines, setIntersectionLines] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const calculateProximity = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((jmv, selectedGeom, selectedLineMeta, radiusKm, config) => __awaiter(void 0, void 0, void 0, function* () {
        setIsComputing(true);
        setRows([]);
        setFeatureWithPoints([]);
        setIntersectionLines([]);
        setBufferGeom(null);
        try {
            const view = jmv.view;
            // 1) Criar buffer geodésico
            const searchArea = yield (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.createGeodesicBuffer)(selectedGeom, radiusKm);
            setBufferGeom(searchArea);
            // 2) Filtrar camadas
            let layers = view.map.allLayers
                .toArray()
                .filter((ly) => ly.type === 'feature' && ly.visible);
            // Aplicar filtro por targetLayerIdsOrTitles se informado
            if (config.targetLayerIdsOrTitles.length > 0) {
                layers = layers.filter(ly => config.targetLayerIdsOrTitles.includes(ly.id) ||
                    config.targetLayerIdsOrTitles.includes(ly.title));
            }
            // Excluir a camada da linha selecionada
            layers = layers.filter(ly => ly.id !== selectedLineMeta.layerId);
            setScannedLayersCount(layers.length);
            const resultRows = [];
            const allFeatureWithPoints = [];
            const allIntersectionLines = [];
            // 3) Processar cada camada
            for (const layer of layers) {
                const oidField = layer.objectIdField;
                const q = layer.createQuery();
                q.outFields = oidField ? [oidField] : ['*'];
                q.returnGeometry = true;
                q.geometry = searchArea;
                q.spatialRelationship = 'intersects';
                q.maxAllowableOffset = 0;
                const featSet = yield layer.queryFeatures(q);
                for (const f of featSet.features) {
                    // Recortar geometria ao buffer
                    const clippedGeom = yield (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.clipGeometry)(f.geometry, searchArea);
                    if (!clippedGeom)
                        continue;
                    // Calcular pontos mais próximos usando geometryEngine.nearestCoordinate
                    const [geometryEngine] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/geometry/geometryEngine']);
                    let d = 0;
                    let pointOnFeature = null;
                    let pointOnLine = null;
                    const linePoints = (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.generateCandidates)(selectedGeom);
                    let minDist = Infinity;
                    let bestNearest = null;
                    let bestPointOnLine = null;
                    const parts = (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.getGeometryParts)(clippedGeom);
                    for (const part of parts) {
                        for (const linePoint of linePoints) {
                            try {
                                const nearest = geometryEngine.nearestCoordinate(part, linePoint);
                                const dist = config.useGeodesicDistance && geometryEngine.geodesicDistance
                                    ? geometryEngine.geodesicDistance(nearest.coordinate, linePoint, 'meters')
                                    : geometryEngine.distance(nearest.coordinate, linePoint, 'meters');
                                if (dist < minDist) {
                                    minDist = dist;
                                    bestNearest = nearest;
                                    bestPointOnLine = linePoint;
                                }
                            }
                            catch (_a) { }
                        }
                    }
                    if (bestNearest) {
                        d = minDist;
                        pointOnFeature = bestNearest.coordinate;
                        pointOnLine = bestPointOnLine;
                    }
                    else {
                        // Fallback
                        pointOnFeature = (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.toSeedPoint)(clippedGeom);
                        pointOnLine = (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.toSeedPoint)(selectedGeom);
                        if (pointOnFeature && pointOnLine) {
                            d = (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.measureDistance)(pointOnFeature, pointOnLine, config.useGeodesicDistance, 'meters');
                        }
                    }
                    // Obter OID
                    const rawOid = getObjectId(f, oidField);
                    // Projetar coordenadas para SR da view
                    let xFeature;
                    let yFeature;
                    let xLine;
                    let yLine;
                    if (pointOnFeature && pointOnLine) {
                        const viewSR = view.spatialReference;
                        const pfProj = yield (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.projectToViewSR)(pointOnFeature, viewSR);
                        const plProj = yield (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.projectToViewSR)(pointOnLine, viewSR);
                        xFeature = pfProj.x;
                        yFeature = pfProj.y;
                        xLine = plProj.x;
                        yLine = plProj.y;
                    }
                    // Verificar interseção
                    const intersects = yield (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.checkIntersection)(selectedGeom, clippedGeom);
                    const status = intersects ? 'interseção' : 'dentro do buffer';
                    let lengthKm;
                    if (intersects && f.geometry.type === 'polygon') {
                        const intersection = yield (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.clipGeometry)(selectedGeom, f.geometry);
                        if (intersection) {
                            lengthKm = yield (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.calculateLength)(intersection, config.useGeodesicDistance);
                            allIntersectionLines.push({ line: intersection, lengthKm });
                        }
                    }
                    else if (pointOnFeature && pointOnLine) {
                        allFeatureWithPoints.push({
                            feature: f,
                            pointOnFeature,
                            pointOnLine,
                            status,
                            distanceM: !intersects ? d : undefined,
                            lengthKm: intersects && f.geometry.type === 'polygon' ? lengthKm : undefined
                        });
                    }
                    resultRows.push({
                        layerTitle: layer.title,
                        objectId: rawOid,
                        geomType: f.geometry.type,
                        status,
                        lengthKm,
                        distanceM: !intersects ? d : undefined,
                        xFeature,
                        yFeature,
                        xLine,
                        yLine
                    });
                }
            }
            // Ordenar resultados
            resultRows.sort((a, b) => {
                if (a.status !== b.status)
                    return a.status === 'interseção' ? -1 : 1;
                if (a.lengthKm != null && b.lengthKm != null)
                    return b.lengthKm - a.lengthKm;
                if (a.distanceM != null && b.distanceM != null)
                    return a.distanceM - b.distanceM;
                return 0;
            });
            setRows(resultRows);
            setFeatureWithPoints(allFeatureWithPoints);
            setIntersectionLines(allIntersectionLines);
            return resultRows;
        }
        catch (error) {
            console.error('Erro no cálculo de proximidade:', error);
            throw error;
        }
        finally {
            setIsComputing(false);
        }
    }), []);
    const clearResults = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        setRows([]);
        setFeatureWithPoints([]);
        setIntersectionLines([]);
        setBufferGeom(null);
    }, []);
    return {
        isComputing,
        rows,
        scannedLayersCount,
        bufferGeom,
        featureWithPoints,
        intersectionLines,
        calculateProximity,
        clearResults
    };
};
// Funções auxiliares
const findNearestPoint = (geom, targetPoint, useGeodesic) => __awaiter(void 0, void 0, void 0, function* () {
    // Esta é uma implementação simplificada
    // No código original, usa geometryEngine.nearestCoordinate
    const dist = (0,_utils_geometry__WEBPACK_IMPORTED_MODULE_2__.measureDistance)(geom, targetPoint, useGeodesic, 'meters');
    return { coordinate: targetPoint, distance: dist };
});
const getObjectId = (feature, oidField) => {
    var _a, _b, _c, _d;
    if (typeof feature.getObjectId === 'function') {
        return feature.getObjectId();
    }
    return (_d = (_b = (_a = feature.attributes) === null || _a === void 0 ? void 0 : _a[oidField]) !== null && _b !== void 0 ? _b : (_c = feature.attributes) === null || _c === void 0 ? void 0 : _c.OBJECTID) !== null && _d !== void 0 ? _d : 0;
};


/***/ }),

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/styles.scss":
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/styles.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./styles.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/proximidade-linha/src/runtime/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/types.ts":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/types.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TXT: () => (/* binding */ TXT)
/* harmony export */ });
const TXT = {
    needMap: 'Selecione um Map widget nas configurações.',
    needLine: 'Clique em uma FEIÇÃO DE LINHA no mapa para selecioná-la.',
    selected: (t, id) => `Linha selecionada: ${t}${id != null ? ` (OID ${id})` : ''}. Defina o raio e clique "Aplicar".`,
    calc: 'Calculando...',
    done: (n, geodesic) => geodesic ? `Encontradas ${n} feições em camadas ativas dentro do raio (distância geodésica).` : `Encontradas ${n} feições em camadas ativas dentro do raio.`,
    exportCsv: 'Exportar CSV',
    radiusKm: 'Raio (km):',
    apply: 'Aplicar'
};


/***/ }),

/***/ "./your-extensions/widgets/proximidade-linha/src/runtime/utils/geometry.ts":
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/utils/geometry.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateLength: () => (/* binding */ calculateLength),
/* harmony export */   checkIntersection: () => (/* binding */ checkIntersection),
/* harmony export */   clipGeometry: () => (/* binding */ clipGeometry),
/* harmony export */   createGeodesicBuffer: () => (/* binding */ createGeodesicBuffer),
/* harmony export */   generateCandidates: () => (/* binding */ generateCandidates),
/* harmony export */   getGeometryParts: () => (/* binding */ getGeometryParts),
/* harmony export */   measureDistance: () => (/* binding */ measureDistance),
/* harmony export */   projectToViewSR: () => (/* binding */ projectToViewSR),
/* harmony export */   toSeedPoint: () => (/* binding */ toSeedPoint)
/* harmony export */ });
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let modules = {};
const ensureModules = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (modules.geometryEngine)
        return modules;
    const [geometryEngine, projection] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
        'esri/geometry/geometryEngine',
        'esri/geometry/projection'
    ]);
    try {
        yield ((_a = projection.load) === null || _a === void 0 ? void 0 : _a.call(projection));
    }
    catch (_b) { }
    modules = { geometryEngine, projection };
    return modules;
});
const toSeedPoint = (geom) => {
    if (geom.type === 'point')
        return geom;
    const { geometryEngine } = modules;
    if (geometryEngine === null || geometryEngine === void 0 ? void 0 : geometryEngine.centroid)
        return geometryEngine.centroid(geom);
    const ext = geom.extent;
    return (ext === null || ext === void 0 ? void 0 : ext.center) || null;
};
const generateCandidates = (geom) => {
    var _a;
    const candidates = [];
    const step = ((_a = geom.spatialReference) === null || _a === void 0 ? void 0 : _a.isGeographic) ? 0.003 : 300; // approx 300m
    if (geom.type === 'point') {
        candidates.push(geom);
    }
    else if (geom.type === 'polyline' || geom.type === 'polygon') {
        // vertices
        const paths = geom.paths || geom.rings;
        if (paths) {
            for (const path of paths) {
                for (const pt of path) {
                    candidates.push({ type: 'point', x: pt[0], y: pt[1], spatialReference: geom.spatialReference });
                }
            }
        }
        // densify
        const { geometryEngine } = modules;
        try {
            const densified = geometryEngine.densify(geom, step);
            const dpaths = densified.paths || densified.rings;
            if (dpaths) {
                for (const path of dpaths) {
                    for (const pt of path) {
                        candidates.push({ type: 'point', x: pt[0], y: pt[1], spatialReference: geom.spatialReference });
                    }
                }
            }
        }
        catch (_b) { }
    }
    return candidates;
};
const getGeometryParts = (geom) => {
    const parts = [];
    if (geom.type === 'point') {
        parts.push(geom);
    }
    else if (geom.type === 'polyline') {
        const paths = geom.paths;
        if (paths) {
            for (const path of paths) {
                parts.push({
                    type: 'polyline',
                    paths: [path],
                    spatialReference: geom.spatialReference
                });
            }
        }
    }
    else if (geom.type === 'polygon') {
        const rings = geom.rings;
        if (rings) {
            for (const ring of rings) {
                parts.push({
                    type: 'polygon',
                    rings: [ring],
                    spatialReference: geom.spatialReference
                });
            }
        }
    }
    else {
        parts.push(geom);
    }
    return parts;
};
const measureDistance = (gA, gB, useGeodesic, unit = 'meters') => {
    var _a, _b, _c, _d;
    const { geometryEngine, projection } = modules;
    let A = gA, B = gB;
    try {
        const sameSR = ((_a = A.spatialReference) === null || _a === void 0 ? void 0 : _a.wkid) === ((_b = B.spatialReference) === null || _b === void 0 ? void 0 : _b.wkid) ||
            ((_c = A.spatialReference) === null || _c === void 0 ? void 0 : _c.wkt) === ((_d = B.spatialReference) === null || _d === void 0 ? void 0 : _d.wkt);
        if (!sameSR) {
            const projB = projection.project(B, A.spatialReference);
            if (projB)
                B = projB;
        }
    }
    catch (_e) { }
    if (useGeodesic && geometryEngine.geodesicDistance) {
        return geometryEngine.geodesicDistance(A, B, unit);
    }
    return geometryEngine.distance(A, B, unit);
};
const createGeodesicBuffer = (geom, radiusKm) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureModules();
    const { geometryEngine } = modules;
    let buffer = geometryEngine.geodesicBuffer(geom, radiusKm, 'kilometers');
    if (Array.isArray(buffer))
        buffer = buffer[0];
    return buffer;
});
const clipGeometry = (targetGeom, clipGeom) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield ensureModules();
    const { geometryEngine } = modules;
    const clipped = geometryEngine.intersect(targetGeom, clipGeom);
    if (!clipped || ((_a = geometryEngine.isEmpty) === null || _a === void 0 ? void 0 : _a.call(geometryEngine, clipped)))
        return null;
    return clipped;
});
const checkIntersection = (geomA, geomB) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureModules();
    const { geometryEngine } = modules;
    return geometryEngine.intersects(geomA, geomB);
});
const calculateLength = (geom_1, useGeodesic_1, ...args_1) => __awaiter(void 0, [geom_1, useGeodesic_1, ...args_1], void 0, function* (geom, useGeodesic, unit = 'kilometers') {
    yield ensureModules();
    const { geometryEngine } = modules;
    if (useGeodesic) {
        return geometryEngine.geodesicLength(geom, unit);
    }
    return geometryEngine.planarLength(geom, unit);
});
const projectToViewSR = (point, viewSR) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureModules();
    const { projection } = modules;
    return projection.project(point, viewSR);
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/runtime/widget.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./your-extensions/widgets/proximidade-linha/src/runtime/components/index.ts");
/* harmony import */ var _hooks_useProximityCalculation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useProximityCalculation */ "./your-extensions/widgets/proximidade-linha/src/runtime/hooks/useProximityCalculation.ts");
/* harmony import */ var _hooks_usePDFReport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/usePDFReport */ "./your-extensions/widgets/proximidade-linha/src/runtime/hooks/usePDFReport.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./your-extensions/widgets/proximidade-linha/src/runtime/types.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./your-extensions/widgets/proximidade-linha/src/runtime/styles.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */







function Widget(props) {
    var _a, _b, _c, _d, _e;
    const [jmv, setJmv] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const [status, setStatus] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(_types__WEBPACK_IMPORTED_MODULE_5__.TXT.needLine);
    const [radiusKmInput, setRadiusKmInput] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('5');
    const [useGeodesicDistanceRuntime, setUseGeodesicDistanceRuntime] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    // Linha escolhida por clique + meta
    const selectedLineGeomRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const selectedLineMetaRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    // Configuração do widget
    const config = {
        unit: ((_a = props.config) === null || _a === void 0 ? void 0 : _a.unit) || 'meters',
        onlyInExtent: !!((_b = props.config) === null || _b === void 0 ? void 0 : _b.onlyInExtent),
        useGeodesicDistance: !!((_c = props.config) === null || _c === void 0 ? void 0 : _c.useGeodesicDistance),
        targetLayerIdsOrTitles: ((_d = props.config) === null || _d === void 0 ? void 0 : _d.targetLayerIdsOrTitles) || []
    };
    // Hook personalizado para cálculos
    const { isComputing, rows, scannedLayersCount, bufferGeom, featureWithPoints, intersectionLines, calculateProximity, clearResults } = (0,_hooks_useProximityCalculation__WEBPACK_IMPORTED_MODULE_3__.useProximityCalculation)();
    // Hook para geração de relatório PDF
    const { isGenerating: isGeneratingPDF, generatePDFReport } = (0,_hooks_usePDFReport__WEBPACK_IMPORTED_MODULE_4__.usePDFReport)();
    // Handlers
    const handleRadiusChange = (value) => setRadiusKmInput(value);
    const handleRadiusKeyDown = (e) => {
        if (e.key === 'Enter')
            handleApply();
    };
    const handleGeodesicChange = (checked) => setUseGeodesicDistanceRuntime(checked);
    const handleApply = () => __awaiter(this, void 0, void 0, function* () {
        const radius = Math.max(0, Number(radiusKmInput) || 0);
        if (!jmv || !selectedLineGeomRef.current || !selectedLineMetaRef.current)
            return;
        try {
            yield calculateProximity(jmv, selectedLineGeomRef.current, selectedLineMetaRef.current, radius, Object.assign(Object.assign({}, config), { useGeodesicDistance: useGeodesicDistanceRuntime }));
            setStatus(_types__WEBPACK_IMPORTED_MODULE_5__.TXT.done(rows.length, useGeodesicDistanceRuntime));
        }
        catch (error) {
            console.error('Erro ao calcular proximidade:', error);
            setStatus('Erro ao calcular proximidade.');
        }
    });
    const handleExportCSV = () => {
        const header = 'Layer;OBJECTID;Geometry;Status;LengthKm;DistanceM;X_Feature;Y_Feature;X_Linha;Y_Linha';
        const lines = rows.map(r => { var _a, _b, _c, _d, _e, _f; return `${r.layerTitle};${r.objectId};${r.geomType};${r.status};${((_a = r.lengthKm) === null || _a === void 0 ? void 0 : _a.toFixed(2)) || ''};${((_b = r.distanceM) === null || _b === void 0 ? void 0 : _b.toFixed(2)) || ''};${((_c = r.xFeature) === null || _c === void 0 ? void 0 : _c.toFixed(2)) || ''};${((_d = r.yFeature) === null || _d === void 0 ? void 0 : _d.toFixed(2)) || ''};${((_e = r.xLine) === null || _e === void 0 ? void 0 : _e.toFixed(2)) || ''};${((_f = r.yLine) === null || _f === void 0 ? void 0 : _f.toFixed(2)) || ''}`; });
        const blob = new Blob([[header, ...lines].join('\n')], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'proximidade.csv';
        a.click();
        URL.revokeObjectURL(url);
    };
    const handleExportPDF = () => __awaiter(this, void 0, void 0, function* () {
        if (!jmv || !selectedLineMetaRef.current || rows.length === 0)
            return;
        const radius = Math.max(0, Number(radiusKmInput) || 0);
        yield generatePDFReport(jmv, selectedLineMetaRef.current, rows, scannedLayersCount, radius, Object.assign(Object.assign({}, config), { useGeodesicDistance: useGeodesicDistanceRuntime }));
    });
    // Conecta a MapView e instala handler de clique
    const onActiveViewChange = (view) => {
        setJmv(view);
        if (!view)
            return;
        const mv = view.view;
        mv.on('click', (e) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const res = yield mv.hitTest(e);
                const hit = res.results.find((r) => {
                    var _a, _b, _c, _d, _e;
                    return r.type === 'graphic' &&
                        ((_b = (_a = r.graphic) === null || _a === void 0 ? void 0 : _a.geometry) === null || _b === void 0 ? void 0 : _b.type) === 'polyline' &&
                        (((_d = (_c = r.graphic) === null || _c === void 0 ? void 0 : _c.layer) === null || _d === void 0 ? void 0 : _d.type) === 'feature' || ((_e = r.graphic) === null || _e === void 0 ? void 0 : _e.layer));
                });
                if (!hit) {
                    selectedLineGeomRef.current = null;
                    selectedLineMetaRef.current = null;
                    setStatus(_types__WEBPACK_IMPORTED_MODULE_5__.TXT.needLine);
                    clearResults();
                    return;
                }
                const g = hit.graphic;
                const layer = g.layer;
                const geom = g.geometry;
                const oidField = (layer === null || layer === void 0 ? void 0 : layer.objectIdField) || 'OBJECTID';
                const oid = typeof g.getObjectId === 'function'
                    ? g.getObjectId()
                    : (_b = (_a = g.attributes) === null || _a === void 0 ? void 0 : _a[oidField]) !== null && _b !== void 0 ? _b : (_c = g.attributes) === null || _c === void 0 ? void 0 : _c.OBJECTID;
                selectedLineGeomRef.current = geom;
                selectedLineMetaRef.current = {
                    layerTitle: (layer === null || layer === void 0 ? void 0 : layer.title) || 'Linha',
                    layerId: layer.id,
                    objectId: oid
                };
                setStatus(_types__WEBPACK_IMPORTED_MODULE_5__.TXT.selected((layer === null || layer === void 0 ? void 0 : layer.title) || 'Linha', oid));
                clearResults();
            }
            catch (err) {
                console.error('Erro no clique:', err);
            }
        }));
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-proximidade-linha jimu-widget" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Controls, { status: status, radiusKmInput: radiusKmInput, onRadiusChange: handleRadiusChange, onRadiusKeyDown: handleRadiusKeyDown, useGeodesicDistanceRuntime: useGeodesicDistanceRuntime, onGeodesicChange: handleGeodesicChange, onApply: handleApply, isComputing: isComputing, hasMap: !!jmv }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Counters, { scannedLayersCount: scannedLayersCount, rows: rows, onExportCSV: handleExportCSV, onExportPDF: handleExportPDF, isGeneratingPDF: isGeneratingPDF }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.ResultsTable, { rows: rows }),
        ((_e = props.useMapWidgetIds) === null || _e === void 0 ? void 0 : _e.length) ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: onActiveViewChange })) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "wpl-need-map" }, _types__WEBPACK_IMPORTED_MODULE_5__.TXT.needMap)),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.MapFeedback, { jmv: jmv, selectedLineGeom: selectedLineGeomRef.current, selectedLineMeta: selectedLineMetaRef.current, bufferGeom: bufferGeom, featureWithPoints: featureWithPoints, intersectionLines: intersectionLines })));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLENBQUMsT0FBTywySUFBMkksUUFBUSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUsscUJBQXFCLFVBQVUsc0JBQXNCLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxX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LElBQUksRUFBRSxJQUFJLEVBQ1YsV0FBVyxFQUFFLGVBQWUsRUFDNUIsV0FBVyxFQUFFLGVBQWUsRUFDNUIsZUFBZSxFQUFFLGVBQWUsR0FDaEM7UUFFRiwrQ0FBQyxxREFBWSxJQUFDLElBQUksRUFBRSxJQUFJLEdBQUk7UUFHM0IsWUFBSyxDQUFDLGVBQWUsMENBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUMvQiwrQ0FBQyw2REFBb0IsSUFDbkIsY0FBYyxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQ3hDLGtCQUFrQixFQUFFLGtCQUFrQixHQUN0QyxDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0Ysd0RBQUssU0FBUyxFQUFDLGNBQWMsSUFBRSx1Q0FBRyxDQUFDLE9BQU8sQ0FBTyxDQUNsRDtRQUdELCtDQUFDLG9EQUFXLElBQ1YsR0FBRyxFQUFFLEdBQUcsRUFDUixnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLEVBQzdDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLE9BQU8sRUFDN0MsVUFBVSxFQUFFLFVBQVUsRUFDdEIsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQ3BDLGlCQUFpQixFQUFFLGlCQUFpQixHQUNwQyxDQUNFLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hpbWlkYWRlLWxpbmhhL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQ29udHJvbHMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS9jb21wb25lbnRzL0NvdW50ZXJzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYXBGZWVkYmFjay50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hpbWlkYWRlLWxpbmhhL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvUmVzdWx0c1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvaG9va3MvdXNlUERGUmVwb3J0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS9ob29rcy91c2VQcm94aW1pdHlDYWxjdWxhdGlvbi50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvc3R5bGVzLnNjc3M/MWI5NCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hpbWlkYWRlLWxpbmhhL3NyYy9ydW50aW1lL3V0aWxzL2dlb21ldHJ5LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBXaWRnZXQ6IFByb3hpbWlkYWRlIGF0w6kgTGluaGFcbiAgIExheW91dCBvcmdhbml6YWRvICsgdmlzdWFsIGxpbXBvXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIHtcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgQmFzZVxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSwgI2ZmZik7XG4gIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMSwgIzFmMWYxZik7XG4gIGZvbnQ6IDQwMCAwLjk1cmVtLzEuNCB2YXIoLS1jYWxjaXRlLXNhbnMtZm9udC1mYW1pbHksIHN5c3RlbS11aSk7XG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIDEpIFRleHRvIGluZm9ybWF0aXZvIChkaXNjcmV0bylcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgMikgTGluaGE6IFJhaW8gKyBBcGxpY2FyXG4gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qIGxhYmVsIHwgaW5wdXQgfCBib3TDo28gYXBsaWNhciAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAzKSBDb250YWRvcmVzICsgNCkgRXhwb3J0YXJcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLyogY29udDEgfCBjb250MiB8IGVzcGHDp28gfCBleHBvcnRhciAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICA1KSBUYWJlbGEgZGUgcmVzdWx0YWRvc1xuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICBSZXNwb25zaXZpZGFkZSAocGFpbmVsIGVzdHJlaXRvKVxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWluZm8tdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTIsICM1NTUpO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWluZm8tdGV4dCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtcmFkaXVzLXJvdyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMTIwcHggYXV0bztcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMiwgIzY2Nik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1pbnB1dCB7XG4gIGhlaWdodDogMzRweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZDhkOGQ4KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSwgI2ZmZik7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItYnJhbmQsICMwMDdhYzIpO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNhbGNpdGUtY29sb3ItYnJhbmQsICMwMDdhYzIpIDIyJSwgdHJhbnNwYXJlbnQpO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWJ0bi1wcmltYXJ5IHtcbiAgaGVpZ2h0OiAzOHB4OyAvKiBib3TDo28gbWFpb3IgKi9cbiAgcGFkZGluZzogMCAxNnB4O1xuICBtaW4td2lkdGg6IDExMnB4OyAvKiBsYXJndXJhIG3DrW5pbWEgcGFyYSBkYXIgcHJlc2Vuw6dhICovXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItYnJhbmQsICMwMDdhYzIpO1xuICBjb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LWludmVyc2UsICNmZmYpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIHRyYW5zZm9ybSAwLjAycyBlYXNlO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZC1ob3ZlciwgIzAwNjE5Yik7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtY291bnRlcnMtcm93IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyIGF1dG87XG4gIGNvbHVtbi1nYXA6IDEycHg7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtY291bnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMiwgI2Q4ZDhkOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yLCAjZjVmNWY1KTtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1jb3VudGVyLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0yLCAjNjY2KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1jb3VudGVyLXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0xLCAjMWYxZjFmKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1hY3Rpb25zIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtYnRuLWdob3N0IHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTEsICNmZmYpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZDhkOGQ4KTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZTtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1idG4tZ2hvc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMiwgI2Y1ZjVmNSk7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtYnRuLWdob3N0OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLXRhYmxlLXdyYXAge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMiwgI2Q4ZDhkOCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTEsICNmZmYpO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC10YWJsZSB0aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTEsICNmZmYpO1xuICBjb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTIsICM2YTZhNmEpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMiwgI2Q4ZDhkOCk7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLXRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZTZlNmU2KTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC10YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTIsICNmNWY1ZjUpIDU1JSwgdHJhbnNwYXJlbnQpO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLXRhYmxlIHRib2R5IHRyOmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNhbGNpdGUtY29sb3ItYnJhbmQsICMwMDdhYzIpIDQlLCB0cmFuc3BhcmVudCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLXJhZGl1cy1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgLyogbGFiZWwgcXVlYnJhIHBhcmEgbGluaGEgYWNpbWEgKi9cbiAgfVxuICAud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtbGFiZWwge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICB9XG4gIC53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1jb3VudGVycy1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgLyogY29udGFkb3JlcyBsYWRvIGEgbGFkbyAqL1xuICB9XG4gIC53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1hY3Rpb25zIHtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDZweDsgLyogZXhwb3J0YXIgZGVzY2UgKi9cbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQWhCOzs7b0NBQUE7QUFLQTtFQUNFOztvQ0FBQTtFQUdBLGFBQUE7RUFDQSx5REFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0VBQUE7RUFFQTs7b0NBQUE7RUFXQTs7b0NBQUE7RUFVQSxrQ0FBQTtFQXlDQTs7b0NBQUE7RUFHQSxzQ0FBQTtFQXdDQTs7b0NBQUE7RUE0Q0E7O29DQUFBO0FBcklGO0FBYkU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtBQWVKO0FBYkU7RUFBbUIsU0FBQTtBQWdCckI7QUFYRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQWFKO0FBVEU7RUFDRSw2Q0FBQTtBQVdKO0FBUkU7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBVUo7QUFQRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0RBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0VBQ0EsMERBQUE7QUFTSjtBQVJJO0VBQ0UsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsOEZBQUE7QUFVTjtBQU5FO0VBQ0UsWUFBQSxFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBLEVBQUEscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxREFBQTtFQUNBLDhDQUFBO0VBQ0EsNkRBQUE7QUFRSjtBQVBJO0VBQVUsMkRBQUE7QUFVZDtBQVRJO0VBQVcsMEJBQUE7QUFZZjtBQVhJO0VBQWEsWUFBQTtFQUFhLG1CQUFBO0FBZTlCO0FBUkU7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0FBVUo7QUFQRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx3REFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7QUFTSjtBQVBFO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtBQVNKO0FBUEU7RUFDRSwyQ0FBQTtFQUNBLGdCQUFBO0FBU0o7QUFORTtFQUFlLGlCQUFBO0FBU2pCO0FBUEU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5REFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0FBU0o7QUFSSTtFQUFVLDREQUFBO0FBV2Q7QUFWSTtFQUFhLFlBQUE7RUFBYSxtQkFBQTtBQWM5QjtBQVJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdEQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtBQVVKO0FBUEU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVNKO0FBTkU7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EseURBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0RBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFRSjtBQUxFO0VBQ0UsaUJBQUE7RUFDQSwrREFBQTtFQUNBLHNCQUFBO0FBT0o7QUFKRTtFQUNFLGlHQUFBO0FBTUo7QUFKRTtFQUNFLHlGQUFBO0FBTUo7QUFBRTtFQUNFO0lBQ0UsOEJBQUEsRUFBQSxrQ0FBQTtFQUVKO0VBQUU7SUFBYSxpQkFBQTtFQUdmO0VBREU7SUFDRSw4QkFBQSxFQUFBLDJCQUFBO0VBR0o7RUFERTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBLEVBQUEsbUJBQUE7RUFHSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICBXaWRnZXQ6IFByb3hpbWlkYWRlIGF0w6kgTGluaGFcXHJcXG4gICBMYXlvdXQgb3JnYW5pemFkbyArIHZpc3VhbCBsaW1wb1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIHtcXHJcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgICBCYXNlXFxyXFxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0xLCAjZmZmKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMSwgIzFmMWYxZik7XFxyXFxuICBmb250OiA0MDAgMC45NXJlbS8xLjQgdmFyKC0tY2FsY2l0ZS1zYW5zLWZvbnQtZmFtaWx5LCBzeXN0ZW0tdWkpO1xcclxcblxcclxcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgIDEpIFRleHRvIGluZm9ybWF0aXZvIChkaXNjcmV0bylcXHJcXG4gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuICAud3BsLWluZm8tdGV4dCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTIsICM1NTUpO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgfVxcclxcbiAgLndwbC1pbmZvLXRleHQgcCB7IG1hcmdpbjogMDsgfVxcclxcblxcclxcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgIDIpIExpbmhhOiBSYWlvICsgQXBsaWNhclxcclxcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4gIC53cGwtcm93IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIGxhYmVsIHwgaW5wdXQgfCBib3TDo28gYXBsaWNhciAqL1xcclxcbiAgLndwbC1yYWRpdXMtcm93IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxMjBweCBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndwbC1sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMiwgIzY2Nik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53cGwtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDM0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMiwgI2Q4ZDhkOCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTEsICNmZmYpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLCBib3gtc2hhZG93IC4xNXMgZWFzZTtcXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItYnJhbmQsICMwMDdhYzIpO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZCwgIzAwN2FjMikgMjIlLCB0cmFuc3BhcmVudCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53cGwtYnRuLXByaW1hcnkge1xcclxcbiAgICBoZWlnaHQ6IDM4cHg7ICAgICAgICAgICAgICAgLyogYm90w6NvIG1haW9yICovXFxyXFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMTJweDsgICAgICAgICAgIC8qIGxhcmd1cmEgbcOtbmltYSBwYXJhIGRhciBwcmVzZW7Dp2EgKi9cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZCwgIzAwN2FjMik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZSwgI2ZmZik7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLCB0cmFuc2Zvcm0gLjAycyBlYXNlO1xcclxcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZC1ob3ZlciwgIzAwNjE5Yik7IH1cXHJcXG4gICAgJjphY3RpdmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsgfVxcclxcbiAgICAmOmRpc2FibGVkIHsgb3BhY2l0eTogLjY7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgICAzKSBDb250YWRvcmVzICsgNCkgRXhwb3J0YXJcXHJcXG4gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuICAvKiBjb250MSB8IGNvbnQyIHwgZXNwYcOnbyB8IGV4cG9ydGFyICovXFxyXFxuICAud3BsLWNvdW50ZXJzLXJvdyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDFmciBhdXRvO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLndwbC1jb3VudGVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNnB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZDhkOGQ4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTIsICNmNWY1ZjUpO1xcclxcbiAgfVxcclxcbiAgLndwbC1jb3VudGVyLWxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0yLCAjNjY2KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIH1cXHJcXG4gIC53cGwtY291bnRlci12YWx1ZSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMSwgIzFmMWYxZik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3BsLWFjdGlvbnMgeyBqdXN0aWZ5LXNlbGY6IGVuZDsgfVxcclxcblxcclxcbiAgLndwbC1idG4tZ2hvc3Qge1xcclxcbiAgICBoZWlnaHQ6IDM0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSwgI2ZmZik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTIsICNkOGQ4ZDgpO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2U7XFxyXFxuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMiwgI2Y1ZjVmNSk7IH1cXHJcXG4gICAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICAgNSkgVGFiZWxhIGRlIHJlc3VsdGFkb3NcXHJcXG4gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuICAud3BsLXRhYmxlLXdyYXAge1xcclxcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDI0MHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMiwgI2Q4ZDhkOCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTEsICNmZmYpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndwbC10YWJsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBmb250LXNpemU6IDAuOTRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3BsLXRhYmxlIHRoZWFkIHRoIHtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSwgI2ZmZik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMiwgIzZhNmE2YSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZDhkOGQ4KTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3BsLXRhYmxlIHRib2R5IHRkIHtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZTZlNmU2KTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53cGwtdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHRkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yLCAjZjVmNWY1KSA1NSUsIHRyYW5zcGFyZW50KTtcXHJcXG4gIH1cXHJcXG4gIC53cGwtdGFibGUgdGJvZHkgdHI6aG92ZXIgdGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZCwgIzAwN2FjMikgNCUsIHRyYW5zcGFyZW50KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgICBSZXNwb25zaXZpZGFkZSAocGFpbmVsIGVzdHJlaXRvKVxcclxcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xcclxcbiAgICAud3BsLXJhZGl1cy1yb3cge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgLyogbGFiZWwgcXVlYnJhIHBhcmEgbGluaGEgYWNpbWEgKi9cXHJcXG4gICAgfVxcclxcbiAgICAud3BsLWxhYmVsIHsgZ3JpZC1jb2x1bW46IDEgLyAtMTsgfVxcclxcblxcclxcbiAgICAud3BsLWNvdW50ZXJzLXJvdyB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAgLyogY29udGFkb3JlcyBsYWRvIGEgbGFkbyAqL1xcclxcbiAgICB9XFxyXFxuICAgIC53cGwtYWN0aW9ucyB7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG4gICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDZweDsgICAgICAgICAgICAgICAgIC8qIGV4cG9ydGFyIGRlc2NlICovXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBCdXR0b24sIExvYWRpbmcgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBUWFQgfSBmcm9tICcuLi90eXBlcydcclxuXHJcbmludGVyZmFjZSBDb250cm9sc1Byb3BzIHtcclxuICBzdGF0dXM6IHN0cmluZ1xyXG4gIHJhZGl1c0ttSW5wdXQ6IHN0cmluZ1xyXG4gIG9uUmFkaXVzQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxyXG4gIG9uUmFkaXVzS2V5RG93bjogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHZvaWRcclxuICB1c2VHZW9kZXNpY0Rpc3RhbmNlUnVudGltZTogYm9vbGVhblxyXG4gIG9uR2VvZGVzaWNDaGFuZ2U6IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkXHJcbiAgb25BcHBseTogKCkgPT4gdm9pZFxyXG4gIGlzQ29tcHV0aW5nOiBib29sZWFuXHJcbiAgaGFzTWFwOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250cm9sczogUmVhY3QuRkM8Q29udHJvbHNQcm9wcz4gPSAoe1xyXG4gIHN0YXR1cyxcclxuICByYWRpdXNLbUlucHV0LFxyXG4gIG9uUmFkaXVzQ2hhbmdlLFxyXG4gIG9uUmFkaXVzS2V5RG93bixcclxuICB1c2VHZW9kZXNpY0Rpc3RhbmNlUnVudGltZSxcclxuICBvbkdlb2Rlc2ljQ2hhbmdlLFxyXG4gIG9uQXBwbHksXHJcbiAgaXNDb21wdXRpbmcsXHJcbiAgaGFzTWFwXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDEpIFRleHRvIGluZm9ybWF0aXZvIChkaXNjcmV0bywgc2VtIGNhaXhhKSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cGwtaW5mby10ZXh0XCI+XHJcbiAgICAgICAge3N0YXR1c31cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogMikgTGluaGE6IFJhaW8gKyBBcGxpY2FyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbC1yb3cgd3BsLXJhZGl1cy1yb3dcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwid3BsLWxhYmVsXCI+e1RYVC5yYWRpdXNLbX08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICBzdGVwPXswLjF9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3cGwtaW5wdXRcIlxyXG4gICAgICAgICAgdmFsdWU9e3JhZGl1c0ttSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uUmFkaXVzQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIG9uS2V5RG93bj17b25SYWRpdXNLZXlEb3dufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwid3BsLWJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHl9XHJcbiAgICAgICAgICBkaXNhYmxlZD17aXNDb21wdXRpbmcgfHwgIWhhc01hcH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNDb21wdXRpbmcgPyA8TG9hZGluZyAvPiA6IFRYVC5hcHBseX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogQ2hlY2tib3ggcGFyYSBnZW9kw6lzaWNhICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbC1yb3cgd3BsLWdlb2Rlc2ljLXJvd1wiPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXt1c2VHZW9kZXNpY0Rpc3RhbmNlUnVudGltZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkdlb2Rlc2ljQ2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFVzYXIgZGlzdMOibmNpYSBnZW9kw6lzaWNhXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEJ1dHRvbiwgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IFRYVCB9IGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgdHlwZSB7IFJvdyB9IGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZXJzUHJvcHMge1xyXG4gIHNjYW5uZWRMYXllcnNDb3VudDogbnVtYmVyXHJcbiAgcm93czogUm93W11cclxuICBvbkV4cG9ydENTVjogKCkgPT4gdm9pZFxyXG4gIG9uRXhwb3J0UERGPzogKCkgPT4gdm9pZFxyXG4gIGlzR2VuZXJhdGluZ1BERj86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZXJzOiBSZWFjdC5GQzxDb3VudGVyc1Byb3BzPiA9ICh7XHJcbiAgc2Nhbm5lZExheWVyc0NvdW50LFxyXG4gIHJvd3MsXHJcbiAgb25FeHBvcnRDU1YsXHJcbiAgb25FeHBvcnRQREYsXHJcbiAgaXNHZW5lcmF0aW5nUERGID0gZmFsc2VcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbC1yb3cgd3BsLWNvdW50ZXJzLXJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbC1jb3VudGVyXCIgdGl0bGU9XCJDYW1hZGFzIHZhcnJpZGFzXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid3BsLWNvdW50ZXItbGFiZWxcIj5DYW1hZGFzOjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3cGwtY291bnRlci12YWx1ZVwiPntzY2FubmVkTGF5ZXJzQ291bnR9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BsLWNvdW50ZXJcIiB0aXRsZT1cIkZlacOnw7VlcyBubyByZXN1bHRhZG9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3cGwtY291bnRlci1sYWJlbFwiPkZlacOnw7Vlczo8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid3BsLWNvdW50ZXItdmFsdWVcIj57cm93cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BsLWFjdGlvbnNcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3cGwtYnRuLWdob3N0XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e29uRXhwb3J0Q1NWfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFyb3dzLmxlbmd0aH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7VFhULmV4cG9ydENzdn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAge29uRXhwb3J0UERGICYmIChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid3BsLWJ0bi1naG9zdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uRXhwb3J0UERGfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXJvd3MubGVuZ3RoIHx8IGlzR2VuZXJhdGluZ1BERn1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzhweCcgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzR2VuZXJhdGluZ1BERiA/IDxMb2FkaW5nIC8+IDogJ/Cfk4QgUmVsYXTDs3JpbyBQREYnfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3LCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB0eXBlIHsgRmVhdHVyZVdpdGhQb2ludHMsIEludGVyc2VjdGlvbkxpbmUsIFNlbGVjdGVkTGluZU1ldGEgfSBmcm9tICcuLi90eXBlcydcclxuXHJcbmludGVyZmFjZSBNYXBGZWVkYmFja1Byb3BzIHtcclxuICBqbXY6IEppbXVNYXBWaWV3IHwgbnVsbFxyXG4gIHNlbGVjdGVkTGluZUdlb206IF9fZXNyaS5HZW9tZXRyeSB8IG51bGxcclxuICBzZWxlY3RlZExpbmVNZXRhOiBTZWxlY3RlZExpbmVNZXRhIHwgbnVsbFxyXG4gIGJ1ZmZlckdlb206IF9fZXNyaS5Qb2x5Z29uIHwgbnVsbFxyXG4gIGZlYXR1cmVXaXRoUG9pbnRzOiBGZWF0dXJlV2l0aFBvaW50c1tdXHJcbiAgaW50ZXJzZWN0aW9uTGluZXM6IEludGVyc2VjdGlvbkxpbmVbXVxyXG59XHJcblxyXG5sZXQgbW9kdWxlc1JlZjogYW55ID0ge31cclxuXHJcbmNvbnN0IGVuc3VyZU1vZHVsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKG1vZHVsZXNSZWYuR3JhcGhpY3NMYXllcikgcmV0dXJuIG1vZHVsZXNSZWZcclxuICBjb25zdCBbXHJcbiAgICBHcmFwaGljc0xheWVyLFxyXG4gICAgR3JhcGhpYyxcclxuICAgIFBvbHlsaW5lLFxyXG4gICAgVGV4dFN5bWJvbFxyXG4gIF0gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJyxcclxuICAgICdlc3JpL0dyYXBoaWMnLFxyXG4gICAgJ2VzcmkvZ2VvbWV0cnkvUG9seWxpbmUnLFxyXG4gICAgJ2Vzcmkvc3ltYm9scy9UZXh0U3ltYm9sJ1xyXG4gIF0pXHJcbiAgbW9kdWxlc1JlZiA9IHsgR3JhcGhpY3NMYXllciwgR3JhcGhpYywgUG9seWxpbmUsIFRleHRTeW1ib2wgfVxyXG4gIHJldHVybiBtb2R1bGVzUmVmXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYXBGZWVkYmFjazogUmVhY3QuRkM8TWFwRmVlZGJhY2tQcm9wcz4gPSAoe1xyXG4gIGptdixcclxuICBzZWxlY3RlZExpbmVHZW9tLFxyXG4gIHNlbGVjdGVkTGluZU1ldGEsXHJcbiAgYnVmZmVyR2VvbSxcclxuICBmZWF0dXJlV2l0aFBvaW50cyxcclxuICBpbnRlcnNlY3Rpb25MaW5lc1xyXG59KSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0aW9uR0xSZWYgPSBSZWFjdC51c2VSZWY8X19lc3JpLkdyYXBoaWNzTGF5ZXIgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IGJ1ZmZlckdMUmVmID0gUmVhY3QudXNlUmVmPF9fZXNyaS5HcmFwaGljc0xheWVyIHwgbnVsbD4obnVsbClcclxuICBjb25zdCByZXN1bHRzR0xSZWYgPSBSZWFjdC51c2VSZWY8X19lc3JpLkdyYXBoaWNzTGF5ZXIgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IHByb3hpbWl0eUxpbmVzR0xSZWYgPSBSZWFjdC51c2VSZWY8X19lc3JpLkdyYXBoaWNzTGF5ZXIgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBlbnN1cmVHcmFwaGljTGF5ZXJzID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFqbXYpIHJldHVyblxyXG4gICAgY29uc3QgeyBHcmFwaGljc0xheWVyIH0gPSBhd2FpdCBlbnN1cmVNb2R1bGVzKClcclxuICAgIGNvbnN0IHZpZXcgPSBqbXYudmlldyBhcyBfX2VzcmkuTWFwVmlld1xyXG4gICAgY29uc3QgbWFwID0gdmlldy5tYXBcclxuXHJcbiAgICBpZiAoIXNlbGVjdGlvbkdMUmVmLmN1cnJlbnQpIHtcclxuICAgICAgc2VsZWN0aW9uR0xSZWYuY3VycmVudCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KVxyXG4gICAgICBtYXAuYWRkKHNlbGVjdGlvbkdMUmVmLmN1cnJlbnQpXHJcbiAgICB9XHJcbiAgICBpZiAoIWJ1ZmZlckdMUmVmLmN1cnJlbnQpIHtcclxuICAgICAgYnVmZmVyR0xSZWYuY3VycmVudCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KVxyXG4gICAgICBtYXAuYWRkKGJ1ZmZlckdMUmVmLmN1cnJlbnQpXHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdHNHTFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlc3VsdHNHTFJlZi5jdXJyZW50ID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pXHJcbiAgICAgIG1hcC5hZGQocmVzdWx0c0dMUmVmLmN1cnJlbnQpXHJcbiAgICB9XHJcbiAgICBpZiAoIXByb3hpbWl0eUxpbmVzR0xSZWYuY3VycmVudCkge1xyXG4gICAgICBwcm94aW1pdHlMaW5lc0dMUmVmLmN1cnJlbnQgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSlcclxuICAgICAgbWFwLmFkZChwcm94aW1pdHlMaW5lc0dMUmVmLmN1cnJlbnQpXHJcbiAgICB9XHJcbiAgfSwgW2ptdl0pXHJcblxyXG4gIGNvbnN0IGRyYXdTZWxlY3Rpb25BbmRCdWZmZXIgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAobGluZTogX19lc3JpLlBvbHlsaW5lLCBidWZmZXI/OiBfX2VzcmkuUG9seWdvbikgPT4ge1xyXG4gICAgY29uc3QgeyBHcmFwaGljIH0gPSBhd2FpdCBlbnN1cmVNb2R1bGVzKClcclxuICAgIGF3YWl0IGVuc3VyZUdyYXBoaWNMYXllcnMoKVxyXG5cclxuICAgIHNlbGVjdGlvbkdMUmVmLmN1cnJlbnQ/LnJlbW92ZUFsbCgpXHJcbiAgICBidWZmZXJHTFJlZi5jdXJyZW50Py5yZW1vdmVBbGwoKVxyXG5cclxuICAgIGNvbnN0IGxpbmVTeW1ib2wgPSB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbGluZScsXHJcbiAgICAgIGNvbG9yOiBbMCwgMjU1LCAyNTUsIDFdLFxyXG4gICAgICB3aWR0aDogM1xyXG4gICAgfSBhcyBhbnlcclxuXHJcbiAgICBzZWxlY3Rpb25HTFJlZi5jdXJyZW50Py5hZGQobmV3IEdyYXBoaWMoeyBnZW9tZXRyeTogbGluZSwgc3ltYm9sOiBsaW5lU3ltYm9sIGFzIGFueSB9KSlcclxuXHJcbiAgICBpZiAoYnVmZmVyKSB7XHJcbiAgICAgIGNvbnN0IGZpbGxTeW1ib2wgPSB7XHJcbiAgICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcclxuICAgICAgICBjb2xvcjogWzAsIDI1NSwgMjU1LCAwLjEyXSxcclxuICAgICAgICBvdXRsaW5lOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBbMCwgMjU1LCAyNTUsIDAuOF0sIHdpZHRoOiAxLjUgfVxyXG4gICAgICB9IGFzIGFueVxyXG5cclxuICAgICAgYnVmZmVyR0xSZWYuY3VycmVudD8uYWRkKG5ldyBHcmFwaGljKHsgZ2VvbWV0cnk6IGJ1ZmZlciwgc3ltYm9sOiBmaWxsU3ltYm9sIGFzIGFueSB9KSlcclxuICAgIH1cclxuICB9LCBbZW5zdXJlR3JhcGhpY0xheWVyc10pXHJcblxyXG4gIGNvbnN0IGRyYXdSZXN1bHRzID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKGZlYXR1cmVXaXRoUG9pbnRzOiBGZWF0dXJlV2l0aFBvaW50c1tdLCBpbnRlcnNlY3Rpb25MaW5lczogSW50ZXJzZWN0aW9uTGluZVtdKSA9PiB7XHJcbiAgICBjb25zdCB7IEdyYXBoaWMsIFBvbHlsaW5lLCBUZXh0U3ltYm9sIH0gPSBhd2FpdCBlbnN1cmVNb2R1bGVzKClcclxuICAgIGF3YWl0IGVuc3VyZUdyYXBoaWNMYXllcnMoKVxyXG4gICAgcmVzdWx0c0dMUmVmLmN1cnJlbnQ/LnJlbW92ZUFsbCgpXHJcbiAgICBwcm94aW1pdHlMaW5lc0dMUmVmLmN1cnJlbnQ/LnJlbW92ZUFsbCgpXHJcblxyXG4gICAgY29uc3QgcG9pbnRTeW1ib2wgPSB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcclxuICAgICAgY29sb3I6IFsyNTUsIDEwMiwgMCwgMC45XSxcclxuICAgICAgc2l6ZTogOCxcclxuICAgICAgb3V0bGluZTogeyB0eXBlOiAnc2ltcGxlLWxpbmUnLCBjb2xvcjogWzI1NSwgMjU1LCAyNTUsIDFdLCB3aWR0aDogMSB9XHJcbiAgICB9IGFzIGFueVxyXG5cclxuICAgIGNvbnN0IHByb3hpbWl0eUxpbmVTeW1ib2wgPSB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbGluZScsXHJcbiAgICAgIGNvbG9yOiBbMjU1LCAxNjUsIDAsIDAuN10sXHJcbiAgICAgIHdpZHRoOiAyLFxyXG4gICAgICBzdHlsZTogJ2Rhc2gnXHJcbiAgICB9IGFzIGFueVxyXG5cclxuICAgIGNvbnN0IGludGVyc2VjdGlvbkxpbmVTeW1ib2wgPSB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbGluZScsXHJcbiAgICAgIGNvbG9yOiBbMjU1LCAwLCAwLCAwLjldLFxyXG4gICAgICB3aWR0aDogM1xyXG4gICAgfSBhcyBhbnlcclxuXHJcbiAgICBjb25zdCB0ZXh0U3ltYm9sID0ge1xyXG4gICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXHJcbiAgICAgIGhhbG9Db2xvcjogWzI1NSwgMjU1LCAyNTUsIDFdLFxyXG4gICAgICBoYWxvU2l6ZTogMSxcclxuICAgICAgZm9udDogeyBzaXplOiAxMCwgZmFtaWx5OiAnQXJpYWwnIH0sXHJcbiAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ21pZGRsZSdcclxuICAgIH0gYXMgYW55XHJcblxyXG4gICAgY29uc3QgcGluczogX19lc3JpLkdyYXBoaWNbXSA9IFtdXHJcbiAgICBjb25zdCBsaW5lczogX19lc3JpLkdyYXBoaWNbXSA9IFtdXHJcbiAgICBjb25zdCB0ZXh0czogX19lc3JpLkdyYXBoaWNbXSA9IFtdXHJcblxyXG4gICAgZmVhdHVyZVdpdGhQb2ludHMuZm9yRWFjaCgoeyBwb2ludE9uRmVhdHVyZSwgcG9pbnRPbkxpbmUsIGRpc3RhbmNlTSB9KSA9PiB7XHJcbiAgICAgIGlmIChwb2ludE9uRmVhdHVyZSkge1xyXG4gICAgICAgIHBpbnMucHVzaChuZXcgR3JhcGhpYyh7IGdlb21ldHJ5OiBwb2ludE9uRmVhdHVyZSwgc3ltYm9sOiBwb2ludFN5bWJvbCBhcyBhbnkgfSkpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50T25GZWF0dXJlICYmIHBvaW50T25MaW5lKSB7XHJcbiAgICAgICAgY29uc3QgbGluZUdlb20gPSBuZXcgUG9seWxpbmUoe1xyXG4gICAgICAgICAgcGF0aHM6IFtbcG9pbnRPbkZlYXR1cmUueCwgcG9pbnRPbkZlYXR1cmUueV0sIFtwb2ludE9uTGluZS54LCBwb2ludE9uTGluZS55XV0sXHJcbiAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBwb2ludE9uRmVhdHVyZS5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsaW5lcy5wdXNoKG5ldyBHcmFwaGljKHsgZ2VvbWV0cnk6IGxpbmVHZW9tLCBzeW1ib2w6IHByb3hpbWl0eUxpbmVTeW1ib2wgYXMgYW55IH0pKVxyXG5cclxuICAgICAgICBjb25zdCBtaWRYID0gKHBvaW50T25GZWF0dXJlLnggKyBwb2ludE9uTGluZS54KSAvIDJcclxuICAgICAgICBjb25zdCBtaWRZID0gKHBvaW50T25GZWF0dXJlLnkgKyBwb2ludE9uTGluZS55KSAvIDJcclxuICAgICAgICBjb25zdCBtaWRQb2ludCA9IHsgdHlwZTogJ3BvaW50JywgeDogbWlkWCwgeTogbWlkWSwgc3BhdGlhbFJlZmVyZW5jZTogcG9pbnRPbkZlYXR1cmUuc3BhdGlhbFJlZmVyZW5jZSB9IGFzIF9fZXNyaS5Qb2ludFxyXG4gICAgICAgIGNvbnN0IHRleHRTeW0gPSB7IC4uLnRleHRTeW1ib2wsIHRleHQ6IGRpc3RhbmNlTT8udG9GaXhlZCgwKSArICcgbScgfSBhcyBhbnlcclxuICAgICAgICB0ZXh0cy5wdXNoKG5ldyBHcmFwaGljKHsgZ2VvbWV0cnk6IG1pZFBvaW50LCBzeW1ib2w6IHRleHRTeW0gfSkpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaW50ZXJzZWN0aW9uTGluZXMuZm9yRWFjaCgoeyBsaW5lLCBsZW5ndGhLbSB9KSA9PiB7XHJcbiAgICAgIGxpbmVzLnB1c2gobmV3IEdyYXBoaWMoeyBnZW9tZXRyeTogbGluZSwgc3ltYm9sOiBpbnRlcnNlY3Rpb25MaW5lU3ltYm9sIGFzIGFueSB9KSlcclxuXHJcbiAgICAgIGNvbnN0IGV4dGVudCA9IGxpbmUuZXh0ZW50XHJcbiAgICAgIGlmIChleHRlbnQpIHtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSBleHRlbnQuY2VudGVyXHJcbiAgICAgICAgY29uc3QgdGV4dFN5bSA9IHsgLi4udGV4dFN5bWJvbCwgdGV4dDogbGVuZ3RoS20udG9GaXhlZCgyKSArICcga20nIH0gYXMgYW55XHJcbiAgICAgICAgdGV4dHMucHVzaChuZXcgR3JhcGhpYyh7IGdlb21ldHJ5OiBjZW50ZXIsIHN5bWJvbDogdGV4dFN5bSB9KSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAocGlucy5sZW5ndGgpIHJlc3VsdHNHTFJlZi5jdXJyZW50Py5hZGRNYW55KHBpbnMpXHJcbiAgICBpZiAobGluZXMubGVuZ3RoKSBwcm94aW1pdHlMaW5lc0dMUmVmLmN1cnJlbnQ/LmFkZE1hbnkobGluZXMpXHJcbiAgICBpZiAodGV4dHMubGVuZ3RoKSByZXN1bHRzR0xSZWYuY3VycmVudD8uYWRkTWFueSh0ZXh0cylcclxuICB9LCBbZW5zdXJlR3JhcGhpY0xheWVyc10pXHJcblxyXG4gIC8vIEVmZWl0b3MgcGFyYSBhdHVhbGl6YXIgbyBtYXBhXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChqbXYpIHtcclxuICAgICAgZW5zdXJlR3JhcGhpY0xheWVycygpXHJcbiAgICB9XHJcbiAgfSwgW2ptdiwgZW5zdXJlR3JhcGhpY0xheWVyc10pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRMaW5lR2VvbSAmJiBzZWxlY3RlZExpbmVNZXRhKSB7XHJcbiAgICAgIGRyYXdTZWxlY3Rpb25BbmRCdWZmZXIoc2VsZWN0ZWRMaW5lR2VvbSBhcyBfX2VzcmkuUG9seWxpbmUsIGJ1ZmZlckdlb20gfHwgdW5kZWZpbmVkKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0aW9uR0xSZWYuY3VycmVudD8ucmVtb3ZlQWxsKClcclxuICAgICAgYnVmZmVyR0xSZWYuY3VycmVudD8ucmVtb3ZlQWxsKClcclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRMaW5lR2VvbSwgc2VsZWN0ZWRMaW5lTWV0YSwgYnVmZmVyR2VvbSwgZHJhd1NlbGVjdGlvbkFuZEJ1ZmZlcl0pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkcmF3UmVzdWx0cyhmZWF0dXJlV2l0aFBvaW50cywgaW50ZXJzZWN0aW9uTGluZXMpXHJcbiAgfSwgW2ZlYXR1cmVXaXRoUG9pbnRzLCBpbnRlcnNlY3Rpb25MaW5lcywgZHJhd1Jlc3VsdHNdKVxyXG5cclxuICAvLyBDbGVhbnVwXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNlbGVjdGlvbkdMUmVmLmN1cnJlbnQ/LnJlbW92ZUFsbCgpXHJcbiAgICAgIGJ1ZmZlckdMUmVmLmN1cnJlbnQ/LnJlbW92ZUFsbCgpXHJcbiAgICAgIHJlc3VsdHNHTFJlZi5jdXJyZW50Py5yZW1vdmVBbGwoKVxyXG4gICAgICBwcm94aW1pdHlMaW5lc0dMUmVmLmN1cnJlbnQ/LnJlbW92ZUFsbCgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiBudWxsIC8vIEVzdGUgY29tcG9uZW50ZSBuw6NvIHJlbmRlcml6YSBuYWRhIG5hIFVJLCBhcGVuYXMgZ2VyZW5jaWEgbyBtYXBhXHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgUm93IH0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5pbnRlcmZhY2UgUmVzdWx0c1RhYmxlUHJvcHMge1xyXG4gIHJvd3M6IFJvd1tdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHRzVGFibGU6IFJlYWN0LkZDPFJlc3VsdHNUYWJsZVByb3BzPiA9ICh7IHJvd3MgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbC10YWJsZS13cmFwXCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zbSB3cGwtdGFibGVcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5DYW1hZGE8L3RoPlxyXG4gICAgICAgICAgICA8dGg+T0JKRUNUSUQ8L3RoPlxyXG4gICAgICAgICAgICA8dGg+R2VvbTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICA8dGg+Q29tcHJpbWVudG8gKGttKTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5EaXN0w6JuY2lhIChtKTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge3Jvd3MubWFwKChyLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Ake3IubGF5ZXJUaXRsZX0tJHtyLm9iamVjdElkfS0ke2l9YH0+XHJcbiAgICAgICAgICAgICAgPHRkPntyLmxheWVyVGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3Iub2JqZWN0SWR9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3IuZ2VvbVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3Iuc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntyLmxlbmd0aEttID8gci5sZW5ndGhLbS50b0ZpeGVkKDIpIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3IuZGlzdGFuY2VNID8gci5kaXN0YW5jZU0udG9GaXhlZCgyKSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCB7IENvbnRyb2xzIH0gZnJvbSAnLi9Db250cm9scydcclxuZXhwb3J0IHsgQ291bnRlcnMgfSBmcm9tICcuL0NvdW50ZXJzJ1xyXG5leHBvcnQgeyBSZXN1bHRzVGFibGUgfSBmcm9tICcuL1Jlc3VsdHNUYWJsZSdcclxuZXhwb3J0IHsgTWFwRmVlZGJhY2sgfSBmcm9tICcuL01hcEZlZWRiYWNrJ1xyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgdHlwZSB7IFJvdywgUHJveGltaXR5Q29uZmlnLCBTZWxlY3RlZExpbmVNZXRhIH0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG4vLyBGdW7Dp8OjbyBzaW1wbGlmaWNhZGEgcGFyYSBnZXJhciByZWxhdMOzcmlvIHVzYW5kbyBwcmludCBkbyBuYXZlZ2Fkb3JcclxuY29uc3QgZ2VuZXJhdGVQcmludFJlcG9ydCA9IGFzeW5jIChcclxuICBqbXY6IEppbXVNYXBWaWV3LFxyXG4gIHNlbGVjdGVkTGluZU1ldGE6IFNlbGVjdGVkTGluZU1ldGEsXHJcbiAgcm93czogUm93W10sXHJcbiAgc2Nhbm5lZExheWVyc0NvdW50OiBudW1iZXIsXHJcbiAgcmFkaXVzS206IG51bWJlcixcclxuICBjb25maWc6IFByb3hpbWl0eUNvbmZpZ1xyXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcblxyXG4gIC8vIENhcHR1cmFyIHNjcmVlbnNob3QgZG8gbWFwYSB1c2FuZG8gQVBJIG5hdGl2YSBkbyBBcmNHSVNcclxuICBsZXQgc2NyZWVuc2hvdERhdGFVcmwgPSAnJ1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzY3JlZW5zaG90ID0gYXdhaXQgam12LnZpZXcudGFrZVNjcmVlbnNob3Qoe1xyXG4gICAgICBmb3JtYXQ6ICdwbmcnLFxyXG4gICAgICBxdWFsaXR5OiA4MCxcclxuICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgaGVpZ2h0OiA2MDBcclxuICAgIH0pXHJcbiAgICBzY3JlZW5zaG90RGF0YVVybCA9IHNjcmVlbnNob3QuZGF0YVVybFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRXJybyBhbyBjYXB0dXJhciBzY3JlZW5zaG90IGRvIG1hcGE6JywgZXJyb3IpXHJcbiAgICAvLyBGYWxsYmFjayBwYXJhIGNvbnRpbnVhciBzZW0gaW1hZ2VtXHJcbiAgfVxyXG5cclxuICAvLyBGaWx0cmFyIGRhZG9zXHJcbiAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHJvd3MuZmlsdGVyKHIgPT4gci5zdGF0dXMgPT09ICdpbnRlcnNlw6fDo28nKVxyXG4gIGNvbnN0IHByb3hpbWl0aWVzID0gcm93cy5maWx0ZXIociA9PiByLnN0YXR1cyA9PT0gJ2RlbnRybyBkbyBidWZmZXInKVxyXG5cclxuICAvLyBDcmlhciBjb250ZcO6ZG8gSFRNTFxyXG4gIGNvbnN0IGh0bWxDb250ZW50ID0gYFxyXG4gICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbWF4LXdpZHRoOiA4MDBweDsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmc6IDIwcHg7XCI+XHJcbiAgICAgIDxoMSBzdHlsZT1cImNvbG9yOiAjMzMzOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA3YWNjOyBwYWRkaW5nLWJvdHRvbTogMTBweDtcIj5cclxuICAgICAgICBSRUxBVMOTUklPIERFIFBST1hJTUlEQURFIMOAIExJTkhBXHJcbiAgICAgIDwvaDE+XHJcblxyXG4gICAgICA8cCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICM2NjY7IGZvbnQtc2l6ZTogMTRweDtcIj5cclxuICAgICAgICBHZXJhZG8gZW06ICR7bm93LnRvTG9jYWxlU3RyaW5nKCdwdC1CUicpfVxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAzMHB4IDA7IHBhZGRpbmc6IDE1cHg7IGJhY2tncm91bmQ6ICNmOGY5ZmE7IGJvcmRlci1yYWRpdXM6IDVweDtcIj5cclxuICAgICAgICA8aDIgc3R5bGU9XCJjb2xvcjogIzAwN2FjYzsgbWFyZ2luLXRvcDogMDtcIj4xLiBJTkZPUk1Bw4fDlUVTIEdFUkFJUzwvaDI+XHJcbiAgICAgICAgPHVsIHN0eWxlPVwibGluZS1oZWlnaHQ6IDEuNjtcIj5cclxuICAgICAgICAgIDxsaT48c3Ryb25nPkxpbmhhIHNlbGVjaW9uYWRhOjwvc3Ryb25nPiAke3NlbGVjdGVkTGluZU1ldGEubGF5ZXJUaXRsZX08L2xpPlxyXG4gICAgICAgICAgPGxpPjxzdHJvbmc+SUQgZGEgZmVpw6fDo286PC9zdHJvbmc+ICR7c2VsZWN0ZWRMaW5lTWV0YS5vYmplY3RJZCB8fCAnTi9BJ308L2xpPlxyXG4gICAgICAgICAgPGxpPjxzdHJvbmc+UmFpbyBkZSBhbsOhbGlzZTo8L3N0cm9uZz4gJHtyYWRpdXNLbX0ga208L2xpPlxyXG4gICAgICAgICAgPGxpPjxzdHJvbmc+Q2FtYWRhcyBhbmFsaXNhZGFzOjwvc3Ryb25nPiAke3NjYW5uZWRMYXllcnNDb3VudH08L2xpPlxyXG4gICAgICAgICAgPGxpPjxzdHJvbmc+RmVpw6fDtWVzIGVuY29udHJhZGFzOjwvc3Ryb25nPiAke3Jvd3MubGVuZ3RofTwvbGk+XHJcbiAgICAgICAgICA8bGk+PHN0cm9uZz5UaXBvIGRlIGRpc3TDom5jaWE6PC9zdHJvbmc+ICR7Y29uZmlnLnVzZUdlb2Rlc2ljRGlzdGFuY2UgPyAnR2VvZMOpc2ljYScgOiAnUGxhbmEnfTwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAke3NjcmVlbnNob3REYXRhVXJsID8gYFxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAzMHB4IDA7XCI+XHJcbiAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICMwMDdhY2M7XCI+Mi4gVklTVUFMSVpBw4fDg08gRE8gTUFQQTwvaDI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke3NjcmVlbnNob3REYXRhVXJsfVwiIGFsdD1cIk1hcGEgZGEgYW7DoWxpc2UgZGUgcHJveGltaWRhZGVcIiBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBib3JkZXItcmFkaXVzOiA1cHg7IGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XCI+XHJcbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjY2OyBmb250LXN0eWxlOiBpdGFsaWM7IG1hcmdpbi10b3A6IDhweDsgdGV4dC1hbGlnbjogY2VudGVyO1wiPlxyXG4gICAgICAgICAgQ2FwdHVyYSBkbyBtYXBhIG1vc3RyYW5kbzogbGluaGEgc2VsZWNpb25hZGEgKGNpYW5vKSwgYnVmZmVyIGRlIGFuw6FsaXNlIGUgcG9udG9zIGRlIHByb3hpbWlkYWRlL2ludGVyc2XDp8Ojb1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGAgOiBgXHJcbiAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDMwcHggMDsgcGFkZGluZzogMTVweDsgYmFja2dyb3VuZDogI2ZmZjNjZDsgYm9yZGVyOiAxcHggc29saWQgI2ZmZWFhNzsgYm9yZGVyLXJhZGl1czogNXB4O1wiPlxyXG4gICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjODU2NDA0OyBtYXJnaW4tdG9wOiAwO1wiPjIuIFZJU1VBTElaQcOHw4NPIERPIE1BUEE8L2gyPlxyXG4gICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiAxMHB4IDA7IGNvbG9yOiAjODU2NDA0O1wiPlxyXG4gICAgICAgICAgPHN0cm9uZz5Ob3RhOjwvc3Ryb25nPiBQYXJhIHZpc3VhbGl6YXIgbyBtYXBhIGNvbSBhIGxpbmhhIHNlbGVjaW9uYWRhLCBidWZmZXIgZSBwb250b3MgZGUgaW50ZXJzZcOnw6NvL3Byb3hpbWlkYWRlLFxyXG4gICAgICAgICAgY29uc3VsdGUgYSBpbnRlcmZhY2UgcHJpbmNpcGFsIGRvIHdpZGdldCBubyBBcmNHSVMgRXhwZXJpZW5jZSBCdWlsZGVyLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGB9XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAzMHB4IDA7XCI+XHJcbiAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICMwMDdhY2M7XCI+My4gUkVTVUxUQURPUyBERVRBTEhBRE9TPC9oMj5cclxuXHJcbiAgICAgICAgJHtpbnRlcnNlY3Rpb25zLmxlbmd0aCA+IDAgPyBgXHJcbiAgICAgICAgPGgzIHN0eWxlPVwiY29sb3I6ICNkOTUzNGY7XCI+My4xIElOVEVSU0XDh8OVRVMgQ09NIEEgTElOSEE8L2gzPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDE1cHggMDtcIj5cclxuICAgICAgICAgICR7aW50ZXJzZWN0aW9ucy5tYXAoKHJvdywgaW5kZXgpID0+IGBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogMTBweCAwOyBwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kOiAjZmZmNWY1OyBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkOTUzNGY7IGJvcmRlci1yYWRpdXM6IDNweDtcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPiR7aW5kZXggKyAxfS4gJHtyb3cubGF5ZXJUaXRsZX0gLSBPSUQgJHtyb3cub2JqZWN0SWR9PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICAgICR7cm93Lmxlbmd0aEttID8gYDxzcGFuIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHg7XCI+Q29tcHJpbWVudG8gZGEgaW50ZXJzZcOnw6NvOiAke3Jvdy5sZW5ndGhLbS50b0ZpeGVkKDIpfSBrbTwvc3Bhbj48YnI+YCA6ICcnfVxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHg7XCI+VGlwbyBkZSBnZW9tZXRyaWE6ICR7cm93Lmdlb21UeXBlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBgKS5qb2luKCcnKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgIDogJyd9XHJcblxyXG4gICAgICAgICR7cHJveGltaXRpZXMubGVuZ3RoID4gMCA/IGBcclxuICAgICAgICA8aDMgc3R5bGU9XCJjb2xvcjogI2YwYWQ0ZTtcIj4zLjIgRkVJw4fDlUVTIERFTlRSTyBETyBCVUZGRVI8L2gzPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDE1cHggMDtcIj5cclxuICAgICAgICAgICR7cHJveGltaXRpZXMubWFwKChyb3csIGluZGV4KSA9PiBgXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDEwcHggMDsgcGFkZGluZzogMTBweDsgYmFja2dyb3VuZDogI2ZmZmJmMDsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZjBhZDRlOyBib3JkZXItcmFkaXVzOiAzcHg7XCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz4ke2luZGV4ICsgMX0uICR7cm93LmxheWVyVGl0bGV9IC0gT0lEICR7cm93Lm9iamVjdElkfTwvc3Ryb25nPjxicj5cclxuICAgICAgICAgICAgICAke3Jvdy5kaXN0YW5jZU0gPyBgPHNwYW4gc3R5bGU9XCJtYXJnaW4tbGVmdDogMTVweDtcIj5EaXN0w6JuY2lhIGF0w6kgYSBsaW5oYTogJHtyb3cuZGlzdGFuY2VNLnRvRml4ZWQoMil9IG1ldHJvczwvc3Bhbj48YnI+YCA6ICcnfVxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHg7XCI+VGlwbyBkZSBnZW9tZXRyaWE6ICR7cm93Lmdlb21UeXBlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBgKS5qb2luKCcnKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgIDogJyd9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogMzBweCAwOyBwYWRkaW5nOiAxNXB4OyBiYWNrZ3JvdW5kOiAjZjhmOWZhOyBib3JkZXItcmFkaXVzOiA1cHg7XCI+XHJcbiAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICMwMDdhY2M7IG1hcmdpbi10b3A6IDA7XCI+NC4gRVNUQVTDjVNUSUNBUyBSRVNVTUlEQVM8L2gyPlxyXG4gICAgICAgIDx1bCBzdHlsZT1cImxpbmUtaGVpZ2h0OiAxLjg7XCI+XHJcbiAgICAgICAgICA8bGk+VG90YWwgZGUgZmVpw6fDtWVzIGFuYWxpc2FkYXM6IDxzdHJvbmc+JHtyb3dzLmxlbmd0aH08L3N0cm9uZz48L2xpPlxyXG4gICAgICAgICAgPGxpPkludGVyc2XDp8O1ZXMgZGlyZXRhczogPHN0cm9uZz4ke2ludGVyc2VjdGlvbnMubGVuZ3RofTwvc3Ryb25nPjwvbGk+XHJcbiAgICAgICAgICA8bGk+RmVpw6fDtWVzIGRlbnRybyBkbyBidWZmZXI6IDxzdHJvbmc+JHtwcm94aW1pdGllcy5sZW5ndGh9PC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgIDxsaT5DYW1hZGFzIHByb2Nlc3NhZGFzOiA8c3Ryb25nPiR7c2Nhbm5lZExheWVyc0NvdW50fTwvc3Ryb25nPjwvbGk+XHJcbiAgICAgICAgICA8bGk+UmFpbyBkZSBhbsOhbGlzZTogPHN0cm9uZz4ke3JhZGl1c0ttfSBrbTwvc3Ryb25nPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiA1MHB4OyBwYWRkaW5nLXRvcDogMjBweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7IGNvbG9yOiAjNjY2OyBmb250LXNpemU6IDEycHg7XCI+XHJcbiAgICAgICAgUmVsYXTDs3JpbyBnZXJhZG8gcGVsbyBXaWRnZXQgZGUgUHJveGltaWRhZGUgYXTDqSBMaW5oYSAtIEFyY0dJUyBFeHBlcmllbmNlIEJ1aWxkZXJcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcblxyXG4gIC8vIENyaWFyIGUgYWJyaXIgamFuZWxhIGRlIGltcHJlc3PDo29cclxuICBjb25zdCBwcmludFdpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnX2JsYW5rJywgJ3dpZHRoPTkwMCxoZWlnaHQ9NzAwJylcclxuICBpZiAoIXByaW50V2luZG93KSB7XHJcbiAgICBhbGVydCgnUG9yIGZhdm9yLCBwZXJtaXRhIHBvcHVwcyBwYXJhIGdlcmFyIG8gcmVsYXTDs3Jpby4nKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBwcmludFdpbmRvdy5kb2N1bWVudC5vcGVuKClcclxuICBwcmludFdpbmRvdy5kb2N1bWVudC53cml0ZShgXHJcbiAgICA8IURPQ1RZUEUgaHRtbD5cclxuICAgIDxodG1sPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDx0aXRsZT5SZWxhdMOzcmlvIGRlIFByb3hpbWlkYWRlIC0gJHtub3cudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicpfTwvdGl0bGU+XHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAgICAgYm9keSB7IG1hcmdpbjogMDsgfVxyXG4gICAgICAgICAgQHBhZ2UgeyBtYXJnaW46IDE1bW07IH1cclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keT5cclxuICAgICAgJHtodG1sQ29udGVudH1cclxuICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICBgKVxyXG4gIHByaW50V2luZG93LmRvY3VtZW50LmNsb3NlKClcclxuXHJcbiAgLy8gQWd1YXJkYXIgY2FycmVnYW1lbnRvIGUgaW1wcmltaXJcclxuICBwcmludFdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcHJpbnRXaW5kb3cucHJpbnQoKVxyXG4gICAgICBwcmludFdpbmRvdy5jbG9zZSgpXHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUERGUmVwb3J0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0dlbmVyYXRpbmcsIHNldElzR2VuZXJhdGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVQREZSZXBvcnQgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoXHJcbiAgICBqbXY6IEppbXVNYXBWaWV3LFxyXG4gICAgc2VsZWN0ZWRMaW5lTWV0YTogU2VsZWN0ZWRMaW5lTWV0YSxcclxuICAgIHJvd3M6IFJvd1tdLFxyXG4gICAgc2Nhbm5lZExheWVyc0NvdW50OiBudW1iZXIsXHJcbiAgICByYWRpdXNLbTogbnVtYmVyLFxyXG4gICAgY29uZmlnOiBQcm94aW1pdHlDb25maWdcclxuICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIHNldElzR2VuZXJhdGluZyh0cnVlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZ2VuZXJhdGVQcmludFJlcG9ydChqbXYsIHNlbGVjdGVkTGluZU1ldGEsIHJvd3MsIHNjYW5uZWRMYXllcnNDb3VudCwgcmFkaXVzS20sIGNvbmZpZylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZ2VyYXIgcmVsYXTDs3JpbzonLCBlcnJvcilcclxuICAgICAgYWxlcnQoJ0Vycm8gYW8gZ2VyYXIgbyByZWxhdMOzcmlvLiBWZXJpZmlxdWUgbyBjb25zb2xlIHBhcmEgbWFpcyBkZXRhbGhlcy4nKVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNHZW5lcmF0aW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNHZW5lcmF0aW5nLFxyXG4gICAgZ2VuZXJhdGVQREZSZXBvcnRcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXcsIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHR5cGUgeyBSb3csIEZlYXR1cmVXaXRoUG9pbnRzLCBJbnRlcnNlY3Rpb25MaW5lLCBTZWxlY3RlZExpbmVNZXRhLCBQcm94aW1pdHlDb25maWcgfSBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0IHtcclxuICBjcmVhdGVHZW9kZXNpY0J1ZmZlcixcclxuICBjbGlwR2VvbWV0cnksXHJcbiAgY2hlY2tJbnRlcnNlY3Rpb24sXHJcbiAgY2FsY3VsYXRlTGVuZ3RoLFxyXG4gIHByb2plY3RUb1ZpZXdTUixcclxuICBnZW5lcmF0ZUNhbmRpZGF0ZXMsXHJcbiAgZ2V0R2VvbWV0cnlQYXJ0cyxcclxuICBtZWFzdXJlRGlzdGFuY2UsXHJcbiAgdG9TZWVkUG9pbnRcclxufSBmcm9tICcuLi91dGlscy9nZW9tZXRyeSdcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcm94aW1pdHlDYWxjdWxhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbaXNDb21wdXRpbmcsIHNldElzQ29tcHV0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IFJlYWN0LnVzZVN0YXRlPFJvd1tdPihbXSlcclxuICBjb25zdCBbc2Nhbm5lZExheWVyc0NvdW50LCBzZXRTY2FubmVkTGF5ZXJzQ291bnRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKVxyXG4gIGNvbnN0IFtidWZmZXJHZW9tLCBzZXRCdWZmZXJHZW9tXSA9IFJlYWN0LnVzZVN0YXRlPF9fZXNyaS5Qb2x5Z29uIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbZmVhdHVyZVdpdGhQb2ludHMsIHNldEZlYXR1cmVXaXRoUG9pbnRzXSA9IFJlYWN0LnVzZVN0YXRlPEZlYXR1cmVXaXRoUG9pbnRzW10+KFtdKVxyXG4gIGNvbnN0IFtpbnRlcnNlY3Rpb25MaW5lcywgc2V0SW50ZXJzZWN0aW9uTGluZXNdID0gUmVhY3QudXNlU3RhdGU8SW50ZXJzZWN0aW9uTGluZVtdPihbXSlcclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlUHJveGltaXR5ID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKFxyXG4gICAgam12OiBKaW11TWFwVmlldyxcclxuICAgIHNlbGVjdGVkR2VvbTogX19lc3JpLkdlb21ldHJ5LFxyXG4gICAgc2VsZWN0ZWRMaW5lTWV0YTogU2VsZWN0ZWRMaW5lTWV0YSxcclxuICAgIHJhZGl1c0ttOiBudW1iZXIsXHJcbiAgICBjb25maWc6IFByb3hpbWl0eUNvbmZpZ1xyXG4gICk6IFByb21pc2U8Um93W10+ID0+IHtcclxuICAgIHNldElzQ29tcHV0aW5nKHRydWUpXHJcbiAgICBzZXRSb3dzKFtdKVxyXG4gICAgc2V0RmVhdHVyZVdpdGhQb2ludHMoW10pXHJcbiAgICBzZXRJbnRlcnNlY3Rpb25MaW5lcyhbXSlcclxuICAgIHNldEJ1ZmZlckdlb20obnVsbClcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB2aWV3ID0gam12LnZpZXcgYXMgX19lc3JpLk1hcFZpZXdcclxuXHJcbiAgICAgIC8vIDEpIENyaWFyIGJ1ZmZlciBnZW9kw6lzaWNvXHJcbiAgICAgIGNvbnN0IHNlYXJjaEFyZWEgPSBhd2FpdCBjcmVhdGVHZW9kZXNpY0J1ZmZlcihzZWxlY3RlZEdlb20sIHJhZGl1c0ttKVxyXG4gICAgICBzZXRCdWZmZXJHZW9tKHNlYXJjaEFyZWEpXHJcblxyXG4gICAgICAvLyAyKSBGaWx0cmFyIGNhbWFkYXNcclxuICAgICAgbGV0IGxheWVycyA9IHZpZXcubWFwLmFsbExheWVyc1xyXG4gICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAuZmlsdGVyKChseTogYW55KSA9PiBseS50eXBlID09PSAnZmVhdHVyZScgJiYgbHkudmlzaWJsZSkgYXMgX19lc3JpLkZlYXR1cmVMYXllcltdXHJcblxyXG4gICAgICAvLyBBcGxpY2FyIGZpbHRybyBwb3IgdGFyZ2V0TGF5ZXJJZHNPclRpdGxlcyBzZSBpbmZvcm1hZG9cclxuICAgICAgaWYgKGNvbmZpZy50YXJnZXRMYXllcklkc09yVGl0bGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsYXllcnMgPSBsYXllcnMuZmlsdGVyKGx5ID0+XHJcbiAgICAgICAgICBjb25maWcudGFyZ2V0TGF5ZXJJZHNPclRpdGxlcy5pbmNsdWRlcyhseS5pZCkgfHxcclxuICAgICAgICAgIGNvbmZpZy50YXJnZXRMYXllcklkc09yVGl0bGVzLmluY2x1ZGVzKGx5LnRpdGxlKVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXhjbHVpciBhIGNhbWFkYSBkYSBsaW5oYSBzZWxlY2lvbmFkYVxyXG4gICAgICBsYXllcnMgPSBsYXllcnMuZmlsdGVyKGx5ID0+IGx5LmlkICE9PSBzZWxlY3RlZExpbmVNZXRhLmxheWVySWQpXHJcbiAgICAgIHNldFNjYW5uZWRMYXllcnNDb3VudChsYXllcnMubGVuZ3RoKVxyXG5cclxuICAgICAgY29uc3QgcmVzdWx0Um93czogUm93W10gPSBbXVxyXG4gICAgICBjb25zdCBhbGxGZWF0dXJlV2l0aFBvaW50czogRmVhdHVyZVdpdGhQb2ludHNbXSA9IFtdXHJcbiAgICAgIGNvbnN0IGFsbEludGVyc2VjdGlvbkxpbmVzOiBJbnRlcnNlY3Rpb25MaW5lW10gPSBbXVxyXG5cclxuICAgICAgLy8gMykgUHJvY2Vzc2FyIGNhZGEgY2FtYWRhXHJcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XHJcbiAgICAgICAgY29uc3Qgb2lkRmllbGQgPSBsYXllci5vYmplY3RJZEZpZWxkXHJcbiAgICAgICAgY29uc3QgcSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICBxLm91dEZpZWxkcyA9IG9pZEZpZWxkID8gW29pZEZpZWxkXSA6IFsnKiddXHJcbiAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgICAgICBxLmdlb21ldHJ5ID0gc2VhcmNoQXJlYVxyXG4gICAgICAgIHEuc3BhdGlhbFJlbGF0aW9uc2hpcCA9ICdpbnRlcnNlY3RzJ1xyXG4gICAgICAgIHEubWF4QWxsb3dhYmxlT2Zmc2V0ID0gMFxyXG5cclxuICAgICAgICBjb25zdCBmZWF0U2V0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxKVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdFNldC5mZWF0dXJlcykge1xyXG4gICAgICAgICAgLy8gUmVjb3J0YXIgZ2VvbWV0cmlhIGFvIGJ1ZmZlclxyXG4gICAgICAgICAgY29uc3QgY2xpcHBlZEdlb20gPSBhd2FpdCBjbGlwR2VvbWV0cnkoZi5nZW9tZXRyeSwgc2VhcmNoQXJlYSlcclxuICAgICAgICAgIGlmICghY2xpcHBlZEdlb20pIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgLy8gQ2FsY3VsYXIgcG9udG9zIG1haXMgcHLDs3hpbW9zIHVzYW5kbyBnZW9tZXRyeUVuZ2luZS5uZWFyZXN0Q29vcmRpbmF0ZVxyXG4gICAgICAgICAgY29uc3QgW2dlb21ldHJ5RW5naW5lXSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoWydlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJ10pXHJcblxyXG4gICAgICAgICAgbGV0IGQgPSAwXHJcbiAgICAgICAgICBsZXQgcG9pbnRPbkZlYXR1cmU6IF9fZXNyaS5Qb2ludCB8IG51bGwgPSBudWxsXHJcbiAgICAgICAgICBsZXQgcG9pbnRPbkxpbmU6IF9fZXNyaS5Qb2ludCB8IG51bGwgPSBudWxsXHJcblxyXG4gICAgICAgICAgY29uc3QgbGluZVBvaW50cyA9IGdlbmVyYXRlQ2FuZGlkYXRlcyhzZWxlY3RlZEdlb20pXHJcbiAgICAgICAgICBsZXQgbWluRGlzdCA9IEluZmluaXR5XHJcbiAgICAgICAgICBsZXQgYmVzdE5lYXJlc3Q6IGFueSA9IG51bGxcclxuICAgICAgICAgIGxldCBiZXN0UG9pbnRPbkxpbmU6IF9fZXNyaS5Qb2ludCB8IG51bGwgPSBudWxsXHJcblxyXG4gICAgICAgICAgY29uc3QgcGFydHMgPSBnZXRHZW9tZXRyeVBhcnRzKGNsaXBwZWRHZW9tKVxyXG4gICAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGluZVBvaW50IG9mIGxpbmVQb2ludHMpIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmVhcmVzdCA9IGdlb21ldHJ5RW5naW5lLm5lYXJlc3RDb29yZGluYXRlKHBhcnQsIGxpbmVQb2ludClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBjb25maWcudXNlR2VvZGVzaWNEaXN0YW5jZSAmJiBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0Rpc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgID8gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNEaXN0YW5jZShuZWFyZXN0LmNvb3JkaW5hdGUsIGxpbmVQb2ludCwgJ21ldGVycycpIGFzIG51bWJlclxyXG4gICAgICAgICAgICAgICAgICA6IGdlb21ldHJ5RW5naW5lLmRpc3RhbmNlKG5lYXJlc3QuY29vcmRpbmF0ZSwgbGluZVBvaW50LCAnbWV0ZXJzJylcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgbWluRGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICBtaW5EaXN0ID0gZGlzdFxyXG4gICAgICAgICAgICAgICAgICBiZXN0TmVhcmVzdCA9IG5lYXJlc3RcclxuICAgICAgICAgICAgICAgICAgYmVzdFBvaW50T25MaW5lID0gbGluZVBvaW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGJlc3ROZWFyZXN0KSB7XHJcbiAgICAgICAgICAgIGQgPSBtaW5EaXN0XHJcbiAgICAgICAgICAgIHBvaW50T25GZWF0dXJlID0gYmVzdE5lYXJlc3QuY29vcmRpbmF0ZVxyXG4gICAgICAgICAgICBwb2ludE9uTGluZSA9IGJlc3RQb2ludE9uTGluZVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmFsbGJhY2tcclxuICAgICAgICAgICAgcG9pbnRPbkZlYXR1cmUgPSB0b1NlZWRQb2ludChjbGlwcGVkR2VvbSlcclxuICAgICAgICAgICAgcG9pbnRPbkxpbmUgPSB0b1NlZWRQb2ludChzZWxlY3RlZEdlb20pXHJcbiAgICAgICAgICAgIGlmIChwb2ludE9uRmVhdHVyZSAmJiBwb2ludE9uTGluZSkge1xyXG4gICAgICAgICAgICAgIGQgPSBtZWFzdXJlRGlzdGFuY2UocG9pbnRPbkZlYXR1cmUsIHBvaW50T25MaW5lLCBjb25maWcudXNlR2VvZGVzaWNEaXN0YW5jZSwgJ21ldGVycycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBPYnRlciBPSURcclxuICAgICAgICAgIGNvbnN0IHJhd09pZCA9IGdldE9iamVjdElkKGYsIG9pZEZpZWxkKVxyXG5cclxuICAgICAgICAgIC8vIFByb2pldGFyIGNvb3JkZW5hZGFzIHBhcmEgU1IgZGEgdmlld1xyXG4gICAgICAgICAgbGV0IHhGZWF0dXJlOiBudW1iZXIgfCB1bmRlZmluZWRcclxuICAgICAgICAgIGxldCB5RmVhdHVyZTogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbiAgICAgICAgICBsZXQgeExpbmU6IG51bWJlciB8IHVuZGVmaW5lZFxyXG4gICAgICAgICAgbGV0IHlMaW5lOiBudW1iZXIgfCB1bmRlZmluZWRcclxuXHJcbiAgICAgICAgICBpZiAocG9pbnRPbkZlYXR1cmUgJiYgcG9pbnRPbkxpbmUpIHtcclxuICAgICAgICAgICAgY29uc3Qgdmlld1NSID0gdmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgICAgIGNvbnN0IHBmUHJvaiA9IGF3YWl0IHByb2plY3RUb1ZpZXdTUihwb2ludE9uRmVhdHVyZSwgdmlld1NSKVxyXG4gICAgICAgICAgICBjb25zdCBwbFByb2ogPSBhd2FpdCBwcm9qZWN0VG9WaWV3U1IocG9pbnRPbkxpbmUsIHZpZXdTUilcclxuICAgICAgICAgICAgeEZlYXR1cmUgPSBwZlByb2oueFxyXG4gICAgICAgICAgICB5RmVhdHVyZSA9IHBmUHJvai55XHJcbiAgICAgICAgICAgIHhMaW5lID0gcGxQcm9qLnhcclxuICAgICAgICAgICAgeUxpbmUgPSBwbFByb2oueVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFZlcmlmaWNhciBpbnRlcnNlw6fDo29cclxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdHMgPSBhd2FpdCBjaGVja0ludGVyc2VjdGlvbihzZWxlY3RlZEdlb20sIGNsaXBwZWRHZW9tKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzOiAnaW50ZXJzZcOnw6NvJyB8ICdkZW50cm8gZG8gYnVmZmVyJyA9IGludGVyc2VjdHMgPyAnaW50ZXJzZcOnw6NvJyA6ICdkZW50cm8gZG8gYnVmZmVyJ1xyXG5cclxuICAgICAgICAgIGxldCBsZW5ndGhLbTogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbiAgICAgICAgICBpZiAoaW50ZXJzZWN0cyAmJiBmLmdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBhd2FpdCBjbGlwR2VvbWV0cnkoc2VsZWN0ZWRHZW9tLCBmLmdlb21ldHJ5KSBhcyBfX2VzcmkuUG9seWxpbmVcclxuICAgICAgICAgICAgaWYgKGludGVyc2VjdGlvbikge1xyXG4gICAgICAgICAgICAgIGxlbmd0aEttID0gYXdhaXQgY2FsY3VsYXRlTGVuZ3RoKGludGVyc2VjdGlvbiwgY29uZmlnLnVzZUdlb2Rlc2ljRGlzdGFuY2UpXHJcbiAgICAgICAgICAgICAgYWxsSW50ZXJzZWN0aW9uTGluZXMucHVzaCh7IGxpbmU6IGludGVyc2VjdGlvbiwgbGVuZ3RoS20gfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChwb2ludE9uRmVhdHVyZSAmJiBwb2ludE9uTGluZSkge1xyXG4gICAgICAgICAgICBhbGxGZWF0dXJlV2l0aFBvaW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICBmZWF0dXJlOiBmLFxyXG4gICAgICAgICAgICAgIHBvaW50T25GZWF0dXJlLFxyXG4gICAgICAgICAgICAgIHBvaW50T25MaW5lLFxyXG4gICAgICAgICAgICAgIHN0YXR1cyxcclxuICAgICAgICAgICAgICBkaXN0YW5jZU06ICFpbnRlcnNlY3RzID8gZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICBsZW5ndGhLbTogaW50ZXJzZWN0cyAmJiBmLmdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJyA/IGxlbmd0aEttIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVzdWx0Um93cy5wdXNoKHtcclxuICAgICAgICAgICAgbGF5ZXJUaXRsZTogbGF5ZXIudGl0bGUsXHJcbiAgICAgICAgICAgIG9iamVjdElkOiByYXdPaWQgYXMgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgICAgICAgICBnZW9tVHlwZTogZi5nZW9tZXRyeS50eXBlLFxyXG4gICAgICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgICAgIGxlbmd0aEttLFxyXG4gICAgICAgICAgICBkaXN0YW5jZU06ICFpbnRlcnNlY3RzID8gZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgeEZlYXR1cmUsXHJcbiAgICAgICAgICAgIHlGZWF0dXJlLFxyXG4gICAgICAgICAgICB4TGluZSxcclxuICAgICAgICAgICAgeUxpbmVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBPcmRlbmFyIHJlc3VsdGFkb3NcclxuICAgICAgcmVzdWx0Um93cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEuc3RhdHVzICE9PSBiLnN0YXR1cykgcmV0dXJuIGEuc3RhdHVzID09PSAnaW50ZXJzZcOnw6NvJyA/IC0xIDogMVxyXG4gICAgICAgIGlmIChhLmxlbmd0aEttICE9IG51bGwgJiYgYi5sZW5ndGhLbSAhPSBudWxsKSByZXR1cm4gYi5sZW5ndGhLbSAtIGEubGVuZ3RoS21cclxuICAgICAgICBpZiAoYS5kaXN0YW5jZU0gIT0gbnVsbCAmJiBiLmRpc3RhbmNlTSAhPSBudWxsKSByZXR1cm4gYS5kaXN0YW5jZU0gLSBiLmRpc3RhbmNlTVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzZXRSb3dzKHJlc3VsdFJvd3MpXHJcbiAgICAgIHNldEZlYXR1cmVXaXRoUG9pbnRzKGFsbEZlYXR1cmVXaXRoUG9pbnRzKVxyXG4gICAgICBzZXRJbnRlcnNlY3Rpb25MaW5lcyhhbGxJbnRlcnNlY3Rpb25MaW5lcylcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHRSb3dzXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5vIGPDoWxjdWxvIGRlIHByb3hpbWlkYWRlOicsIGVycm9yKVxyXG4gICAgICB0aHJvdyBlcnJvclxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNDb21wdXRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNsZWFyUmVzdWx0cyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFJvd3MoW10pXHJcbiAgICBzZXRGZWF0dXJlV2l0aFBvaW50cyhbXSlcclxuICAgIHNldEludGVyc2VjdGlvbkxpbmVzKFtdKVxyXG4gICAgc2V0QnVmZmVyR2VvbShudWxsKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNDb21wdXRpbmcsXHJcbiAgICByb3dzLFxyXG4gICAgc2Nhbm5lZExheWVyc0NvdW50LFxyXG4gICAgYnVmZmVyR2VvbSxcclxuICAgIGZlYXR1cmVXaXRoUG9pbnRzLFxyXG4gICAgaW50ZXJzZWN0aW9uTGluZXMsXHJcbiAgICBjYWxjdWxhdGVQcm94aW1pdHksXHJcbiAgICBjbGVhclJlc3VsdHNcclxuICB9XHJcbn1cclxuXHJcbi8vIEZ1bsOnw7VlcyBhdXhpbGlhcmVzXHJcbmNvbnN0IGZpbmROZWFyZXN0UG9pbnQgPSBhc3luYyAoXHJcbiAgZ2VvbTogX19lc3JpLkdlb21ldHJ5LFxyXG4gIHRhcmdldFBvaW50OiBfX2VzcmkuUG9pbnQsXHJcbiAgdXNlR2VvZGVzaWM6IGJvb2xlYW5cclxuKTogUHJvbWlzZTx7IGNvb3JkaW5hdGU6IF9fZXNyaS5Qb2ludDsgZGlzdGFuY2U6IG51bWJlciB9PiA9PiB7XHJcbiAgLy8gRXN0YSDDqSB1bWEgaW1wbGVtZW50YcOnw6NvIHNpbXBsaWZpY2FkYVxyXG4gIC8vIE5vIGPDs2RpZ28gb3JpZ2luYWwsIHVzYSBnZW9tZXRyeUVuZ2luZS5uZWFyZXN0Q29vcmRpbmF0ZVxyXG4gIGNvbnN0IGRpc3QgPSBtZWFzdXJlRGlzdGFuY2UoZ2VvbSwgdGFyZ2V0UG9pbnQsIHVzZUdlb2Rlc2ljLCAnbWV0ZXJzJylcclxuICByZXR1cm4geyBjb29yZGluYXRlOiB0YXJnZXRQb2ludCwgZGlzdGFuY2U6IGRpc3QgfVxyXG59XHJcblxyXG5jb25zdCBnZXRPYmplY3RJZCA9IChmZWF0dXJlOiBfX2VzcmkuR3JhcGhpYywgb2lkRmllbGQ6IHN0cmluZyk6IHN0cmluZyB8IG51bWJlciA9PiB7XHJcbiAgaWYgKHR5cGVvZiAoZmVhdHVyZSBhcyBhbnkpLmdldE9iamVjdElkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gKGZlYXR1cmUgYXMgYW55KS5nZXRPYmplY3RJZCgpXHJcbiAgfVxyXG4gIHJldHVybiBmZWF0dXJlLmF0dHJpYnV0ZXM/LltvaWRGaWVsZF0gPz8gZmVhdHVyZS5hdHRyaWJ1dGVzPy5PQkpFQ1RJRCA/PyAwXHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgdHlwZSBSb3cgPSB7XHJcbiAgbGF5ZXJUaXRsZTogc3RyaW5nXHJcbiAgb2JqZWN0SWQ6IHN0cmluZyB8IG51bWJlclxyXG4gIGdlb21UeXBlOiBzdHJpbmdcclxuICBzdGF0dXM6ICdpbnRlcnNlw6fDo28nIHwgJ2RlbnRybyBkbyBidWZmZXInXHJcbiAgbGVuZ3RoS20/OiBudW1iZXJcclxuICBkaXN0YW5jZU0/OiBudW1iZXJcclxuICB4RmVhdHVyZT86IG51bWJlclxyXG4gIHlGZWF0dXJlPzogbnVtYmVyXHJcbiAgeExpbmU/OiBudW1iZXJcclxuICB5TGluZT86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBGZWF0dXJlV2l0aFBvaW50cyA9IHtcclxuICBmZWF0dXJlOiBfX2VzcmkuR3JhcGhpYyxcclxuICBwb2ludE9uRmVhdHVyZTogX19lc3JpLlBvaW50LFxyXG4gIHBvaW50T25MaW5lOiBfX2VzcmkuUG9pbnQsXHJcbiAgZGlzdGFuY2VNPzogbnVtYmVyLFxyXG4gIGxlbmd0aEttPzogbnVtYmVyLFxyXG4gIHN0YXR1czogJ2ludGVyc2XDp8OjbycgfCAnZGVudHJvIGRvIGJ1ZmZlcidcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSW50ZXJzZWN0aW9uTGluZSA9IHtcclxuICBsaW5lOiBfX2VzcmkuUG9seWxpbmUsXHJcbiAgbGVuZ3RoS206IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3RlZExpbmVNZXRhID0ge1xyXG4gIGxheWVyVGl0bGU6IHN0cmluZztcclxuICBsYXllcklkOiBzdHJpbmc7XHJcbiAgb2JqZWN0SWQ/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFByb3hpbWl0eUNvbmZpZyA9IHtcclxuICB1bml0OiAnbWV0ZXJzJyB8ICdraWxvbWV0ZXJzJ1xyXG4gIG9ubHlJbkV4dGVudDogYm9vbGVhblxyXG4gIHVzZUdlb2Rlc2ljRGlzdGFuY2U6IGJvb2xlYW5cclxuICB0YXJnZXRMYXllcklkc09yVGl0bGVzOiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVFhUID0ge1xyXG4gIG5lZWRNYXA6ICdTZWxlY2lvbmUgdW0gTWFwIHdpZGdldCBuYXMgY29uZmlndXJhw6fDtWVzLicsXHJcbiAgbmVlZExpbmU6ICdDbGlxdWUgZW0gdW1hIEZFScOHw4NPIERFIExJTkhBIG5vIG1hcGEgcGFyYSBzZWxlY2lvbsOhLWxhLicsXHJcbiAgc2VsZWN0ZWQ6ICh0OiBzdHJpbmcsIGlkPzogc3RyaW5nIHwgbnVtYmVyKSA9PiBgTGluaGEgc2VsZWNpb25hZGE6ICR7dH0ke2lkICE9IG51bGwgPyBgIChPSUQgJHtpZH0pYCA6ICcnfS4gRGVmaW5hIG8gcmFpbyBlIGNsaXF1ZSBcIkFwbGljYXJcIi5gLFxyXG4gIGNhbGM6ICdDYWxjdWxhbmRvLi4uJyxcclxuICBkb25lOiAobjogbnVtYmVyLCBnZW9kZXNpYz86IGJvb2xlYW4pID0+IGdlb2Rlc2ljID8gYEVuY29udHJhZGFzICR7bn0gZmVpw6fDtWVzIGVtIGNhbWFkYXMgYXRpdmFzIGRlbnRybyBkbyByYWlvIChkaXN0w6JuY2lhIGdlb2TDqXNpY2EpLmAgOiBgRW5jb250cmFkYXMgJHtufSBmZWnDp8O1ZXMgZW0gY2FtYWRhcyBhdGl2YXMgZGVudHJvIGRvIHJhaW8uYCxcclxuICBleHBvcnRDc3Y6ICdFeHBvcnRhciBDU1YnLFxyXG4gIHJhZGl1c0ttOiAnUmFpbyAoa20pOicsXHJcbiAgYXBwbHk6ICdBcGxpY2FyJ1xyXG59XHJcbiIsImltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmxldCBtb2R1bGVzOiBhbnkgPSB7fVxyXG5cclxuY29uc3QgZW5zdXJlTW9kdWxlcyA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9kdWxlcy5nZW9tZXRyeUVuZ2luZSkgcmV0dXJuIG1vZHVsZXNcclxuICBjb25zdCBbXHJcbiAgICBnZW9tZXRyeUVuZ2luZSxcclxuICAgIHByb2plY3Rpb25cclxuICBdID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZScsXHJcbiAgICAnZXNyaS9nZW9tZXRyeS9wcm9qZWN0aW9uJ1xyXG4gIF0pXHJcbiAgdHJ5IHsgYXdhaXQgcHJvamVjdGlvbi5sb2FkPy4oKSB9IGNhdGNoIHt9XHJcbiAgbW9kdWxlcyA9IHsgZ2VvbWV0cnlFbmdpbmUsIHByb2plY3Rpb24gfVxyXG4gIHJldHVybiBtb2R1bGVzXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b1NlZWRQb2ludCA9IChnZW9tOiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnQgfCBudWxsID0+IHtcclxuICBpZiAoZ2VvbS50eXBlID09PSAncG9pbnQnKSByZXR1cm4gZ2VvbSBhcyBfX2VzcmkuUG9pbnRcclxuICBjb25zdCB7IGdlb21ldHJ5RW5naW5lIH0gPSBtb2R1bGVzXHJcbiAgaWYgKGdlb21ldHJ5RW5naW5lPy5jZW50cm9pZCkgcmV0dXJuIGdlb21ldHJ5RW5naW5lLmNlbnRyb2lkKGdlb20pIGFzIF9fZXNyaS5Qb2ludFxyXG4gIGNvbnN0IGV4dCA9IChnZW9tIGFzIGFueSkuZXh0ZW50XHJcbiAgcmV0dXJuIGV4dD8uY2VudGVyIHx8IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ2FuZGlkYXRlcyA9IChnZW9tOiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnRbXSA9PiB7XHJcbiAgY29uc3QgY2FuZGlkYXRlczogX19lc3JpLlBvaW50W10gPSBbXVxyXG4gIGNvbnN0IHN0ZXAgPSBnZW9tLnNwYXRpYWxSZWZlcmVuY2U/LmlzR2VvZ3JhcGhpYyA/IDAuMDAzIDogMzAwIC8vIGFwcHJveCAzMDBtXHJcblxyXG4gIGlmIChnZW9tLnR5cGUgPT09ICdwb2ludCcpIHtcclxuICAgIGNhbmRpZGF0ZXMucHVzaChnZW9tIGFzIF9fZXNyaS5Qb2ludClcclxuICB9IGVsc2UgaWYgKGdlb20udHlwZSA9PT0gJ3BvbHlsaW5lJyB8fCBnZW9tLnR5cGUgPT09ICdwb2x5Z29uJykge1xyXG4gICAgLy8gdmVydGljZXNcclxuICAgIGNvbnN0IHBhdGhzID0gKGdlb20gYXMgYW55KS5wYXRocyB8fCAoZ2VvbSBhcyBhbnkpLnJpbmdzXHJcbiAgICBpZiAocGF0aHMpIHtcclxuICAgICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwdCBvZiBwYXRoKSB7XHJcbiAgICAgICAgICBjYW5kaWRhdGVzLnB1c2goeyB0eXBlOiAncG9pbnQnLCB4OiBwdFswXSwgeTogcHRbMV0sIHNwYXRpYWxSZWZlcmVuY2U6IGdlb20uc3BhdGlhbFJlZmVyZW5jZSB9IGFzIF9fZXNyaS5Qb2ludClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGRlbnNpZnlcclxuICAgIGNvbnN0IHsgZ2VvbWV0cnlFbmdpbmUgfSA9IG1vZHVsZXNcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlbnNpZmllZCA9IGdlb21ldHJ5RW5naW5lLmRlbnNpZnkoZ2VvbSwgc3RlcClcclxuICAgICAgY29uc3QgZHBhdGhzID0gKGRlbnNpZmllZCBhcyBhbnkpLnBhdGhzIHx8IChkZW5zaWZpZWQgYXMgYW55KS5yaW5nc1xyXG4gICAgICBpZiAoZHBhdGhzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwYXRoIG9mIGRwYXRocykge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBwdCBvZiBwYXRoKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7IHR5cGU6ICdwb2ludCcsIHg6IHB0WzBdLCB5OiBwdFsxXSwgc3BhdGlhbFJlZmVyZW5jZTogZ2VvbS5zcGF0aWFsUmVmZXJlbmNlIH0gYXMgX19lc3JpLlBvaW50KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCB7fVxyXG4gIH1cclxuICByZXR1cm4gY2FuZGlkYXRlc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R2VvbWV0cnlQYXJ0cyA9IChnZW9tOiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuR2VvbWV0cnlbXSA9PiB7XHJcbiAgY29uc3QgcGFydHM6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cclxuICBpZiAoZ2VvbS50eXBlID09PSAncG9pbnQnKSB7XHJcbiAgICBwYXJ0cy5wdXNoKGdlb20pXHJcbiAgfSBlbHNlIGlmIChnZW9tLnR5cGUgPT09ICdwb2x5bGluZScpIHtcclxuICAgIGNvbnN0IHBhdGhzID0gKGdlb20gYXMgYW55KS5wYXRoc1xyXG4gICAgaWYgKHBhdGhzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykge1xyXG4gICAgICAgIHBhcnRzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTogJ3BvbHlsaW5lJyxcclxuICAgICAgICAgIHBhdGhzOiBbcGF0aF0sXHJcbiAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBnZW9tLnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICB9IGFzIF9fZXNyaS5Qb2x5bGluZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZ2VvbS50eXBlID09PSAncG9seWdvbicpIHtcclxuICAgIGNvbnN0IHJpbmdzID0gKGdlb20gYXMgYW55KS5yaW5nc1xyXG4gICAgaWYgKHJpbmdzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcmluZyBvZiByaW5ncykge1xyXG4gICAgICAgIHBhcnRzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTogJ3BvbHlnb24nLFxyXG4gICAgICAgICAgcmluZ3M6IFtyaW5nXSxcclxuICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGdlb20uc3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICAgIH0gYXMgX19lc3JpLlBvbHlnb24pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcGFydHMucHVzaChnZW9tKVxyXG4gIH1cclxuICByZXR1cm4gcGFydHNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lYXN1cmVEaXN0YW5jZSA9IChcclxuICBnQTogX19lc3JpLkdlb21ldHJ5LFxyXG4gIGdCOiBfX2VzcmkuR2VvbWV0cnksXHJcbiAgdXNlR2VvZGVzaWM6IGJvb2xlYW4sXHJcbiAgdW5pdDogJ21ldGVycycgfCAna2lsb21ldGVycycgPSAnbWV0ZXJzJ1xyXG4pOiBudW1iZXIgPT4ge1xyXG4gIGNvbnN0IHsgZ2VvbWV0cnlFbmdpbmUsIHByb2plY3Rpb24gfSA9IG1vZHVsZXNcclxuICBsZXQgQSA9IGdBLCBCID0gZ0JcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2FtZVNSID1cclxuICAgICAgQS5zcGF0aWFsUmVmZXJlbmNlPy53a2lkID09PSBCLnNwYXRpYWxSZWZlcmVuY2U/LndraWQgfHxcclxuICAgICAgQS5zcGF0aWFsUmVmZXJlbmNlPy53a3QgPT09IEIuc3BhdGlhbFJlZmVyZW5jZT8ud2t0XHJcbiAgICBpZiAoIXNhbWVTUikge1xyXG4gICAgICBjb25zdCBwcm9qQiA9IHByb2plY3Rpb24ucHJvamVjdChCLCBBLnNwYXRpYWxSZWZlcmVuY2UpIGFzIF9fZXNyaS5HZW9tZXRyeVxyXG4gICAgICBpZiAocHJvakIpIEIgPSBwcm9qQlxyXG4gICAgfVxyXG4gIH0gY2F0Y2gge31cclxuXHJcbiAgaWYgKHVzZUdlb2Rlc2ljICYmIGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljRGlzdGFuY2UpIHtcclxuICAgIHJldHVybiBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0Rpc3RhbmNlKEEsIEIsIHVuaXQpIGFzIG51bWJlclxyXG4gIH1cclxuICByZXR1cm4gZ2VvbWV0cnlFbmdpbmUuZGlzdGFuY2UoQSwgQiwgdW5pdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdlb2Rlc2ljQnVmZmVyID0gYXN5bmMgKFxyXG4gIGdlb206IF9fZXNyaS5HZW9tZXRyeSxcclxuICByYWRpdXNLbTogbnVtYmVyXHJcbik6IFByb21pc2U8X19lc3JpLlBvbHlnb24+ID0+IHtcclxuICBhd2FpdCBlbnN1cmVNb2R1bGVzKClcclxuICBjb25zdCB7IGdlb21ldHJ5RW5naW5lIH0gPSBtb2R1bGVzXHJcbiAgbGV0IGJ1ZmZlciA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQnVmZmVyKGdlb20sIHJhZGl1c0ttLCAna2lsb21ldGVycycpIGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoYnVmZmVyKSkgYnVmZmVyID0gYnVmZmVyWzBdXHJcbiAgcmV0dXJuIGJ1ZmZlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xpcEdlb21ldHJ5ID0gYXN5bmMgKFxyXG4gIHRhcmdldEdlb206IF9fZXNyaS5HZW9tZXRyeSxcclxuICBjbGlwR2VvbTogX19lc3JpLkdlb21ldHJ5XHJcbik6IFByb21pc2U8X19lc3JpLkdlb21ldHJ5IHwgbnVsbD4gPT4ge1xyXG4gIGF3YWl0IGVuc3VyZU1vZHVsZXMoKVxyXG4gIGNvbnN0IHsgZ2VvbWV0cnlFbmdpbmUgfSA9IG1vZHVsZXNcclxuICBjb25zdCBjbGlwcGVkID0gZ2VvbWV0cnlFbmdpbmUuaW50ZXJzZWN0KHRhcmdldEdlb20sIGNsaXBHZW9tKVxyXG4gIGlmICghY2xpcHBlZCB8fCBnZW9tZXRyeUVuZ2luZS5pc0VtcHR5Py4oY2xpcHBlZCkpIHJldHVybiBudWxsXHJcbiAgcmV0dXJuIGNsaXBwZWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSW50ZXJzZWN0aW9uID0gYXN5bmMgKFxyXG4gIGdlb21BOiBfX2VzcmkuR2VvbWV0cnksXHJcbiAgZ2VvbUI6IF9fZXNyaS5HZW9tZXRyeVxyXG4pOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuICBhd2FpdCBlbnN1cmVNb2R1bGVzKClcclxuICBjb25zdCB7IGdlb21ldHJ5RW5naW5lIH0gPSBtb2R1bGVzXHJcbiAgcmV0dXJuIGdlb21ldHJ5RW5naW5lLmludGVyc2VjdHMoZ2VvbUEsIGdlb21CKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlTGVuZ3RoID0gYXN5bmMgKFxyXG4gIGdlb206IF9fZXNyaS5HZW9tZXRyeSxcclxuICB1c2VHZW9kZXNpYzogYm9vbGVhbixcclxuICB1bml0OiAna2lsb21ldGVycycgfCAnbWV0ZXJzJyA9ICdraWxvbWV0ZXJzJ1xyXG4pOiBQcm9taXNlPG51bWJlcj4gPT4ge1xyXG4gIGF3YWl0IGVuc3VyZU1vZHVsZXMoKVxyXG4gIGNvbnN0IHsgZ2VvbWV0cnlFbmdpbmUgfSA9IG1vZHVsZXNcclxuICBpZiAodXNlR2VvZGVzaWMpIHtcclxuICAgIHJldHVybiBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0xlbmd0aChnZW9tLCB1bml0KSBhcyBudW1iZXJcclxuICB9XHJcbiAgcmV0dXJuIGdlb21ldHJ5RW5naW5lLnBsYW5hckxlbmd0aChnZW9tLCB1bml0KSBhcyBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RUb1ZpZXdTUiA9IGFzeW5jIChcclxuICBwb2ludDogX19lc3JpLlBvaW50LFxyXG4gIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcclxuKTogUHJvbWlzZTxfX2VzcmkuUG9pbnQ+ID0+IHtcclxuICBhd2FpdCBlbnN1cmVNb2R1bGVzKClcclxuICBjb25zdCB7IHByb2plY3Rpb24gfSA9IG1vZHVsZXNcclxuICByZXR1cm4gcHJvamVjdGlvbi5wcm9qZWN0KHBvaW50LCB2aWV3U1IpIGFzIF9fZXNyaS5Qb2ludFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgQ29udHJvbHMsIENvdW50ZXJzLCBSZXN1bHRzVGFibGUsIE1hcEZlZWRiYWNrIH0gZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VQcm94aW1pdHlDYWxjdWxhdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlUHJveGltaXR5Q2FsY3VsYXRpb24nXHJcbmltcG9ydCB7IHVzZVBERlJlcG9ydCB9IGZyb20gJy4vaG9va3MvdXNlUERGUmVwb3J0J1xyXG5pbXBvcnQgeyBUWFQsIHR5cGUgUHJveGltaXR5Q29uZmlnLCB0eXBlIFNlbGVjdGVkTGluZU1ldGEgfSBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IEFsbFdpZGdldFByb3BzPGFueT4pIHtcclxuICBjb25zdCBbam12LCBzZXRKbXZdID0gUmVhY3QudXNlU3RhdGU8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihUWFQubmVlZExpbmUpXHJcbiAgY29uc3QgW3JhZGl1c0ttSW5wdXQsIHNldFJhZGl1c0ttSW5wdXRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignNScpXHJcbiAgY29uc3QgW3VzZUdlb2Rlc2ljRGlzdGFuY2VSdW50aW1lLCBzZXRVc2VHZW9kZXNpY0Rpc3RhbmNlUnVudGltZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgLy8gTGluaGEgZXNjb2xoaWRhIHBvciBjbGlxdWUgKyBtZXRhXHJcbiAgY29uc3Qgc2VsZWN0ZWRMaW5lR2VvbVJlZiA9IFJlYWN0LnVzZVJlZjxfX2VzcmkuR2VvbWV0cnkgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IHNlbGVjdGVkTGluZU1ldGFSZWYgPSBSZWFjdC51c2VSZWY8U2VsZWN0ZWRMaW5lTWV0YSB8IG51bGw+KG51bGwpXHJcblxyXG4gIC8vIENvbmZpZ3VyYcOnw6NvIGRvIHdpZGdldFxyXG4gIGNvbnN0IGNvbmZpZzogUHJveGltaXR5Q29uZmlnID0ge1xyXG4gICAgdW5pdDogcHJvcHMuY29uZmlnPy51bml0IHx8ICdtZXRlcnMnLFxyXG4gICAgb25seUluRXh0ZW50OiAhIXByb3BzLmNvbmZpZz8ub25seUluRXh0ZW50LFxyXG4gICAgdXNlR2VvZGVzaWNEaXN0YW5jZTogISFwcm9wcy5jb25maWc/LnVzZUdlb2Rlc2ljRGlzdGFuY2UsXHJcbiAgICB0YXJnZXRMYXllcklkc09yVGl0bGVzOiBwcm9wcy5jb25maWc/LnRhcmdldExheWVySWRzT3JUaXRsZXMgfHwgW11cclxuICB9XHJcblxyXG4gIC8vIEhvb2sgcGVyc29uYWxpemFkbyBwYXJhIGPDoWxjdWxvc1xyXG4gIGNvbnN0IHtcclxuICAgIGlzQ29tcHV0aW5nLFxyXG4gICAgcm93cyxcclxuICAgIHNjYW5uZWRMYXllcnNDb3VudCxcclxuICAgIGJ1ZmZlckdlb20sXHJcbiAgICBmZWF0dXJlV2l0aFBvaW50cyxcclxuICAgIGludGVyc2VjdGlvbkxpbmVzLFxyXG4gICAgY2FsY3VsYXRlUHJveGltaXR5LFxyXG4gICAgY2xlYXJSZXN1bHRzXHJcbiAgfSA9IHVzZVByb3hpbWl0eUNhbGN1bGF0aW9uKClcclxuXHJcbiAgLy8gSG9vayBwYXJhIGdlcmHDp8OjbyBkZSByZWxhdMOzcmlvIFBERlxyXG4gIGNvbnN0IHsgaXNHZW5lcmF0aW5nOiBpc0dlbmVyYXRpbmdQREYsIGdlbmVyYXRlUERGUmVwb3J0IH0gPSB1c2VQREZSZXBvcnQoKVxyXG5cclxuICAvLyBIYW5kbGVyc1xyXG4gIGNvbnN0IGhhbmRsZVJhZGl1c0NoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiBzZXRSYWRpdXNLbUlucHV0KHZhbHVlKVxyXG5cclxuICBjb25zdCBoYW5kbGVSYWRpdXNLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykgaGFuZGxlQXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlR2VvZGVzaWNDaGFuZ2UgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gc2V0VXNlR2VvZGVzaWNEaXN0YW5jZVJ1bnRpbWUoY2hlY2tlZClcclxuXHJcbiAgY29uc3QgaGFuZGxlQXBwbHkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCgwLCBOdW1iZXIocmFkaXVzS21JbnB1dCkgfHwgMClcclxuICAgIGlmICgham12IHx8ICFzZWxlY3RlZExpbmVHZW9tUmVmLmN1cnJlbnQgfHwgIXNlbGVjdGVkTGluZU1ldGFSZWYuY3VycmVudCkgcmV0dXJuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgY2FsY3VsYXRlUHJveGltaXR5KGptdiwgc2VsZWN0ZWRMaW5lR2VvbVJlZi5jdXJyZW50LCBzZWxlY3RlZExpbmVNZXRhUmVmLmN1cnJlbnQsIHJhZGl1cywge1xyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICB1c2VHZW9kZXNpY0Rpc3RhbmNlOiB1c2VHZW9kZXNpY0Rpc3RhbmNlUnVudGltZVxyXG4gICAgICB9KVxyXG4gICAgICBzZXRTdGF0dXMoVFhULmRvbmUocm93cy5sZW5ndGgsIHVzZUdlb2Rlc2ljRGlzdGFuY2VSdW50aW1lKSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FsY3VsYXIgcHJveGltaWRhZGU6JywgZXJyb3IpXHJcbiAgICAgIHNldFN0YXR1cygnRXJybyBhbyBjYWxjdWxhciBwcm94aW1pZGFkZS4nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRXhwb3J0Q1NWID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gJ0xheWVyO09CSkVDVElEO0dlb21ldHJ5O1N0YXR1cztMZW5ndGhLbTtEaXN0YW5jZU07WF9GZWF0dXJlO1lfRmVhdHVyZTtYX0xpbmhhO1lfTGluaGEnXHJcbiAgICBjb25zdCBsaW5lcyA9IHJvd3MubWFwKHIgPT5cclxuICAgICAgYCR7ci5sYXllclRpdGxlfTske3Iub2JqZWN0SWR9OyR7ci5nZW9tVHlwZX07JHtyLnN0YXR1c307JHtyLmxlbmd0aEttPy50b0ZpeGVkKDIpIHx8ICcnfTske3IuZGlzdGFuY2VNPy50b0ZpeGVkKDIpIHx8ICcnfTske3IueEZlYXR1cmU/LnRvRml4ZWQoMikgfHwgJyd9OyR7ci55RmVhdHVyZT8udG9GaXhlZCgyKSB8fCAnJ307JHtyLnhMaW5lPy50b0ZpeGVkKDIpIHx8ICcnfTske3IueUxpbmU/LnRvRml4ZWQoMikgfHwgJyd9YFxyXG4gICAgKVxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtbaGVhZGVyLCAuLi5saW5lc10uam9pbignXFxuJyldLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSlcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGEuaHJlZiA9IHVybFxyXG4gICAgYS5kb3dubG9hZCA9ICdwcm94aW1pZGFkZS5jc3YnXHJcbiAgICBhLmNsaWNrKClcclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRXhwb3J0UERGID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFqbXYgfHwgIXNlbGVjdGVkTGluZU1ldGFSZWYuY3VycmVudCB8fCByb3dzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgoMCwgTnVtYmVyKHJhZGl1c0ttSW5wdXQpIHx8IDApXHJcbiAgICBhd2FpdCBnZW5lcmF0ZVBERlJlcG9ydChcclxuICAgICAgam12LFxyXG4gICAgICBzZWxlY3RlZExpbmVNZXRhUmVmLmN1cnJlbnQsXHJcbiAgICAgIHJvd3MsXHJcbiAgICAgIHNjYW5uZWRMYXllcnNDb3VudCxcclxuICAgICAgcmFkaXVzLFxyXG4gICAgICB7IC4uLmNvbmZpZywgdXNlR2VvZGVzaWNEaXN0YW5jZTogdXNlR2VvZGVzaWNEaXN0YW5jZVJ1bnRpbWUgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLy8gQ29uZWN0YSBhIE1hcFZpZXcgZSBpbnN0YWxhIGhhbmRsZXIgZGUgY2xpcXVlXHJcbiAgY29uc3Qgb25BY3RpdmVWaWV3Q2hhbmdlID0gKHZpZXc6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICBzZXRKbXYodmlldylcclxuICAgIGlmICghdmlldykgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgbXYgPSB2aWV3LnZpZXcgYXMgX19lc3JpLk1hcFZpZXdcclxuICAgIG12Lm9uKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbXYuaGl0VGVzdChlKVxyXG4gICAgICAgIGNvbnN0IGhpdCA9IHJlcy5yZXN1bHRzLmZpbmQoKHI6IGFueSkgPT5cclxuICAgICAgICAgIHIudHlwZSA9PT0gJ2dyYXBoaWMnICYmXHJcbiAgICAgICAgICByLmdyYXBoaWM/Lmdlb21ldHJ5Py50eXBlID09PSAncG9seWxpbmUnICYmXHJcbiAgICAgICAgICAoci5ncmFwaGljPy5sYXllcj8udHlwZSA9PT0gJ2ZlYXR1cmUnIHx8IHIuZ3JhcGhpYz8ubGF5ZXIpXHJcbiAgICAgICAgKSBhcyBhbnlcclxuXHJcbiAgICAgICAgaWYgKCFoaXQpIHtcclxuICAgICAgICAgIHNlbGVjdGVkTGluZUdlb21SZWYuY3VycmVudCA9IG51bGxcclxuICAgICAgICAgIHNlbGVjdGVkTGluZU1ldGFSZWYuY3VycmVudCA9IG51bGxcclxuICAgICAgICAgIHNldFN0YXR1cyhUWFQubmVlZExpbmUpXHJcbiAgICAgICAgICBjbGVhclJlc3VsdHMoKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnID0gaGl0LmdyYXBoaWMgYXMgX19lc3JpLkdyYXBoaWNcclxuICAgICAgICBjb25zdCBsYXllcjogYW55ID0gZy5sYXllclxyXG4gICAgICAgIGNvbnN0IGdlb20gPSBnLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZVxyXG4gICAgICAgIGNvbnN0IG9pZEZpZWxkID0gKGxheWVyPy5vYmplY3RJZEZpZWxkIGFzIHN0cmluZykgfHwgJ09CSkVDVElEJ1xyXG4gICAgICAgIGNvbnN0IG9pZCA9IHR5cGVvZiAoZyBhcyBhbnkpLmdldE9iamVjdElkID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICA/IChnIGFzIGFueSkuZ2V0T2JqZWN0SWQoKVxyXG4gICAgICAgICAgOiBnLmF0dHJpYnV0ZXM/LltvaWRGaWVsZF0gPz8gZy5hdHRyaWJ1dGVzPy5PQkpFQ1RJRFxyXG5cclxuICAgICAgICBzZWxlY3RlZExpbmVHZW9tUmVmLmN1cnJlbnQgPSBnZW9tXHJcbiAgICAgICAgc2VsZWN0ZWRMaW5lTWV0YVJlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgbGF5ZXJUaXRsZTogbGF5ZXI/LnRpdGxlIHx8ICdMaW5oYScsXHJcbiAgICAgICAgICBsYXllcklkOiBsYXllci5pZCxcclxuICAgICAgICAgIG9iamVjdElkOiBvaWRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFN0YXR1cyhUWFQuc2VsZWN0ZWQobGF5ZXI/LnRpdGxlIHx8ICdMaW5oYScsIG9pZCkpXHJcbiAgICAgICAgY2xlYXJSZXN1bHRzKClcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBubyBjbGlxdWU6JywgZXJyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIGppbXUtd2lkZ2V0XCI+XHJcbiAgICAgIDxDb250cm9sc1xyXG4gICAgICAgIHN0YXR1cz17c3RhdHVzfVxyXG4gICAgICAgIHJhZGl1c0ttSW5wdXQ9e3JhZGl1c0ttSW5wdXR9XHJcbiAgICAgICAgb25SYWRpdXNDaGFuZ2U9e2hhbmRsZVJhZGl1c0NoYW5nZX1cclxuICAgICAgICBvblJhZGl1c0tleURvd249e2hhbmRsZVJhZGl1c0tleURvd259XHJcbiAgICAgICAgdXNlR2VvZGVzaWNEaXN0YW5jZVJ1bnRpbWU9e3VzZUdlb2Rlc2ljRGlzdGFuY2VSdW50aW1lfVxyXG4gICAgICAgIG9uR2VvZGVzaWNDaGFuZ2U9e2hhbmRsZUdlb2Rlc2ljQ2hhbmdlfVxyXG4gICAgICAgIG9uQXBwbHk9e2hhbmRsZUFwcGx5fVxyXG4gICAgICAgIGlzQ29tcHV0aW5nPXtpc0NvbXB1dGluZ31cclxuICAgICAgICBoYXNNYXA9eyEham12fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPENvdW50ZXJzXHJcbiAgICAgICAgc2Nhbm5lZExheWVyc0NvdW50PXtzY2FubmVkTGF5ZXJzQ291bnR9XHJcbiAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICBvbkV4cG9ydENTVj17aGFuZGxlRXhwb3J0Q1NWfVxyXG4gICAgICAgIG9uRXhwb3J0UERGPXtoYW5kbGVFeHBvcnRQREZ9XHJcbiAgICAgICAgaXNHZW5lcmF0aW5nUERGPXtpc0dlbmVyYXRpbmdQREZ9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8UmVzdWx0c1RhYmxlIHJvd3M9e3Jvd3N9IC8+XHJcblxyXG4gICAgICB7LyogTWFwIHdpZGdldCAqL31cclxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoID8gKFxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkc1swXX1cclxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17b25BY3RpdmVWaWV3Q2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cGwtbmVlZC1tYXBcIj57VFhULm5lZWRNYXB9PC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogQ29tcG9uZW50ZSBkZSBmZWVkYmFjayB2aXN1YWwgbm8gbWFwYSAqL31cclxuICAgICAgPE1hcEZlZWRiYWNrXHJcbiAgICAgICAgam12PXtqbXZ9XHJcbiAgICAgICAgc2VsZWN0ZWRMaW5lR2VvbT17c2VsZWN0ZWRMaW5lR2VvbVJlZi5jdXJyZW50fVxyXG4gICAgICAgIHNlbGVjdGVkTGluZU1ldGE9e3NlbGVjdGVkTGluZU1ldGFSZWYuY3VycmVudH1cclxuICAgICAgICBidWZmZXJHZW9tPXtidWZmZXJHZW9tfVxyXG4gICAgICAgIGZlYXR1cmVXaXRoUG9pbnRzPXtmZWF0dXJlV2l0aFBvaW50c31cclxuICAgICAgICBpbnRlcnNlY3Rpb25MaW5lcz17aW50ZXJzZWN0aW9uTGluZXN9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==