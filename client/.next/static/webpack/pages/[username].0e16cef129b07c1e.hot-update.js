"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[username]",{

/***/ "./pages/[username].js":
/*!*****************************!*\
  !*** ./pages/[username].js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Username)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"../node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Username() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const { username } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Username.useEffect\": ()=>{\n            if (username) {\n                console.log(username);\n            }\n        }\n    }[\"Username.useEffect\"], [\n        username\n    ]);\n    console.log(username);\n    console.log('Calling Users...');\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Username.useEffect\": ()=>{\n            if (!username) {\n                console.log('Username not available');\n                return;\n            }\n            console.log('User First Name: ', username);\n            console.log('Router is Ready: ', router.isReady);\n            setUserData(null);\n            setLoading(true);\n            const token = localStorage.getItem('jwtToken');\n            fetch(\"http://localhost:8000/users/\".concat(username), {\n                credentials: 'include',\n                headers: {\n                    'Content-Type': 'application/json',\n                    'Authorization': \"Bearer \".concat(token)\n                }\n            }).then({\n                \"Username.useEffect\": (response)=>response.json()\n            }[\"Username.useEffect\"]).then({\n                \"Username.useEffect\": (data)=>setUserData(data)\n            }[\"Username.useEffect\"]).catch({\n                \"Username.useEffect\": (error)=>{\n                    console.log('Error fetching user', error);\n                    router.push('/');\n                }\n            }[\"Username.useEffect\"]).finally({\n                \"Username.useEffect\": ()=>{\n                    setLoading(false);\n                }\n            }[\"Username.useEffect\"]);\n        }\n    }[\"Username.useEffect\"], [\n        username\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Still loading your garden...\"\n        }, void 0, false, {\n            fileName: \"/Users/nslittle/Desktop/Life/coding/garden/client/pages/[username].js\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, this);\n    }\n    if (!userData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"User not found...\"\n        }, void 0, false, {\n            fileName: \"/Users/nslittle/Desktop/Life/coding/garden/client/pages/[username].js\",\n            lineNumber: 58,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Home, {}, void 0, false, {\n                fileName: \"/Users/nslittle/Desktop/Life/coding/garden/client/pages/[username].js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Welcome, \",\n                    username\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nslittle/Desktop/Life/coding/garden/client/pages/[username].js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Let's Grow Your Garden\"\n            }, void 0, false, {\n                fileName: \"/Users/nslittle/Desktop/Life/coding/garden/client/pages/[username].js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Here's some personalized data:\"\n            }, void 0, false, {\n                fileName: \"/Users/nslittle/Desktop/Life/coding/garden/client/pages/[username].js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(userData, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/nslittle/Desktop/Life/coding/garden/client/pages/[username].js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Username, \"TYh7Y5/TXNDMcdQzUBZNeB1Q84Y=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Username;\nvar _c;\n$RefreshReg$(_c, \"Username\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2QztBQUNEO0FBRTdCLFNBQVNHOztJQUN0QixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTyxDQUFDSyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzFDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVPLFFBQVEsRUFBRSxHQUFHTCxPQUFPTSxLQUFLO0lBRWpDVCxnREFBU0E7OEJBQUM7WUFDUixJQUFJUSxVQUFVO2dCQUNaRSxRQUFRQyxHQUFHLENBQUNIO1lBQ2Q7UUFDRjs2QkFBRztRQUFDQTtLQUFTO0lBRWJFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWkUsUUFBUUMsR0FBRyxDQUFDO0lBRVpYLGdEQUFTQTs4QkFBQztZQUVSLElBQUksQ0FBQ1EsVUFBVTtnQkFDYkUsUUFBUUMsR0FBRyxDQUFDO2dCQUNaO1lBQ0Y7WUFFQUQsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkg7WUFDakNFLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJSLE9BQU9TLE9BQU87WUFFL0NQLFlBQVk7WUFDWkUsV0FBVztZQUVULE1BQU1NLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztZQUVuQ0MsTUFBTSwrQkFBd0MsT0FBVFIsV0FBWTtnQkFDL0NTLGFBQWE7Z0JBQ1hDLFNBQVM7b0JBQ1AsZ0JBQWdCO29CQUNoQixpQkFBaUIsVUFBZ0IsT0FBTkw7Z0JBQzdCO1lBQ0osR0FDR00sSUFBSTtzQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJO3FDQUNoQ0YsSUFBSTtzQ0FBQyxDQUFDRyxPQUFTakIsWUFBWWlCO3FDQUMzQkMsS0FBSztzQ0FBQyxDQUFDQztvQkFDTmQsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QmE7b0JBQ25DckIsT0FBT3NCLElBQUksQ0FBQztnQkFDZDtxQ0FDQ0MsT0FBTztzQ0FBQztvQkFDUG5CLFdBQVc7Z0JBQ2I7O1FBQ047NkJBQUc7UUFBQ0M7S0FBUztJQUViLElBQUlGLFNBQVM7UUFDWCxxQkFBTyw4REFBQ3FCO3NCQUFHOzs7Ozs7SUFDYjtJQUVBLElBQUksQ0FBQ3ZCLFVBQVU7UUFDYixxQkFBTyw4REFBQ3VCO3NCQUFHOzs7Ozs7SUFDYjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDRDs7b0JBQUc7b0JBQVVuQjs7Ozs7OzswQkFDZCw4REFBQ3FCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDOzBCQUFLQyxLQUFLQyxTQUFTLENBQUM3QixVQUFVLE1BQU07Ozs7Ozs7O0FBRzNDO0dBakV3QkY7O1FBQ1BILHNEQUFTQTs7O0tBREZHIiwic291cmNlcyI6WyIvVXNlcnMvbnNsaXR0bGUvRGVza3RvcC9MaWZlL2NvZGluZy9nYXJkZW4vY2xpZW50L3BhZ2VzL1t1c2VybmFtZV0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0ICB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VybmFtZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0ICBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJuYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VybmFtZSk7XG4gICAgfVxuICB9LCBbdXNlcm5hbWVdKTtcblxuICBjb25zb2xlLmxvZyh1c2VybmFtZSk7XG4gIGNvbnNvbGUubG9nKCdDYWxsaW5nIFVzZXJzLi4uJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGlmICghdXNlcm5hbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2VybmFtZSBub3QgYXZhaWxhYmxlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1VzZXIgRmlyc3QgTmFtZTogJywgdXNlcm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKCdSb3V0ZXIgaXMgUmVhZHk6ICcsIHJvdXRlci5pc1JlYWR5KTtcbiAgXG4gICAgc2V0VXNlckRhdGEobnVsbCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0VG9rZW4nKTtcblxuICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2Vycy8ke3VzZXJuYW1lfWAsIHtcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRVc2VyRGF0YShkYXRhKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIHVzZXInLCBlcnJvcik7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgfSwgW3VzZXJuYW1lXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGgxPlN0aWxsIGxvYWRpbmcgeW91ciBnYXJkZW4uLi48L2gxPjtcbiAgfVxuICBcbiAgaWYgKCF1c2VyRGF0YSkge1xuICAgIHJldHVybiA8aDE+VXNlciBub3QgZm91bmQuLi48L2gxPlxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SG9tZSAvPlxuICAgICAgPGgxPldlbGNvbWUsIHt1c2VybmFtZX08L2gxPlxuICAgICAgPGgyPkxldCdzIEdyb3cgWW91ciBHYXJkZW48L2gyPlxuICAgICAgPHA+SGVyZSdzIHNvbWUgcGVyc29uYWxpemVkIGRhdGE6PC9wPlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkodXNlckRhdGEsIG51bGwsIDIpfTwvcHJlPlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlcm5hbWUiLCJyb3V0ZXIiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VybmFtZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImlzUmVhZHkiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInB1c2giLCJmaW5hbGx5IiwiaDEiLCJIb21lIiwiaDIiLCJwIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[username].js\n"));

/***/ })

});