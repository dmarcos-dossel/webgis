System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/coord-to-point/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
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
/** @jsx jsx */


const GLAYER_ID = 'coord-to-point-layer';
function Widget(props) {
    var _a;
    const [lat, setLat] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [lon, setLon] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [jmv, setJmv] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [busy, setBusy] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const parse = (s) => Number(String(s).trim().replace(',', '.'));
    const mapSelected = !!((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a.length);
    // Garante uma GraphicsLayer com renderer simples (círculo vermelho)
    const ensureLayer = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const view = jmv === null || jmv === void 0 ? void 0 : jmv.view;
        if (!view)
            return null;
        let layer = view.map.findLayerById(GLAYER_ID);
        if (layer)
            return layer;
        const [GraphicsLayer] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/layers/GraphicsLayer']);
        layer = new GraphicsLayer({
            id: GLAYER_ID,
            renderer: {
                type: 'simple',
                symbol: {
                    type: 'simple-marker',
                    style: 'circle',
                    size: 10,
                    color: [230, 0, 0, 0.85],
                    outline: { color: [255, 255, 255, 1], width: 1.5 }
                }
            }
        });
        view.map.add(layer);
        return layer;
    }), [jmv]);
    const go = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const latNum = parse(lat);
        const lonNum = parse(lon);
        if (!isFinite(latNum) || latNum < -90 || latNum > 90) {
            console.warn('Latitude inválida');
            return;
        }
        if (!isFinite(lonNum) || lonNum < -180 || lonNum > 180) {
            console.warn('Longitude inválida');
            return;
        }
        if (!(jmv === null || jmv === void 0 ? void 0 : jmv.view)) {
            console.warn('Mapa não está pronto');
            return;
        }
        try {
            setBusy(true);
            const layer = yield ensureLayer();
            if (!layer)
                return;
            // Carrega os módulos sob demanda, evitando problemas de timing
            const [Graphic, Point] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/Graphic',
                'esri/geometry/Point'
            ]);
            layer.removeAll();
            const point = new Point({
                longitude: lonNum,
                latitude: latNum,
                spatialReference: { wkid: 4326 }
            });
            // Como a layer tem renderer, não precisamos passar symbol aqui
            const graphic = new Graphic({ geometry: point });
            layer.add(graphic);
            yield jmv.view.goTo({ target: graphic, zoom: Math.max((_a = jmv.view.zoom) !== null && _a !== void 0 ? _a : 12, 16) }).catch(() => { });
        }
        catch (e) {
            console.error('Erro ao posicionar no ponto:', e);
        }
        finally {
            setBusy(false);
        }
    });
    const clear = () => {
        var _a, _b;
        setLat('');
        setLon('');
        const layer = (_b = (_a = jmv === null || jmv === void 0 ? void 0 : jmv.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.findLayerById(GLAYER_ID);
        layer === null || layer === void 0 ? void 0 : layer.removeAll();
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'p-2' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 600, marginBottom: 8 } }, "Coordenada \u2192 Ponto"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: 'jimu-input', placeholder: 'Latitude (\u00B0)', value: lat, onChange: (e) => setLat(e.currentTarget.value), onKeyDown: (e) => { if (e.key === 'Enter')
                    go(); } }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: 'jimu-input', placeholder: 'Longitude (\u00B0)', value: lon, onChange: (e) => setLon(e.currentTarget.value), onKeyDown: (e) => { if (e.key === 'Enter')
                    go(); } })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: 8, display: 'flex', gap: 8 } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: 'btn btn-primary', onClick: go, disabled: !mapSelected || busy }, busy ? 'Indo…' : 'Ir'),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: 'btn btn-secondary', onClick: clear }, "Limpar")),
        mapSelected ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: (view) => setJmv(view !== null && view !== void 0 ? view : null) })) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 12, opacity: .7, marginTop: 8 } },
            "Selecione um Map na aba ",
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Content"),
            " do widget."))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb29yZC10by1wb2ludC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUN1QztBQUNpQztBQUV2RixNQUFNLFNBQVMsR0FBRyxzQkFBc0I7QUFFekIsU0FBUyxNQUFNLENBQUUsS0FBMEI7O0lBQ3hELE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQXFCLElBQUksQ0FBQztJQUM5RCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUU3QyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0s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Q0FBQyxFQUN6QyxrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksYUFBSixJQUFJLGNBQUosSUFBSSxHQUFJLElBQUksQ0FBQyxHQUNsRCxDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0Ysd0RBQUssS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUU7O1lBQzdCLHlFQUF3QjswQkFDNUMsQ0FDUCxDQUNHLENBQ1A7QUFDSCxDQUFDO0FBQ08sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2Nvb3JkLXRvLXBvaW50L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5jb25zdCBHTEFZRVJfSUQgPSAnY29vcmQtdG8tcG9pbnQtbGF5ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XHJcbiAgY29uc3QgW2xhdCwgc2V0TGF0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtsb24sIHNldExvbl0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICBjb25zdCBbam12LCBzZXRKbXZdID0gUmVhY3QudXNlU3RhdGU8SmltdU1hcFZpZXcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtidXN5LCBzZXRCdXN5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBwYXJzZSA9IChzOiBzdHJpbmcpID0+IE51bWJlcihTdHJpbmcocykudHJpbSgpLnJlcGxhY2UoJywnLCAnLicpKVxyXG4gIGNvbnN0IG1hcFNlbGVjdGVkID0gISFwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aFxyXG5cclxuICAvLyBHYXJhbnRlIHVtYSBHcmFwaGljc0xheWVyIGNvbSByZW5kZXJlciBzaW1wbGVzIChjw61yY3VsbyB2ZXJtZWxobylcclxuICBjb25zdCBlbnN1cmVMYXllciA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljc0xheWVyIHwgbnVsbD4gPT4ge1xyXG4gICAgY29uc3QgdmlldyA9IGptdj8udmlld1xyXG4gICAgaWYgKCF2aWV3KSByZXR1cm4gbnVsbFxyXG5cclxuICAgIGxldCBsYXllciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQoR0xBWUVSX0lEKSBhcyBfX2VzcmkuR3JhcGhpY3NMYXllclxyXG4gICAgaWYgKGxheWVyKSByZXR1cm4gbGF5ZXJcclxuXHJcbiAgICBjb25zdCBbR3JhcGhpY3NMYXllcl0gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFsnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllciddKVxyXG4gICAgbGF5ZXIgPSBuZXcgR3JhcGhpY3NMYXllcih7XHJcbiAgICAgIGlkOiBHTEFZRVJfSUQsXHJcbiAgICAgIHJlbmRlcmVyOiB7XHJcbiAgICAgICAgdHlwZTogJ3NpbXBsZScsXHJcbiAgICAgICAgc3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXHJcbiAgICAgICAgICBzdHlsZTogJ2NpcmNsZScsXHJcbiAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgIGNvbG9yOiBbMjMwLCAwLCAwLCAwLjg1XSxcclxuICAgICAgICAgIG91dGxpbmU6IHsgY29sb3I6IFsyNTUsIDI1NSwgMjU1LCAxXSwgd2lkdGg6IDEuNSB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGFzIF9fZXNyaS5TaW1wbGVSZW5kZXJlclByb3BlcnRpZXNcclxuICAgIH0pXHJcbiAgICB2aWV3Lm1hcC5hZGQobGF5ZXIpXHJcbiAgICByZXR1cm4gbGF5ZXJcclxuICB9LCBbam12XSlcclxuXHJcbiAgY29uc3QgZ28gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBsYXROdW0gPSBwYXJzZShsYXQpXHJcbiAgICBjb25zdCBsb25OdW0gPSBwYXJzZShsb24pXHJcbiAgICBpZiAoIWlzRmluaXRlKGxhdE51bSkgfHwgbGF0TnVtIDwgLTkwIHx8IGxhdE51bSA+IDkwKSB7IGNvbnNvbGUud2FybignTGF0aXR1ZGUgaW52w6FsaWRhJyk7IHJldHVybiB9XHJcbiAgICBpZiAoIWlzRmluaXRlKGxvbk51bSkgfHwgbG9uTnVtIDwgLTE4MCB8fCBsb25OdW0gPiAxODApIHsgY29uc29sZS53YXJuKCdMb25naXR1ZGUgaW52w6FsaWRhJyk7IHJldHVybiB9XHJcbiAgICBpZiAoIWptdj8udmlldykgeyBjb25zb2xlLndhcm4oJ01hcGEgbsOjbyBlc3TDoSBwcm9udG8nKTsgcmV0dXJuIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRCdXN5KHRydWUpXHJcbiAgICAgIGNvbnN0IGxheWVyID0gYXdhaXQgZW5zdXJlTGF5ZXIoKVxyXG4gICAgICBpZiAoIWxheWVyKSByZXR1cm5cclxuXHJcbiAgICAgIC8vIENhcnJlZ2Egb3MgbcOzZHVsb3Mgc29iIGRlbWFuZGEsIGV2aXRhbmRvIHByb2JsZW1hcyBkZSB0aW1pbmdcclxuICAgICAgY29uc3QgW0dyYXBoaWMsIFBvaW50XSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICdlc3JpL0dyYXBoaWMnLFxyXG4gICAgICAgICdlc3JpL2dlb21ldHJ5L1BvaW50J1xyXG4gICAgICBdKVxyXG5cclxuICAgICAgbGF5ZXIucmVtb3ZlQWxsKClcclxuXHJcbiAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KHtcclxuICAgICAgICBsb25naXR1ZGU6IGxvbk51bSxcclxuICAgICAgICBsYXRpdHVkZTogbGF0TnVtLFxyXG4gICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBDb21vIGEgbGF5ZXIgdGVtIHJlbmRlcmVyLCBuw6NvIHByZWNpc2Ftb3MgcGFzc2FyIHN5bWJvbCBhcXVpXHJcbiAgICAgIGNvbnN0IGdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7IGdlb21ldHJ5OiBwb2ludCB9KVxyXG4gICAgICBsYXllci5hZGQoZ3JhcGhpYylcclxuXHJcbiAgICAgIGF3YWl0IGptdi52aWV3LmdvVG8oeyB0YXJnZXQ6IGdyYXBoaWMsIHpvb206IE1hdGgubWF4KGptdi52aWV3Lnpvb20gPz8gMTIsIDE2KSB9KS5jYXRjaCgoKSA9PiB7fSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBwb3NpY2lvbmFyIG5vIHBvbnRvOicsIGUpXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRCdXN5KGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRMYXQoJycpOyBzZXRMb24oJycpXHJcbiAgICBjb25zdCBsYXllciA9IGptdj8udmlldz8ubWFwPy5maW5kTGF5ZXJCeUlkKEdMQVlFUl9JRCkgYXMgX19lc3JpLkdyYXBoaWNzTGF5ZXJcclxuICAgIGxheWVyPy5yZW1vdmVBbGwoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwLTInPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiA4IH19PkNvb3JkZW5hZGEg4oaSIFBvbnRvPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLCBnYXA6IDggfX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2ppbXUtaW5wdXQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nTGF0aXR1ZGUgKMKwKSdcclxuICAgICAgICAgIHZhbHVlPXtsYXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhdChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGdvKCkgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdqaW11LWlucHV0J1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0xvbmdpdHVkZSAowrApJ1xyXG4gICAgICAgICAgdmFsdWU9e2xvbn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9uKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgZ28oKSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDgsIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA4IH19PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9e2dvfSBkaXNhYmxlZD17IW1hcFNlbGVjdGVkIHx8IGJ1c3l9PlxyXG4gICAgICAgICAge2J1c3kgPyAnSW5kb+KApicgOiAnSXInfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNlY29uZGFyeScgb25DbGljaz17Y2xlYXJ9PkxpbXBhcjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHttYXBTZWxlY3RlZCA/IChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHMhWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsodmlldykgPT4gc2V0Sm12KHZpZXcgPz8gbnVsbCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgb3BhY2l0eTogLjcsIG1hcmdpblRvcDogOCB9fT5cclxuICAgICAgICAgIFNlbGVjaW9uZSB1bSBNYXAgbmEgYWJhIDxzdHJvbmc+Q29udGVudDwvc3Ryb25nPiBkbyB3aWRnZXQuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9