(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "5lyv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{title:'👩‍💻👨‍💻 Project Include Site Redesign',date:'January 2020',description:'The redesigned 2019/2020 site for the Project Include non-profit organization',source:'https://github.com/ShabazBadshah/project-include-site',demo:'https://projectinclude.ca',tags:['jekyll','frontend','web development']},{title:'🎯 SCRUMtious',date:'March 2018',description:'An Android app that helps manage the logistics of remote teams working on projects in agile Scrum environments.',source:'https://github.com/ShabazBadshah/SCRUMtious',demo:'https://shabazbadshah.com/SCRUMtious-Website/',tags:['android','programming','app','java']},{title:'v1 - 🏠 shabazbadshah.github.io',date:'May 2017',description:'The 1st iteration of my personal website/blog created using Jekyll, Sass, and Jade',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io/tree/site-v1-jekyll-sass-jade',article:'https://shabazbadshah.com/blog/my-personal-website-v1/',demo:'https://shabazbadshah.com/PersonalWebsiteV1/',tags:['sass','jekyll','web development','jade']},{title:'🐍 Python Google Images Downloader',date:'February 2017',description:'A Python program that downloads images from google images based on a given query.',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io',tags:['data structures','programming','python','web development']},{title:'🕹 A Tetris Remake',date:'June 2015',description:'A remake of Tetris in Java.',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io',article:'https://shabazbadshah.com/blog/a-tetris-remake/',tags:['programming','java','game design']},{title:'👾 Space Wars - A Space Invaders Remake',date:'June 2014',description:'Space Wars - A Space Invaders clone.',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io',article:'https://shabazbadshah.com/blog/space-invaders-remake/',tags:['programming','java','game design']}]);

/***/ }),

/***/ "Ofmp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wbzz");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vOnD");
/* harmony import */ var react_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("l2P8");
/* harmony import */ var react_animations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zCNn");
/* harmony import */ var _content_work_work_showcase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5lyv");
/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Knq1");
/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uW3I");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("jNNy");
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/accessible-emoji */var sortWorkShowCaseItemByDateDesc=function sortWorkShowCaseItemByDateDesc(workItemA,workItemB){var dateA=new Date(workItemA.date);var dateB=new Date(workItemB.date);if(dateA>dateB){return-1;}else if(dateA<dateB){return 1;}return 0;};var AllWork=function AllWork(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layouts__WEBPACK_IMPORTED_MODULE_6__[/* Layout */ "a"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{title:"Home"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWorkHighlightSection,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledH1,null,"\uD83D\uDD0E ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," All Work"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledH2,null,"Here's everything of note I've worked on"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWorkItemList,null,_content_work_work_showcase_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].sort(function(workItemA,workItemB){return sortWorkShowCaseItemByDateDesc(workItemA,workItemB);}).map(function(workData,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cards__WEBPACK_IMPORTED_MODULE_7__[/* WorkCard */ "b"],{key:i,title:workData.title,date:workData.date,description:workData.description,cardLink:workData.source},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLinkWrapper,null,workData.article&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink,{to:workData.article},"Article"),workData.demo&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink,{to:workData.demo},"Demo")));}))));};/* harmony default export */ __webpack_exports__["default"] = (AllWork);AllWork.defaultProps={enableDarkMode:false};var StyledWorkLinkSourceWrapper=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"])(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"]).withConfig({displayName:"work__StyledWorkLinkSourceWrapper",componentId:"sc-10osjz4-0"})(["text-decoration:none;color:unset;"]);var StyledLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"])(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"]).withConfig({displayName:"work__StyledLink",componentId:"sc-10osjz4-1"})(["display:inline-block;text-align:center;text-decoration:none;font-weight:500;text-underline-offset:0.2rem;cursor:pointer;padding:0.5rem 2rem;border-radius:4px;color:#f9f8f7;box-shadow:0.5rem 0.5rem 1.5rem 0 rgba(0,0,0,0.06);margin-top:8px;margin-right:1.5rem;border:",";background-color:",";&:first-child{margin-left:0;}&:hover{border:",";color:",";background-color:",";transform:translateY(-0.1rem);transition:all 100ms ease-out;}@media only screen and ","{margin:0.5rem 0;width:100%;margin-right:0;}"],function(props){return"1.5px "+props.theme.primaryThemeColour+" solid";},function(props){return props.theme.primaryThemeColour;},function(props){return props.theme.linkButtonSmallBorder;},function(props){return props.theme.linkButtonTextColour;},function(props){return props.theme.linkButtonHoverColour;},_assets_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_4__[/* deviceMaxWidth */ "a"].mobileL);var StyledLinkWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].div.withConfig({displayName:"work__StyledLinkWrapper",componentId:"sc-10osjz4-2"})(["margin:0.7rem 0 0 0;@media only screen and ","{flex-direction:column;}"],_assets_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_4__[/* deviceMaxWidth */ "a"].mobileL);var StyledWorkItemList=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].ul.withConfig({displayName:"work__StyledWorkItemList",componentId:"sc-10osjz4-3"})(["width:100%;display:flex;flex-direction:row;flex-wrap:wrap;list-style:none;border-radius:8px;padding:0;"]);var StyledWorkHighlightSection=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].div.withConfig({displayName:"work__StyledWorkHighlightSection",componentId:"sc-10osjz4-4"})(["display:flex;flex-direction:column;margin:0 0 4rem 0;width:1024px;animation:"," 400ms ease-in;@media only screen and ","{width:800px;max-width:100%;}@media only screen and ","{flex-direction:column;align-items:flex-start;margin:1rem 0 3rem 0;}"],Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* keyframes */ "d"])(["",""],react_animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]),_assets_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_4__[/* deviceMaxWidth */ "a"].laptop,_assets_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_4__[/* deviceMaxWidth */ "a"].mobileL);var StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].h1.withConfig({displayName:"work__StyledH1",componentId:"sc-10osjz4-5"})(["width:100%;margin:2rem 0 1rem 0;font-family:'Times New Roman',Times,serif;font-weight:800;font-size:4em;text-align:center;"]);var StyledH2=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].h2.withConfig({displayName:"work__StyledH2",componentId:"sc-10osjz4-6"})(["width:100%;font-size:1.2rem;margin:0 0 1rem 0;font-weight:400;font-style:italic;word-spacing:0.1rem;text-align:center;"]);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-work-js-f2296829cd5a4f04678b.js.map