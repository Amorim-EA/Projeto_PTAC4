"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/dashboard/register/page",{

/***/ "(app-pages-browser)/./src/app/pages/dashboard/register/page.js":
/*!**************************************************!*\
  !*** ./src/app/pages/dashboard/register/page.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _app_functions_handlerAcessAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/functions/handlerAcessAPI */ \"(app-pages-browser)/./src/app/functions/handlerAcessAPI.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _app_componentes_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/componentes/NavBar */ \"(app-pages-browser)/./src/app/componentes/NavBar.js\");\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./estilo.css */ \"(app-pages-browser)/./src/app/pages/dashboard/register/estilo.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Register() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handlerFormSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            await (0,_app_functions_handlerAcessAPI__WEBPACK_IMPORTED_MODULE_1__.postUser)(user);\n            await new Promise((resolve)=>{\n                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Usu\\xe1rio cadastrado com sucesso!!\");\n                setTimeout(resolve, 5000);\n            });\n        } catch (e) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Erro ao cadastrar usuario!!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"register\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_componentes_NavBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                linkAtivo: 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"register-form\",\n                        onSubmit: handlerFormSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Cadastrar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n                                lineNumber: 38,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Nome\",\n                                type: \"text\",\n                                required: true,\n                                onChange: (e)=>{\n                                    setUser({\n                                        ...user,\n                                        name: e.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n                                lineNumber: 39,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"E-mail\",\n                                type: \"email\",\n                                required: true,\n                                onChange: (e)=>{\n                                    setUser({\n                                        ...user,\n                                        email: e.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Senha\",\n                                type: \"password\",\n                                required: true,\n                                onChange: (e)=>{\n                                    setUser({\n                                        ...user,\n                                        password: e.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n                                lineNumber: 51,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button-submit\",\n                                children: \"Salvar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n                                lineNumber: 57,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n                        lineNumber: 59,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\Aplication-Users\\\\src\\\\app\\\\pages\\\\dashboard\\\\register\\\\page.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Register, \"o6klLPF7Pg5GjYRbUdGRFDC8yyI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3JlZ2lzdGVyL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUyRDtBQUNuQjtBQUNJO0FBQ1c7QUFDUjtBQUNEO0FBQ3hCO0FBRVAsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUMvQlEsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdWLDBEQUFTQTtJQUUxQixNQUFNVyxvQkFBb0IsT0FBT0M7UUFDL0JBLE1BQU1DLGNBQWM7UUFDcEIsSUFBRztZQUNELE1BQU1oQix3RUFBUUEsQ0FBQ1E7WUFDZixNQUFNLElBQUlTLFFBQVEsQ0FBQ0M7Z0JBQ2pCYixpREFBS0EsQ0FBQ2MsT0FBTyxDQUFDO2dCQUNkQyxXQUFXRixTQUFTO1lBQ3RCO1FBQ0YsRUFBRSxVQUFNO1lBQ05iLGlEQUFLQSxDQUFDZ0IsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2pCLCtEQUFNQTtnQkFBQ2tCLFdBQVc7Ozs7OzswQkFDckIsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUtGLFdBQVU7d0JBQWdCRyxVQUFVWjs7MENBQzFDLDhEQUFDYTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQztnQ0FDR0MsYUFBWTtnQ0FDWkMsTUFBSztnQ0FDTEMsUUFBUTtnQ0FDUkMsVUFBVSxDQUFDQztvQ0FBUXhCLFFBQVE7d0NBQUUsR0FBR0QsSUFBSTt3Q0FBRUUsTUFBTXVCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQ0FBQztnQ0FBRzs7Ozs7OzBDQUVoRSw4REFBQ1A7Z0NBQ0NDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLFFBQVE7Z0NBQ1JDLFVBQVUsQ0FBQ0M7b0NBQVF4QixRQUFRO3dDQUFFLEdBQUdELElBQUk7d0NBQUVHLE9BQU9zQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0NBQUM7Z0NBQUc7Ozs7OzswQ0FFakUsOERBQUNQO2dDQUNDQyxhQUFZO2dDQUNaQyxNQUFLO2dDQUNMQyxRQUFRO2dDQUNSQyxVQUFVLENBQUNDO29DQUFReEIsUUFBUTt3Q0FBRSxHQUFHRCxJQUFJO3dDQUFFSSxVQUFVcUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29DQUFDO2dDQUFHOzs7Ozs7MENBRXBFLDhEQUFDQztnQ0FBT2IsV0FBVTswQ0FBZ0I7Ozs7Ozs7Ozs7OztrQ0FFcEMsOERBQUNuQiwwREFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJCO0dBcER3Qkc7O1FBT0xKLHNEQUFTQTs7O0tBUEpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3JlZ2lzdGVyL3BhZ2UuanM/Mjk3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHBvc3RVc2VyIH0gZnJvbSBcIkAvYXBwL2Z1bmN0aW9ucy9oYW5kbGVyQWNlc3NBUElcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudGVzL05hdkJhclwiO1xyXG5pbXBvcnQgJy4vZXN0aWxvLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9KTtcclxuICBcclxuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVyRm9ybVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeXtcclxuICAgICAgYXdhaXQgcG9zdFVzZXIodXNlcik7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlVzdcOhcmlvIGNhZGFzdHJhZG8gY29tIHN1Y2Vzc28hIVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMDApXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRXJybyBhbyBjYWRhc3RyYXIgdXN1YXJpbyEhXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJcIj5cclxuICAgICAgPE5hdkJhciBsaW5rQXRpdm89ezF9IC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWdpc3Rlci1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZXJGb3JtU3VibWl0fT5cclxuICAgICAgPGgyPkNhZGFzdHJhcjwvaDI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J05vbWUnXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldFVzZXIoeyAuLi51c2VyLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSB9fT5cclxuICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0UtbWFpbCdcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldFVzZXIoeyAuLi51c2VyLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSkgfX0+XHJcbiAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZW5oYSdcclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRVc2VyKHsgLi4udXNlciwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pIH19PlxyXG4gICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc3VibWl0XCI+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInBvc3RVc2VyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJOYXZCYXIiLCJSZWdpc3RlciIsInVzZXIiLCJzZXRVc2VyIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwdXNoIiwiaGFuZGxlckZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibGlua0F0aXZvIiwiZm9ybSIsIm9uU3VibWl0IiwiaDIiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/dashboard/register/page.js\n"));

/***/ })

});