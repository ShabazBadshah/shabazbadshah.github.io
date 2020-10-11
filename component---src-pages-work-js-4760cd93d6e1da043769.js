(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "5lyv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{title:'🏠 shabazbadshah.github.io',date:'June 2020',description:'The 4th iteration of my personal website/blog created using Gatsby backed by the Forestry CMS.',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io/tree/site-v1-jekyll-sass-jade',article:'https://shabazbadshah.com/blog/my-personal-website-v1/',demo:'https://shabazbadshah.com',tags:['react','gatsby','web development','frontend']},{title:'👩‍💻👨‍💻 Project Include Site Redesign',date:'January 2020',description:'The redesigned 2019/2020 site for the Project Include non-profit organization',source:'https://github.com/ShabazBadshah/project-include-site',demo:'https://projectinclude.ca',tags:['jekyll','frontend','web development']},{title:'🎯 SCRUMtious',date:'March 2018',description:'An Android app that helps manage the logistics of remote teams working on projects in agile Scrum environments. The app keeps track of their user stories, tasks, sprint backlog, product backlog, amongst many other things.',source:'https://github.com/ShabazBadshah/SCRUMtious',demo:'https://shabazbadshah.com/SCRUMtious-Website/',tags:['android','programming','app','java']},{title:'🎨 Python Google Images Downloader',date:'February 2017',description:"A Python program that downloads images from google images based on a query given and saves them into seperate folders. I made this since Google deprecated their Google Images API and I didn't want to manually save all images.",source:'https://github.com/ShabazBadshah/shabazbadshah.github.io',tags:['data structures','programming','python','web development']},{title:'🕹 A Tetris Remake',date:'June 2015',description:'A remake of Tetris in Java.',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io',article:'https://shabazbadshah.com/projects/tetris-remake/',tags:['programming','java','game design']},{title:'👾 Space Wars - A Space Invaders Remake',date:'June 2014',description:'Space Wars - My First Serious Attempt at a Video Game. This is a game I created that is heavily based off of Space Invaders. The objective is to survive as long as you can.',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io',article:'https://shabazbadshah.com/blog/space-invaders-remake/',tags:['programming','java','game design']}]);

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
/* harmony import */ var _assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yf23");
/* harmony import */ var _media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9ix+");
/* harmony import */ var _content_work_work_showcase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5lyv");
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Bl7J");
/* harmony import */ var _components_seo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vrFN");
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/accessible-emoji */var sortWorkShowCaseItemByDateDesc=function sortWorkShowCaseItemByDateDesc(workItemA,workItemB){var dateA=new Date(workItemA.date);var dateB=new Date(workItemB.date);if(dateA>dateB){return-1;}else if(dateA<dateB){return 1;}return 0;};var AllWork=function AllWork(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{title:"Home"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWorkHighlightSection,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledH1,null,"\uD83D\uDD0E ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," All Work"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledH2,null,"Here's everything of note I've worked on"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWorkItemList,null,_content_work_work_showcase_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].sort(function(workItemA,workItemB){return sortWorkShowCaseItemByDateDesc(workItemA,workItemB);}).map(function(workData,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledListItem,{to:""+workData.source,key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWorkLinkSourceWrapper,{to:workData.source},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWorkListItemTitle,null,workData.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWorkListItemDate,null,workData.date)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWorkListItemBlurb,null,workData.description),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLinkWrapper,null,workData.article&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink,{href:workData.article},"Article"),workData.demo&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink,{href:workData.demo},"Demo"))));}))));};/* harmony default export */ __webpack_exports__["default"] = (AllWork);AllWork.defaultProps={enableDarkMode:false};var StyledWorkLinkSourceWrapper=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"])(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"]).withConfig({displayName:"work__StyledWorkLinkSourceWrapper",componentId:"sc-10osjz4-0"})(["text-decoration:none;color:unset;"]);var StyledLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"])(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"]).withConfig({displayName:"work__StyledLink",componentId:"sc-10osjz4-1"})(["text-align:center;text-decoration:none;font-weight:500;text-underline-offset:0.2rem;cursor:pointer;padding:0.7rem 3rem;border-radius:4px;color:#f9f8f7;box-shadow:0.5rem 0.5rem 1.5rem 0 rgba(0,0,0,0.06);margin-right:1rem;border:2px "," solid;background-color:",";&:hover{border:",";color:",";background-color:",";transform:translateY(-0.1rem);transition:all 100ms ease-out;}@media only screen and ","{margin:0.5rem 0;width:100%;margin-right:0;}"],_assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_4__[/* globalThemeColour */ "a"],_assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_4__[/* globalThemeColour */ "a"],function(props){return props.theme.linkButtonSmallBorder;},function(props){return props.theme.linkButtonTextColour;},function(props){return props.theme.linkButtonHoverColour;},_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__[/* deviceMaxWidth */ "a"].mobileL);var StyledLinkWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].div.withConfig({displayName:"work__StyledLinkWrapper",componentId:"sc-10osjz4-2"})(["display:flex;margin:1.5rem 0 0.7rem 0;@media only screen and ","{flex-direction:column;}"],_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__[/* deviceMaxWidth */ "a"].mobileL);var StyledWorkListItemBlurb=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].p.withConfig({displayName:"work__StyledWorkListItemBlurb",componentId:"sc-10osjz4-3"})(["margin:1.5rem 0 0 0;font-weight:400;font-style:italic;line-height:1.4rem;@media only screen and ","{margin:1.5rem 0;}"],_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__[/* deviceMaxWidth */ "a"].mobileL);var StyledWorkItemList=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].ul.withConfig({displayName:"work__StyledWorkItemList",componentId:"sc-10osjz4-4"})(["width:100%;display:flex;flex-direction:row;flex-wrap:wrap;list-style:none;border-radius:8px;padding:0;"]);var StyledListItem=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].div.withConfig({displayName:"work__StyledListItem",componentId:"sc-10osjz4-5"})(["width:49%;padding:0.8rem 1.4rem;margin:0.5rem 0;display:flex;flex-direction:column;text-decoration:none;color:unset;box-shadow:",";background-color:",";transition:background-color 100ms ease-out;border-radius:5px;cursor:pointer;border:",";&:hover{transition:background-color 100ms ease-in;cursor:pointer;background-color:",";}&:nth-child(odd){margin-right:1rem;}@media only screen and ","{width:100%;&:nth-child(odd){margin-right:0;}}"],function(props){return props.theme.cardDropShadow;},function(props){return props.theme.cardBgColour;},function(props){return props.theme.cardBorder;},function(props){return props.theme.cardHoverColour;},_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__[/* deviceMaxWidth */ "a"].mobileL);var StyledBlogListItemTag=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].h5.withConfig({displayName:"work__StyledBlogListItemTag",componentId:"sc-10osjz4-6"})(["margin:0 4px;padding:0.3rem 0.6rem;border-radius:4px;border:1.5px "," solid;font-weight:normal;color:",";font-size:0.9rem;&:first-child{margin-left:0;}@media only screen and ","{margin:0.3rem 0.3rem 0.3rem 0;}"],_assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_4__[/* globalThemeColour */ "a"],_assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_4__[/* globalThemeColour */ "a"],_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__[/* deviceMaxWidth */ "a"].mobileL);var StyledTagsWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].div.withConfig({displayName:"work__StyledTagsWrapper",componentId:"sc-10osjz4-7"})(["display:flex;flex-direction:row;flex-wrap:wrap;margin:2rem 0 0.6rem 0;@media only screen and ","{margin:0.6rem 0 0 0;}"],_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__[/* deviceMaxWidth */ "a"].mobileL);var StyledWorkListItemDate=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].h3.withConfig({displayName:"work__StyledWorkListItemDate",componentId:"sc-10osjz4-8"})(["font-weight:lighter;margin:0.5rem 0 0 0;font-size:1rem;"]);var StyledWorkListItemTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].h2.withConfig({displayName:"work__StyledWorkListItemTitle",componentId:"sc-10osjz4-9"})(["margin:0.5rem 0.5rem 0 0;font-size:1.1rem;font-weight:500;line-height:1.5rem;word-spacing:0.05rem;@media only screen and ","{margin:0.75rem 0 0 0;}"],_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__[/* deviceMaxWidth */ "a"].mobileL);var StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].h1.withConfig({displayName:"work__StyledH1",componentId:"sc-10osjz4-10"})(["width:100%;margin:2rem 0 1rem 0;font-family:'Playfair Display',serif;font-weight:800;font-size:4em;text-align:center;"]);var StyledH2=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].h2.withConfig({displayName:"work__StyledH2",componentId:"sc-10osjz4-11"})(["width:100%;font-size:1.2rem;margin:0 0 1rem 0;font-weight:400;font-style:italic;word-spacing:0.1rem;text-align:center;"]);var StyledWorkHighlightSection=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].div.withConfig({displayName:"work__StyledWorkHighlightSection",componentId:"sc-10osjz4-12"})(["display:flex;flex-direction:column;align-items:center;margin:0 0 4rem 0;width:1024px;animation:"," 400ms ease-in;@media only screen and ","{width:800px;max-width:100%;}@media only screen and ","{flex-direction:column;align-items:flex-start;margin:1rem 0 3rem 0;}"],Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* keyframes */ "e"])(["",""],react_animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]),_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__[/* deviceMaxWidth */ "a"].laptop,_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_5__[/* deviceMaxWidth */ "a"].mobileL);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-work-js-4760cd93d6e1da043769.js.map