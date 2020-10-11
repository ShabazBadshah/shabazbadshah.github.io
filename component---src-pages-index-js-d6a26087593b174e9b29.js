(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "5lyv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{title:'🏠 shabazbadshah.github.io',date:'June 2020',description:'The 4th iteration of my personal website/blog created using Gatsby backed by the Forestry CMS.',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io/tree/site-v1-jekyll-sass-jade',article:'https://shabazbadshah.com/blog/my-personal-website-v1/',demo:'https://shabazbadshah.com',tags:['react','gatsby','web development','frontend']},{title:'👩‍💻👨‍💻 Project Include Site Redesign',date:'January 2020',description:'The redesigned 2019/2020 site for the Project Include non-profit organization',source:'https://github.com/ShabazBadshah/project-include-site',demo:'https://projectinclude.ca',tags:['jekyll','frontend','web development']},{title:'🎯 SCRUMtious',date:'March 2018',description:'An Android app that helps manage the logistics of remote teams working on projects in agile Scrum environments. The app keeps track of their user stories, tasks, sprint backlog, product backlog, amongst many other things.',source:'https://github.com/ShabazBadshah/SCRUMtious',demo:'https://shabazbadshah.com/SCRUMtious-Website/',tags:['android','programming','app','java']},{title:'🎨 Python Google Images Downloader',date:'February 2017',description:"A Python program that downloads images from google images based on a query given and saves them into seperate folders. I made this since Google deprecated their Google Images API and I didn't want to manually save all images.",source:'https://github.com/ShabazBadshah/shabazbadshah.github.io',tags:['data structures','programming','python','web development']},{title:'🕹 A Tetris Remake',date:'June 2015',description:'A remake of Tetris in Java.',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io',article:'https://shabazbadshah.com/projects/tetris-remake/',tags:['programming','java','game design']},{title:'👾 Space Wars - A Space Invaders Remake',date:'June 2014',description:'Space Wars - My First Serious Attempt at a Video Game. This is a game I created that is heavily based off of Space Invaders. The objective is to survive as long as you can.',source:'https://github.com/ShabazBadshah/shabazbadshah.github.io',article:'https://shabazbadshah.com/blog/space-invaders-remake/',tags:['programming','java','game design']}]);

/***/ }),

/***/ "9eSz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("5NKs");exports.__esModule=true;exports.default=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__("v06X"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__("XEEL"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("uDP2"));var _extends2=_interopRequireDefault(__webpack_require__("j8BX"));var _react=_interopRequireDefault(__webpack_require__("q1tI"));var _propTypes=_interopRequireDefault(__webpack_require__("17x9"));var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2.default)({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;logDeprecationNotice("resolutions","the gatsby-image v2 prop \"fixed\"");delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;logDeprecationNotice("sizes","the gatsby-image v2 prop \"fluid\"");delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */var hasArtDirectionSupport=function hasArtDirectionSupport(currentData){return!!currentData&&Array.isArray(currentData)&&currentData.some(function(image){return typeof image.media!=="undefined";});};/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */var matchesMedia=function matchesMedia(_ref){var media=_ref.media;return media?isBrowser&&!!window.matchMedia(media).matches:false;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string?} Returns image src or undefined it not given.
 */var getImageCacheKey=function getImageCacheKey(_ref2){var fluid=_ref2.fluid,fixed=_ref2.fixed;var srcData=getCurrentSrcData(fluid||fixed||[]);return srcData&&srcData.src;};/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */var getCurrentSrcData=function getCurrentSrcData(currentData){if(isBrowser&&hasArtDirectionSupport(currentData)){// Do we have an image for the current Viewport?
var foundMedia=currentData.findIndex(matchesMedia);if(foundMedia!==-1){return currentData[foundMedia];}// No media matches, select first element without a media condition
var noMedia=currentData.findIndex(function(image){return typeof image.media==="undefined";});if(noMedia!==-1){return currentData[noMedia];}}// Else return the first image.
return currentData[0];};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);return imageCache[cacheKey]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);if(cacheKey){imageCache[cacheKey]=true;}};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners.delete(entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,srcSet=_ref3.srcSet,srcSetWebp=_ref3.srcSetWebp,media=_ref3.media,sizes=_ref3.sizes;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:src},srcSetWebp&&/*#__PURE__*/_react.default.createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),/*#__PURE__*/_react.default.createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){console.warn("We've found "+without.length+" sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,tracedSVG=_ref4.tracedSVG;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref5){var src=_ref5.src,media=_ref5.media,base64=_ref5.base64;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref6,isWebp){var srcSet=_ref6.srcSet,srcSetWebp=_ref6.srcSetWebp,media=_ref6.media,sizes=_ref6.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners.delete(el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var src=props.src,imageVariants=props.imageVariants,generateSources=props.generateSources,spreadProps=props.spreadProps,ariaHidden=props.ariaHidden;var baseImage=/*#__PURE__*/_react.default.createElement(Img,(0,_extends2.default)({ref:ref,src:src},spreadProps,{ariaHidden:ariaHidden}));return imageVariants.length>1?/*#__PURE__*/_react.default.createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;});var Img=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,ariaHidden=props.ariaHidden,otherProps=(0,_objectWithoutPropertiesLoose2.default)(props,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return/*#__PURE__*/_react.default.createElement("img",(0,_extends2.default)({"aria-hidden":ariaHidden,sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes.default.object,onError:_propTypes.default.func,onLoad:_propTypes.default.func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn};_this.imageRef=/*#__PURE__*/_react.default.createRef();_this.placeholderRef=props.placeholderRef||/*#__PURE__*/_react.default.createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2.default)(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){_this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
// for lazyloaded components this might be null
// TODO fix imgCached behaviour as it's now false when it's lazyloaded
imgCached:!!(_this2.imageRef.current&&_this2.imageRef.current.currentSrc)});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2.default)({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2.default)({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,imgStyle,placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};if(fluid){var imageVariants=fluid;var image=getCurrentSrcData(fluid);return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2.default)({position:"relative",overflow:"hidden",maxWidth:image.maxWidth?image.maxWidth+"px":null,maxHeight:image.maxHeight?image.maxHeight+"px":null},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var _imageVariants=fixed;var _image=getCurrentSrcData(fixed);var divStyle=(0,_extends2.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_image.width,height:_image.height},style);if(style.display==="inherit"){delete divStyle.display;}return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(_image.srcSet)},bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,width:_image.width,opacity:!this.state.imgLoaded?1:0,height:_image.height},shouldFadeIn&&delayHideStyle)}),_image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:_image.base64,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateBase64Sources}),_image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:_image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(_imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,width:_image.width,height:_image.height,sizes:_image.sizes,src:_image.src,crossOrigin:this.props.crossOrigin,srcSet:_image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},_image,{imageVariants:_imageVariants}))}}));}return null;};return Image;}(_react.default.Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes.default.shape({width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});var fluidObject=_propTypes.default.shape({aspectRatio:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,sizes:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string,maxWidth:_propTypes.default.number,maxHeight:_propTypes.default.number});function requireFixedOrFluid(originalPropTypes){return function(props,propName,componentName){var _PropTypes$checkPropT;if(!props.fixed&&!props.fluid){throw new Error("The prop `fluid` or `fixed` is marked as required in `"+componentName+"`, but their values are both `undefined`.");}_propTypes.default.checkPropTypes((_PropTypes$checkPropT={},_PropTypes$checkPropT[propName]=originalPropTypes,_PropTypes$checkPropT),props,"prop",componentName);};}// If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props
Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:requireFixedOrFluid(_propTypes.default.oneOfType([fixedObject,_propTypes.default.arrayOf(fixedObject)])),fluid:requireFixedOrFluid(_propTypes.default.oneOfType([fluidObject,_propTypes.default.arrayOf(fluidObject)])),fadeIn:_propTypes.default.bool,durationFadeIn:_propTypes.default.number,title:_propTypes.default.string,alt:_propTypes.default.string,className:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),// Support Glamor's css prop.
critical:_propTypes.default.bool,crossOrigin:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),style:_propTypes.default.object,imgStyle:_propTypes.default.object,placeholderStyle:_propTypes.default.object,placeholderClassName:_propTypes.default.string,backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),onLoad:_propTypes.default.func,onError:_propTypes.default.func,onStartLoad:_propTypes.default.func,Tag:_propTypes.default.string,itemProp:_propTypes.default.string,loading:_propTypes.default.oneOf(["auto","lazy","eager"]),draggable:_propTypes.default.bool};var _default=Image;exports.default=_default;

/***/ }),

/***/ "Lnxd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ GenIcon; });

// UNUSED EXPORTS: IconsManifest, IconBase, DefaultContext, IconContext

// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconsManifest.js
var IconsManifest = [{
  "id": "fa",
  "name": "Font Awesome",
  "projectUrl": "https://fontawesome.com/",
  "license": "CC BY 4.0 License",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
}, {
  "id": "io",
  "name": "Ionicons",
  "projectUrl": "https://ionicons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
}, {
  "id": "md",
  "name": "Material Design icons",
  "projectUrl": "http://google.github.io/material-design-icons/",
  "license": "Apache License Version 2.0",
  "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
}, {
  "id": "ti",
  "name": "Typicons",
  "projectUrl": "http://s-ings.com/typicons/",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
}, {
  "id": "go",
  "name": "Github Octicons icons",
  "projectUrl": "https://octicons.github.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
}, {
  "id": "fi",
  "name": "Feather",
  "projectUrl": "https://feathericons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
}, {
  "id": "gi",
  "name": "Game Icons",
  "projectUrl": "https://game-icons.net/",
  "license": "CC BY 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
}, {
  "id": "wi",
  "name": "Weather Icons",
  "projectUrl": "https://erikflowers.github.io/weather-icons/",
  "license": "SIL OFL 1.1",
  "licenseUrl": "http://scripts.sil.org/OFL"
}, {
  "id": "di",
  "name": "Devicons",
  "projectUrl": "https://vorillaz.github.io/devicons/",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ai",
  "name": "Ant Design Icons",
  "projectUrl": "https://github.com/ant-design/ant-design-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "bs",
  "name": "Bootstrap Icons",
  "projectUrl": "https://github.com/twbs/icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ri",
  "name": "Remix Icon",
  "projectUrl": "https://github.com/Remix-Design/RemixIcon",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}, {
  "id": "fc",
  "name": "Flat Color Icons",
  "projectUrl": "https://github.com/icons8/flat-color-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "gr",
  "name": "Grommet-Icons",
  "projectUrl": "https://github.com/grommet/grommet-icons",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}];
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconContext.js

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react["createContext"] && react["createContext"](DefaultContext);
// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconBase.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react["createElement"](node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react["createElement"](IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function elem(conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest(props, ["attr", "title"]);

    return react["createElement"]("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react["createElement"]("title", null, title), props.children);
  };

  return IconContext !== undefined ? react["createElement"](IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/index.js




/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./src/components/layout.js + 8 modules
var layout = __webpack_require__("Bl7J");

// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__("vrFN");

// EXTERNAL MODULE: ./node_modules/react-animations/lib/index.js
var lib = __webpack_require__("l2P8");

// EXTERNAL MODULE: ./src/assets/global-style-constants.js
var global_style_constants = __webpack_require__("yf23");

// EXTERNAL MODULE: ./src/contextProviders/global-state-context-provider.js
var global_state_context_provider = __webpack_require__("JKlR");

// EXTERNAL MODULE: ./src/media-query-sizes.js
var media_query_sizes = __webpack_require__("9ix+");

// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__("ma3e");

// EXTERNAL MODULE: ./node_modules/gatsby-image/index.js
var gatsby_image = __webpack_require__("9eSz");
var gatsby_image_default = /*#__PURE__*/__webpack_require__.n(gatsby_image);

// CONCATENATED MODULE: ./src/components/social-media-links.js
var social_media_links_SocialMediaLinks=function SocialMediaLinks(_ref){var enableDarkMode=_ref.enableDarkMode;var data=Object(gatsby_browser_entry["useStaticQuery"])("163796545");return/*#__PURE__*/react_default.a.createElement(StyledContactCard,{enableDarkMode:enableDarkMode},/*#__PURE__*/react_default.a.createElement(StyledImage,{fluid:data.file.childImageSharp.fluid}),/*#__PURE__*/react_default.a.createElement(StyledCardTitle,null,"Get in touch"),/*#__PURE__*/react_default.a.createElement(StyledCardSubtitle,null,"Find me online at the places below, or just shoot me an email"),/*#__PURE__*/react_default.a.createElement(StyledSocialMediaLinksWrapper,null,/*#__PURE__*/react_default.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:"+data.site.siteMetadata.contactInfo.email+"Subject=Hey%20Shabaz"},/*#__PURE__*/react_default.a.createElement(StyledSocialMediaLink,{enableDarkMode:enableDarkMode},/*#__PURE__*/react_default.a.createElement(index_esm["a" /* FaEnvelope */],{color:enableDarkMode?'white':global_style_constants["b" /* globalThemeColour */],size:"1.7em"}),/*#__PURE__*/react_default.a.createElement(StyledSocialMediaLinkText,{enableDarkMode:enableDarkMode},"Email"))),/*#__PURE__*/react_default.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:data.site.siteMetadata.contactInfo.github},/*#__PURE__*/react_default.a.createElement(StyledSocialMediaLink,{enableDarkMode:enableDarkMode},/*#__PURE__*/react_default.a.createElement(index_esm["b" /* FaGithub */],{color:enableDarkMode?'white':global_style_constants["b" /* globalThemeColour */],size:"1.7em"}),/*#__PURE__*/react_default.a.createElement(StyledSocialMediaLinkText,{enableDarkMode:enableDarkMode},"Github"))),/*#__PURE__*/react_default.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:data.site.siteMetadata.contactInfo.linkedin},/*#__PURE__*/react_default.a.createElement(StyledSocialMediaLink,{enableDarkMode:enableDarkMode},/*#__PURE__*/react_default.a.createElement(index_esm["c" /* FaLinkedin */],{color:enableDarkMode?'white':global_style_constants["b" /* globalThemeColour */],size:"1.7em"}),/*#__PURE__*/react_default.a.createElement(StyledSocialMediaLinkText,{enableDarkMode:enableDarkMode},"LinkedIn")))));};/* harmony default export */ var social_media_links = (social_media_links_SocialMediaLinks);social_media_links_SocialMediaLinks.defaultProps={enableDarkMode:false};var StyledSocialMediaLinkText=styled_components_browser_esm["c" /* default */].h3.withConfig({displayName:"social-media-links__StyledSocialMediaLinkText",componentId:"nvf7eo-0"})(["color:",";margin-left:1rem;text-decoration:none;font-size:1.1rem;font-weight:normal;margin:0 1rem;"],function(props){return props.enableDarkMode?'#f9f8f7':'#080708';});var StyledCardTitle=styled_components_browser_esm["c" /* default */].h3.withConfig({displayName:"social-media-links__StyledCardTitle",componentId:"nvf7eo-1"})(["font-size:1.5rem;color:#f9f8f7;margin:1.5rem 0 1rem 0;"]);var StyledCardSubtitle=styled_components_browser_esm["c" /* default */].h4.withConfig({displayName:"social-media-links__StyledCardSubtitle",componentId:"nvf7eo-2"})(["text-align:center;margin:0.5rem 0;font-size:1.1rem;font-weight:normal;color:#f9f8f7;line-height:1.5rem;word-spacing:0.11rem;"]);var StyledSocialMediaLinksWrapper=styled_components_browser_esm["c" /* default */].ul.withConfig({displayName:"social-media-links__StyledSocialMediaLinksWrapper",componentId:"nvf7eo-3"})(["list-style:none;padding:0;margin-bottom:0;width:100%;& a{text-decoration:none;}"]);var StyledSocialMediaLink=styled_components_browser_esm["c" /* default */].li.withConfig({displayName:"social-media-links__StyledSocialMediaLink",componentId:"nvf7eo-4"})(["padding:0.6rem 1rem;background-color:",";margin:1rem 0;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;&:hover{animation:"," 800ms ease-in-out;box-shadow:0.5em 0.5em 1.5em 0 rgba(85,85,85,0.1);}&:last-child{margin-bottom:0;}"],function(props){return props.enableDarkMode?global_style_constants["a" /* darkModeThemeColour */]:'#f9f8f7';},Object(styled_components_browser_esm["d" /* keyframes */])(["",""],lib["headShake"]));var StyledImage=Object(styled_components_browser_esm["c" /* default */])(gatsby_image_default.a).withConfig({displayName:"social-media-links__StyledImage",componentId:"nvf7eo-5"})(["border-radius:50%;width:120px;height:120px;"]);var StyledContactCard=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"social-media-links__StyledContactCard",componentId:"nvf7eo-6"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:",";padding:2em;border-radius:8px;box-shadow:",";min-width:300px;margin-right:5rem;@media only screen and ","{margin-right:3rem;}@media only screen and ","{margin:2rem 0 0 0;}"],global_style_constants["b" /* globalThemeColour */],function(props){return props.enableDarkMode?'0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.02)':'0.5rem 0.5rem 1rem 0 rgba(85, 85, 85, 0.08)';},media_query_sizes["a" /* deviceMaxWidth */].tablet,media_query_sizes["a" /* deviceMaxWidth */].mobileL);
// EXTERNAL MODULE: ./src/components/link-button.js
var link_button = __webpack_require__("ltWS");

// CONCATENATED MODULE: ./src/components/latest-blog-articles-subsection.js
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/accessible-emoji */var latest_blog_articles_subsection_LatestBlogArticlesSubsection=function LatestBlogArticlesSubsection(_ref){var enableDarkMode=_ref.enableDarkMode;var highlightedBlogPosts=Object(gatsby_browser_entry["useStaticQuery"])("1928643940");return/*#__PURE__*/react_default.a.createElement(StyledBlogHighlightSection,null,/*#__PURE__*/react_default.a.createElement(StyledH1,null,"\uD83D\uDCDD Latest Posts"),/*#__PURE__*/react_default.a.createElement(StyledH2,null,"Peruse some of my latest posts below"),/*#__PURE__*/react_default.a.createElement(StyledBlogPostList,{enableDarkMode:enableDarkMode},highlightedBlogPosts.blog.edges.map(function(blogNode,i){var blogPostData=blogNode.node.childMdx.frontmatter;var blogPostPath=blogNode.node.childMdx.fields.slug;return/*#__PURE__*/react_default.a.createElement(StyledLink,{to:"/blog/"+blogPostPath,key:i},/*#__PURE__*/react_default.a.createElement(StyledBlogPostListItem,{key:i,enableDarkMode:enableDarkMode},/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement(StyledBlogPostListItemTitle,null,blogPostData.title),/*#__PURE__*/react_default.a.createElement(StyledBlogPostListItemDate,null,blogPostData.date),/*#__PURE__*/react_default.a.createElement(StyledBlogListItemBlurb,null,blogPostData.blurb))));})),/*#__PURE__*/react_default.a.createElement(link_button["a" /* default */],{text:"view all blog posts",linkToMoveTo:"/blog",enableDarkMode:enableDarkMode}));};/* harmony default export */ var latest_blog_articles_subsection = (latest_blog_articles_subsection_LatestBlogArticlesSubsection);latest_blog_articles_subsection_LatestBlogArticlesSubsection.defaultProps={enableDarkMode:false};var StyledBlogListItemBlurb=styled_components_browser_esm["c" /* default */].p.withConfig({displayName:"latest-blog-articles-subsection__StyledBlogListItemBlurb",componentId:"sc-1q5qgci-0"})(["margin:1.5rem 0 0 0;font-weight:400;font-style:italic;line-height:1.4rem;@media only screen and ","{margin:1.5rem 0;}"],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledLink=Object(styled_components_browser_esm["c" /* default */])(gatsby_browser_entry["Link"]).withConfig({displayName:"latest-blog-articles-subsection__StyledLink",componentId:"sc-1q5qgci-1"})(["text-decoration:none;color:unset;display:inline-block;width:100%;&:hover{cursor:pointer;}"]);var StyledBlogListItemTag=styled_components_browser_esm["c" /* default */].h5.withConfig({displayName:"latest-blog-articles-subsection__StyledBlogListItemTag",componentId:"sc-1q5qgci-2"})(["margin:0 4px;padding:0.3rem 0.6rem;border-radius:4px;border:1.5px "," solid;font-weight:normal;color:",";font-size:0.9rem;clear:both;display:inline-block;overflow:hidden;white-space:nowrap;&:first-child{margin-left:0;}@media only screen and ","{margin:0.3rem 0.3rem 0.3rem 0;}"],global_style_constants["b" /* globalThemeColour */],global_style_constants["b" /* globalThemeColour */],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledTagsWrapper=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"latest-blog-articles-subsection__StyledTagsWrapper",componentId:"sc-1q5qgci-3"})(["display:flex;flex-direction:row;flex-wrap:wrap;@media only screen and ","{margin:0.6rem 0 0 0;}"],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledBlogPostListItemDate=styled_components_browser_esm["c" /* default */].h3.withConfig({displayName:"latest-blog-articles-subsection__StyledBlogPostListItemDate",componentId:"sc-1q5qgci-4"})(["font-weight:lighter;margin:0.6rem 0 0 0;font-size:1rem;"]);var StyledBlogPostListItemTitle=styled_components_browser_esm["c" /* default */].h2.withConfig({displayName:"latest-blog-articles-subsection__StyledBlogPostListItemTitle",componentId:"sc-1q5qgci-5"})(["margin:0 1rem 0 0;font-size:1.1rem;font-weight:500;line-height:1.5rem;word-spacing:0.05rem;@media only screen and ","{margin:0;}"],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledBlogPostListItem=styled_components_browser_esm["c" /* default */].li.withConfig({displayName:"latest-blog-articles-subsection__StyledBlogPostListItem",componentId:"sc-1q5qgci-6"})(["padding:0.8rem 1.4rem;margin:0 0 0.4rem 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;transition:background-color 100ms ease-out;border-radius:2px;cursor:pointer;&:hover{transition:background-color 100ms ease-in;background-color:",";}@media only screen and ","{flex-direction:column;align-items:flex-start;padding:0.3rem;margin:0 0 1.3rem 0;}"],function(props){return props.enableDarkMode?'#444242':'#f7f7f7';},media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledBlogPostList=styled_components_browser_esm["c" /* default */].ul.withConfig({displayName:"latest-blog-articles-subsection__StyledBlogPostList",componentId:"sc-1q5qgci-7"})(["list-style:none;background-color:",";border-radius:8px;padding:1.9rem 1rem;box-shadow:",";margin-bottom:1.5rem;border:",";& a:last-child li{margin-bottom:0;}"],function(props){return props.enableDarkMode?'#262525':'white';},function(props){return props.enableDarkMode?'0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.01)':'0.5rem 0.5rem 1rem 0 rgba(85, 85, 85, 0.03)';},function(props){return props.enableDarkMode?"1px "+global_style_constants["b" /* globalThemeColour */]+" solid":'1px solid #e1e4e8';});var StyledH1=styled_components_browser_esm["c" /* default */].h1.withConfig({displayName:"latest-blog-articles-subsection__StyledH1",componentId:"sc-1q5qgci-8"})(["margin:2rem 0 1rem 0;font-family:'Times New Roman',Times,serif;font-size:4em;font-weight:bold;"]);var StyledH2=styled_components_browser_esm["c" /* default */].h2.withConfig({displayName:"latest-blog-articles-subsection__StyledH2",componentId:"sc-1q5qgci-9"})(["font-size:1.2rem;margin:0 0 2rem 0;font-weight:lighter;font-style:italic;word-spacing:0.1rem;"]);var StyledBlogHighlightSection=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"latest-blog-articles-subsection__StyledBlogHighlightSection",componentId:"sc-1q5qgci-10"})(["display:flex;flex-direction:column;margin:4rem 0;width:1024px;animation:"," 400ms ease-in;@media only screen and ","{width:800px;max-width:100%;}@media only screen and ","{flex-direction:column;align-items:flex-start;margin:1rem 0 3rem 0;}"],Object(styled_components_browser_esm["d" /* keyframes */])(["",""],lib["fadeIn"]),media_query_sizes["a" /* deviceMaxWidth */].laptop,media_query_sizes["a" /* deviceMaxWidth */].mobileL);
// EXTERNAL MODULE: ./content/work/work-showcase.js
var work_showcase = __webpack_require__("5lyv");

// CONCATENATED MODULE: ./src/components/latest-work-subsection.js
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/accessible-emoji */var AMOUNT_WORK_ITEMS_TO_SHOWCASE=4;var latest_work_subsection_WorkHighShowcaseSubsection=function WorkHighShowcaseSubsection(_ref){var enableDarkMode=_ref.enableDarkMode;return/*#__PURE__*/react_default.a.createElement(StyledWorkHighlightSection,null,/*#__PURE__*/react_default.a.createElement(latest_work_subsection_StyledH1,null,"\uD83D\uDD0E Selected Works"),/*#__PURE__*/react_default.a.createElement(latest_work_subsection_StyledH2,null,"Here's some of the the things I've built"),/*#__PURE__*/react_default.a.createElement(StyledWorkItemList,{enableDarkMode:enableDarkMode},work_showcase["a" /* default */].filter(function(workData,i){return i<AMOUNT_WORK_ITEMS_TO_SHOWCASE;}).map(function(workData,i){return/*#__PURE__*/react_default.a.createElement(StyledListItem,{to:""+workData.source,enableDarkMode:enableDarkMode,key:i},/*#__PURE__*/react_default.a.createElement(StyledWorkLinkSourceWrapper,{to:workData.source},/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement(StyledWorkListItemTitle,null,workData.title),/*#__PURE__*/react_default.a.createElement(StyledWorkListItemDate,null,workData.date)),/*#__PURE__*/react_default.a.createElement(StyledWorkListItemBlurb,null,workData.description),/*#__PURE__*/react_default.a.createElement(StyledLinkWrapper,null,workData.article&&/*#__PURE__*/react_default.a.createElement(latest_work_subsection_StyledLink,{enableDarkMode:enableDarkMode,to:workData.article},"Article"),workData.demo&&/*#__PURE__*/react_default.a.createElement(latest_work_subsection_StyledLink,{enableDarkMode:enableDarkMode,to:workData.demo},"Demo"))));})),/*#__PURE__*/react_default.a.createElement(link_button["a" /* default */],{text:"view all work",linkToMoveTo:"/work",enableDarkMode:enableDarkMode}));};/* harmony default export */ var latest_work_subsection = (latest_work_subsection_WorkHighShowcaseSubsection);latest_work_subsection_WorkHighShowcaseSubsection.defaultProps={enableDarkMode:false};var StyledWorkLinkSourceWrapper=Object(styled_components_browser_esm["c" /* default */])(gatsby_browser_entry["Link"]).withConfig({displayName:"latest-work-subsection__StyledWorkLinkSourceWrapper",componentId:"tcyzfw-0"})(["text-decoration:none;color:unset;"]);var latest_work_subsection_StyledLink=Object(styled_components_browser_esm["c" /* default */])(gatsby_browser_entry["Link"]).withConfig({displayName:"latest-work-subsection__StyledLink",componentId:"tcyzfw-1"})(["display:inline-block;text-align:center;text-decoration:none;font-weight:500;text-underline-offset:0.2rem;cursor:pointer;padding:0.7rem 3rem;border-radius:4px;color:#f9f8f7;box-shadow:0.5rem 0.5rem 1.5rem 0 rgba(0,0,0,0.06);margin-top:8px;margin-right:1.5rem;border:2px "," solid;background-color:",";&:first-child{margin-left:0;}&:hover{border:",";color:",";background-color:",";transform:translateY(-0.1rem);transition:all 100ms ease-out;}@media only screen and ","{margin:0.5rem 0;width:100%;margin-right:0;}"],global_style_constants["b" /* globalThemeColour */],global_style_constants["b" /* globalThemeColour */],function(props){return props.enableDarkMode?'2px #f9f8f7 solid':"2px "+global_style_constants["b" /* globalThemeColour */]+" solid";},function(props){return props.enableDarkMode?'#f9f8f7':global_style_constants["b" /* globalThemeColour */];},function(props){return props.enableDarkMode?global_style_constants["a" /* darkModeThemeColour */]:'#f9f8f7';},media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledLinkWrapper=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"latest-work-subsection__StyledLinkWrapper",componentId:"tcyzfw-2"})(["margin:0.7rem 0 0.7rem 0;@media only screen and ","{flex-direction:column;}"],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledWorkListItemBlurb=styled_components_browser_esm["c" /* default */].p.withConfig({displayName:"latest-work-subsection__StyledWorkListItemBlurb",componentId:"tcyzfw-3"})(["margin:1.5rem 0 0 0;font-weight:400;font-style:italic;line-height:1.4rem;@media only screen and ","{margin:1.5rem 0;}"],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledWorkItemList=styled_components_browser_esm["c" /* default */].ul.withConfig({displayName:"latest-work-subsection__StyledWorkItemList",componentId:"tcyzfw-4"})(["width:100%;display:flex;flex-direction:row;flex-wrap:wrap;list-style:none;border-radius:8px;padding:0;"]);var StyledListItem=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"latest-work-subsection__StyledListItem",componentId:"tcyzfw-5"})(["width:49%;padding:0.8rem 1.4rem;margin:0.5rem 0;display:flex;flex-direction:column;text-decoration:none;box-shadow:",";background-color:",";transition:background-color 100ms ease-out;border-radius:5px;cursor:pointer;border:",";&:hover{transition:background-color 100ms ease-in;cursor:pointer;background-color:",";}&:nth-child(odd){margin-right:1rem;}@media only screen and ","{width:100%;&:nth-child(odd){margin-right:0;}}"],function(props){return props.enableDarkMode?'0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.01)':'0.5rem 0.5rem 1rem 0 rgba(85, 85, 85, 0.03)';},function(props){return props.enableDarkMode?'#262525':'white';},function(props){return props.enableDarkMode?"1px "+global_style_constants["b" /* globalThemeColour */]+" solid":'1px solid #e1e4e8';},function(props){return props.enableDarkMode?'#444242':'#f7f7f7';},media_query_sizes["a" /* deviceMaxWidth */].mobileL);var latest_work_subsection_StyledBlogListItemTag=styled_components_browser_esm["c" /* default */].h5.withConfig({displayName:"latest-work-subsection__StyledBlogListItemTag",componentId:"tcyzfw-6"})(["margin:0 4px;padding:0.3rem 0.6rem;border-radius:4px;border:1.5px "," solid;font-weight:normal;color:",";font-size:0.9rem;&:first-child{margin-left:0;}@media only screen and ","{margin:0.3rem 0.3rem 0.3rem 0;}"],global_style_constants["b" /* globalThemeColour */],global_style_constants["b" /* globalThemeColour */],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var latest_work_subsection_StyledTagsWrapper=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"latest-work-subsection__StyledTagsWrapper",componentId:"tcyzfw-7"})(["display:flex;flex-direction:row;flex-wrap:wrap;margin:2rem 0 0.6rem 0;@media only screen and ","{margin:0.6rem 0 0 0;}"],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledWorkListItemDate=styled_components_browser_esm["c" /* default */].h3.withConfig({displayName:"latest-work-subsection__StyledWorkListItemDate",componentId:"tcyzfw-8"})(["font-weight:lighter;margin:0.5rem 0 0 0;font-size:1rem;"]);var StyledWorkListItemTitle=styled_components_browser_esm["c" /* default */].h2.withConfig({displayName:"latest-work-subsection__StyledWorkListItemTitle",componentId:"tcyzfw-9"})(["margin:0.5rem 0.5rem 0 0;font-size:1.1rem;font-weight:500;line-height:1.5rem;word-spacing:0.05rem;@media only screen and ","{margin:0.75rem 0 0 0;}"],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var latest_work_subsection_StyledH1=styled_components_browser_esm["c" /* default */].h1.withConfig({displayName:"latest-work-subsection__StyledH1",componentId:"tcyzfw-10"})(["margin:2rem 0 1rem 0;font-family:'Playfair Display',serif;font-weight:800;font-size:4em;"]);var latest_work_subsection_StyledH2=styled_components_browser_esm["c" /* default */].h2.withConfig({displayName:"latest-work-subsection__StyledH2",componentId:"tcyzfw-11"})(["font-size:1.2rem;margin:0 0 1rem 0;font-weight:400;font-style:italic;word-spacing:0.1rem;"]);var StyledWorkHighlightSection=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"latest-work-subsection__StyledWorkHighlightSection",componentId:"tcyzfw-12"})(["display:flex;flex-direction:column;margin:0 0 4rem 0;width:1024px;animation:"," 400ms ease-in;@media only screen and ","{width:800px;max-width:100%;}@media only screen and ","{flex-direction:column;align-items:flex-start;margin:1rem 0 3rem 0;}"],Object(styled_components_browser_esm["d" /* keyframes */])(["",""],lib["fadeIn"]),media_query_sizes["a" /* deviceMaxWidth */].laptop,media_query_sizes["a" /* deviceMaxWidth */].mobileL);
// CONCATENATED MODULE: ./src/pages/index.js
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/accessible-emoji */var pages_IndexPage=function IndexPage(){var data=Object(gatsby_browser_entry["useStaticQuery"])("3226216073");return/*#__PURE__*/react_default.a.createElement(global_state_context_provider["b" /* globalStateContext */].Consumer,null,function(globalState){return/*#__PURE__*/react_default.a.createElement(layout["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(seo["a" /* default */],{title:"Home"}),/*#__PURE__*/react_default.a.createElement(StyledHeroSection,null,/*#__PURE__*/react_default.a.createElement(social_media_links,{enableDarkMode:globalState.darkMode.isDarkModeEnabled}),/*#__PURE__*/react_default.a.createElement(StyledGreeting,null,/*#__PURE__*/react_default.a.createElement(pages_StyledH2,null,"Hello ",/*#__PURE__*/react_default.a.createElement(StyledEmoji,{"aria-label":"waving hand"},"\uD83D\uDC4B,")),/*#__PURE__*/react_default.a.createElement(pages_StyledH1,null,"I'm Shabaz Badshah."),/*#__PURE__*/react_default.a.createElement(StyledParagraph,null,"I'm a",' ',/*#__PURE__*/react_default.a.createElement(StyledAnchorLink,{href:data.site.siteMetadata.contactInfo.linkedin},"Product Manager"),"\xA0who develops Fullstack web experiences during his downtime. This site catalogs things I learn, find interesting, want to share, or anything cool I'm",' ',/*#__PURE__*/react_default.a.createElement(StyledAnchorLink,{href:data.site.siteMetadata.contactInfo.github},"creating"),". There's no ads or distractions here."),/*#__PURE__*/react_default.a.createElement(StyledRow,null,/*#__PURE__*/react_default.a.createElement(link_button["a" /* default */],{text:"see my work",linkToMoveTo:"/work",enableDarkMode:globalState.darkMode.isDarkModeEnabled}),/*#__PURE__*/react_default.a.createElement(link_button["a" /* default */],{text:"read the blog",linkToMoveTo:"/blog",enableDarkMode:globalState.darkMode.isDarkModeEnabled})))),/*#__PURE__*/react_default.a.createElement(latest_blog_articles_subsection,{enableDarkMode:globalState.darkMode.isDarkModeEnabled}),/*#__PURE__*/react_default.a.createElement(latest_work_subsection,{enableDarkMode:globalState.darkMode.isDarkModeEnabled}));});};/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_IndexPage);var StyledEmoji=styled_components_browser_esm["c" /* default */].span.withConfig({displayName:"pages__StyledEmoji",componentId:"sc-1os39x0-0"})(["font-size:1.4em;"]);var StyledRow=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"pages__StyledRow",componentId:"sc-1os39x0-1"})(["display:flex;flex-direction:row;@media ","{flex-direction:column;& a{width:98%;margin-right:0;}}"],media_query_sizes["a" /* deviceMaxWidth */].tablet);var StyledGreeting=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"pages__StyledGreeting",componentId:"sc-1os39x0-2"})(["display:flex;flex-direction:column;justify-content:center;@media ","{margin:1rem;}"],media_query_sizes["a" /* deviceMaxWidth */].mobileL);var StyledAnchorLink=styled_components_browser_esm["c" /* default */].a.withConfig({displayName:"pages__StyledAnchorLink",componentId:"sc-1os39x0-3"})(["display:inline-block;color:",";text-decoration:underline;text-underline-offset:0.15rem;cursor:pointer;&:hover{animation:"," 800ms ease-in-out;}"],global_style_constants["b" /* globalThemeColour */],Object(styled_components_browser_esm["d" /* keyframes */])(["",""],lib["headShake"]));var pages_StyledH2=styled_components_browser_esm["c" /* default */].h2.withConfig({displayName:"pages__StyledH2",componentId:"sc-1os39x0-4"})(["font-weight:normal;margin:0;"]);var StyledParagraph=styled_components_browser_esm["c" /* default */].p.withConfig({displayName:"pages__StyledParagraph",componentId:"sc-1os39x0-5"})(["font-size:1.3rem;line-height:1.6;word-spacing:0.1rem;margin:0 0 1rem 0;"]);var pages_StyledH1=styled_components_browser_esm["c" /* default */].h1.withConfig({displayName:"pages__StyledH1",componentId:"sc-1os39x0-6"})(["margin:2rem 0;font-family:'Times New Roman',Times,serif;font-size:5rem;font-weight:bold;"]);var StyledHeroSection=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"pages__StyledHeroSection",componentId:"sc-1os39x0-7"})(["display:flex;margin:4rem 0;max-width:1024px;animation:"," 400ms ease-in;@media only screen and ","{max-width:800px;}@media only screen and ","{flex-direction:column-reverse;align-items:center;margin:0.5rem 0 3rem 0;}"],Object(styled_components_browser_esm["d" /* keyframes */])(["",""],lib["fadeIn"]),media_query_sizes["a" /* deviceMaxWidth */].laptop,media_query_sizes["a" /* deviceMaxWidth */].mobileL);

/***/ }),

/***/ "ltWS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vOnD");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Wbzz");
/* harmony import */ var _assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("yf23");
/* harmony import */ var _media_query_sizes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9ix+");
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/accessible-emoji */var LinkButton=function LinkButton(_ref){var text=_ref.text,linkToMoveTo=_ref.linkToMoveTo,enableDarkMode=_ref.enableDarkMode;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLinkButton,{state:{enableDarkMode:enableDarkMode},to:linkToMoveTo},text);};LinkButton.defaultProps={enableDarkMode:false,linkToMoveTo:'/'};/* harmony default export */ __webpack_exports__["a"] = (LinkButton);var StyledLinkButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"])(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"]).withConfig({displayName:"link-button__StyledLinkButton",componentId:"ragout-0"})(["display:block;align-self:center;width:50%;text-decoration:none;font-size:1.2em;background-color:",";color:#f9f8f7;box-shadow:",";padding:0.6rem 1rem;border:2px "," solid;border-radius:4px;margin:1rem 2rem 0 0;letter-spacing:0.04rem;text-align:center;transition:all 100ms ease-in;&:hover{border:",";color:",";background-color:",";transform:translateY(-0.2rem);transition:all 100ms ease-out;}@media ","{width:100%;margin:1rem 0;"],_assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_3__[/* globalThemeColour */ "b"],function(props){return props.state.enableDarkMode?'0.5rem 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.2)':'0.5rem 0.5rem 1.5rem 0 rgba(85, 85, 85, 0.12)';},_assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_3__[/* globalThemeColour */ "b"],function(props){return props.state.enableDarkMode?'2px #f9f8f7 solid':"2px "+_assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_3__[/* globalThemeColour */ "b"]+" solid";},function(props){return props.state.enableDarkMode?'#f9f8f7':_assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_3__[/* globalThemeColour */ "b"];},function(props){return props.state.enableDarkMode?_assets_global_style_constants_js__WEBPACK_IMPORTED_MODULE_3__[/* darkModeThemeColour */ "a"]:'#f9f8f7';},_media_query_sizes_js__WEBPACK_IMPORTED_MODULE_4__[/* deviceMaxWidth */ "a"].mobileL);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-d6a26087593b174e9b29.js.map