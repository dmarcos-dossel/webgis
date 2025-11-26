System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
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

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/******/ 			// no module.id needed
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
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/proximidade-linha/src/setting/setting.tsx ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */

// ✅ DataSourceTypes vem de jimu-core (ou use AllDataSourceTypes)

// ✅ MapWidgetSelector, SettingSection/Row ficam em setting-components

// ✅ DataSourceSelector tem seu próprio pacote "advanced/data-source-selector"


function Setting(props) {
    const cfg = (props.config || {});
    const setCfg = (patch) => props.onSettingChange({ id: props.id, config: Object.assign(Object.assign({}, cfg), patch) });
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-proximidade p-3" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Mapa" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: (ids) => props.onSettingChange({ id: props.id, useMapWidgetIds: ids }) })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Camada de Linhas (fonte de sele\u00E7\u00E3o)" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelector, { widgetId: props.id, 
                    // Tipos aceitos: aqui só FeatureLayer
                    types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]), 
                    // Mostra a seleção atual (se houver)
                    useDataSources: cfg.lineDsId ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([{ dataSourceId: cfg.lineDsId }]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), 
                    // Atualiza o config quando o usuário escolhe uma camada
                    onChange: (useDses) => { var _a; return setCfg({ lineDsId: (_a = useDses === null || useDses === void 0 ? void 0 : useDses[0]) === null || _a === void 0 ? void 0 : _a.dataSourceId }); }, 
                    // Obrigatório escolher uma fonte
                    mustUseDataSource: true }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Op\u00E7\u00F5es" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Somente camadas vis\u00EDveis" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: !!cfg.onlyVisible, onChange: (_, v) => setCfg({ onlyVisible: v }) })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Somente fei\u00E7\u00F5es no extent atual" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: !!cfg.onlyInExtent, onChange: (_, v) => setCfg({ onlyInExtent: v }) })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Unidade de dist\u00E2ncia" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: cfg.unit || 'meters', onChange: (e) => setCfg({ unit: e.target.value }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "meters" }, "Metros"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "kilometers" }, "Quil\u00F4metros"))))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBQ2tDO0FBR2pELGlFQUFpRTtBQUNGO0FBRS9ELHNFQUFzRTtBQUsxQjtBQUU1Qyw4RUFBOEU7QUFDSjtBQUVsQztBQVV6QixTQUFTLE9BQU8sQ0FBRSxLQUFvQztJQUNuRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFXO0lBQzFDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQ3hDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLGtDQUFPLEdBQUcsR0FBSyxLQUFLLENBQUUsRUFBRSxDQUFDO0lBRXZFLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsZ0NBQWdDO1FBQzdDLCtDQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFDLE1BQU07WUFDMUIsK0NBQUMsa0ZBQWlCLElBQ2hCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxFQUN0QyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FDaEYsQ0FDYTtRQUVqQiwrQ0FBQywrRUFBYyxJQUFDLEtBQUssRUFBQywrQ0FBcUM7WUFDekQsK0NBQUMsMkVBQVU7Z0JBQ1QsK0NBQUMscUZBQWtCLElBQ2pCLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDbEIsc0NBQXNDO29CQUN0QyxLQUFLLEVBQUUsb0RBQVMsQ0FBQyxDQUFDLHNEQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2hELHFDQUFxQztvQkFDckMsY0FBYyxFQUNaLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG9EQUFTLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0RBQVMsQ0FBQyxFQUFFLENBQUM7b0JBRTdGLHdEQUF3RDtvQkFDeEQsUUFBUSxFQUFFLENBQUMsT0FBd0IsRUFBRSxFQUFFLFdBQUMsYUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGFBQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRyxDQUFDLENBQUMsMENBQUUsWUFBWSxFQUFFLENBQUM7b0JBQ3hGLGlDQUFpQztvQkFDakMsaUJBQWlCLFNBQ2pCLENBQ1MsQ0FDRTtRQUVqQiwrQ0FBQywrRUFBYyxJQUFDLEtBQUssRUFBQyxrQkFBUTtZQUM1QiwrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBQywrQkFBMEI7Z0JBQzFDLCtDQUFDLDJDQUFNLElBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFJLENBQzNFO1lBRWIsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUMsMkNBQWlDO2dCQUNqRCwrQ0FBQywyQ0FBTSxJQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBSSxDQUM3RTtZQUViLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFDLDJCQUFzQjtnQkFDdEMsK0NBQUMsMkNBQU0sSUFDTCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLEVBQzNCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBdUIsRUFBRSxDQUFDO29CQUVuRSwyREFBUSxLQUFLLEVBQUMsUUFBUSxhQUFnQjtvQkFDdEMsMkRBQVEsS0FBSyxFQUFDLFlBQVksdUJBQXFCLENBQ3hDLENBQ0UsQ0FDRSxDQUNiLENBQ1A7QUFDSCxDQUFDO0FBQ08sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hpbWlkYWRlLWxpbmhhL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIEltbXV0YWJsZSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHR5cGUgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5cclxuLy8g4pyFIERhdGFTb3VyY2VUeXBlcyB2ZW0gZGUgamltdS1jb3JlIChvdSB1c2UgQWxsRGF0YVNvdXJjZVR5cGVzKVxyXG5pbXBvcnQgeyBEYXRhU291cmNlVHlwZXMsIHR5cGUgVXNlRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbi8vIOKchSBNYXBXaWRnZXRTZWxlY3RvciwgU2V0dGluZ1NlY3Rpb24vUm93IGZpY2FtIGVtIHNldHRpbmctY29tcG9uZW50c1xyXG5pbXBvcnQge1xyXG4gIE1hcFdpZGdldFNlbGVjdG9yLFxyXG4gIFNldHRpbmdTZWN0aW9uLFxyXG4gIFNldHRpbmdSb3dcclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuXHJcbi8vIOKchSBEYXRhU291cmNlU2VsZWN0b3IgdGVtIHNldSBwcsOzcHJpbyBwYWNvdGUgXCJhZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiXHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXHJcblxyXG5pbXBvcnQgeyBTd2l0Y2gsIFNlbGVjdCB9IGZyb20gJ2ppbXUtdWknXHJcblxyXG4vLyBDb25maWd1cmHDp8OjbyBxdWUgdmFtb3Mgc2FsdmFyIG5vIGFwcCBjb25maWdcclxuaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgbGluZURzSWQ/OiBzdHJpbmdcclxuICBvbmx5VmlzaWJsZT86IGJvb2xlYW5cclxuICBvbmx5SW5FeHRlbnQ/OiBib29sZWFuXHJcbiAgdW5pdD86ICdtZXRlcnMnIHwgJ2tpbG9tZXRlcnMnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmcgKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8Q29uZmlnPikge1xyXG4gIGNvbnN0IGNmZyA9IChwcm9wcy5jb25maWcgfHwge30pIGFzIENvbmZpZ1xyXG4gIGNvbnN0IHNldENmZyA9IChwYXRjaDogUGFydGlhbDxDb25maWc+KSA9PlxyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCBjb25maWc6IHsgLi4uY2ZnLCAuLi5wYXRjaCB9IH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLXByb3hpbWlkYWRlIHAtM1wiPlxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJNYXBhXCI+XHJcbiAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3Byb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgIG9uU2VsZWN0PXsoaWRzKSA9PiBwcm9wcy5vblNldHRpbmdDaGFuZ2UoeyBpZDogcHJvcHMuaWQsIHVzZU1hcFdpZGdldElkczogaWRzIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJDYW1hZGEgZGUgTGluaGFzIChmb250ZSBkZSBzZWxlw6fDo28pXCI+XHJcbiAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXHJcbiAgICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgLy8gVGlwb3MgYWNlaXRvczogYXF1aSBzw7MgRmVhdHVyZUxheWVyXHJcbiAgICAgICAgICAgIHR5cGVzPXtJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKX1cclxuICAgICAgICAgICAgLy8gTW9zdHJhIGEgc2VsZcOnw6NvIGF0dWFsIChzZSBob3V2ZXIpXHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtcclxuICAgICAgICAgICAgICBjZmcubGluZURzSWQgPyBJbW11dGFibGUoW3sgZGF0YVNvdXJjZUlkOiBjZmcubGluZURzSWQgfSBhcyBVc2VEYXRhU291cmNlXSkgOiBJbW11dGFibGUoW10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQXR1YWxpemEgbyBjb25maWcgcXVhbmRvIG8gdXN1w6FyaW8gZXNjb2xoZSB1bWEgY2FtYWRhXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodXNlRHNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiBzZXRDZmcoeyBsaW5lRHNJZDogdXNlRHNlcz8uWzBdPy5kYXRhU291cmNlSWQgfSl9XHJcbiAgICAgICAgICAgIC8vIE9icmlnYXTDs3JpbyBlc2NvbGhlciB1bWEgZm9udGVcclxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiT3DDp8O1ZXNcIj5cclxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlNvbWVudGUgY2FtYWRhcyB2aXPDrXZlaXNcIj5cclxuICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17ISFjZmcub25seVZpc2libGV9IG9uQ2hhbmdlPXsoXywgdikgPT4gc2V0Q2ZnKHsgb25seVZpc2libGU6IHYgfSl9IC8+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG5cclxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlNvbWVudGUgZmVpw6fDtWVzIG5vIGV4dGVudCBhdHVhbFwiPlxyXG4gICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXshIWNmZy5vbmx5SW5FeHRlbnR9IG9uQ2hhbmdlPXsoXywgdikgPT4gc2V0Q2ZnKHsgb25seUluRXh0ZW50OiB2IH0pfSAvPlxyXG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJVbmlkYWRlIGRlIGRpc3TDom5jaWFcIj5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e2NmZy51bml0IHx8ICdtZXRlcnMnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENmZyh7IHVuaXQ6IGUudGFyZ2V0LnZhbHVlIGFzIENvbmZpZ1sndW5pdCddIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWV0ZXJzXCI+TWV0cm9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJraWxvbWV0ZXJzXCI+UXVpbMO0bWV0cm9zPC9vcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9