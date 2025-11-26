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
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "kilometers" }, "Quil\u00F4metros")))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Relat\u00F3rio PDF" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Usar logo local do projeto" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: !!cfg.useLocalLogo, onChange: (_, v) => setCfg({ useLocalLogo: v }) })),
            cfg.useLocalLogo ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Arquivo de logo local" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: cfg.localLogoFile || 'logo.png', onChange: (e) => setCfg({ localLogoFile: e.target.value }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "logo.png" }, "logo.png (padr\u00E3o)")))) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "URL do Logo Institucional" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: cfg.logoUrl || '', onChange: (e) => setCfg({ logoUrl: e.target.value }), placeholder: "https://exemplo.com/logo.png" }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: '12px', color: '#666', marginTop: '8px' } }, cfg.useLocalLogo
                ? 'O logo será carregado da pasta assets/images do widget.'
                : 'O logo será carregado da URL externa. Deixe vazio para usar espaço reservado.'))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBQ2tDO0FBR2pELGlFQUFpRTtBQUNGO0FBRS9ELHNFQUFzRTtBQUsxQjtBQUU1Qyw4RUFBOEU7QUFDSjtBQUV2QjtBQWFwQyxTQUFTLE9BQU8sQ0FBRSxLQUFvQztJQUNuRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFXO0lBQzFDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQ3hDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLGtDQUFPLEdBQUcsR0FBSyxLQUFLLENBQUUsRUFBRSxDQUFDO0lBRXZFLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsZ0NBQWdDO1FBQzdDLCtDQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFDLE1BQU07WUFDMUIs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RUFDdEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFFMUQsMkRBQVEsS0FBSyxFQUFDLFVBQVUsNkJBQTJCLENBRTVDLENBQ0UsQ0FDZCxDQUFDLENBQUMsQ0FBQyxDQUNGLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFDLDJCQUEyQjtnQkFDM0MsK0NBQUMsOENBQVMsSUFDUixLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQ3hCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFDcEQsV0FBVyxFQUFDLDhCQUE4QixHQUMxQyxDQUNTLENBQ2Q7WUFFRCx3REFBSyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUM5RCxHQUFHLENBQUMsWUFBWTtnQkFDZixDQUFDLENBQUMseURBQXlEO2dCQUMzRCxDQUFDLENBQUMsK0VBQStFLENBRS9FLENBQ1MsQ0FDYixDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94aW1pZGFkZS1saW5oYS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCBJbW11dGFibGUgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuXHJcbi8vIOKchSBEYXRhU291cmNlVHlwZXMgdmVtIGRlIGppbXUtY29yZSAob3UgdXNlIEFsbERhdGFTb3VyY2VUeXBlcylcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVR5cGVzLCB0eXBlIFVzZURhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG4vLyDinIUgTWFwV2lkZ2V0U2VsZWN0b3IsIFNldHRpbmdTZWN0aW9uL1JvdyBmaWNhbSBlbSBzZXR0aW5nLWNvbXBvbmVudHNcclxuaW1wb3J0IHtcclxuICBNYXBXaWRnZXRTZWxlY3RvcixcclxuICBTZXR0aW5nU2VjdGlvbixcclxuICBTZXR0aW5nUm93XHJcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcblxyXG4vLyDinIUgRGF0YVNvdXJjZVNlbGVjdG9yIHRlbSBzZXUgcHLDs3ByaW8gcGFjb3RlIFwiYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIlxyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xyXG5cclxuaW1wb3J0IHsgU3dpdGNoLCBTZWxlY3QsIFRleHRJbnB1dCB9IGZyb20gJ2ppbXUtdWknXHJcblxyXG4vLyBDb25maWd1cmHDp8OjbyBxdWUgdmFtb3Mgc2FsdmFyIG5vIGFwcCBjb25maWdcclxuaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgbGluZURzSWQ/OiBzdHJpbmdcclxuICBvbmx5VmlzaWJsZT86IGJvb2xlYW5cclxuICBvbmx5SW5FeHRlbnQ/OiBib29sZWFuXHJcbiAgdW5pdD86ICdtZXRlcnMnIHwgJ2tpbG9tZXRlcnMnXHJcbiAgbG9nb1VybD86IHN0cmluZ1xyXG4gIHVzZUxvY2FsTG9nbz86IGJvb2xlYW5cclxuICBsb2NhbExvZ29GaWxlPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmcgKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8Q29uZmlnPikge1xyXG4gIGNvbnN0IGNmZyA9IChwcm9wcy5jb25maWcgfHwge30pIGFzIENvbmZpZ1xyXG4gIGNvbnN0IHNldENmZyA9IChwYXRjaDogUGFydGlhbDxDb25maWc+KSA9PlxyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCBjb25maWc6IHsgLi4uY2ZnLCAuLi5wYXRjaCB9IH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLXByb3hpbWlkYWRlIHAtM1wiPlxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJNYXBhXCI+XHJcbiAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3Byb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgIG9uU2VsZWN0PXsoaWRzKSA9PiBwcm9wcy5vblNldHRpbmdDaGFuZ2UoeyBpZDogcHJvcHMuaWQsIHVzZU1hcFdpZGdldElkczogaWRzIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJDYW1hZGEgZGUgTGluaGFzIChmb250ZSBkZSBzZWxlw6fDo28pXCI+XHJcbiAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXHJcbiAgICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgLy8gVGlwb3MgYWNlaXRvczogYXF1aSBzw7MgRmVhdHVyZUxheWVyXHJcbiAgICAgICAgICAgIHR5cGVzPXtJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKX1cclxuICAgICAgICAgICAgLy8gTW9zdHJhIGEgc2VsZcOnw6NvIGF0dWFsIChzZSBob3V2ZXIpXHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtcclxuICAgICAgICAgICAgICBjZmcubGluZURzSWQgPyBJbW11dGFibGUoW3sgZGF0YVNvdXJjZUlkOiBjZmcubGluZURzSWQgfSBhcyBVc2VEYXRhU291cmNlXSkgOiBJbW11dGFibGUoW10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQXR1YWxpemEgbyBjb25maWcgcXVhbmRvIG8gdXN1w6FyaW8gZXNjb2xoZSB1bWEgY2FtYWRhXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodXNlRHNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiBzZXRDZmcoeyBsaW5lRHNJZDogdXNlRHNlcz8uWzBdPy5kYXRhU291cmNlSWQgfSl9XHJcbiAgICAgICAgICAgIC8vIE9icmlnYXTDs3JpbyBlc2NvbGhlciB1bWEgZm9udGVcclxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiT3DDp8O1ZXNcIj5cclxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlNvbWVudGUgY2FtYWRhcyB2aXPDrXZlaXNcIj5cclxuICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17ISFjZmcub25seVZpc2libGV9IG9uQ2hhbmdlPXsoXywgdikgPT4gc2V0Q2ZnKHsgb25seVZpc2libGU6IHYgfSl9IC8+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG5cclxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlNvbWVudGUgZmVpw6fDtWVzIG5vIGV4dGVudCBhdHVhbFwiPlxyXG4gICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXshIWNmZy5vbmx5SW5FeHRlbnR9IG9uQ2hhbmdlPXsoXywgdikgPT4gc2V0Q2ZnKHsgb25seUluRXh0ZW50OiB2IH0pfSAvPlxyXG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJVbmlkYWRlIGRlIGRpc3TDom5jaWFcIj5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e2NmZy51bml0IHx8ICdtZXRlcnMnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENmZyh7IHVuaXQ6IGUudGFyZ2V0LnZhbHVlIGFzIENvbmZpZ1sndW5pdCddIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWV0ZXJzXCI+TWV0cm9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJraWxvbWV0ZXJzXCI+UXVpbMO0bWV0cm9zPC9vcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJSZWxhdMOzcmlvIFBERlwiPlxyXG4gICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiVXNhciBsb2dvIGxvY2FsIGRvIHByb2pldG9cIj5cclxuICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17ISFjZmcudXNlTG9jYWxMb2dvfSBvbkNoYW5nZT17KF8sIHYpID0+IHNldENmZyh7IHVzZUxvY2FsTG9nbzogdiB9KX0gLz5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgIHtjZmcudXNlTG9jYWxMb2dvID8gKFxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJBcnF1aXZvIGRlIGxvZ28gbG9jYWxcIj5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjZmcubG9jYWxMb2dvRmlsZSB8fCAnbG9nby5wbmcnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2ZnKHsgbG9jYWxMb2dvRmlsZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG9nby5wbmdcIj5sb2dvLnBuZyAocGFkcsOjbyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICB7LyogQXF1aSBwb2RlbSBzZXIgYWRpY2lvbmFkb3MgbWFpcyBhcnF1aXZvcyBkZSBsb2dvIGNvbmZvcm1lIG5lY2Vzc8OhcmlvICovfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJVUkwgZG8gTG9nbyBJbnN0aXR1Y2lvbmFsXCI+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y2ZnLmxvZ29VcmwgfHwgJyd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDZmcoeyBsb2dvVXJsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vZXhlbXBsby5jb20vbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjNjY2JywgbWFyZ2luVG9wOiAnOHB4JyB9fT5cclxuICAgICAgICAgIHtjZmcudXNlTG9jYWxMb2dvXHJcbiAgICAgICAgICAgID8gJ08gbG9nbyBzZXLDoSBjYXJyZWdhZG8gZGEgcGFzdGEgYXNzZXRzL2ltYWdlcyBkbyB3aWRnZXQuJ1xyXG4gICAgICAgICAgICA6ICdPIGxvZ28gc2Vyw6EgY2FycmVnYWRvIGRhIFVSTCBleHRlcm5hLiBEZWl4ZSB2YXppbyBwYXJhIHVzYXIgZXNwYcOnbyByZXNlcnZhZG8uJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=