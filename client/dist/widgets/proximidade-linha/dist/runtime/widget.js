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

// Função melhorada para gerar relatório profissional usando print do navegador
const generatePrintReport = (jmv, selectedLineMeta, rows, scannedLayersCount, radiusKm, config) => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    // Capturar screenshot do mapa usando API nativa do ArcGIS
    let screenshotDataUrl = '';
    try {
        const screenshot = yield jmv.view.takeScreenshot({
            format: 'png',
            quality: 85,
            width: 800,
            height: 600
        });
        screenshotDataUrl = screenshot.dataUrl;
    }
    catch (error) {
        console.log('Erro ao capturar screenshot do mapa:', error);
    }
    // Filtrar dados
    const intersections = rows.filter(r => r.status === 'interseção');
    const proximities = rows.filter(r => r.status === 'dentro do buffer');
    // Criar conteúdo HTML profissional com cores da Dossel Ambiental
    const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 210mm; margin: 0 auto; padding: 15mm; background: white; color: #333;">
      <!-- Cabeçalho com logo à esquerda -->
      <header style="background: linear-gradient(135deg, #0d4d2a 0%, #1a5f3a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; margin-bottom: 0; display: flex; align-items: center; gap: 20px;">
        ${(config.useLocalLogo && config.localLogoFile) ? `
        <div style="flex-shrink: 0;">
          <img src="${window.location.origin}/client/your-extensions/widgets/proximidade-linha/assets/images/${config.localLogoFile}" alt="Logo Dossel Ambiental" style="max-height: 70px; max-width: 150px; object-fit: contain; filter: brightness(0) invert(1);">
        </div>
        ` : config.logoUrl ? `
        <div style="flex-shrink: 0;">
          <img src="${config.logoUrl}" alt="Logo Institucional" style="max-height: 70px; max-width: 150px; object-fit: contain;">
        </div>
        ` : `
        <div style="flex-shrink: 0; width: 150px; height: 70px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <span style="color: rgba(255,255,255,0.8); font-weight: 600; font-size: 12px;">DOSSEL<br>AMBIENTAL</span>
        </div>
        `}
        <div style="flex: 1;">
          <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 1px; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
            RELATÓRIO DE PROXIMIDADE ÀS LINHAS DE ENERGIA
          </h1>
          <p style="margin: 5px 0 0 0; color: rgba(255,255,255,0.9); font-size: 13px; font-weight: 500;">
            Gerado em ${now.toLocaleDateString('pt-BR')} às ${now.toLocaleTimeString('pt-BR')}
          </p>
        </div>
      </header>

      <!-- Informações Principais -->
      <section style="margin: 0 0 25px 0; background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; border-left: 4px solid #0d4d2a; border-top: 1px solid #e0e0e0;">
        <h2 style="color: #0d4d2a; margin-top: 0; font-size: 18px; font-weight: 600;">PARÂMETROS DA ANÁLISE</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
          <div>
            <strong style="color: #555;">Linha de Energia (Referência):</strong><br>
            <span style="font-size: 16px;">${selectedLineMeta.layerTitle}</span>
            ${selectedLineMeta.objectId ? `<br><small style="color: #666;">ID: ${selectedLineMeta.objectId}</small>` : ''}
          </div>
          <div>
            <strong style="color: #555;">Raio de Análise:</strong><br>
            <span style="font-size: 16px; color: #007acc; font-weight: 600;">${radiusKm} km</span>
            <br><small style="color: #666;">${config.useGeodesicDistance ? 'Distância Geodésica' : 'Distância Plana'}</small>
          </div>
        </div>
      </section>

      <!-- Screenshot do Mapa -->
      ${screenshotDataUrl ? `
      <section style="margin: 25px 0;">
        <h2 style="color: #0d4d2a; font-size: 18px; font-weight: 600; margin-bottom: 15px;">VISUALIZAÇÃO DA ÁREA ANALISADA</h2>
        <div style="text-align: center;">
          <img src="${screenshotDataUrl}" alt="Mapa da análise de proximidade às linhas de energia"
               style="max-width: 100%; height: auto; border: 2px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <p style="font-size: 12px; color: #666; font-style: italic; margin-top: 10px; text-align: center;">
            Linha de energia selecionada | Buffer de análise | Pontos de interseção/proximidade
          </p>
        </div>
      </section>
      ` : ''}

      <!-- Resultados Consolidados -->
      <section style="margin: 25px 0;">
        <h2 style="color: #8b4513; font-size: 18px; font-weight: 600; margin-bottom: 15px;">RESUMO EXECUTIVO</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
          <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #b3d9ff;">
            <div style="font-size: 28px; font-weight: 700; color: #007acc;">${rows.length}</div>
            <div style="font-size: 14px; color: #555; margin-top: 5px;">Feições Encontradas</div>
          </div>
          <div style="background: #ffeef0; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #ffb3ba;">
            <div style="font-size: 28px; font-weight: 700; color: #d9534f;">${intersections.length}</div>
            <div style="font-size: 14px; color: #555; margin-top: 5px;">Interseções Diretas</div>
          </div>
          <div style="background: #fff8e1; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #ffcc02;">
            <div style="font-size: 28px; font-weight: 700; color: #f0ad4e;">${proximities.length}</div>
            <div style="font-size: 14px; color: #555; margin-top: 5px;">No Raio de Segurança</div>
          </div>
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #b3e5fc;">
            <div style="font-size: 28px; font-weight: 700; color: #0277bd;">${scannedLayersCount}</div>
            <div style="font-size: 14px; color: #555; margin-top: 5px;">Camadas Analisadas</div>
          </div>
        </div>
      </section>

      <!-- Detalhamento dos Resultados -->
      <section style="margin: 25px 0;">
        <h2 style="color: #a0522d; font-size: 18px; font-weight: 600; margin-bottom: 15px;">DETALHAMENTO DOS RESULTADOS</h2>

        ${intersections.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h3 style="color: #d9534f; font-size: 16px; font-weight: 600; margin-bottom: 10px;">🔴 INTERSEÇÕES DIRETAS COM LINHAS DE ENERGIA</h3>
          <div style="background: #fff5f5; border: 1px solid #fed7d7; border-radius: 8px; padding: 15px;">
            ${intersections.map((row, index) => `
              <div style="margin: 8px 0; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #d9534f;">
                <strong style="color: #d9534f;">${index + 1}. ${row.layerTitle}</strong>
                <span style="float: right; background: #d9534f; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">OID ${row.objectId}</span>
                <br style="clear: both;">
                ${row.lengthKm ? `<small style="color: #666;">Comprimento da interseção: <strong>${row.lengthKm.toFixed(2)} km</strong></small>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        ${proximities.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h3 style="color: #f0ad4e; font-size: 16px; font-weight: 600; margin-bottom: 10px;">🟡 FEIÇÕES NO RAIO DE SEGURANÇA DAS LINHAS</h3>
          <div style="background: #fffbf0; border: 1px solid #feebc8; border-radius: 8px; padding: 15px;">
            ${proximities.map((row, index) => `
              <div style="margin: 8px 0; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #f0ad4e;">
                <strong style="color: #f0ad4e;">${index + 1}. ${row.layerTitle}</strong>
                <span style="float: right; background: #f0ad4e; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">OID ${row.objectId}</span>
                <br style="clear: both;">
                ${row.distanceM ? `<small style="color: #666;">Distância até a linha de energia: <strong>${row.distanceM.toFixed(0)} metros</strong></small>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </section>

      <!-- Rodapé Profissional com cores da empresa -->
      <footer style="margin-top: 40px; background: linear-gradient(135deg, #0d4d2a 0%, #1a5f3a 100%); color: white; padding: 25px; border-radius: 8px; text-align: center; font-size: 12px;">
        <div style="margin-bottom: 15px;">
          <strong style="font-size: 16px; color: white; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">DOSSEL AMBIENTAL</strong><br>
          <span style="color: rgba(255,255,255,0.9); font-weight: 500;">Soluções em Gestão Ambiental e Geoprocessamento</span>
        </div>
        <p style="margin: 5px 0; color: rgba(255,255,255,0.9);">
          <strong style="color: white;">Relatório de Proximidade às Linhas de Energia</strong><br>
          Widget desenvolvido com ArcGIS Experience Builder<br>
          Análise realizada com parâmetros de qualidade e precisão geográfica certificada
        </p>
        <div style="margin-top: 20px; font-size: 11px; color: rgba(255,255,255,0.7); border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px;">
          Este relatório foi gerado automaticamente pelo sistema de análise geoespacial da Dossel Ambiental
        </div>
      </footer>
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
      <title>Relatório de Proximidade às Linhas de Energia - ${now.toLocaleDateString('pt-BR')}</title>
      <style>
        @media print {
          body { margin: 0; }
          @page {
            margin: 15mm;
            /* Tentar forçar impressão sem cabeçalhos/rodapés */
            size: A4;
          }
          /* Garantir que elementos de fundo sejam impressos */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }

        /* Ocultar instruções na impressão */
        @media print {
          #print-instructions { display: none !important; }
        }
      </style>
      <script>
        // Configurar opções de impressão por padrão
        window.onload = function() {
          // Aguardar um pouco para garantir que a página carregou completamente
          setTimeout(function() {
            try {
              // Mostrar instruções de impressão
              var instructions = document.getElementById('print-instructions');
              if (instructions) {
                instructions.style.display = 'block';
              }

              // Tentar configurar as opções de impressão automaticamente
              // Nota: Os navegadores modernos limitam o controle programático das configurações de impressão
              // por razões de segurança. As instruções visuais são a melhor abordagem.

              console.log('Página preparada para impressão com instruções visuais');

              // Adicionar listener para quando o usuário tentar imprimir
              window.onbeforeprint = function() {
                console.log('Iniciando impressão - verifique as configurações nas instruções');
              };

            } catch (e) {
              console.log('Erro ao configurar página de impressão:', e);
            }
          }, 200);
        };
      </script>
    </head>
    <body>
      ${htmlContent}
      <div id="print-instructions" style="position: fixed; bottom: 10px; right: 10px; background: #fff8dc; padding: 15px; border-radius: 8px; font-size: 13px; color: #8b4513; border: 2px solid #daa520; max-width: 320px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10000;">
        <div style="font-weight: bold; color: #0d4d2a; margin-bottom: 8px; font-size: 14px;">📋 CONFIGURAÇÕES DE IMPRESSÃO</div>
        <div style="line-height: 1.4;">
          <strong style="color: #d9534f;">❌ Desmarque:</strong> "Cabeçalhos e rodapés"<br>
          <strong style="color: #28a745;">✅ Marque:</strong> "Elementos gráficos" ou "Backgrounds"<br>
          <strong style="color: #007bff;">🎯 Depois:</strong> Clique em "Imprimir"
        </div>
        <div style="margin-top: 8px; font-size: 11px; color: #666; border-top: 1px solid #daa520; padding-top: 8px;">
          💡 Essas configurações garantem que o relatório seja impresso corretamente com cores e logo.
        </div>
      </div>
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
        var _a, _b, _c;
        if (!jmv || !selectedLineMetaRef.current || rows.length === 0)
            return;
        const radius = Math.max(0, Number(radiusKmInput) || 0);
        yield generatePDFReport(jmv, selectedLineMetaRef.current, rows, scannedLayersCount, radius, Object.assign(Object.assign({}, config), { useGeodesicDistance: useGeodesicDistanceRuntime, logoUrl: (_a = props.config) === null || _a === void 0 ? void 0 : _a.logoUrl, useLocalLogo: (_b = props.config) === null || _b === void 0 ? void 0 : _b.useLocalLogo, localLogoFile: (_c = props.config) === null || _c === void 0 ? void 0 : _c.localLogoFile }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLENBQUMsT0FBTywySUFBMkksUUFBUSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUsscUJBQXFCLFVBQVUsc0JBQXNCLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxX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QUM3QyxVQUFVLEVBQUUsVUFBVSxFQUN0QixpQkFBaUIsRUFBRSxpQkFBaUIsRUFDcEMsaUJBQWlCLEVBQUUsaUJBQWlCLEdBQ3BDLENBQ0UsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9Db250cm9scy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hpbWlkYWRlLWxpbmhhL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQ291bnRlcnMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS9jb21wb25lbnRzL01hcEZlZWRiYWNrLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9SZXN1bHRzVGFibGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS9ob29rcy91c2VQREZSZXBvcnQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hpbWlkYWRlLWxpbmhhL3NyYy9ydW50aW1lL2hvb2tzL3VzZVByb3hpbWl0eUNhbGN1bGF0aW9uLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS9zdHlsZXMuc2Nzcz8xYjk0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS90eXBlcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvc3JjL3J1bnRpbWUvdXRpbHMvZ2VvbWV0cnkudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hpbWlkYWRlLWxpbmhhL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFdpZGdldDogUHJveGltaWRhZGUgYXTDqSBMaW5oYVxuICAgTGF5b3V0IG9yZ2FuaXphZG8gKyB2aXN1YWwgbGltcG9cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEge1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICBCYXNlXG4gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0xLCAjZmZmKTtcbiAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0xLCAjMWYxZjFmKTtcbiAgZm9udDogNDAwIDAuOTVyZW0vMS40IHZhcigtLWNhbGNpdGUtc2Fucy1mb250LWZhbWlseSwgc3lzdGVtLXVpKTtcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgMSkgVGV4dG8gaW5mb3JtYXRpdm8gKGRpc2NyZXRvKVxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAyKSBMaW5oYTogUmFpbyArIEFwbGljYXJcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLyogbGFiZWwgfCBpbnB1dCB8IGJvdMOjbyBhcGxpY2FyICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIDMpIENvbnRhZG9yZXMgKyA0KSBFeHBvcnRhclxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiBjb250MSB8IGNvbnQyIHwgZXNwYcOnbyB8IGV4cG9ydGFyICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIDUpIFRhYmVsYSBkZSByZXN1bHRhZG9zXG4gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIFJlc3BvbnNpdmlkYWRlIChwYWluZWwgZXN0cmVpdG8pXG4gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtaW5mby10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMiwgIzU1NSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtaW5mby10ZXh0IHAge1xuICBtYXJnaW46IDA7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1yYWRpdXMtcm93IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxMjBweCBhdXRvO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0yLCAjNjY2KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWlucHV0IHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTIsICNkOGQ4ZDgpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0xLCAjZmZmKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZCwgIzAwN2FjMik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZCwgIzAwN2FjMikgMjIlLCB0cmFuc3BhcmVudCk7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtYnRuLXByaW1hcnkge1xuICBoZWlnaHQ6IDM4cHg7IC8qIGJvdMOjbyBtYWlvciAqL1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1pbi13aWR0aDogMTEycHg7IC8qIGxhcmd1cmEgbcOtbmltYSBwYXJhIGRhciBwcmVzZW7Dp2EgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZCwgIzAwN2FjMik7XG4gIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZSwgI2ZmZik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgdHJhbnNmb3JtIDAuMDJzIGVhc2U7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyLCAjMDA2MTliKTtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1idG4tcHJpbWFyeTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1jb3VudGVycy1yb3cge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byAxZnIgYXV0bztcbiAgY29sdW1uLWdhcDogMTJweDtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1jb3VudGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZDhkOGQ4KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTIsICNmNWY1ZjUpO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWNvdW50ZXItbGFiZWwge1xuICBjb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTIsICM2NjYpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWNvdW50ZXItdmFsdWUge1xuICBjb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTEsICMxZjFmMWYpO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWFjdGlvbnMge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1idG4tZ2hvc3Qge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSwgI2ZmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTIsICNkOGQ4ZDgpO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWJ0bi1naG9zdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yLCAjZjVmNWY1KTtcbn1cbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1idG4tZ2hvc3Q6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtdGFibGUtd3JhcCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZDhkOGQ4KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSwgI2ZmZik7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLXRhYmxlIHRoZWFkIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSwgI2ZmZik7XG4gIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMiwgIzZhNmE2YSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZDhkOGQ4KTtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtdGFibGUgdGJvZHkgdGQge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTIsICNlNmU2ZTYpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLXRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMiwgI2Y1ZjVmNSkgNTUlLCB0cmFuc3BhcmVudCk7XG59XG4ud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtdGFibGUgdGJvZHkgdHI6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZCwgIzAwN2FjMikgNCUsIHRyYW5zcGFyZW50KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xuICAud2lkZ2V0LXByb3hpbWlkYWRlLWxpbmhhIC53cGwtcmFkaXVzLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAvKiBsYWJlbCBxdWVicmEgcGFyYSBsaW5oYSBhY2ltYSAqL1xuICB9XG4gIC53aWRnZXQtcHJveGltaWRhZGUtbGluaGEgLndwbC1sYWJlbCB7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIH1cbiAgLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWNvdW50ZXJzLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAvKiBjb250YWRvcmVzIGxhZG8gYSBsYWRvICovXG4gIH1cbiAgLndpZGdldC1wcm94aW1pZGFkZS1saW5oYSAud3BsLWFjdGlvbnMge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogNnB4OyAvKiBleHBvcnRhciBkZXNjZSAqL1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvcnVudGltZS9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFBaEI7OztvQ0FBQTtBQUtBO0VBQ0U7O29DQUFBO0VBR0EsYUFBQTtFQUNBLHlEQUFBO0VBQ0EsMkNBQUE7RUFDQSxnRUFBQTtFQUVBOztvQ0FBQTtFQVdBOztvQ0FBQTtFQVVBLGtDQUFBO0VBeUNBOztvQ0FBQTtFQUdBLHNDQUFBO0VBd0NBOztvQ0FBQTtFQTRDQTs7b0NBQUE7QUFySUY7QUFiRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FBZUo7QUFiRTtFQUFtQixTQUFBO0FBZ0JyQjtBQVhFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBYUo7QUFURTtFQUNFLDZDQUFBO0FBV0o7QUFSRTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFVSjtBQVBFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtFQUNBLGtCQUFBO0VBQ0EseURBQUE7RUFDQSwwREFBQTtBQVNKO0FBUkk7RUFDRSxhQUFBO0VBQ0EsaURBQUE7RUFDQSw4RkFBQTtBQVVOO0FBTkU7RUFDRSxZQUFBLEVBQUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUEsRUFBQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFEQUFBO0VBQ0EsOENBQUE7RUFDQSw2REFBQTtBQVFKO0FBUEk7RUFBVSwyREFBQTtBQVVkO0FBVEk7RUFBVywwQkFBQTtBQVlmO0FBWEk7RUFBYSxZQUFBO0VBQWEsbUJBQUE7QUFlOUI7QUFSRTtFQUNFLHlDQUFBO0VBQ0EsZ0JBQUE7QUFVSjtBQVBFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHdEQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtBQVNKO0FBUEU7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0FBU0o7QUFQRTtFQUNFLDJDQUFBO0VBQ0EsZ0JBQUE7QUFTSjtBQU5FO0VBQWUsaUJBQUE7QUFTakI7QUFQRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlEQUFBO0VBQ0Esd0RBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7QUFTSjtBQVJJO0VBQVUsNERBQUE7QUFXZDtBQVZJO0VBQWEsWUFBQTtFQUFhLG1CQUFBO0FBYzlCO0FBUkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0RBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0FBVUo7QUFQRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBU0o7QUFORTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx5REFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVFKO0FBTEU7RUFDRSxpQkFBQTtFQUNBLCtEQUFBO0VBQ0Esc0JBQUE7QUFPSjtBQUpFO0VBQ0UsaUdBQUE7QUFNSjtBQUpFO0VBQ0UseUZBQUE7QUFNSjtBQUFFO0VBQ0U7SUFDRSw4QkFBQSxFQUFBLGtDQUFBO0VBRUo7RUFBRTtJQUFhLGlCQUFBO0VBR2Y7RUFERTtJQUNFLDhCQUFBLEVBQUEsMkJBQUE7RUFHSjtFQURFO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUEsRUFBQSxtQkFBQTtFQUdKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgIFdpZGdldDogUHJveGltaWRhZGUgYXTDqSBMaW5oYVxcclxcbiAgIExheW91dCBvcmdhbml6YWRvICsgdmlzdWFsIGxpbXBvXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi53aWRnZXQtcHJveGltaWRhZGUtbGluaGEge1xcclxcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgIEJhc2VcXHJcXG4gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTEsICNmZmYpO1xcclxcbiAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0xLCAjMWYxZjFmKTtcXHJcXG4gIGZvbnQ6IDQwMCAwLjk1cmVtLzEuNCB2YXIoLS1jYWxjaXRlLXNhbnMtZm9udC1mYW1pbHksIHN5c3RlbS11aSk7XFxyXFxuXFxyXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICAgMSkgVGV4dG8gaW5mb3JtYXRpdm8gKGRpc2NyZXRvKVxcclxcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4gIC53cGwtaW5mby10ZXh0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMiwgIzU1NSk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuICB9XFxyXFxuICAud3BsLWluZm8tdGV4dCBwIHsgbWFyZ2luOiAwOyB9XFxyXFxuXFxyXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICAgMikgTGluaGE6IFJhaW8gKyBBcGxpY2FyXFxyXFxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbiAgLndwbC1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogbGFiZWwgfCBpbnB1dCB8IGJvdMOjbyBhcGxpY2FyICovXFxyXFxuICAud3BsLXJhZGl1cy1yb3cge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDEyMHB4IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3BsLWxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0yLCAjNjY2KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndwbC1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZDhkOGQ4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSwgI2ZmZik7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UsIGJveC1zaGFkb3cgLjE1cyBlYXNlO1xcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZCwgIzAwN2FjMik7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJyYW5kLCAjMDA3YWMyKSAyMiUsIHRyYW5zcGFyZW50KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLndwbC1idG4tcHJpbWFyeSB7XFxyXFxuICAgIGhlaWdodDogMzhweDsgICAgICAgICAgICAgICAvKiBib3TDo28gbWFpb3IgKi9cXHJcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcclxcbiAgICBtaW4td2lkdGg6IDExMnB4OyAgICAgICAgICAgLyogbGFyZ3VyYSBtw61uaW1hIHBhcmEgZGFyIHByZXNlbsOnYSAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJyYW5kLCAjMDA3YWMyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC1pbnZlcnNlLCAjZmZmKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UsIHRyYW5zZm9ybSAuMDJzIGVhc2U7XFxyXFxuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyLCAjMDA2MTliKTsgfVxcclxcbiAgICAmOmFjdGl2ZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpOyB9XFxyXFxuICAgICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNjsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgIDMpIENvbnRhZG9yZXMgKyA0KSBFeHBvcnRhclxcclxcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4gIC8qIGNvbnQxIHwgY29udDIgfCBlc3Bhw6dvIHwgZXhwb3J0YXIgKi9cXHJcXG4gIC53cGwtY291bnRlcnMtcm93IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyIGF1dG87XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3BsLWNvdW50ZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA2cHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMCA4cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTIsICNkOGQ4ZDgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMiwgI2Y1ZjVmNSk7XFxyXFxuICB9XFxyXFxuICAud3BsLWNvdW50ZXItbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTIsICM2NjYpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcbiAgLndwbC1jb3VudGVyLXZhbHVlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0xLCAjMWYxZjFmKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53cGwtYWN0aW9ucyB7IGp1c3RpZnktc2VsZjogZW5kOyB9XFxyXFxuXFxyXFxuICAud3BsLWJ0bi1naG9zdCB7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0xLCAjZmZmKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMiwgI2Q4ZDhkOCk7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZTtcXHJcXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yLCAjZjVmNWY1KTsgfVxcclxcbiAgICAmOmRpc2FibGVkIHsgb3BhY2l0eTogLjU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgICA1KSBUYWJlbGEgZGUgcmVzdWx0YWRvc1xcclxcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4gIC53cGwtdGFibGUtd3JhcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDZweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMjQwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0yLCAjZDhkOGQ4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSwgI2ZmZik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3BsLXRhYmxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53cGwtdGFibGUgdGhlYWQgdGgge1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0xLCAjZmZmKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0yLCAjNmE2YTZhKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTIsICNkOGQ4ZDgpO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53cGwtdGFibGUgdGJvZHkgdGQge1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTIsICNlNmU2ZTYpO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndwbC10YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikgdGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTIsICNmNWY1ZjUpIDU1JSwgdHJhbnNwYXJlbnQpO1xcclxcbiAgfVxcclxcbiAgLndwbC10YWJsZSB0Ym9keSB0cjpob3ZlciB0ZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jYWxjaXRlLWNvbG9yLWJyYW5kLCAjMDA3YWMyKSA0JSwgdHJhbnNwYXJlbnQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgIFJlc3BvbnNpdmlkYWRlIChwYWluZWwgZXN0cmVpdG8pXFxyXFxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XFxyXFxuICAgIC53cGwtcmFkaXVzLXJvdyB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAvKiBsYWJlbCBxdWVicmEgcGFyYSBsaW5oYSBhY2ltYSAqL1xcclxcbiAgICB9XFxyXFxuICAgIC53cGwtbGFiZWwgeyBncmlkLWNvbHVtbjogMSAvIC0xOyB9XFxyXFxuXFxyXFxuICAgIC53cGwtY291bnRlcnMtcm93IHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICAvKiBjb250YWRvcmVzIGxhZG8gYSBsYWRvICovXFxyXFxuICAgIH1cXHJcXG4gICAgLndwbC1hY3Rpb25zIHtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogNnB4OyAgICAgICAgICAgICAgICAgLyogZXhwb3J0YXIgZGVzY2UgKi9cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEJ1dHRvbiwgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IFRYVCB9IGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuaW50ZXJmYWNlIENvbnRyb2xzUHJvcHMge1xyXG4gIHN0YXR1czogc3RyaW5nXHJcbiAgcmFkaXVzS21JbnB1dDogc3RyaW5nXHJcbiAgb25SYWRpdXNDaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgb25SYWRpdXNLZXlEb3duOiAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4gdm9pZFxyXG4gIHVzZUdlb2Rlc2ljRGlzdGFuY2VSdW50aW1lOiBib29sZWFuXHJcbiAgb25HZW9kZXNpY0NoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWRcclxuICBvbkFwcGx5OiAoKSA9PiB2b2lkXHJcbiAgaXNDb21wdXRpbmc6IGJvb2xlYW5cclxuICBoYXNNYXA6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xzOiBSZWFjdC5GQzxDb250cm9sc1Byb3BzPiA9ICh7XHJcbiAgc3RhdHVzLFxyXG4gIHJhZGl1c0ttSW5wdXQsXHJcbiAgb25SYWRpdXNDaGFuZ2UsXHJcbiAgb25SYWRpdXNLZXlEb3duLFxyXG4gIHVzZUdlb2Rlc2ljRGlzdGFuY2VSdW50aW1lLFxyXG4gIG9uR2VvZGVzaWNDaGFuZ2UsXHJcbiAgb25BcHBseSxcclxuICBpc0NvbXB1dGluZyxcclxuICBoYXNNYXBcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogMSkgVGV4dG8gaW5mb3JtYXRpdm8gKGRpc2NyZXRvLCBzZW0gY2FpeGEpICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbC1pbmZvLXRleHRcIj5cclxuICAgICAgICB7c3RhdHVzfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiAyKSBMaW5oYTogUmFpbyArIEFwbGljYXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BsLXJvdyB3cGwtcmFkaXVzLXJvd1wiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3cGwtbGFiZWxcIj57VFhULnJhZGl1c0ttfTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgIHN0ZXA9ezAuMX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIndwbC1pbnB1dFwiXHJcbiAgICAgICAgICB2YWx1ZT17cmFkaXVzS21JbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25SYWRpdXNDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgb25LZXlEb3duPXtvblJhZGl1c0tleURvd259XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3cGwtYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17b25BcHBseX1cclxuICAgICAgICAgIGRpc2FibGVkPXtpc0NvbXB1dGluZyB8fCAhaGFzTWFwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0NvbXB1dGluZyA/IDxMb2FkaW5nIC8+IDogVFhULmFwcGx5fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBDaGVja2JveCBwYXJhIGdlb2TDqXNpY2EgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BsLXJvdyB3cGwtZ2VvZGVzaWMtcm93XCI+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3VzZUdlb2Rlc2ljRGlzdGFuY2VSdW50aW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uR2VvZGVzaWNDaGFuZ2UoZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgVXNhciBkaXN0w6JuY2lhIGdlb2TDqXNpY2FcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQnV0dG9uLCBMb2FkaW5nIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgVFhUIH0gZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCB0eXBlIHsgUm93IH0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5pbnRlcmZhY2UgQ291bnRlcnNQcm9wcyB7XHJcbiAgc2Nhbm5lZExheWVyc0NvdW50OiBudW1iZXJcclxuICByb3dzOiBSb3dbXVxyXG4gIG9uRXhwb3J0Q1NWOiAoKSA9PiB2b2lkXHJcbiAgb25FeHBvcnRQREY/OiAoKSA9PiB2b2lkXHJcbiAgaXNHZW5lcmF0aW5nUERGPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRlcnM6IFJlYWN0LkZDPENvdW50ZXJzUHJvcHM+ID0gKHtcclxuICBzY2FubmVkTGF5ZXJzQ291bnQsXHJcbiAgcm93cyxcclxuICBvbkV4cG9ydENTVixcclxuICBvbkV4cG9ydFBERixcclxuICBpc0dlbmVyYXRpbmdQREYgPSBmYWxzZVxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3BsLXJvdyB3cGwtY291bnRlcnMtcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BsLWNvdW50ZXJcIiB0aXRsZT1cIkNhbWFkYXMgdmFycmlkYXNcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3cGwtY291bnRlci1sYWJlbFwiPkNhbWFkYXM6PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndwbC1jb3VudGVyLXZhbHVlXCI+e3NjYW5uZWRMYXllcnNDb3VudH08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cGwtY291bnRlclwiIHRpdGxlPVwiRmVpw6fDtWVzIG5vIHJlc3VsdGFkb1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndwbC1jb3VudGVyLWxhYmVsXCI+RmVpw6fDtWVzOjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3cGwtY291bnRlci12YWx1ZVwiPntyb3dzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cGwtYWN0aW9uc1wiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIndwbC1idG4tZ2hvc3RcIlxyXG4gICAgICAgICAgb25DbGljaz17b25FeHBvcnRDU1Z9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IXJvd3MubGVuZ3RofVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtUWFQuZXhwb3J0Q3N2fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICB7b25FeHBvcnRQREYgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3cGwtYnRuLWdob3N0XCJcclxuICAgICAgICAgICAgb25DbGljaz17b25FeHBvcnRQREZ9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshcm93cy5sZW5ndGggfHwgaXNHZW5lcmF0aW5nUERGfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnOHB4JyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNHZW5lcmF0aW5nUERGID8gPExvYWRpbmcgLz4gOiAn8J+ThCBSZWxhdMOzcmlvIFBERid9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXcsIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHR5cGUgeyBGZWF0dXJlV2l0aFBvaW50cywgSW50ZXJzZWN0aW9uTGluZSwgU2VsZWN0ZWRMaW5lTWV0YSB9IGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuaW50ZXJmYWNlIE1hcEZlZWRiYWNrUHJvcHMge1xyXG4gIGptdjogSmltdU1hcFZpZXcgfCBudWxsXHJcbiAgc2VsZWN0ZWRMaW5lR2VvbTogX19lc3JpLkdlb21ldHJ5IHwgbnVsbFxyXG4gIHNlbGVjdGVkTGluZU1ldGE6IFNlbGVjdGVkTGluZU1ldGEgfCBudWxsXHJcbiAgYnVmZmVyR2VvbTogX19lc3JpLlBvbHlnb24gfCBudWxsXHJcbiAgZmVhdHVyZVdpdGhQb2ludHM6IEZlYXR1cmVXaXRoUG9pbnRzW11cclxuICBpbnRlcnNlY3Rpb25MaW5lczogSW50ZXJzZWN0aW9uTGluZVtdXHJcbn1cclxuXHJcbmxldCBtb2R1bGVzUmVmOiBhbnkgPSB7fVxyXG5cclxuY29uc3QgZW5zdXJlTW9kdWxlcyA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9kdWxlc1JlZi5HcmFwaGljc0xheWVyKSByZXR1cm4gbW9kdWxlc1JlZlxyXG4gIGNvbnN0IFtcclxuICAgIEdyYXBoaWNzTGF5ZXIsXHJcbiAgICBHcmFwaGljLFxyXG4gICAgUG9seWxpbmUsXHJcbiAgICBUZXh0U3ltYm9sXHJcbiAgXSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInLFxyXG4gICAgJ2VzcmkvR3JhcGhpYycsXHJcbiAgICAnZXNyaS9nZW9tZXRyeS9Qb2x5bGluZScsXHJcbiAgICAnZXNyaS9zeW1ib2xzL1RleHRTeW1ib2wnXHJcbiAgXSlcclxuICBtb2R1bGVzUmVmID0geyBHcmFwaGljc0xheWVyLCBHcmFwaGljLCBQb2x5bGluZSwgVGV4dFN5bWJvbCB9XHJcbiAgcmV0dXJuIG1vZHVsZXNSZWZcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hcEZlZWRiYWNrOiBSZWFjdC5GQzxNYXBGZWVkYmFja1Byb3BzPiA9ICh7XHJcbiAgam12LFxyXG4gIHNlbGVjdGVkTGluZUdlb20sXHJcbiAgc2VsZWN0ZWRMaW5lTWV0YSxcclxuICBidWZmZXJHZW9tLFxyXG4gIGZlYXR1cmVXaXRoUG9pbnRzLFxyXG4gIGludGVyc2VjdGlvbkxpbmVzXHJcbn0pID0+IHtcclxuICBjb25zdCBzZWxlY3Rpb25HTFJlZiA9IFJlYWN0LnVzZVJlZjxfX2VzcmkuR3JhcGhpY3NMYXllciB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgYnVmZmVyR0xSZWYgPSBSZWFjdC51c2VSZWY8X19lc3JpLkdyYXBoaWNzTGF5ZXIgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IHJlc3VsdHNHTFJlZiA9IFJlYWN0LnVzZVJlZjxfX2VzcmkuR3JhcGhpY3NMYXllciB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgcHJveGltaXR5TGluZXNHTFJlZiA9IFJlYWN0LnVzZVJlZjxfX2VzcmkuR3JhcGhpY3NMYXllciB8IG51bGw+KG51bGwpXHJcblxyXG4gIGNvbnN0IGVuc3VyZUdyYXBoaWNMYXllcnMgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWptdikgcmV0dXJuXHJcbiAgICBjb25zdCB7IEdyYXBoaWNzTGF5ZXIgfSA9IGF3YWl0IGVuc3VyZU1vZHVsZXMoKVxyXG4gICAgY29uc3QgdmlldyA9IGptdi52aWV3IGFzIF9fZXNyaS5NYXBWaWV3XHJcbiAgICBjb25zdCBtYXAgPSB2aWV3Lm1hcFxyXG5cclxuICAgIGlmICghc2VsZWN0aW9uR0xSZWYuY3VycmVudCkge1xyXG4gICAgICBzZWxlY3Rpb25HTFJlZi5jdXJyZW50ID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pXHJcbiAgICAgIG1hcC5hZGQoc2VsZWN0aW9uR0xSZWYuY3VycmVudClcclxuICAgIH1cclxuICAgIGlmICghYnVmZmVyR0xSZWYuY3VycmVudCkge1xyXG4gICAgICBidWZmZXJHTFJlZi5jdXJyZW50ID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pXHJcbiAgICAgIG1hcC5hZGQoYnVmZmVyR0xSZWYuY3VycmVudClcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0c0dMUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmVzdWx0c0dMUmVmLmN1cnJlbnQgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSlcclxuICAgICAgbWFwLmFkZChyZXN1bHRzR0xSZWYuY3VycmVudClcclxuICAgIH1cclxuICAgIGlmICghcHJveGltaXR5TGluZXNHTFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHByb3hpbWl0eUxpbmVzR0xSZWYuY3VycmVudCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KVxyXG4gICAgICBtYXAuYWRkKHByb3hpbWl0eUxpbmVzR0xSZWYuY3VycmVudClcclxuICAgIH1cclxuICB9LCBbam12XSlcclxuXHJcbiAgY29uc3QgZHJhd1NlbGVjdGlvbkFuZEJ1ZmZlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChsaW5lOiBfX2VzcmkuUG9seWxpbmUsIGJ1ZmZlcj86IF9fZXNyaS5Qb2x5Z29uKSA9PiB7XHJcbiAgICBjb25zdCB7IEdyYXBoaWMgfSA9IGF3YWl0IGVuc3VyZU1vZHVsZXMoKVxyXG4gICAgYXdhaXQgZW5zdXJlR3JhcGhpY0xheWVycygpXHJcblxyXG4gICAgc2VsZWN0aW9uR0xSZWYuY3VycmVudD8ucmVtb3ZlQWxsKClcclxuICAgIGJ1ZmZlckdMUmVmLmN1cnJlbnQ/LnJlbW92ZUFsbCgpXHJcblxyXG4gICAgY29uc3QgbGluZVN5bWJvbCA9IHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1saW5lJyxcclxuICAgICAgY29sb3I6IFswLCAyNTUsIDI1NSwgMV0sXHJcbiAgICAgIHdpZHRoOiAzXHJcbiAgICB9IGFzIGFueVxyXG5cclxuICAgIHNlbGVjdGlvbkdMUmVmLmN1cnJlbnQ/LmFkZChuZXcgR3JhcGhpYyh7IGdlb21ldHJ5OiBsaW5lLCBzeW1ib2w6IGxpbmVTeW1ib2wgYXMgYW55IH0pKVxyXG5cclxuICAgIGlmIChidWZmZXIpIHtcclxuICAgICAgY29uc3QgZmlsbFN5bWJvbCA9IHtcclxuICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxyXG4gICAgICAgIGNvbG9yOiBbMCwgMjU1LCAyNTUsIDAuMTJdLFxyXG4gICAgICAgIG91dGxpbmU6IHsgdHlwZTogJ3NpbXBsZS1saW5lJywgY29sb3I6IFswLCAyNTUsIDI1NSwgMC44XSwgd2lkdGg6IDEuNSB9XHJcbiAgICAgIH0gYXMgYW55XHJcblxyXG4gICAgICBidWZmZXJHTFJlZi5jdXJyZW50Py5hZGQobmV3IEdyYXBoaWMoeyBnZW9tZXRyeTogYnVmZmVyLCBzeW1ib2w6IGZpbGxTeW1ib2wgYXMgYW55IH0pKVxyXG4gICAgfVxyXG4gIH0sIFtlbnN1cmVHcmFwaGljTGF5ZXJzXSlcclxuXHJcbiAgY29uc3QgZHJhd1Jlc3VsdHMgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoZmVhdHVyZVdpdGhQb2ludHM6IEZlYXR1cmVXaXRoUG9pbnRzW10sIGludGVyc2VjdGlvbkxpbmVzOiBJbnRlcnNlY3Rpb25MaW5lW10pID0+IHtcclxuICAgIGNvbnN0IHsgR3JhcGhpYywgUG9seWxpbmUsIFRleHRTeW1ib2wgfSA9IGF3YWl0IGVuc3VyZU1vZHVsZXMoKVxyXG4gICAgYXdhaXQgZW5zdXJlR3JhcGhpY0xheWVycygpXHJcbiAgICByZXN1bHRzR0xSZWYuY3VycmVudD8ucmVtb3ZlQWxsKClcclxuICAgIHByb3hpbWl0eUxpbmVzR0xSZWYuY3VycmVudD8ucmVtb3ZlQWxsKClcclxuXHJcbiAgICBjb25zdCBwb2ludFN5bWJvbCA9IHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLFxyXG4gICAgICBjb2xvcjogWzI1NSwgMTAyLCAwLCAwLjldLFxyXG4gICAgICBzaXplOiA4LFxyXG4gICAgICBvdXRsaW5lOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBbMjU1LCAyNTUsIDI1NSwgMV0sIHdpZHRoOiAxIH1cclxuICAgIH0gYXMgYW55XHJcblxyXG4gICAgY29uc3QgcHJveGltaXR5TGluZVN5bWJvbCA9IHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1saW5lJyxcclxuICAgICAgY29sb3I6IFsyNTUsIDE2NSwgMCwgMC43XSxcclxuICAgICAgd2lkdGg6IDIsXHJcbiAgICAgIHN0eWxlOiAnZGFzaCdcclxuICAgIH0gYXMgYW55XHJcblxyXG4gICAgY29uc3QgaW50ZXJzZWN0aW9uTGluZVN5bWJvbCA9IHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1saW5lJyxcclxuICAgICAgY29sb3I6IFsyNTUsIDAsIDAsIDAuOV0sXHJcbiAgICAgIHdpZHRoOiAzXHJcbiAgICB9IGFzIGFueVxyXG5cclxuICAgIGNvbnN0IHRleHRTeW1ib2wgPSB7XHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcclxuICAgICAgaGFsb0NvbG9yOiBbMjU1LCAyNTUsIDI1NSwgMV0sXHJcbiAgICAgIGhhbG9TaXplOiAxLFxyXG4gICAgICBmb250OiB7IHNpemU6IDEwLCBmYW1pbHk6ICdBcmlhbCcgfSxcclxuICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAnbWlkZGxlJ1xyXG4gICAgfSBhcyBhbnlcclxuXHJcbiAgICBjb25zdCBwaW5zOiBfX2VzcmkuR3JhcGhpY1tdID0gW11cclxuICAgIGNvbnN0IGxpbmVzOiBfX2VzcmkuR3JhcGhpY1tdID0gW11cclxuICAgIGNvbnN0IHRleHRzOiBfX2VzcmkuR3JhcGhpY1tdID0gW11cclxuXHJcbiAgICBmZWF0dXJlV2l0aFBvaW50cy5mb3JFYWNoKCh7IHBvaW50T25GZWF0dXJlLCBwb2ludE9uTGluZSwgZGlzdGFuY2VNIH0pID0+IHtcclxuICAgICAgaWYgKHBvaW50T25GZWF0dXJlKSB7XHJcbiAgICAgICAgcGlucy5wdXNoKG5ldyBHcmFwaGljKHsgZ2VvbWV0cnk6IHBvaW50T25GZWF0dXJlLCBzeW1ib2w6IHBvaW50U3ltYm9sIGFzIGFueSB9KSlcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnRPbkZlYXR1cmUgJiYgcG9pbnRPbkxpbmUpIHtcclxuICAgICAgICBjb25zdCBsaW5lR2VvbSA9IG5ldyBQb2x5bGluZSh7XHJcbiAgICAgICAgICBwYXRoczogW1twb2ludE9uRmVhdHVyZS54LCBwb2ludE9uRmVhdHVyZS55XSwgW3BvaW50T25MaW5lLngsIHBvaW50T25MaW5lLnldXSxcclxuICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHBvaW50T25GZWF0dXJlLnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxpbmVzLnB1c2gobmV3IEdyYXBoaWMoeyBnZW9tZXRyeTogbGluZUdlb20sIHN5bWJvbDogcHJveGltaXR5TGluZVN5bWJvbCBhcyBhbnkgfSkpXHJcblxyXG4gICAgICAgIGNvbnN0IG1pZFggPSAocG9pbnRPbkZlYXR1cmUueCArIHBvaW50T25MaW5lLngpIC8gMlxyXG4gICAgICAgIGNvbnN0IG1pZFkgPSAocG9pbnRPbkZlYXR1cmUueSArIHBvaW50T25MaW5lLnkpIC8gMlxyXG4gICAgICAgIGNvbnN0IG1pZFBvaW50ID0geyB0eXBlOiAncG9pbnQnLCB4OiBtaWRYLCB5OiBtaWRZLCBzcGF0aWFsUmVmZXJlbmNlOiBwb2ludE9uRmVhdHVyZS5zcGF0aWFsUmVmZXJlbmNlIH0gYXMgX19lc3JpLlBvaW50XHJcbiAgICAgICAgY29uc3QgdGV4dFN5bSA9IHsgLi4udGV4dFN5bWJvbCwgdGV4dDogZGlzdGFuY2VNPy50b0ZpeGVkKDApICsgJyBtJyB9IGFzIGFueVxyXG4gICAgICAgIHRleHRzLnB1c2gobmV3IEdyYXBoaWMoeyBnZW9tZXRyeTogbWlkUG9pbnQsIHN5bWJvbDogdGV4dFN5bSB9KSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpbnRlcnNlY3Rpb25MaW5lcy5mb3JFYWNoKCh7IGxpbmUsIGxlbmd0aEttIH0pID0+IHtcclxuICAgICAgbGluZXMucHVzaChuZXcgR3JhcGhpYyh7IGdlb21ldHJ5OiBsaW5lLCBzeW1ib2w6IGludGVyc2VjdGlvbkxpbmVTeW1ib2wgYXMgYW55IH0pKVxyXG5cclxuICAgICAgY29uc3QgZXh0ZW50ID0gbGluZS5leHRlbnRcclxuICAgICAgaWYgKGV4dGVudCkge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IGV4dGVudC5jZW50ZXJcclxuICAgICAgICBjb25zdCB0ZXh0U3ltID0geyAuLi50ZXh0U3ltYm9sLCB0ZXh0OiBsZW5ndGhLbS50b0ZpeGVkKDIpICsgJyBrbScgfSBhcyBhbnlcclxuICAgICAgICB0ZXh0cy5wdXNoKG5ldyBHcmFwaGljKHsgZ2VvbWV0cnk6IGNlbnRlciwgc3ltYm9sOiB0ZXh0U3ltIH0pKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChwaW5zLmxlbmd0aCkgcmVzdWx0c0dMUmVmLmN1cnJlbnQ/LmFkZE1hbnkocGlucylcclxuICAgIGlmIChsaW5lcy5sZW5ndGgpIHByb3hpbWl0eUxpbmVzR0xSZWYuY3VycmVudD8uYWRkTWFueShsaW5lcylcclxuICAgIGlmICh0ZXh0cy5sZW5ndGgpIHJlc3VsdHNHTFJlZi5jdXJyZW50Py5hZGRNYW55KHRleHRzKVxyXG4gIH0sIFtlbnN1cmVHcmFwaGljTGF5ZXJzXSlcclxuXHJcbiAgLy8gRWZlaXRvcyBwYXJhIGF0dWFsaXphciBvIG1hcGFcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGptdikge1xyXG4gICAgICBlbnN1cmVHcmFwaGljTGF5ZXJzKClcclxuICAgIH1cclxuICB9LCBbam12LCBlbnN1cmVHcmFwaGljTGF5ZXJzXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZExpbmVHZW9tICYmIHNlbGVjdGVkTGluZU1ldGEpIHtcclxuICAgICAgZHJhd1NlbGVjdGlvbkFuZEJ1ZmZlcihzZWxlY3RlZExpbmVHZW9tIGFzIF9fZXNyaS5Qb2x5bGluZSwgYnVmZmVyR2VvbSB8fCB1bmRlZmluZWQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxlY3Rpb25HTFJlZi5jdXJyZW50Py5yZW1vdmVBbGwoKVxyXG4gICAgICBidWZmZXJHTFJlZi5jdXJyZW50Py5yZW1vdmVBbGwoKVxyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZExpbmVHZW9tLCBzZWxlY3RlZExpbmVNZXRhLCBidWZmZXJHZW9tLCBkcmF3U2VsZWN0aW9uQW5kQnVmZmVyXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRyYXdSZXN1bHRzKGZlYXR1cmVXaXRoUG9pbnRzLCBpbnRlcnNlY3Rpb25MaW5lcylcclxuICB9LCBbZmVhdHVyZVdpdGhQb2ludHMsIGludGVyc2VjdGlvbkxpbmVzLCBkcmF3UmVzdWx0c10pXHJcblxyXG4gIC8vIENsZWFudXBcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2VsZWN0aW9uR0xSZWYuY3VycmVudD8ucmVtb3ZlQWxsKClcclxuICAgICAgYnVmZmVyR0xSZWYuY3VycmVudD8ucmVtb3ZlQWxsKClcclxuICAgICAgcmVzdWx0c0dMUmVmLmN1cnJlbnQ/LnJlbW92ZUFsbCgpXHJcbiAgICAgIHByb3hpbWl0eUxpbmVzR0xSZWYuY3VycmVudD8ucmVtb3ZlQWxsKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIG51bGwgLy8gRXN0ZSBjb21wb25lbnRlIG7Do28gcmVuZGVyaXphIG5hZGEgbmEgVUksIGFwZW5hcyBnZXJlbmNpYSBvIG1hcGFcclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHR5cGUgeyBSb3cgfSBmcm9tICcuLi90eXBlcydcclxuXHJcbmludGVyZmFjZSBSZXN1bHRzVGFibGVQcm9wcyB7XHJcbiAgcm93czogUm93W11cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdHNUYWJsZTogUmVhY3QuRkM8UmVzdWx0c1RhYmxlUHJvcHM+ID0gKHsgcm93cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3BsLXRhYmxlLXdyYXBcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXNtIHdwbC10YWJsZVwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkNhbWFkYTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5PQkpFQ1RJRDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5HZW9tPC90aD5cclxuICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Db21wcmltZW50byAoa20pPC90aD5cclxuICAgICAgICAgICAgPHRoPkRpc3TDom5jaWEgKG0pPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHIsIGkpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17YCR7ci5sYXllclRpdGxlfS0ke3Iub2JqZWN0SWR9LSR7aX1gfT5cclxuICAgICAgICAgICAgICA8dGQ+e3IubGF5ZXJUaXRsZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57ci5vYmplY3RJZH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57ci5nZW9tVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57ci5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3IubGVuZ3RoS20gPyByLmxlbmd0aEttLnRvRml4ZWQoMikgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57ci5kaXN0YW5jZU0gPyByLmRpc3RhbmNlTS50b0ZpeGVkKDIpIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IHsgQ29udHJvbHMgfSBmcm9tICcuL0NvbnRyb2xzJ1xyXG5leHBvcnQgeyBDb3VudGVycyB9IGZyb20gJy4vQ291bnRlcnMnXHJcbmV4cG9ydCB7IFJlc3VsdHNUYWJsZSB9IGZyb20gJy4vUmVzdWx0c1RhYmxlJ1xyXG5leHBvcnQgeyBNYXBGZWVkYmFjayB9IGZyb20gJy4vTWFwRmVlZGJhY2snXHJcbiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB0eXBlIHsgUm93LCBQcm94aW1pdHlDb25maWcsIFNlbGVjdGVkTGluZU1ldGEgfSBmcm9tICcuLi90eXBlcydcclxuXHJcbi8vIEZ1bsOnw6NvIG1lbGhvcmFkYSBwYXJhIGdlcmFyIHJlbGF0w7NyaW8gcHJvZmlzc2lvbmFsIHVzYW5kbyBwcmludCBkbyBuYXZlZ2Fkb3JcclxuY29uc3QgZ2VuZXJhdGVQcmludFJlcG9ydCA9IGFzeW5jIChcclxuICBqbXY6IEppbXVNYXBWaWV3LFxyXG4gIHNlbGVjdGVkTGluZU1ldGE6IFNlbGVjdGVkTGluZU1ldGEsXHJcbiAgcm93czogUm93W10sXHJcbiAgc2Nhbm5lZExheWVyc0NvdW50OiBudW1iZXIsXHJcbiAgcmFkaXVzS206IG51bWJlcixcclxuICBjb25maWc6IFByb3hpbWl0eUNvbmZpZyAmIHsgbG9nb1VybD86IHN0cmluZzsgdXNlTG9jYWxMb2dvPzogYm9vbGVhbjsgbG9jYWxMb2dvRmlsZT86IHN0cmluZyB9XHJcbik6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuXHJcbiAgLy8gQ2FwdHVyYXIgc2NyZWVuc2hvdCBkbyBtYXBhIHVzYW5kbyBBUEkgbmF0aXZhIGRvIEFyY0dJU1xyXG4gIGxldCBzY3JlZW5zaG90RGF0YVVybCA9ICcnXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNjcmVlbnNob3QgPSBhd2FpdCBqbXYudmlldy50YWtlU2NyZWVuc2hvdCh7XHJcbiAgICAgIGZvcm1hdDogJ3BuZycsXHJcbiAgICAgIHF1YWxpdHk6IDg1LFxyXG4gICAgICB3aWR0aDogODAwLFxyXG4gICAgICBoZWlnaHQ6IDYwMFxyXG4gICAgfSlcclxuICAgIHNjcmVlbnNob3REYXRhVXJsID0gc2NyZWVuc2hvdC5kYXRhVXJsXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdFcnJvIGFvIGNhcHR1cmFyIHNjcmVlbnNob3QgZG8gbWFwYTonLCBlcnJvcilcclxuICB9XHJcblxyXG4gIC8vIEZpbHRyYXIgZGFkb3NcclxuICBjb25zdCBpbnRlcnNlY3Rpb25zID0gcm93cy5maWx0ZXIociA9PiByLnN0YXR1cyA9PT0gJ2ludGVyc2XDp8OjbycpXHJcbiAgY29uc3QgcHJveGltaXRpZXMgPSByb3dzLmZpbHRlcihyID0+IHIuc3RhdHVzID09PSAnZGVudHJvIGRvIGJ1ZmZlcicpXHJcblxyXG4gIC8vIENyaWFyIGNvbnRlw7pkbyBIVE1MIHByb2Zpc3Npb25hbCBjb20gY29yZXMgZGEgRG9zc2VsIEFtYmllbnRhbFxyXG4gIGNvbnN0IGh0bWxDb250ZW50ID0gYFxyXG4gICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjsgbWF4LXdpZHRoOiAyMTBtbTsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmc6IDE1bW07IGJhY2tncm91bmQ6IHdoaXRlOyBjb2xvcjogIzMzMztcIj5cclxuICAgICAgPCEtLSBDYWJlw6dhbGhvIGNvbSBsb2dvIMOgIGVzcXVlcmRhIC0tPlxyXG4gICAgICA8aGVhZGVyIHN0eWxlPVwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBkNGQyYSAwJSwgIzFhNWYzYSAxMDAlKTsgY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAyMHB4OyBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDsgbWFyZ2luLWJvdHRvbTogMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAyMHB4O1wiPlxyXG4gICAgICAgICR7KGNvbmZpZy51c2VMb2NhbExvZ28gJiYgY29uZmlnLmxvY2FsTG9nb0ZpbGUpID8gYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4LXNocmluazogMDtcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9jbGllbnQveW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveGltaWRhZGUtbGluaGEvYXNzZXRzL2ltYWdlcy8ke2NvbmZpZy5sb2NhbExvZ29GaWxlfVwiIGFsdD1cIkxvZ28gRG9zc2VsIEFtYmllbnRhbFwiIHN0eWxlPVwibWF4LWhlaWdodDogNzBweDsgbWF4LXdpZHRoOiAxNTBweDsgb2JqZWN0LWZpdDogY29udGFpbjsgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgIDogY29uZmlnLmxvZ29VcmwgPyBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImZsZXgtc2hyaW5rOiAwO1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIke2NvbmZpZy5sb2dvVXJsfVwiIGFsdD1cIkxvZ28gSW5zdGl0dWNpb25hbFwiIHN0eWxlPVwibWF4LWhlaWdodDogNzBweDsgbWF4LXdpZHRoOiAxNTBweDsgb2JqZWN0LWZpdDogY29udGFpbjtcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgIDogYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4LXNocmluazogMDsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDcwcHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgYm9yZGVyLXJhZGl1czogOHB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxMnB4O1wiPkRPU1NFTDxicj5BTUJJRU5UQUw8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleDogMTtcIj5cclxuICAgICAgICAgIDxoMSBzdHlsZT1cImNvbG9yOiB3aGl0ZTsgbWFyZ2luOiAwOyBmb250LXNpemU6IDIycHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAxcHg7IHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsMCwwLDAuMyk7XCI+XHJcbiAgICAgICAgICAgIFJFTEFUw5NSSU8gREUgUFJPWElNSURBREUgw4BTIExJTkhBUyBERSBFTkVSR0lBXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46IDVweCAwIDAgMDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwO1wiPlxyXG4gICAgICAgICAgICBHZXJhZG8gZW0gJHtub3cudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicpfSDDoHMgJHtub3cudG9Mb2NhbGVUaW1lU3RyaW5nKCdwdC1CUicpfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDwhLS0gSW5mb3JtYcOnw7VlcyBQcmluY2lwYWlzIC0tPlxyXG4gICAgICA8c2VjdGlvbiBzdHlsZT1cIm1hcmdpbjogMCAwIDI1cHggMDsgYmFja2dyb3VuZDogI2Y4ZjlmYTsgcGFkZGluZzogMjBweDsgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBkNGQyYTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XCI+XHJcbiAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICMwZDRkMmE7IG1hcmdpbi10b3A6IDA7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDYwMDtcIj5QQVLDgk1FVFJPUyBEQSBBTsOBTElTRTwvaDI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgZ2FwOiAxNXB4OyBtYXJnaW4tdG9wOiAxNXB4O1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT1cImNvbG9yOiAjNTU1O1wiPkxpbmhhIGRlIEVuZXJnaWEgKFJlZmVyw6puY2lhKTo8L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiR7c2VsZWN0ZWRMaW5lTWV0YS5sYXllclRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgJHtzZWxlY3RlZExpbmVNZXRhLm9iamVjdElkID8gYDxicj48c21hbGwgc3R5bGU9XCJjb2xvcjogIzY2NjtcIj5JRDogJHtzZWxlY3RlZExpbmVNZXRhLm9iamVjdElkfTwvc21hbGw+YCA6ICcnfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Ryb25nIHN0eWxlPVwiY29sb3I6ICM1NTU7XCI+UmFpbyBkZSBBbsOhbGlzZTo8L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzAwN2FjYzsgZm9udC13ZWlnaHQ6IDYwMDtcIj4ke3JhZGl1c0ttfSBrbTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJyPjxzbWFsbCBzdHlsZT1cImNvbG9yOiAjNjY2O1wiPiR7Y29uZmlnLnVzZUdlb2Rlc2ljRGlzdGFuY2UgPyAnRGlzdMOibmNpYSBHZW9kw6lzaWNhJyA6ICdEaXN0w6JuY2lhIFBsYW5hJ308L3NtYWxsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDwhLS0gU2NyZWVuc2hvdCBkbyBNYXBhIC0tPlxyXG4gICAgICAke3NjcmVlbnNob3REYXRhVXJsID8gYFxyXG4gICAgICA8c2VjdGlvbiBzdHlsZT1cIm1hcmdpbjogMjVweCAwO1wiPlxyXG4gICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjMGQ0ZDJhOyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IG1hcmdpbi1ib3R0b206IDE1cHg7XCI+VklTVUFMSVpBw4fDg08gREEgw4FSRUEgQU5BTElTQURBPC9oMj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIke3NjcmVlbnNob3REYXRhVXJsfVwiIGFsdD1cIk1hcGEgZGEgYW7DoWxpc2UgZGUgcHJveGltaWRhZGUgw6BzIGxpbmhhcyBkZSBlbmVyZ2lhXCJcclxuICAgICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMDsgYm9yZGVyLXJhZGl1czogOHB4OyBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEpO1wiPlxyXG4gICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjY2OyBmb250LXN0eWxlOiBpdGFsaWM7IG1hcmdpbi10b3A6IDEwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcIj5cclxuICAgICAgICAgICAgTGluaGEgZGUgZW5lcmdpYSBzZWxlY2lvbmFkYSB8IEJ1ZmZlciBkZSBhbsOhbGlzZSB8IFBvbnRvcyBkZSBpbnRlcnNlw6fDo28vcHJveGltaWRhZGVcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICBgIDogJyd9XHJcblxyXG4gICAgICA8IS0tIFJlc3VsdGFkb3MgQ29uc29saWRhZG9zIC0tPlxyXG4gICAgICA8c2VjdGlvbiBzdHlsZT1cIm1hcmdpbjogMjVweCAwO1wiPlxyXG4gICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjOGI0NTEzOyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IG1hcmdpbi1ib3R0b206IDE1cHg7XCI+UkVTVU1PIEVYRUNVVElWTzwvaDI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpOyBnYXA6IDE1cHg7XCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogI2U4ZjRmZDsgcGFkZGluZzogMTVweDsgYm9yZGVyLXJhZGl1czogOHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkICNiM2Q5ZmY7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDI4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMDA3YWNjO1wiPiR7cm93cy5sZW5ndGh9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNTU1OyBtYXJnaW4tdG9wOiA1cHg7XCI+RmVpw6fDtWVzIEVuY29udHJhZGFzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZlZWYwOyBwYWRkaW5nOiAxNXB4OyBib3JkZXItcmFkaXVzOiA4cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgI2ZmYjNiYTtcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMjhweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNkOTUzNGY7XCI+JHtpbnRlcnNlY3Rpb25zLmxlbmd0aH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM1NTU7IG1hcmdpbi10b3A6IDVweDtcIj5JbnRlcnNlw6fDtWVzIERpcmV0YXM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZmY4ZTE7IHBhZGRpbmc6IDE1cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCAjZmZjYzAyO1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAyOHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2YwYWQ0ZTtcIj4ke3Byb3hpbWl0aWVzLmxlbmd0aH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM1NTU7IG1hcmdpbi10b3A6IDVweDtcIj5ObyBSYWlvIGRlIFNlZ3VyYW7Dp2E8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6ICNmMGY5ZmY7IHBhZGRpbmc6IDE1cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCAjYjNlNWZjO1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAyOHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzAyNzdiZDtcIj4ke3NjYW5uZWRMYXllcnNDb3VudH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM1NTU7IG1hcmdpbi10b3A6IDVweDtcIj5DYW1hZGFzIEFuYWxpc2FkYXM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8IS0tIERldGFsaGFtZW50byBkb3MgUmVzdWx0YWRvcyAtLT5cclxuICAgICAgPHNlY3Rpb24gc3R5bGU9XCJtYXJnaW46IDI1cHggMDtcIj5cclxuICAgICAgICA8aDIgc3R5bGU9XCJjb2xvcjogI2EwNTIyZDsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiAxNXB4O1wiPkRFVEFMSEFNRU5UTyBET1MgUkVTVUxUQURPUzwvaDI+XHJcblxyXG4gICAgICAgICR7aW50ZXJzZWN0aW9ucy5sZW5ndGggPiAwID8gYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyMHB4O1wiPlxyXG4gICAgICAgICAgPGgzIHN0eWxlPVwiY29sb3I6ICNkOTUzNGY7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luLWJvdHRvbTogMTBweDtcIj7wn5S0IElOVEVSU0XDh8OVRVMgRElSRVRBUyBDT00gTElOSEFTIERFIEVORVJHSUE8L2gzPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZmY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNmZWQ3ZDc7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTVweDtcIj5cclxuICAgICAgICAgICAgJHtpbnRlcnNlY3Rpb25zLm1hcCgocm93LCBpbmRleCkgPT4gYFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDhweCAwOyBwYWRkaW5nOiA4cHg7IGJhY2tncm91bmQ6IHdoaXRlOyBib3JkZXItcmFkaXVzOiA0cHg7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Q5NTM0ZjtcIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogI2Q5NTM0ZjtcIj4ke2luZGV4ICsgMX0uICR7cm93LmxheWVyVGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZsb2F0OiByaWdodDsgYmFja2dyb3VuZDogI2Q5NTM0ZjsgY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAycHggOHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBmb250LXNpemU6IDEycHg7XCI+T0lEICR7cm93Lm9iamVjdElkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxiciBzdHlsZT1cImNsZWFyOiBib3RoO1wiPlxyXG4gICAgICAgICAgICAgICAgJHtyb3cubGVuZ3RoS20gPyBgPHNtYWxsIHN0eWxlPVwiY29sb3I6ICM2NjY7XCI+Q29tcHJpbWVudG8gZGEgaW50ZXJzZcOnw6NvOiA8c3Ryb25nPiR7cm93Lmxlbmd0aEttLnRvRml4ZWQoMil9IGttPC9zdHJvbmc+PC9zbWFsbD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGApLmpvaW4oJycpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCA6ICcnfVxyXG5cclxuICAgICAgICAke3Byb3hpbWl0aWVzLmxlbmd0aCA+IDAgPyBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHg7XCI+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9XCJjb2xvcjogI2YwYWQ0ZTsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiAxMHB4O1wiPvCfn6EgRkVJw4fDlUVTIE5PIFJBSU8gREUgU0VHVVJBTsOHQSBEQVMgTElOSEFTPC9oMz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZmYmYwOyBib3JkZXI6IDFweCBzb2xpZCAjZmVlYmM4OyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDE1cHg7XCI+XHJcbiAgICAgICAgICAgICR7cHJveGltaXRpZXMubWFwKChyb3csIGluZGV4KSA9PiBgXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogOHB4IDA7IHBhZGRpbmc6IDhweDsgYmFja2dyb3VuZDogd2hpdGU7IGJvcmRlci1yYWRpdXM6IDRweDsgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZjBhZDRlO1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT1cImNvbG9yOiAjZjBhZDRlO1wiPiR7aW5kZXggKyAxfS4gJHtyb3cubGF5ZXJUaXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0OyBiYWNrZ3JvdW5kOiAjZjBhZDRlOyBjb2xvcjogd2hpdGU7IHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGZvbnQtc2l6ZTogMTJweDtcIj5PSUQgJHtyb3cub2JqZWN0SWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyIHN0eWxlPVwiY2xlYXI6IGJvdGg7XCI+XHJcbiAgICAgICAgICAgICAgICAke3Jvdy5kaXN0YW5jZU0gPyBgPHNtYWxsIHN0eWxlPVwiY29sb3I6ICM2NjY7XCI+RGlzdMOibmNpYSBhdMOpIGEgbGluaGEgZGUgZW5lcmdpYTogPHN0cm9uZz4ke3Jvdy5kaXN0YW5jZU0udG9GaXhlZCgwKX0gbWV0cm9zPC9zdHJvbmc+PC9zbWFsbD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGApLmpvaW4oJycpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCA6ICcnfVxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8IS0tIFJvZGFww6kgUHJvZmlzc2lvbmFsIGNvbSBjb3JlcyBkYSBlbXByZXNhIC0tPlxyXG4gICAgICA8Zm9vdGVyIHN0eWxlPVwibWFyZ2luLXRvcDogNDBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBkNGQyYSAwJSwgIzFhNWYzYSAxMDAlKTsgY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAyNXB4OyBib3JkZXItcmFkaXVzOiA4cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxMnB4O1wiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxNXB4O1wiPlxyXG4gICAgICAgICAgPHN0cm9uZyBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLDAsMCwwLjMpO1wiPkRPU1NFTCBBTUJJRU5UQUw8L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7IGZvbnQtd2VpZ2h0OiA1MDA7XCI+U29sdcOnw7VlcyBlbSBHZXN0w6NvIEFtYmllbnRhbCBlIEdlb3Byb2Nlc3NhbWVudG88L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46IDVweCAwOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1wiPlxyXG4gICAgICAgICAgPHN0cm9uZyBzdHlsZT1cImNvbG9yOiB3aGl0ZTtcIj5SZWxhdMOzcmlvIGRlIFByb3hpbWlkYWRlIMOgcyBMaW5oYXMgZGUgRW5lcmdpYTwvc3Ryb25nPjxicj5cclxuICAgICAgICAgIFdpZGdldCBkZXNlbnZvbHZpZG8gY29tIEFyY0dJUyBFeHBlcmllbmNlIEJ1aWxkZXI8YnI+XHJcbiAgICAgICAgICBBbsOhbGlzZSByZWFsaXphZGEgY29tIHBhcsOibWV0cm9zIGRlIHF1YWxpZGFkZSBlIHByZWNpc8OjbyBnZW9ncsOhZmljYSBjZXJ0aWZpY2FkYVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpOyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpOyBwYWRkaW5nLXRvcDogMTVweDtcIj5cclxuICAgICAgICAgIEVzdGUgcmVsYXTDs3JpbyBmb2kgZ2VyYWRvIGF1dG9tYXRpY2FtZW50ZSBwZWxvIHNpc3RlbWEgZGUgYW7DoWxpc2UgZ2VvZXNwYWNpYWwgZGEgRG9zc2VsIEFtYmllbnRhbFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxuXHJcbiAgLy8gQ3JpYXIgZSBhYnJpciBqYW5lbGEgZGUgaW1wcmVzc8Ojb1xyXG4gIGNvbnN0IHByaW50V2luZG93ID0gd2luZG93Lm9wZW4oJycsICdfYmxhbmsnLCAnd2lkdGg9OTAwLGhlaWdodD03MDAnKVxyXG4gIGlmICghcHJpbnRXaW5kb3cpIHtcclxuICAgIGFsZXJ0KCdQb3IgZmF2b3IsIHBlcm1pdGEgcG9wdXBzIHBhcmEgZ2VyYXIgbyByZWxhdMOzcmlvLicpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIHByaW50V2luZG93LmRvY3VtZW50Lm9wZW4oKVxyXG4gIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKGBcclxuICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgPGh0bWw+XHJcbiAgICA8aGVhZD5cclxuICAgICAgPHRpdGxlPlJlbGF0w7NyaW8gZGUgUHJveGltaWRhZGUgw6BzIExpbmhhcyBkZSBFbmVyZ2lhIC0gJHtub3cudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicpfTwvdGl0bGU+XHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAgICAgYm9keSB7IG1hcmdpbjogMDsgfVxyXG4gICAgICAgICAgQHBhZ2Uge1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1bW07XHJcbiAgICAgICAgICAgIC8qIFRlbnRhciBmb3LDp2FyIGltcHJlc3PDo28gc2VtIGNhYmXDp2FsaG9zL3JvZGFww6lzICovXHJcbiAgICAgICAgICAgIHNpemU6IEE0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLyogR2FyYW50aXIgcXVlIGVsZW1lbnRvcyBkZSBmdW5kbyBzZWphbSBpbXByZXNzb3MgKi9cclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3QgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogT2N1bHRhciBpbnN0cnXDp8O1ZXMgbmEgaW1wcmVzc8OjbyAqL1xyXG4gICAgICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgICAgICAjcHJpbnQtaW5zdHJ1Y3Rpb25zIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8c2NyaXB0PlxyXG4gICAgICAgIC8vIENvbmZpZ3VyYXIgb3DDp8O1ZXMgZGUgaW1wcmVzc8OjbyBwb3IgcGFkcsOjb1xyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIC8vIEFndWFyZGFyIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIGEgcMOhZ2luYSBjYXJyZWdvdSBjb21wbGV0YW1lbnRlXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIC8vIE1vc3RyYXIgaW5zdHJ1w6fDtWVzIGRlIGltcHJlc3PDo29cclxuICAgICAgICAgICAgICB2YXIgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW50LWluc3RydWN0aW9ucycpO1xyXG4gICAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIFRlbnRhciBjb25maWd1cmFyIGFzIG9ww6fDtWVzIGRlIGltcHJlc3PDo28gYXV0b21hdGljYW1lbnRlXHJcbiAgICAgICAgICAgICAgLy8gTm90YTogT3MgbmF2ZWdhZG9yZXMgbW9kZXJub3MgbGltaXRhbSBvIGNvbnRyb2xlIHByb2dyYW3DoXRpY28gZGFzIGNvbmZpZ3VyYcOnw7VlcyBkZSBpbXByZXNzw6NvXHJcbiAgICAgICAgICAgICAgLy8gcG9yIHJhesO1ZXMgZGUgc2VndXJhbsOnYS4gQXMgaW5zdHJ1w6fDtWVzIHZpc3VhaXMgc8OjbyBhIG1lbGhvciBhYm9yZGFnZW0uXHJcblxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQw6FnaW5hIHByZXBhcmFkYSBwYXJhIGltcHJlc3PDo28gY29tIGluc3RydcOnw7VlcyB2aXN1YWlzJyk7XHJcblxyXG4gICAgICAgICAgICAgIC8vIEFkaWNpb25hciBsaXN0ZW5lciBwYXJhIHF1YW5kbyBvIHVzdcOhcmlvIHRlbnRhciBpbXByaW1pclxyXG4gICAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXByaW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW5pY2lhbmRvIGltcHJlc3PDo28gLSB2ZXJpZmlxdWUgYXMgY29uZmlndXJhw6fDtWVzIG5hcyBpbnN0cnXDp8O1ZXMnKTtcclxuICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvIGFvIGNvbmZpZ3VyYXIgcMOhZ2luYSBkZSBpbXByZXNzw6NvOicsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgIDwvc2NyaXB0PlxyXG4gICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgICR7aHRtbENvbnRlbnR9XHJcbiAgICAgIDxkaXYgaWQ9XCJwcmludC1pbnN0cnVjdGlvbnNcIiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAxMHB4OyByaWdodDogMTBweDsgYmFja2dyb3VuZDogI2ZmZjhkYzsgcGFkZGluZzogMTVweDsgYm9yZGVyLXJhZGl1czogOHB4OyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjOGI0NTEzOyBib3JkZXI6IDJweCBzb2xpZCAjZGFhNTIwOyBtYXgtd2lkdGg6IDMyMHB4OyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xNSk7IHotaW5kZXg6IDEwMDAwO1wiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMwZDRkMmE7IG1hcmdpbi1ib3R0b206IDhweDsgZm9udC1zaXplOiAxNHB4O1wiPvCfk4sgQ09ORklHVVJBw4fDlUVTIERFIElNUFJFU1PDg088L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwibGluZS1oZWlnaHQ6IDEuNDtcIj5cclxuICAgICAgICAgIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogI2Q5NTM0ZjtcIj7inYwgRGVzbWFycXVlOjwvc3Ryb25nPiBcIkNhYmXDp2FsaG9zIGUgcm9kYXDDqXNcIjxicj5cclxuICAgICAgICAgIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogIzI4YTc0NTtcIj7inIUgTWFycXVlOjwvc3Ryb25nPiBcIkVsZW1lbnRvcyBncsOhZmljb3NcIiBvdSBcIkJhY2tncm91bmRzXCI8YnI+XHJcbiAgICAgICAgICA8c3Ryb25nIHN0eWxlPVwiY29sb3I6ICMwMDdiZmY7XCI+8J+OryBEZXBvaXM6PC9zdHJvbmc+IENsaXF1ZSBlbSBcIkltcHJpbWlyXCJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogOHB4OyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNjY2OyBib3JkZXItdG9wOiAxcHggc29saWQgI2RhYTUyMDsgcGFkZGluZy10b3A6IDhweDtcIj5cclxuICAgICAgICAgIPCfkqEgRXNzYXMgY29uZmlndXJhw6fDtWVzIGdhcmFudGVtIHF1ZSBvIHJlbGF0w7NyaW8gc2VqYSBpbXByZXNzbyBjb3JyZXRhbWVudGUgY29tIGNvcmVzIGUgbG9nby5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgYClcclxuICBwcmludFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpXHJcblxyXG4gIC8vIEFndWFyZGFyIGNhcnJlZ2FtZW50byBlIGltcHJpbWlyXHJcbiAgcHJpbnRXaW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByaW50V2luZG93LnByaW50KClcclxuICAgICAgcHJpbnRXaW5kb3cuY2xvc2UoKVxyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBERlJlcG9ydCA9ICgpID0+IHtcclxuICBjb25zdCBbaXNHZW5lcmF0aW5nLCBzZXRJc0dlbmVyYXRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlUERGUmVwb3J0ID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKFxyXG4gICAgam12OiBKaW11TWFwVmlldyxcclxuICAgIHNlbGVjdGVkTGluZU1ldGE6IFNlbGVjdGVkTGluZU1ldGEsXHJcbiAgICByb3dzOiBSb3dbXSxcclxuICAgIHNjYW5uZWRMYXllcnNDb3VudDogbnVtYmVyLFxyXG4gICAgcmFkaXVzS206IG51bWJlcixcclxuICAgIGNvbmZpZzogUHJveGltaXR5Q29uZmlnICYgeyBsb2dvVXJsPzogc3RyaW5nOyB1c2VMb2NhbExvZ28/OiBib29sZWFuOyBsb2NhbExvZ29GaWxlPzogc3RyaW5nIH1cclxuICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIHNldElzR2VuZXJhdGluZyh0cnVlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZ2VuZXJhdGVQcmludFJlcG9ydChqbXYsIHNlbGVjdGVkTGluZU1ldGEsIHJvd3MsIHNjYW5uZWRMYXllcnNDb3VudCwgcmFkaXVzS20sIGNvbmZpZylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZ2VyYXIgcmVsYXTDs3JpbzonLCBlcnJvcilcclxuICAgICAgYWxlcnQoJ0Vycm8gYW8gZ2VyYXIgbyByZWxhdMOzcmlvLiBWZXJpZmlxdWUgbyBjb25zb2xlIHBhcmEgbWFpcyBkZXRhbGhlcy4nKVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNHZW5lcmF0aW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNHZW5lcmF0aW5nLFxyXG4gICAgZ2VuZXJhdGVQREZSZXBvcnRcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXcsIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHR5cGUgeyBSb3csIEZlYXR1cmVXaXRoUG9pbnRzLCBJbnRlcnNlY3Rpb25MaW5lLCBTZWxlY3RlZExpbmVNZXRhLCBQcm94aW1pdHlDb25maWcgfSBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0IHtcclxuICBjcmVhdGVHZW9kZXNpY0J1ZmZlcixcclxuICBjbGlwR2VvbWV0cnksXHJcbiAgY2hlY2tJbnRlcnNlY3Rpb24sXHJcbiAgY2FsY3VsYXRlTGVuZ3RoLFxyXG4gIHByb2plY3RUb1ZpZXdTUixcclxuICBnZW5lcmF0ZUNhbmRpZGF0ZXMsXHJcbiAgZ2V0R2VvbWV0cnlQYXJ0cyxcclxuICBtZWFzdXJlRGlzdGFuY2UsXHJcbiAgdG9TZWVkUG9pbnRcclxufSBmcm9tICcuLi91dGlscy9nZW9tZXRyeSdcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcm94aW1pdHlDYWxjdWxhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbaXNDb21wdXRpbmcsIHNldElzQ29tcHV0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IFJlYWN0LnVzZVN0YXRlPFJvd1tdPihbXSlcclxuICBjb25zdCBbc2Nhbm5lZExheWVyc0NvdW50LCBzZXRTY2FubmVkTGF5ZXJzQ291bnRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKVxyXG4gIGNvbnN0IFtidWZmZXJHZW9tLCBzZXRCdWZmZXJHZW9tXSA9IFJlYWN0LnVzZVN0YXRlPF9fZXNyaS5Qb2x5Z29uIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbZmVhdHVyZVdpdGhQb2ludHMsIHNldEZlYXR1cmVXaXRoUG9pbnRzXSA9IFJlYWN0LnVzZVN0YXRlPEZlYXR1cmVXaXRoUG9pbnRzW10+KFtdKVxyXG4gIGNvbnN0IFtpbnRlcnNlY3Rpb25MaW5lcywgc2V0SW50ZXJzZWN0aW9uTGluZXNdID0gUmVhY3QudXNlU3RhdGU8SW50ZXJzZWN0aW9uTGluZVtdPihbXSlcclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlUHJveGltaXR5ID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKFxyXG4gICAgam12OiBKaW11TWFwVmlldyxcclxuICAgIHNlbGVjdGVkR2VvbTogX19lc3JpLkdlb21ldHJ5LFxyXG4gICAgc2VsZWN0ZWRMaW5lTWV0YTogU2VsZWN0ZWRMaW5lTWV0YSxcclxuICAgIHJhZGl1c0ttOiBudW1iZXIsXHJcbiAgICBjb25maWc6IFByb3hpbWl0eUNvbmZpZ1xyXG4gICk6IFByb21pc2U8Um93W10+ID0+IHtcclxuICAgIHNldElzQ29tcHV0aW5nKHRydWUpXHJcbiAgICBzZXRSb3dzKFtdKVxyXG4gICAgc2V0RmVhdHVyZVdpdGhQb2ludHMoW10pXHJcbiAgICBzZXRJbnRlcnNlY3Rpb25MaW5lcyhbXSlcclxuICAgIHNldEJ1ZmZlckdlb20obnVsbClcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB2aWV3ID0gam12LnZpZXcgYXMgX19lc3JpLk1hcFZpZXdcclxuXHJcbiAgICAgIC8vIDEpIENyaWFyIGJ1ZmZlciBnZW9kw6lzaWNvXHJcbiAgICAgIGNvbnN0IHNlYXJjaEFyZWEgPSBhd2FpdCBjcmVhdGVHZW9kZXNpY0J1ZmZlcihzZWxlY3RlZEdlb20sIHJhZGl1c0ttKVxyXG4gICAgICBzZXRCdWZmZXJHZW9tKHNlYXJjaEFyZWEpXHJcblxyXG4gICAgICAvLyAyKSBGaWx0cmFyIGNhbWFkYXNcclxuICAgICAgbGV0IGxheWVycyA9IHZpZXcubWFwLmFsbExheWVyc1xyXG4gICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAuZmlsdGVyKChseTogYW55KSA9PiBseS50eXBlID09PSAnZmVhdHVyZScgJiYgbHkudmlzaWJsZSkgYXMgX19lc3JpLkZlYXR1cmVMYXllcltdXHJcblxyXG4gICAgICAvLyBBcGxpY2FyIGZpbHRybyBwb3IgdGFyZ2V0TGF5ZXJJZHNPclRpdGxlcyBzZSBpbmZvcm1hZG9cclxuICAgICAgaWYgKGNvbmZpZy50YXJnZXRMYXllcklkc09yVGl0bGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsYXllcnMgPSBsYXllcnMuZmlsdGVyKGx5ID0+XHJcbiAgICAgICAgICBjb25maWcudGFyZ2V0TGF5ZXJJZHNPclRpdGxlcy5pbmNsdWRlcyhseS5pZCkgfHxcclxuICAgICAgICAgIGNvbmZpZy50YXJnZXRMYXllcklkc09yVGl0bGVzLmluY2x1ZGVzKGx5LnRpdGxlKVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXhjbHVpciBhIGNhbWFkYSBkYSBsaW5oYSBzZWxlY2lvbmFkYVxyXG4gICAgICBsYXllcnMgPSBsYXllcnMuZmlsdGVyKGx5ID0+IGx5LmlkICE9PSBzZWxlY3RlZExpbmVNZXRhLmxheWVySWQpXHJcbiAgICAgIHNldFNjYW5uZWRMYXllcnNDb3VudChsYXllcnMubGVuZ3RoKVxyXG5cclxuICAgICAgY29uc3QgcmVzdWx0Um93czogUm93W10gPSBbXVxyXG4gICAgICBjb25zdCBhbGxGZWF0dXJlV2l0aFBvaW50czogRmVhdHVyZVdpdGhQb2ludHNbXSA9IFtdXHJcbiAgICAgIGNvbnN0IGFsbEludGVyc2VjdGlvbkxpbmVzOiBJbnRlcnNlY3Rpb25MaW5lW10gPSBbXVxyXG5cclxuICAgICAgLy8gMykgUHJvY2Vzc2FyIGNhZGEgY2FtYWRhXHJcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XHJcbiAgICAgICAgY29uc3Qgb2lkRmllbGQgPSBsYXllci5vYmplY3RJZEZpZWxkXHJcbiAgICAgICAgY29uc3QgcSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICBxLm91dEZpZWxkcyA9IG9pZEZpZWxkID8gW29pZEZpZWxkXSA6IFsnKiddXHJcbiAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgICAgICBxLmdlb21ldHJ5ID0gc2VhcmNoQXJlYVxyXG4gICAgICAgIHEuc3BhdGlhbFJlbGF0aW9uc2hpcCA9ICdpbnRlcnNlY3RzJ1xyXG4gICAgICAgIHEubWF4QWxsb3dhYmxlT2Zmc2V0ID0gMFxyXG5cclxuICAgICAgICBjb25zdCBmZWF0U2V0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxKVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdFNldC5mZWF0dXJlcykge1xyXG4gICAgICAgICAgLy8gUmVjb3J0YXIgZ2VvbWV0cmlhIGFvIGJ1ZmZlclxyXG4gICAgICAgICAgY29uc3QgY2xpcHBlZEdlb20gPSBhd2FpdCBjbGlwR2VvbWV0cnkoZi5nZW9tZXRyeSwgc2VhcmNoQXJlYSlcclxuICAgICAgICAgIGlmICghY2xpcHBlZEdlb20pIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgLy8gQ2FsY3VsYXIgcG9udG9zIG1haXMgcHLDs3hpbW9zIHVzYW5kbyBnZW9tZXRyeUVuZ2luZS5uZWFyZXN0Q29vcmRpbmF0ZVxyXG4gICAgICAgICAgY29uc3QgW2dlb21ldHJ5RW5naW5lXSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoWydlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJ10pXHJcblxyXG4gICAgICAgICAgbGV0IGQgPSAwXHJcbiAgICAgICAgICBsZXQgcG9pbnRPbkZlYXR1cmU6IF9fZXNyaS5Qb2ludCB8IG51bGwgPSBudWxsXHJcbiAgICAgICAgICBsZXQgcG9pbnRPbkxpbmU6IF9fZXNyaS5Qb2ludCB8IG51bGwgPSBudWxsXHJcblxyXG4gICAgICAgICAgY29uc3QgbGluZVBvaW50cyA9IGdlbmVyYXRlQ2FuZGlkYXRlcyhzZWxlY3RlZEdlb20pXHJcbiAgICAgICAgICBsZXQgbWluRGlzdCA9IEluZmluaXR5XHJcbiAgICAgICAgICBsZXQgYmVzdE5lYXJlc3Q6IGFueSA9IG51bGxcclxuICAgICAgICAgIGxldCBiZXN0UG9pbnRPbkxpbmU6IF9fZXNyaS5Qb2ludCB8IG51bGwgPSBudWxsXHJcblxyXG4gICAgICAgICAgY29uc3QgcGFydHMgPSBnZXRHZW9tZXRyeVBhcnRzKGNsaXBwZWRHZW9tKVxyXG4gICAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGluZVBvaW50IG9mIGxpbmVQb2ludHMpIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmVhcmVzdCA9IGdlb21ldHJ5RW5naW5lLm5lYXJlc3RDb29yZGluYXRlKHBhcnQsIGxpbmVQb2ludClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBjb25maWcudXNlR2VvZGVzaWNEaXN0YW5jZSAmJiBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0Rpc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgID8gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNEaXN0YW5jZShuZWFyZXN0LmNvb3JkaW5hdGUsIGxpbmVQb2ludCwgJ21ldGVycycpIGFzIG51bWJlclxyXG4gICAgICAgICAgICAgICAgICA6IGdlb21ldHJ5RW5naW5lLmRpc3RhbmNlKG5lYXJlc3QuY29vcmRpbmF0ZSwgbGluZVBvaW50LCAnbWV0ZXJzJylcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgbWluRGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICBtaW5EaXN0ID0gZGlzdFxyXG4gICAgICAgICAgICAgICAgICBiZXN0TmVhcmVzdCA9IG5lYXJlc3RcclxuICAgICAgICAgICAgICAgICAgYmVzdFBvaW50T25MaW5lID0gbGluZVBvaW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGJlc3ROZWFyZXN0KSB7XHJcbiAgICAgICAgICAgIGQgPSBtaW5EaXN0XHJcbiAgICAgICAgICAgIHBvaW50T25GZWF0dXJlID0gYmVzdE5lYXJlc3QuY29vcmRpbmF0ZVxyXG4gICAgICAgICAgICBwb2ludE9uTGluZSA9IGJlc3RQb2ludE9uTGluZVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmFsbGJhY2tcclxuICAgICAgICAgICAgcG9pbnRPbkZlYXR1cmUgPSB0b1NlZWRQb2ludChjbGlwcGVkR2VvbSlcclxuICAgICAgICAgICAgcG9pbnRPbkxpbmUgPSB0b1NlZWRQb2ludChzZWxlY3RlZEdlb20pXHJcbiAgICAgICAgICAgIGlmIChwb2ludE9uRmVhdHVyZSAmJiBwb2ludE9uTGluZSkge1xyXG4gICAgICAgICAgICAgIGQgPSBtZWFzdXJlRGlzdGFuY2UocG9pbnRPbkZlYXR1cmUsIHBvaW50T25MaW5lLCBjb25maWcudXNlR2VvZGVzaWNEaXN0YW5jZSwgJ21ldGVycycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBPYnRlciBPSURcclxuICAgICAgICAgIGNvbnN0IHJhd09pZCA9IGdldE9iamVjdElkKGYsIG9pZEZpZWxkKVxyXG5cclxuICAgICAgICAgIC8vIFByb2pldGFyIGNvb3JkZW5hZGFzIHBhcmEgU1IgZGEgdmlld1xyXG4gICAgICAgICAgbGV0IHhGZWF0dXJlOiBudW1iZXIgfCB1bmRlZmluZWRcclxuICAgICAgICAgIGxldCB5RmVhdHVyZTogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbiAgICAgICAgICBsZXQgeExpbmU6IG51bWJlciB8IHVuZGVmaW5lZFxyXG4gICAgICAgICAgbGV0IHlMaW5lOiBudW1iZXIgfCB1bmRlZmluZWRcclxuXHJcbiAgICAgICAgICBpZiAocG9pbnRPbkZlYXR1cmUgJiYgcG9pbnRPbkxpbmUpIHtcclxuICAgICAgICAgICAgY29uc3Qgdmlld1NSID0gdmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgICAgIGNvbnN0IHBmUHJvaiA9IGF3YWl0IHByb2plY3RUb1ZpZXdTUihwb2ludE9uRmVhdHVyZSwgdmlld1NSKVxyXG4gICAgICAgICAgICBjb25zdCBwbFByb2ogPSBhd2FpdCBwcm9qZWN0VG9WaWV3U1IocG9pbnRPbkxpbmUsIHZpZXdTUilcclxuICAgICAgICAgICAgeEZlYXR1cmUgPSBwZlByb2oueFxyXG4gICAgICAgICAgICB5RmVhdHVyZSA9IHBmUHJvai55XHJcbiAgICAgICAgICAgIHhMaW5lID0gcGxQcm9qLnhcclxuICAgICAgICAgICAgeUxpbmUgPSBwbFByb2oueVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFZlcmlmaWNhciBpbnRlcnNlw6fDo29cclxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdHMgPSBhd2FpdCBjaGVja0ludGVyc2VjdGlvbihzZWxlY3RlZEdlb20sIGNsaXBwZWRHZW9tKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzOiAnaW50ZXJzZcOnw6NvJyB8ICdkZW50cm8gZG8gYnVmZmVyJyA9IGludGVyc2VjdHMgPyAnaW50ZXJzZcOnw6NvJyA6ICdkZW50cm8gZG8gYnVmZmVyJ1xyXG5cclxuICAgICAgICAgIGxldCBsZW5ndGhLbTogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbiAgICAgICAgICBpZiAoaW50ZXJzZWN0cyAmJiBmLmdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBhd2FpdCBjbGlwR2VvbWV0cnkoc2VsZWN0ZWRHZW9tLCBmLmdlb21ldHJ5KSBhcyBfX2VzcmkuUG9seWxpbmVcclxuICAgICAgICAgICAgaWYgKGludGVyc2VjdGlvbikge1xyXG4gICAgICAgICAgICAgIGxlbmd0aEttID0gYXdhaXQgY2FsY3VsYXRlTGVuZ3RoKGludGVyc2VjdGlvbiwgY29uZmlnLnVzZUdlb2Rlc2ljRGlzdGFuY2UpXHJcbiAgICAgICAgICAgICAgYWxsSW50ZXJzZWN0aW9uTGluZXMucHVzaCh7IGxpbmU6IGludGVyc2VjdGlvbiwgbGVuZ3RoS20gfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChwb2ludE9uRmVhdHVyZSAmJiBwb2ludE9uTGluZSkge1xyXG4gICAgICAgICAgICBhbGxGZWF0dXJlV2l0aFBvaW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICBmZWF0dXJlOiBmLFxyXG4gICAgICAgICAgICAgIHBvaW50T25GZWF0dXJlLFxyXG4gICAgICAgICAgICAgIHBvaW50T25MaW5lLFxyXG4gICAgICAgICAgICAgIHN0YXR1cyxcclxuICAgICAgICAgICAgICBkaXN0YW5jZU06ICFpbnRlcnNlY3RzID8gZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICBsZW5ndGhLbTogaW50ZXJzZWN0cyAmJiBmLmdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJyA/IGxlbmd0aEttIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVzdWx0Um93cy5wdXNoKHtcclxuICAgICAgICAgICAgbGF5ZXJUaXRsZTogbGF5ZXIudGl0bGUsXHJcbiAgICAgICAgICAgIG9iamVjdElkOiByYXdPaWQgYXMgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgICAgICAgICBnZW9tVHlwZTogZi5nZW9tZXRyeS50eXBlLFxyXG4gICAgICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgICAgIGxlbmd0aEttLFxyXG4gICAgICAgICAgICBkaXN0YW5jZU06ICFpbnRlcnNlY3RzID8gZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgeEZlYXR1cmUsXHJcbiAgICAgICAgICAgIHlGZWF0dXJlLFxyXG4gICAgICAgICAgICB4TGluZSxcclxuICAgICAgICAgICAgeUxpbmVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBPcmRlbmFyIHJlc3VsdGFkb3NcclxuICAgICAgcmVzdWx0Um93cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEuc3RhdHVzICE9PSBiLnN0YXR1cykgcmV0dXJuIGEuc3RhdHVzID09PSAnaW50ZXJzZcOnw6NvJyA/IC0xIDogMVxyXG4gICAgICAgIGlmIChhLmxlbmd0aEttICE9IG51bGwgJiYgYi5sZW5ndGhLbSAhPSBudWxsKSByZXR1cm4gYi5sZW5ndGhLbSAtIGEubGVuZ3RoS21cclxuICAgICAgICBpZiAoYS5kaXN0YW5jZU0gIT0gbnVsbCAmJiBiLmRpc3RhbmNlTSAhPSBudWxsKSByZXR1cm4gYS5kaXN0YW5jZU0gLSBiLmRpc3RhbmNlTVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzZXRSb3dzKHJlc3VsdFJvd3MpXHJcbiAgICAgIHNldEZlYXR1cmVXaXRoUG9pbnRzKGFsbEZlYXR1cmVXaXRoUG9pbnRzKVxyXG4gICAgICBzZXRJbnRlcnNlY3Rpb25MaW5lcyhhbGxJbnRlcnNlY3Rpb25MaW5lcylcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHRSb3dzXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5vIGPDoWxjdWxvIGRlIHByb3hpbWlkYWRlOicsIGVycm9yKVxyXG4gICAgICB0aHJvdyBlcnJvclxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNDb21wdXRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNsZWFyUmVzdWx0cyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFJvd3MoW10pXHJcbiAgICBzZXRGZWF0dXJlV2l0aFBvaW50cyhbXSlcclxuICAgIHNldEludGVyc2VjdGlvbkxpbmVzKFtdKVxyXG4gICAgc2V0QnVmZmVyR2VvbShudWxsKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNDb21wdXRpbmcsXHJcbiAgICByb3dzLFxyXG4gICAgc2Nhbm5lZExheWVyc0NvdW50LFxyXG4gICAgYnVmZmVyR2VvbSxcclxuICAgIGZlYXR1cmVXaXRoUG9pbnRzLFxyXG4gICAgaW50ZXJzZWN0aW9uTGluZXMsXHJcbiAgICBjYWxjdWxhdGVQcm94aW1pdHksXHJcbiAgICBjbGVhclJlc3VsdHNcclxuICB9XHJcbn1cclxuXHJcbi8vIEZ1bsOnw7VlcyBhdXhpbGlhcmVzXHJcbmNvbnN0IGZpbmROZWFyZXN0UG9pbnQgPSBhc3luYyAoXHJcbiAgZ2VvbTogX19lc3JpLkdlb21ldHJ5LFxyXG4gIHRhcmdldFBvaW50OiBfX2VzcmkuUG9pbnQsXHJcbiAgdXNlR2VvZGVzaWM6IGJvb2xlYW5cclxuKTogUHJvbWlzZTx7IGNvb3JkaW5hdGU6IF9fZXNyaS5Qb2ludDsgZGlzdGFuY2U6IG51bWJlciB9PiA9PiB7XHJcbiAgLy8gRXN0YSDDqSB1bWEgaW1wbGVtZW50YcOnw6NvIHNpbXBsaWZpY2FkYVxyXG4gIC8vIE5vIGPDs2RpZ28gb3JpZ2luYWwsIHVzYSBnZW9tZXRyeUVuZ2luZS5uZWFyZXN0Q29vcmRpbmF0ZVxyXG4gIGNvbnN0IGRpc3QgPSBtZWFzdXJlRGlzdGFuY2UoZ2VvbSwgdGFyZ2V0UG9pbnQsIHVzZUdlb2Rlc2ljLCAnbWV0ZXJzJylcclxuICByZXR1cm4geyBjb29yZGluYXRlOiB0YXJnZXRQb2ludCwgZGlzdGFuY2U6IGRpc3QgfVxyXG59XHJcblxyXG5jb25zdCBnZXRPYmplY3RJZCA9IChmZWF0dXJlOiBfX2VzcmkuR3JhcGhpYywgb2lkRmllbGQ6IHN0cmluZyk6IHN0cmluZyB8IG51bWJlciA9PiB7XHJcbiAgaWYgKHR5cGVvZiAoZmVhdHVyZSBhcyBhbnkpLmdldE9iamVjdElkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gKGZlYXR1cmUgYXMgYW55KS5nZXRPYmplY3RJZCgpXHJcbiAgfVxyXG4gIHJldHVybiBmZWF0dXJlLmF0dHJpYnV0ZXM/LltvaWRGaWVsZF0gPz8gZmVhdHVyZS5hdHRyaWJ1dGVzPy5PQkpFQ1RJRCA/PyAwXHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgdHlwZSBSb3cgPSB7XHJcbiAgbGF5ZXJUaXRsZTogc3RyaW5nXHJcbiAgb2JqZWN0SWQ6IHN0cmluZyB8IG51bWJlclxyXG4gIGdlb21UeXBlOiBzdHJpbmdcclxuICBzdGF0dXM6ICdpbnRlcnNlw6fDo28nIHwgJ2RlbnRybyBkbyBidWZmZXInXHJcbiAgbGVuZ3RoS20/OiBudW1iZXJcclxuICBkaXN0YW5jZU0/OiBudW1iZXJcclxuICB4RmVhdHVyZT86IG51bWJlclxyXG4gIHlGZWF0dXJlPzogbnVtYmVyXHJcbiAgeExpbmU/OiBudW1iZXJcclxuICB5TGluZT86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBGZWF0dXJlV2l0aFBvaW50cyA9IHtcclxuICBmZWF0dXJlOiBfX2VzcmkuR3JhcGhpYyxcclxuICBwb2ludE9uRmVhdHVyZTogX19lc3JpLlBvaW50LFxyXG4gIHBvaW50T25MaW5lOiBfX2VzcmkuUG9pbnQsXHJcbiAgZGlzdGFuY2VNPzogbnVtYmVyLFxyXG4gIGxlbmd0aEttPzogbnVtYmVyLFxyXG4gIHN0YXR1czogJ2ludGVyc2XDp8OjbycgfCAnZGVudHJvIGRvIGJ1ZmZlcidcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSW50ZXJzZWN0aW9uTGluZSA9IHtcclxuICBsaW5lOiBfX2VzcmkuUG9seWxpbmUsXHJcbiAgbGVuZ3RoS206IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3RlZExpbmVNZXRhID0ge1xyXG4gIGxheWVyVGl0bGU6IHN0cmluZztcclxuICBsYXllcklkOiBzdHJpbmc7XHJcbiAgb2JqZWN0SWQ/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFByb3hpbWl0eUNvbmZpZyA9IHtcclxuICB1bml0OiAnbWV0ZXJzJyB8ICdraWxvbWV0ZXJzJ1xyXG4gIG9ubHlJbkV4dGVudDogYm9vbGVhblxyXG4gIHVzZUdlb2Rlc2ljRGlzdGFuY2U6IGJvb2xlYW5cclxuICB0YXJnZXRMYXllcklkc09yVGl0bGVzOiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVFhUID0ge1xyXG4gIG5lZWRNYXA6ICdTZWxlY2lvbmUgdW0gTWFwIHdpZGdldCBuYXMgY29uZmlndXJhw6fDtWVzLicsXHJcbiAgbmVlZExpbmU6ICdDbGlxdWUgZW0gdW1hIEZFScOHw4NPIERFIExJTkhBIG5vIG1hcGEgcGFyYSBzZWxlY2lvbsOhLWxhLicsXHJcbiAgc2VsZWN0ZWQ6ICh0OiBzdHJpbmcsIGlkPzogc3RyaW5nIHwgbnVtYmVyKSA9PiBgTGluaGEgc2VsZWNpb25hZGE6ICR7dH0ke2lkICE9IG51bGwgPyBgIChPSUQgJHtpZH0pYCA6ICcnfS4gRGVmaW5hIG8gcmFpbyBlIGNsaXF1ZSBcIkFwbGljYXJcIi5gLFxyXG4gIGNhbGM6ICdDYWxjdWxhbmRvLi4uJyxcclxuICBkb25lOiAobjogbnVtYmVyLCBnZW9kZXNpYz86IGJvb2xlYW4pID0+IGdlb2Rlc2ljID8gYEVuY29udHJhZGFzICR7bn0gZmVpw6fDtWVzIGVtIGNhbWFkYXMgYXRpdmFzIGRlbnRybyBkbyByYWlvIChkaXN0w6JuY2lhIGdlb2TDqXNpY2EpLmAgOiBgRW5jb250cmFkYXMgJHtufSBmZWnDp8O1ZXMgZW0gY2FtYWRhcyBhdGl2YXMgZGVudHJvIGRvIHJhaW8uYCxcclxuICBleHBvcnRDc3Y6ICdFeHBvcnRhciBDU1YnLFxyXG4gIHJhZGl1c0ttOiAnUmFpbyAoa20pOicsXHJcbiAgYXBwbHk6ICdBcGxpY2FyJ1xyXG59XHJcbiIsImltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmxldCBtb2R1bGVzOiBhbnkgPSB7fVxyXG5cclxuY29uc3QgZW5zdXJlTW9kdWxlcyA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9kdWxlcy5nZW9tZXRyeUVuZ2luZSkgcmV0dXJuIG1vZHVsZXNcclxuICBjb25zdCBbXHJcbiAgICBnZW9tZXRyeUVuZ2luZSxcclxuICAgIHByb2plY3Rpb25cclxuICBdID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZScsXHJcbiAgICAnZXNyaS9nZW9tZXRyeS9wcm9qZWN0aW9uJ1xyXG4gIF0pXHJcbiAgdHJ5IHsgYXdhaXQgcHJvamVjdGlvbi5sb2FkPy4oKSB9IGNhdGNoIHt9XHJcbiAgbW9kdWxlcyA9IHsgZ2VvbWV0cnlFbmdpbmUsIHByb2plY3Rpb24gfVxyXG4gIHJldHVybiBtb2R1bGVzXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b1NlZWRQb2ludCA9IChnZW9tOiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnQgfCBudWxsID0+IHtcclxuICBpZiAoZ2VvbS50eXBlID09PSAncG9pbnQnKSByZXR1cm4gZ2VvbSBhcyBfX2VzcmkuUG9pbnRcclxuICBjb25zdCB7IGdlb21ldHJ5RW5naW5lIH0gPSBtb2R1bGVzXHJcbiAgaWYgKGdlb21ldHJ5RW5naW5lPy5jZW50cm9pZCkgcmV0dXJuIGdlb21ldHJ5RW5naW5lLmNlbnRyb2lkKGdlb20pIGFzIF9fZXNyaS5Qb2ludFxyXG4gIGNvbnN0IGV4dCA9IChnZW9tIGFzIGFueSkuZXh0ZW50XHJcbiAgcmV0dXJuIGV4dD8uY2VudGVyIHx8IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ2FuZGlkYXRlcyA9IChnZW9tOiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnRbXSA9PiB7XHJcbiAgY29uc3QgY2FuZGlkYXRlczogX19lc3JpLlBvaW50W10gPSBbXVxyXG4gIGNvbnN0IHN0ZXAgPSBnZW9tLnNwYXRpYWxSZWZlcmVuY2U/LmlzR2VvZ3JhcGhpYyA/IDAuMDAzIDogMzAwIC8vIGFwcHJveCAzMDBtXHJcblxyXG4gIGlmIChnZW9tLnR5cGUgPT09ICdwb2ludCcpIHtcclxuICAgIGNhbmRpZGF0ZXMucHVzaChnZW9tIGFzIF9fZXNyaS5Qb2ludClcclxuICB9IGVsc2UgaWYgKGdlb20udHlwZSA9PT0gJ3BvbHlsaW5lJyB8fCBnZW9tLnR5cGUgPT09ICdwb2x5Z29uJykge1xyXG4gICAgLy8gdmVydGljZXNcclxuICAgIGNvbnN0IHBhdGhzID0gKGdlb20gYXMgYW55KS5wYXRocyB8fCAoZ2VvbSBhcyBhbnkpLnJpbmdzXHJcbiAgICBpZiAocGF0aHMpIHtcclxuICAgICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwdCBvZiBwYXRoKSB7XHJcbiAgICAgICAgICBjYW5kaWRhdGVzLnB1c2goeyB0eXBlOiAncG9pbnQnLCB4OiBwdFswXSwgeTogcHRbMV0sIHNwYXRpYWxSZWZlcmVuY2U6IGdlb20uc3BhdGlhbFJlZmVyZW5jZSB9IGFzIF9fZXNyaS5Qb2ludClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGRlbnNpZnlcclxuICAgIGNvbnN0IHsgZ2VvbWV0cnlFbmdpbmUgfSA9IG1vZHVsZXNcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlbnNpZmllZCA9IGdlb21ldHJ5RW5naW5lLmRlbnNpZnkoZ2VvbSwgc3RlcClcclxuICAgICAgY29uc3QgZHBhdGhzID0gKGRlbnNpZmllZCBhcyBhbnkpLnBhdGhzIHx8IChkZW5zaWZpZWQgYXMgYW55KS5yaW5nc1xyXG4gICAgICBpZiAoZHBhdGhzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwYXRoIG9mIGRwYXRocykge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBwdCBvZiBwYXRoKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7IHR5cGU6ICdwb2ludCcsIHg6IHB0WzBdLCB5OiBwdFsxXSwgc3BhdGlhbFJlZmVyZW5jZTogZ2VvbS5zcGF0aWFsUmVmZXJlbmNlIH0gYXMgX19lc3JpLlBvaW50KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCB7fVxyXG4gIH1cclxuICByZXR1cm4gY2FuZGlkYXRlc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R2VvbWV0cnlQYXJ0cyA9IChnZW9tOiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuR2VvbWV0cnlbXSA9PiB7XHJcbiAgY29uc3QgcGFydHM6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cclxuICBpZiAoZ2VvbS50eXBlID09PSAncG9pbnQnKSB7XHJcbiAgICBwYXJ0cy5wdXNoKGdlb20pXHJcbiAgfSBlbHNlIGlmIChnZW9tLnR5cGUgPT09ICdwb2x5bGluZScpIHtcclxuICAgIGNvbnN0IHBhdGhzID0gKGdlb20gYXMgYW55KS5wYXRoc1xyXG4gICAgaWYgKHBhdGhzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykge1xyXG4gICAgICAgIHBhcnRzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTogJ3BvbHlsaW5lJyxcclxuICAgICAgICAgIHBhdGhzOiBbcGF0aF0sXHJcbiAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBnZW9tLnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICB9IGFzIF9fZXNyaS5Qb2x5bGluZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZ2VvbS50eXBlID09PSAncG9seWdvbicpIHtcclxuICAgIGNvbnN0IHJpbmdzID0gKGdlb20gYXMgYW55KS5yaW5nc1xyXG4gICAgaWYgKHJpbmdzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcmluZyBvZiByaW5ncykge1xyXG4gICAgICAgIHBhcnRzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTogJ3BvbHlnb24nLFxyXG4gICAgICAgICAgcmluZ3M6IFtyaW5nXSxcclxuICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGdlb20uc3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICAgIH0gYXMgX19lc3JpLlBvbHlnb24pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcGFydHMucHVzaChnZW9tKVxyXG4gIH1cclxuICByZXR1cm4gcGFydHNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lYXN1cmVEaXN0YW5jZSA9IChcclxuICBnQTogX19lc3JpLkdlb21ldHJ5LFxyXG4gIGdCOiBfX2VzcmkuR2VvbWV0cnksXHJcbiAgdXNlR2VvZGVzaWM6IGJvb2xlYW4sXHJcbiAgdW5pdDogJ21ldGVycycgfCAna2lsb21ldGVycycgPSAnbWV0ZXJzJ1xyXG4pOiBudW1iZXIgPT4ge1xyXG4gIGNvbnN0IHsgZ2VvbWV0cnlFbmdpbmUsIHByb2plY3Rpb24gfSA9IG1vZHVsZXNcclxuICBsZXQgQSA9IGdBLCBCID0gZ0JcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2FtZVNSID1cclxuICAgICAgQS5zcGF0aWFsUmVmZXJlbmNlPy53a2lkID09PSBCLnNwYXRpYWxSZWZlcmVuY2U/LndraWQgfHxcclxuICAgICAgQS5zcGF0aWFsUmVmZXJlbmNlPy53a3QgPT09IEIuc3BhdGlhbFJlZmVyZW5jZT8ud2t0XHJcbiAgICBpZiAoIXNhbWVTUikge1xyXG4gICAgICBjb25zdCBwcm9qQiA9IHByb2plY3Rpb24ucHJvamVjdChCLCBBLnNwYXRpYWxSZWZlcmVuY2UpIGFzIF9fZXNyaS5HZW9tZXRyeVxyXG4gICAgICBpZiAocHJvakIpIEIgPSBwcm9qQlxyXG4gICAgfVxyXG4gIH0gY2F0Y2gge31cclxuXHJcbiAgaWYgKHVzZUdlb2Rlc2ljICYmIGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljRGlzdGFuY2UpIHtcclxuICAgIHJldHVybiBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0Rpc3RhbmNlKEEsIEIsIHVuaXQpIGFzIG51bWJlclxyXG4gIH1cclxuICByZXR1cm4gZ2VvbWV0cnlFbmdpbmUuZGlzdGFuY2UoQSwgQiwgdW5pdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdlb2Rlc2ljQnVmZmVyID0gYXN5bmMgKFxyXG4gIGdlb206IF9fZXNyaS5HZW9tZXRyeSxcclxuICByYWRpdXNLbTogbnVtYmVyXHJcbik6IFByb21pc2U8X19lc3JpLlBvbHlnb24+ID0+IHtcclxuICBhd2FpdCBlbnN1cmVNb2R1bGVzKClcclxuICBjb25zdCB7IGdlb21ldHJ5RW5naW5lIH0gPSBtb2R1bGVzXHJcbiAgbGV0IGJ1ZmZlciA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQnVmZmVyKGdlb20sIHJhZGl1c0ttLCAna2lsb21ldGVycycpIGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoYnVmZmVyKSkgYnVmZmVyID0gYnVmZmVyWzBdXHJcbiAgcmV0dXJuIGJ1ZmZlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xpcEdlb21ldHJ5ID0gYXN5bmMgKFxyXG4gIHRhcmdldEdlb206IF9fZXNyaS5HZW9tZXRyeSxcclxuICBjbGlwR2VvbTogX19lc3JpLkdlb21ldHJ5XHJcbik6IFByb21pc2U8X19lc3JpLkdlb21ldHJ5IHwgbnVsbD4gPT4ge1xyXG4gIGF3YWl0IGVuc3VyZU1vZHVsZXMoKVxyXG4gIGNvbnN0IHsgZ2VvbWV0cnlFbmdpbmUgfSA9IG1vZHVsZXNcclxuICBjb25zdCBjbGlwcGVkID0gZ2VvbWV0cnlFbmdpbmUuaW50ZXJzZWN0KHRhcmdldEdlb20sIGNsaXBHZW9tKVxyXG4gIGlmICghY2xpcHBlZCB8fCBnZW9tZXRyeUVuZ2luZS5pc0VtcHR5Py4oY2xpcHBlZCkpIHJldHVybiBudWxsXHJcbiAgcmV0dXJuIGNsaXBwZWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSW50ZXJzZWN0aW9uID0gYXN5bmMgKFxyXG4gIGdlb21BOiBfX2VzcmkuR2VvbWV0cnksXHJcbiAgZ2VvbUI6IF9fZXNyaS5HZW9tZXRyeVxyXG4pOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuICBhd2FpdCBlbnN1cmVNb2R1bGVzKClcclxuICBjb25zdCB7IGdlb21ldHJ5RW5naW5lIH0gPSBtb2R1bGVzXHJcbiAgcmV0dXJuIGdlb21ldHJ5RW5naW5lLmludGVyc2VjdHMoZ2VvbUEsIGdlb21CKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlTGVuZ3RoID0gYXN5bmMgKFxyXG4gIGdlb206IF9fZXNyaS5HZW9tZXRyeSxcclxuICB1c2VHZW9kZXNpYzogYm9vbGVhbixcclxuICB1bml0OiAna2lsb21ldGVycycgfCAnbWV0ZXJzJyA9ICdraWxvbWV0ZXJzJ1xyXG4pOiBQcm9taXNlPG51bWJlcj4gPT4ge1xyXG4gIGF3YWl0IGVuc3VyZU1vZHVsZXMoKVxyXG4gIGNvbnN0IHsgZ2VvbWV0cnlFbmdpbmUgfSA9IG1vZHVsZXNcclxuICBpZiAodXNlR2VvZGVzaWMpIHtcclxuICAgIHJldHVybiBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0xlbmd0aChnZW9tLCB1bml0KSBhcyBudW1iZXJcclxuICB9XHJcbiAgcmV0dXJuIGdlb21ldHJ5RW5naW5lLnBsYW5hckxlbmd0aChnZW9tLCB1bml0KSBhcyBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RUb1ZpZXdTUiA9IGFzeW5jIChcclxuICBwb2ludDogX19lc3JpLlBvaW50LFxyXG4gIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcclxuKTogUHJvbWlzZTxfX2VzcmkuUG9pbnQ+ID0+IHtcclxuICBhd2FpdCBlbnN1cmVNb2R1bGVzKClcclxuICBjb25zdCB7IHByb2plY3Rpb24gfSA9IG1vZHVsZXNcclxuICByZXR1cm4gcHJvamVjdGlvbi5wcm9qZWN0KHBvaW50LCB2aWV3U1IpIGFzIF9fZXNyaS5Qb2ludFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgQ29udHJvbHMsIENvdW50ZXJzLCBSZXN1bHRzVGFibGUsIE1hcEZlZWRiYWNrIH0gZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VQcm94aW1pdHlDYWxjdWxhdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlUHJveGltaXR5Q2FsY3VsYXRpb24nXHJcbmltcG9ydCB7IHVzZVBERlJlcG9ydCB9IGZyb20gJy4vaG9va3MvdXNlUERGUmVwb3J0J1xyXG5pbXBvcnQgeyBUWFQsIHR5cGUgUHJveGltaXR5Q29uZmlnLCB0eXBlIFNlbGVjdGVkTGluZU1ldGEgfSBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IEFsbFdpZGdldFByb3BzPGFueT4pIHtcclxuICBjb25zdCBbam12LCBzZXRKbXZdID0gUmVhY3QudXNlU3RhdGU8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihUWFQubmVlZExpbmUpXHJcbiAgY29uc3QgW3JhZGl1c0ttSW5wdXQsIHNldFJhZGl1c0ttSW5wdXRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignNScpXHJcbiAgY29uc3QgW3VzZUdlb2Rlc2ljRGlzdGFuY2VSdW50aW1lLCBzZXRVc2VHZW9kZXNpY0Rpc3RhbmNlUnVudGltZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgLy8gTGluaGEgZXNjb2xoaWRhIHBvciBjbGlxdWUgKyBtZXRhXHJcbiAgY29uc3Qgc2VsZWN0ZWRMaW5lR2VvbVJlZiA9IFJlYWN0LnVzZVJlZjxfX2VzcmkuR2VvbWV0cnkgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IHNlbGVjdGVkTGluZU1ldGFSZWYgPSBSZWFjdC51c2VSZWY8U2VsZWN0ZWRMaW5lTWV0YSB8IG51bGw+KG51bGwpXHJcblxyXG4gIC8vIENvbmZpZ3VyYcOnw6NvIGRvIHdpZGdldFxyXG4gIGNvbnN0IGNvbmZpZzogUHJveGltaXR5Q29uZmlnID0ge1xyXG4gICAgdW5pdDogcHJvcHMuY29uZmlnPy51bml0IHx8ICdtZXRlcnMnLFxyXG4gICAgb25seUluRXh0ZW50OiAhIXByb3BzLmNvbmZpZz8ub25seUluRXh0ZW50LFxyXG4gICAgdXNlR2VvZGVzaWNEaXN0YW5jZTogISFwcm9wcy5jb25maWc/LnVzZUdlb2Rlc2ljRGlzdGFuY2UsXHJcbiAgICB0YXJnZXRMYXllcklkc09yVGl0bGVzOiBwcm9wcy5jb25maWc/LnRhcmdldExheWVySWRzT3JUaXRsZXMgfHwgW11cclxuICB9XHJcblxyXG4gIC8vIEhvb2sgcGVyc29uYWxpemFkbyBwYXJhIGPDoWxjdWxvc1xyXG4gIGNvbnN0IHtcclxuICAgIGlzQ29tcHV0aW5nLFxyXG4gICAgcm93cyxcclxuICAgIHNjYW5uZWRMYXllcnNDb3VudCxcclxuICAgIGJ1ZmZlckdlb20sXHJcbiAgICBmZWF0dXJlV2l0aFBvaW50cyxcclxuICAgIGludGVyc2VjdGlvbkxpbmVzLFxyXG4gICAgY2FsY3VsYXRlUHJveGltaXR5LFxyXG4gICAgY2xlYXJSZXN1bHRzXHJcbiAgfSA9IHVzZVByb3hpbWl0eUNhbGN1bGF0aW9uKClcclxuXHJcbiAgLy8gSG9vayBwYXJhIGdlcmHDp8OjbyBkZSByZWxhdMOzcmlvIFBERlxyXG4gIGNvbnN0IHsgaXNHZW5lcmF0aW5nOiBpc0dlbmVyYXRpbmdQREYsIGdlbmVyYXRlUERGUmVwb3J0IH0gPSB1c2VQREZSZXBvcnQoKVxyXG5cclxuICAvLyBIYW5kbGVyc1xyXG4gIGNvbnN0IGhhbmRsZVJhZGl1c0NoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiBzZXRSYWRpdXNLbUlucHV0KHZhbHVlKVxyXG5cclxuICBjb25zdCBoYW5kbGVSYWRpdXNLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykgaGFuZGxlQXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlR2VvZGVzaWNDaGFuZ2UgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gc2V0VXNlR2VvZGVzaWNEaXN0YW5jZVJ1bnRpbWUoY2hlY2tlZClcclxuXHJcbiAgY29uc3QgaGFuZGxlQXBwbHkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCgwLCBOdW1iZXIocmFkaXVzS21JbnB1dCkgfHwgMClcclxuICAgIGlmICgham12IHx8ICFzZWxlY3RlZExpbmVHZW9tUmVmLmN1cnJlbnQgfHwgIXNlbGVjdGVkTGluZU1ldGFSZWYuY3VycmVudCkgcmV0dXJuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgY2FsY3VsYXRlUHJveGltaXR5KGptdiwgc2VsZWN0ZWRMaW5lR2VvbVJlZi5jdXJyZW50LCBzZWxlY3RlZExpbmVNZXRhUmVmLmN1cnJlbnQsIHJhZGl1cywge1xyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICB1c2VHZW9kZXNpY0Rpc3RhbmNlOiB1c2VHZW9kZXNpY0Rpc3RhbmNlUnVudGltZVxyXG4gICAgICB9KVxyXG4gICAgICBzZXRTdGF0dXMoVFhULmRvbmUocm93cy5sZW5ndGgsIHVzZUdlb2Rlc2ljRGlzdGFuY2VSdW50aW1lKSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FsY3VsYXIgcHJveGltaWRhZGU6JywgZXJyb3IpXHJcbiAgICAgIHNldFN0YXR1cygnRXJybyBhbyBjYWxjdWxhciBwcm94aW1pZGFkZS4nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRXhwb3J0Q1NWID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gJ0xheWVyO09CSkVDVElEO0dlb21ldHJ5O1N0YXR1cztMZW5ndGhLbTtEaXN0YW5jZU07WF9GZWF0dXJlO1lfRmVhdHVyZTtYX0xpbmhhO1lfTGluaGEnXHJcbiAgICBjb25zdCBsaW5lcyA9IHJvd3MubWFwKHIgPT5cclxuICAgICAgYCR7ci5sYXllclRpdGxlfTske3Iub2JqZWN0SWR9OyR7ci5nZW9tVHlwZX07JHtyLnN0YXR1c307JHtyLmxlbmd0aEttPy50b0ZpeGVkKDIpIHx8ICcnfTske3IuZGlzdGFuY2VNPy50b0ZpeGVkKDIpIHx8ICcnfTske3IueEZlYXR1cmU/LnRvRml4ZWQoMikgfHwgJyd9OyR7ci55RmVhdHVyZT8udG9GaXhlZCgyKSB8fCAnJ307JHtyLnhMaW5lPy50b0ZpeGVkKDIpIHx8ICcnfTske3IueUxpbmU/LnRvRml4ZWQoMikgfHwgJyd9YFxyXG4gICAgKVxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtbaGVhZGVyLCAuLi5saW5lc10uam9pbignXFxuJyldLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSlcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGEuaHJlZiA9IHVybFxyXG4gICAgYS5kb3dubG9hZCA9ICdwcm94aW1pZGFkZS5jc3YnXHJcbiAgICBhLmNsaWNrKClcclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRXhwb3J0UERGID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFqbXYgfHwgIXNlbGVjdGVkTGluZU1ldGFSZWYuY3VycmVudCB8fCByb3dzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgoMCwgTnVtYmVyKHJhZGl1c0ttSW5wdXQpIHx8IDApXHJcbiAgICBhd2FpdCBnZW5lcmF0ZVBERlJlcG9ydChcclxuICAgICAgam12LFxyXG4gICAgICBzZWxlY3RlZExpbmVNZXRhUmVmLmN1cnJlbnQsXHJcbiAgICAgIHJvd3MsXHJcbiAgICAgIHNjYW5uZWRMYXllcnNDb3VudCxcclxuICAgICAgcmFkaXVzLFxyXG4gICAgICB7XHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIHVzZUdlb2Rlc2ljRGlzdGFuY2U6IHVzZUdlb2Rlc2ljRGlzdGFuY2VSdW50aW1lLFxyXG4gICAgICAgIGxvZ29Vcmw6IHByb3BzLmNvbmZpZz8ubG9nb1VybCxcclxuICAgICAgICB1c2VMb2NhbExvZ286IHByb3BzLmNvbmZpZz8udXNlTG9jYWxMb2dvLFxyXG4gICAgICAgIGxvY2FsTG9nb0ZpbGU6IHByb3BzLmNvbmZpZz8ubG9jYWxMb2dvRmlsZVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyBDb25lY3RhIGEgTWFwVmlldyBlIGluc3RhbGEgaGFuZGxlciBkZSBjbGlxdWVcclxuICBjb25zdCBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAodmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIHNldEptdih2aWV3KVxyXG4gICAgaWYgKCF2aWV3KSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBtdiA9IHZpZXcudmlldyBhcyBfX2VzcmkuTWFwVmlld1xyXG4gICAgbXYub24oJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBtdi5oaXRUZXN0KGUpXHJcbiAgICAgICAgY29uc3QgaGl0ID0gcmVzLnJlc3VsdHMuZmluZCgocjogYW55KSA9PlxyXG4gICAgICAgICAgci50eXBlID09PSAnZ3JhcGhpYycgJiZcclxuICAgICAgICAgIHIuZ3JhcGhpYz8uZ2VvbWV0cnk/LnR5cGUgPT09ICdwb2x5bGluZScgJiZcclxuICAgICAgICAgIChyLmdyYXBoaWM/LmxheWVyPy50eXBlID09PSAnZmVhdHVyZScgfHwgci5ncmFwaGljPy5sYXllcilcclxuICAgICAgICApIGFzIGFueVxyXG5cclxuICAgICAgICBpZiAoIWhpdCkge1xyXG4gICAgICAgICAgc2VsZWN0ZWRMaW5lR2VvbVJlZi5jdXJyZW50ID0gbnVsbFxyXG4gICAgICAgICAgc2VsZWN0ZWRMaW5lTWV0YVJlZi5jdXJyZW50ID0gbnVsbFxyXG4gICAgICAgICAgc2V0U3RhdHVzKFRYVC5uZWVkTGluZSlcclxuICAgICAgICAgIGNsZWFyUmVzdWx0cygpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGcgPSBoaXQuZ3JhcGhpYyBhcyBfX2VzcmkuR3JhcGhpY1xyXG4gICAgICAgIGNvbnN0IGxheWVyOiBhbnkgPSBnLmxheWVyXHJcbiAgICAgICAgY29uc3QgZ2VvbSA9IGcuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lXHJcbiAgICAgICAgY29uc3Qgb2lkRmllbGQgPSAobGF5ZXI/Lm9iamVjdElkRmllbGQgYXMgc3RyaW5nKSB8fCAnT0JKRUNUSUQnXHJcbiAgICAgICAgY29uc3Qgb2lkID0gdHlwZW9mIChnIGFzIGFueSkuZ2V0T2JqZWN0SWQgPT09ICdmdW5jdGlvbidcclxuICAgICAgICAgID8gKGcgYXMgYW55KS5nZXRPYmplY3RJZCgpXHJcbiAgICAgICAgICA6IGcuYXR0cmlidXRlcz8uW29pZEZpZWxkXSA/PyBnLmF0dHJpYnV0ZXM/Lk9CSkVDVElEXHJcblxyXG4gICAgICAgIHNlbGVjdGVkTGluZUdlb21SZWYuY3VycmVudCA9IGdlb21cclxuICAgICAgICBzZWxlY3RlZExpbmVNZXRhUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICBsYXllclRpdGxlOiBsYXllcj8udGl0bGUgfHwgJ0xpbmhhJyxcclxuICAgICAgICAgIGxheWVySWQ6IGxheWVyLmlkLFxyXG4gICAgICAgICAgb2JqZWN0SWQ6IG9pZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U3RhdHVzKFRYVC5zZWxlY3RlZChsYXllcj8udGl0bGUgfHwgJ0xpbmhhJywgb2lkKSlcclxuICAgICAgICBjbGVhclJlc3VsdHMoKVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5vIGNsaXF1ZTonLCBlcnIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcHJveGltaWRhZGUtbGluaGEgamltdS13aWRnZXRcIj5cclxuICAgICAgPENvbnRyb2xzXHJcbiAgICAgICAgc3RhdHVzPXtzdGF0dXN9XHJcbiAgICAgICAgcmFkaXVzS21JbnB1dD17cmFkaXVzS21JbnB1dH1cclxuICAgICAgICBvblJhZGl1c0NoYW5nZT17aGFuZGxlUmFkaXVzQ2hhbmdlfVxyXG4gICAgICAgIG9uUmFkaXVzS2V5RG93bj17aGFuZGxlUmFkaXVzS2V5RG93bn1cclxuICAgICAgICB1c2VHZW9kZXNpY0Rpc3RhbmNlUnVudGltZT17dXNlR2VvZGVzaWNEaXN0YW5jZVJ1bnRpbWV9XHJcbiAgICAgICAgb25HZW9kZXNpY0NoYW5nZT17aGFuZGxlR2VvZGVzaWNDaGFuZ2V9XHJcbiAgICAgICAgb25BcHBseT17aGFuZGxlQXBwbHl9XHJcbiAgICAgICAgaXNDb21wdXRpbmc9e2lzQ29tcHV0aW5nfVxyXG4gICAgICAgIGhhc01hcD17ISFqbXZ9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8Q291bnRlcnNcclxuICAgICAgICBzY2FubmVkTGF5ZXJzQ291bnQ9e3NjYW5uZWRMYXllcnNDb3VudH1cclxuICAgICAgICByb3dzPXtyb3dzfVxyXG4gICAgICAgIG9uRXhwb3J0Q1NWPXtoYW5kbGVFeHBvcnRDU1Z9XHJcbiAgICAgICAgb25FeHBvcnRQREY9e2hhbmRsZUV4cG9ydFBERn1cclxuICAgICAgICBpc0dlbmVyYXRpbmdQREY9e2lzR2VuZXJhdGluZ1BERn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxSZXN1bHRzVGFibGUgcm93cz17cm93c30gLz5cclxuXHJcbiAgICAgIHsvKiBNYXAgd2lkZ2V0ICovfVxyXG4gICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggPyAoXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXtvbkFjdGl2ZVZpZXdDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbC1uZWVkLW1hcFwiPntUWFQubmVlZE1hcH08L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBDb21wb25lbnRlIGRlIGZlZWRiYWNrIHZpc3VhbCBubyBtYXBhICovfVxyXG4gICAgICA8TWFwRmVlZGJhY2tcclxuICAgICAgICBqbXY9e2ptdn1cclxuICAgICAgICBzZWxlY3RlZExpbmVHZW9tPXtzZWxlY3RlZExpbmVHZW9tUmVmLmN1cnJlbnR9XHJcbiAgICAgICAgc2VsZWN0ZWRMaW5lTWV0YT17c2VsZWN0ZWRMaW5lTWV0YVJlZi5jdXJyZW50fVxyXG4gICAgICAgIGJ1ZmZlckdlb209e2J1ZmZlckdlb219XHJcbiAgICAgICAgZmVhdHVyZVdpdGhQb2ludHM9e2ZlYXR1cmVXaXRoUG9pbnRzfVxyXG4gICAgICAgIGludGVyc2VjdGlvbkxpbmVzPXtpbnRlcnNlY3Rpb25MaW5lc31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9