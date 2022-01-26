self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PaginaInicial; }
/* harmony export */ });
/* harmony import */ var D_Programming_Alura_Imers_o_React_NextJs_4_Disclone_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ "./node_modules/@skynexui/components/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ "./config.json");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Programming\\Alura - Imers\xE3o React-NextJs 4\\Disclone\\pages\\index.js",
    _s = $RefreshSig$();






function GlobalStyle() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
    id: "1543040806",
    children: "*{margin:0;padding:0;box-sizing:border-box;list-style:none;}body{font-family:'Open Sans',sans-serif;}html,body,#__next{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;}#__next{-webkit-flex:1;-ms-flex:1;flex:1;}#__next>*{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtbWluZ1xcQWx1cmEgLSBJbWVyc8OjbyBSZWFjdC1OZXh0SnMgNFxcRGlzY2xvbmVcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNMkIsQUFHMEIsQUFNMkIsQUFJbkIsQUFLVixBQUdBLFNBakJHLFFBVUcsRUFUUyxjQWMxQixBQUdBLEVBWkEsTUFKb0IsZ0JBQ3BCLGtDQVFXLGlDQUNYIiwiZmlsZSI6IkQ6XFxQcm9ncmFtbWluZ1xcQWx1cmEgLSBJbWVyc8OjbyBSZWFjdC1OZXh0SnMgNFxcRGlzY2xvbmVcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBBcHAgZml0IEhlaWdodCAqLyBcclxuICAgICAgICAgICAgaHRtbCwgYm9keSwgI19fbmV4dCB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNfX25leHQge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0ID4gKiB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIC4vQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBUaXRsZShwcm9wcykge1xyXG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgJHtUYWd9IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWyc1MDAnXX07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuLy8gICAgICAgICAgICAgPFRpdGxlIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhISE8L1RpdGxlPlxyXG4vLyAgICAgICAgICAgICA8aDI+RGlzY29yZCAtIE5GTDwvaDI+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApXHJcbi8vIH1cclxuICBcclxuLy8gICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcclxuICAgIC8vIGNvbnN0IHVzZXJuYW1lID0gJ29tYXJpb3NvdXRvJztcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJ0Zpbm81OScpO1xyXG4gICAgY29uc3Qgcm90ZWFtZW50byA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgc206ICdyb3cnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzMycHgnLCBtYXJnaW46ICcxNnB4JyxcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2Z1bmN0aW9uIChpbmZvc0RvRXZlbnRvKSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvc0RvRXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWxndcOpbSBzdWJtZXRldSBvIGZvcm0nKTtcclxuICAgICAgICAgICAgICAgIHJvdGVhbWVudG8ucHVzaCgnL2NoYXQnKTtcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jaGF0JztcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogJzUwJScgfSwgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMzJweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUaXRsZSB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImJvZHkzXCIgc3R5bGVTaGVldD17eyBtYXJnaW5Cb3R0b206ICczMnB4JywgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSB9fT5cclxuICAgICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgXHJcbiAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXN1YXJpbyBkaWdpdG91JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25kZSB0YSBvIHZhbG9yP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJvY2FyIG8gdmFsb3IgZGEgdmFyaWF2ZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXRyYXbDqXMgZG8gUmVhY3QgZSBhdmlzZSBxdWVtIHByZWNpc2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c3VhcmlvIGRpZ2l0b3UnLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBPbmRlIHRhIG8gdmFsb3I/XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAvLyBUcm9jYXIgbyB2YWxvciBkYSB2YXJpYXZlbFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdHJhdsOpcyBkbyBSZWFjdCBlIGF2aXNlIHF1ZW0gcHJlY2lzYVxyXG4gICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgICAgbmV1dHJhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0VudHJhcidcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICBcclxuICBcclxuICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyMDBweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9Il19 */\n/*@ sourceURL=D:\\\\Programming\\\\Alura - Imers\xE3o React-NextJs 4\\\\Disclone\\\\pages\\\\index.js */"
  }, void 0, false, void 0, this);
}

_c = GlobalStyle;

function Title(props) {
  var Tag = props.tag;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Tag, {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([["610266952", [Tag, _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[500]]]]),
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "610266952",
      dynamic: [Tag, _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[500]],
      children: "".concat(Tag, ".__jsx-style-dynamic-selector{color:").concat(_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[500], ";font-size:24px;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtbWluZ1xcQWx1cmEgLSBJbWVyc8OjbyBSZWFjdC1OZXh0SnMgNFxcRGlzY2xvbmVcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3dCLEFBR3dELG1DQUNwQixlQUNDLGdCQUNwQiIsImZpbGUiOiJEOlxcUHJvZ3JhbW1pbmdcXEFsdXJhIC0gSW1lcnPDo28gUmVhY3QtTmV4dEpzIDRcXERpc2Nsb25lXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZX0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nXHJcblxyXG5mdW5jdGlvbiBHbG9iYWxTdHlsZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgICAgICAgIGh0bWwsIGJvZHksICNfX25leHQge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI19fbmV4dCA+ICoge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiAuL0FwcCBmaXQgSGVpZ2h0ICovIFxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICAgIGNvbnN0IFRhZyA9IHByb3BzLnRhZztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRhZz57cHJvcHMuY2hpbGRyZW59PC9UYWc+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICR7VGFnfSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snNTAwJ119O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbi8vICAgICAgICAgICAgIDxUaXRsZSB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhISEhPC9UaXRsZT5cclxuLy8gICAgICAgICAgICAgPGgyPkRpc2NvcmQgLSBORkw8L2gyPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcbiAgXHJcbi8vICAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XHJcbiAgICAvLyBjb25zdCB1c2VybmFtZSA9ICdvbWFyaW9zb3V0byc7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCdGaW5vNTknKTtcclxuICAgIGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZyknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIHhzOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIHNtOiAncm93JyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNzAwcHgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBhcz1cImZvcm1cIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtmdW5jdGlvbiAoaW5mb3NEb0V2ZW50bykge1xyXG4gICAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FsZ3XDqW0gc3VibWV0ZXUgbyBmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICByb3RlYW1lbnRvLnB1c2goJy9jaGF0Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY2hhdCc7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206ICc1MCUnIH0sIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGl0bGUgdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0gfX0+XHJcbiAgICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gIFxyXG4gICAgICAgICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzdWFyaW8gZGlnaXRvdScsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uZGUgdGEgbyB2YWxvcj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0cmF2w6lzIGRvIFJlYWN0IGUgYXZpc2UgcXVlbSBwcmVjaXNhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXN1YXJpbyBkaWdpdG91JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgLy8gT25kZSB0YSBvIHZhbG9yP1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgLy8gVHJvY2FyIG8gdmFsb3IgZGEgdmFyaWF2ZWxcclxuICAgICAgICAgICAgICAgICAgLy8gYXRyYXbDqXMgZG8gUmVhY3QgZSBhdmlzZSBxdWVtIHByZWNpc2FcclxuICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdFbnRyYXInXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgXHJcbiAgXHJcbiAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzI0MHB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDAwcHgnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt1c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSJdfQ== */\n/*@ sourceURL=D:\\\\Programming\\\\Alura - Imers\xE3o React-NextJs 4\\\\Disclone\\\\pages\\\\index.js */")
    }, void 0, false, void 0, this)]
  }, void 0, true);
} // function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />
//             <Title tag="h2">Boas vindas de volta!!!</Title>
//             <h2>Discord - NFL</h2>
//         </div>
//     )
// }
//   export default HomePage


_c2 = Title;
function PaginaInicial() {
  _s();

  // const username = 'omariosouto';
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState('Fino59'),
      _React$useState2 = (0,D_Programming_Alura_Imers_o_React_NextJs_4_Disclone_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      username = _React$useState2[0],
      setUsername = _React$useState2[1];

  var roteamento = useRouter();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {
      styleSheet: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],
        backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {
        styleSheet: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          width: '100%',
          maxWidth: '700px',
          borderRadius: '5px',
          padding: '32px',
          margin: '16px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[700]
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {
          as: "form",
          onSubmit: function onSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            console.log('Alguém submeteu o form');
            roteamento.push('/chat'); // window.location.href = '/chat';
          },
          styleSheet: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: {
              xs: '100%',
              sm: '50%'
            },
            textAlign: 'center',
            marginBottom: '32px'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {
            tag: "h2",
            children: "Boas vindas de volta!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            variant: "body3",
            styleSheet: {
              marginBottom: '32px',
              color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]
            },
            children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {
            value: username,
            onChange: function onChange(event) {
              console.log('usuario digitou', event.target.value); // Onde ta o valor?

              var valor = event.target.value; // Trocar o valor da variavel
              // através do React e avise quem precisa

              setUsername(valor);
            },
            fullWidth: true,
            textFieldColors: {
              neutral: {
                textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],
                mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],
                mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],
                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800]
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "submit",
            label: "Entrar",
            fullWidth: true,
            buttonColors: {
              contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals["000"],
              mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],
              mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],
              mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {
          styleSheet: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '200px',
            padding: '16px',
            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800],
            border: '1px solid',
            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],
            borderRadius: '10px',
            flex: 1,
            minHeight: '240px'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
            styleSheet: {
              borderRadius: '50%',
              marginBottom: '16px'
            },
            src: "https://github.com/".concat(username, ".png")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            variant: "body4",
            styleSheet: {
              color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],
              backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],
              padding: '3px 10px',
              borderRadius: '1000px'
            },
            children: username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

_s(PaginaInicial, "GIgNW1NgGtk9Gm08y6z4SRriKhM=", true);

_c3 = PaginaInicial;

var _c, _c2, _c3;

$RefreshReg$(_c, "GlobalStyle");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "PaginaInicial");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJUaXRsZSIsInByb3BzIiwiVGFnIiwidGFnIiwiYXBwQ29uZmlnIiwiY2hpbGRyZW4iLCJQYWdpbmFJbmljaWFsIiwiUmVhY3QiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicm90ZWFtZW50byIsInVzZVJvdXRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJuYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhbG9yIiwibmV1dHJhbCIsInRleHRDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckhpZ2hsaWdodCIsImNvbnRyYXN0Q29sb3IiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZmxleCIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQ25CO0FBQUE7QUFBQTtBQUFBO0FBMEJIOztLQTNCUUEsVzs7QUE2QlQsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ2xCLE1BQU1DLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxH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REFBQyx1REFBRDtBQUNFLHNCQUFVLEVBQUU7QUFDVjNCLDBCQUFZLEVBQUUsS0FESjtBQUVWVSwwQkFBWSxFQUFFO0FBRkosYUFEZDtBQUtFLGVBQUcsK0JBQXdCM0IsUUFBeEI7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWZGLGVBc0JFLDhEQUFDLHNEQUFEO0FBQ0UsbUJBQU8sRUFBQyxPQURWO0FBRUUsc0JBQVUsRUFBRTtBQUNWNEIsbUJBQUssRUFBRWhDLG9FQURHO0FBRVZXLDZCQUFlLEVBQUVYLG9FQUZQO0FBR1ZzQixxQkFBTyxFQUFFLFVBSEM7QUFJVkQsMEJBQVksRUFBRTtBQUpKLGFBRmQ7QUFBQSxzQkFTR2pCO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtSUQ7O0dBeElxQkYsYTs7TUFBQUEsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYWI1ZjJlMTVmNTdjY2UxYWFlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2V9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJ1xyXG5cclxuZnVuY3Rpb24gR2xvYmFsU3R5bGUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEFwcCBmaXQgSGVpZ2h0ICovIFxyXG4gICAgICAgICAgICBodG1sLCBib2R5LCAjX19uZXh0IHtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNfX25leHQgPiAqIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogLi9BcHAgZml0IEhlaWdodCAqLyBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpdGxlKHByb3BzKSB7XHJcbiAgICBjb25zdCBUYWcgPSBwcm9wcy50YWc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAke1RhZ30ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzUwMCddfTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4vLyAgICAgICAgICAgICA8VGl0bGUgdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSEhITwvVGl0bGU+XHJcbi8vICAgICAgICAgICAgIDxoMj5EaXNjb3JkIC0gTkZMPC9oMj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gfVxyXG4gIFxyXG4vLyAgIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xyXG4gICAgLy8gY29uc3QgdXNlcm5hbWUgPSAnb21hcmlvc291dG8nO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnRmlubzU5Jyk7XHJcbiAgICBjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKCk7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4czogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBzbTogJ3JvdycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzcwMHB4JyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnMzJweCcsIG1hcmdpbjogJzE2cHgnLFxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgICBvblN1Ym1pdD17ZnVuY3Rpb24gKGluZm9zRG9FdmVudG8pIHtcclxuICAgICAgICAgICAgICAgIGluZm9zRG9FdmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbGd1w6ltIHN1Ym1ldGV1IG8gZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgcm90ZWFtZW50by5wdXNoKCcvY2hhdCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2NoYXQnO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIiBzdHlsZVNoZWV0PXt7IG1hcmdpbkJvdHRvbTogJzMycHgnLCBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdIH19PlxyXG4gICAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICBcclxuICAgICAgICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c3VhcmlvIGRpZ2l0b3UnLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmRlIHRhIG8gdmFsb3I/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcm9jYXIgbyB2YWxvciBkYSB2YXJpYXZlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHJhdsOpcyBkbyBSZWFjdCBlIGF2aXNlIHF1ZW0gcHJlY2lzYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzdWFyaW8gZGlnaXRvdScsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIE9uZGUgdGEgbyB2YWxvcj9cclxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFRyb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF0cmF2w6lzIGRvIFJlYWN0IGUgYXZpc2UgcXVlbSBwcmVjaXNhXHJcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbG9yKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nRW50cmFyJ1xyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gIFxyXG4gIFxyXG4gICAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNDBweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzNweCAxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwMHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9