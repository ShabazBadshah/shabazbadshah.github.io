(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),o=r(a("XEEL")),d=r(a("uDP2")),l=r(a("j8BX")),s=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),p=function(e){var t=u(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,w=y&&window.IntersectionObserver,S=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),s.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+s+o+d+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=s.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,d=s.default.createElement(R,(0,l.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?s.default.createElement("picture",null,i(r),d):d})),R=s.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var _=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&w&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=s.default.createRef(),a.placeholderRef=t.placeholderRef||s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,d=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,h=e.fluid,p=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,w=e.Tag,S=e.itemProp,E=e.loading,L=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:k?1:0,transition:_?"opacity "+y+"ms":"none"},d),j="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},_&&N,d,f),T={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:S};if(h){var H=h,M=g(h);return s.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},s.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),j&&s.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&N)}),M.base64&&s.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:T,imageVariants:H,generateSources:I}),M.tracedSVG&&s.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:T,imageVariants:H,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,v(H),s.default.createElement(R,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:E},M,{imageVariants:H}))}}))}if(p){var P=p,W=g(p),q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete q.display,s.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},j&&s.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},_&&N)}),W.base64&&s.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:T,imageVariants:P,generateSources:I}),W.tracedSVG&&s.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:T,imageVariants:P,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,v(P),s.default.createElement(R,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:E},W,{imageVariants:P}))}}))}return null},t}(s.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function N(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}_.propTypes={resolutions:O,sizes:j,fixed:N(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:N(c.default.oneOfType([j,c.default.arrayOf(j)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=_;t.default=V},uW3I:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return v}));var r=a("q1tI"),i=a.n(r),n=a("vOnD"),o=a("ma3e"),d=a("Wbzz"),l=a("l2P8"),s=a("zCNn"),c=a("9eSz"),u=a.n(c),f=function(){var e=Object(r.useContext)(n.a),t=Object(d.useStaticQuery)("1804160975");return i.a.createElement(w,null,i.a.createElement(y,{fluid:t.file.childImageSharp.fluid}),i.a.createElement(g,null,"Get in touch"),i.a.createElement(h,null,"Find me online at the places below, or just shoot me an email"),i.a.createElement(p,null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.site.siteMetadata.contactInfo.linkedin},i.a.createElement(b,null,i.a.createElement(o.c,{color:e.iconColour,size:"1.7em"}),i.a.createElement(m,null,"LinkedIn"))),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.site.siteMetadata.contactInfo.github},i.a.createElement(b,null,i.a.createElement(o.b,{color:e.iconColour,size:"1.7em"}),i.a.createElement(m,null,"Github"))),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:"+t.site.siteMetadata.contactInfo.email+"Subject=Hey%20Shabaz"},i.a.createElement(b,null,i.a.createElement(o.a,{color:e.iconColour,size:"1.7em"}),i.a.createElement(m,null,"Email")))))},m=n.c.h3.withConfig({displayName:"social-media-links__StyledSocialMediaLinkText",componentId:"nwvhu2-0"})(["color:",";margin-left:1rem;text-decoration:none;font-size:1.1rem;font-weight:normal;margin:0 1rem;"],(function(e){return e.theme.text})),g=n.c.h3.withConfig({displayName:"social-media-links__StyledCardTitle",componentId:"nwvhu2-1"})(["font-size:1.5rem;color:#f9f8f7;margin:1.5rem 0 1rem 0;"]),h=n.c.h4.withConfig({displayName:"social-media-links__StyledCardSubtitle",componentId:"nwvhu2-2"})(["text-align:center;margin:0.5rem 0;font-size:1.1rem;font-weight:normal;color:#f9f8f7;line-height:1.5rem;word-spacing:0.11rem;"]),p=n.c.ul.withConfig({displayName:"social-media-links__StyledSocialMediaLinksWrapper",componentId:"nwvhu2-3"})(["list-style:none;padding:0;margin-bottom:0;width:100%;& a{text-decoration:none;}"]),b=n.c.li.withConfig({displayName:"social-media-links__StyledSocialMediaLink",componentId:"nwvhu2-4"})(["padding:0.6rem 1rem;background-color:",";margin:1rem 0;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;&:hover{animation:"," 800ms ease-in-out;box-shadow:0.5em 0.5em 1.5em 0 rgba(85,85,85,0.1);}&:last-child{margin-bottom:0;}"],(function(e){return e.theme.socialMediaLinkBgColour}),Object(n.d)(["",""],l.headShake)),y=Object(n.c)(u.a).withConfig({displayName:"social-media-links__StyledImage",componentId:"nwvhu2-5"})(["border-radius:50%;width:130px;height:auto;"]),w=n.c.div.withConfig({displayName:"social-media-links__StyledContactCard",componentId:"nwvhu2-6"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:",";padding:2em;border-radius:8px;box-shadow:rgba(85,85,85,0.08) 0.5rem 0.5rem 1rem 0;min-width:300px;max-height:500px;margin-right:4rem;@media only screen and ","{margin-right:3rem;}@media only screen and ","{margin-right:0;margin-top:2rem;max-width:320px;}"],(function(e){return e.theme.primaryThemeColour}),s.a.tablet,s.a.mobileL),S=function(e){var t=e.title,a=e.date,r=e.description,n=e.cardLink,o=e.span,d=e.children;return i.a.createElement(E,{to:n,span:o},i.a.createElement("div",null,i.a.createElement(x,null,t),a&&i.a.createElement(I,null,a)),i.a.createElement(L,null,r),d)},v=S;S.defaultProps={cardLink:"/",date:"",span:!1};var E=Object(n.c)(d.Link).withConfig({displayName:"work-card__StyledListItem",componentId:"sc-19xvztj-0"})(["color:unset;width:",";padding:1.3rem 1.5rem 1.3rem 1.5rem;margin:0.5rem 0;display:flex;flex-direction:column;text-decoration:none;box-shadow:",";background-color:",";transition:background-color 100ms ease-out;border-radius:5px;cursor:pointer;border:",";&:hover{transition:background-color 100ms ease-in;cursor:pointer;background-color:",";}&:nth-child(odd){margin-right:",";}@media only screen and ","{width:100%;&:nth-child(odd){margin-right:0;}}"],(function(e){return e.span?"100%":"49%"}),(function(e){return e.theme.cardDropShadow}),(function(e){return e.theme.cardBgColour}),(function(e){return e.theme.cardBorder}),(function(e){return e.theme.cardHoverColour}),(function(e){return e.span?"0":"1rem"}),s.a.mobileL),x=n.c.h2.withConfig({displayName:"work-card__StyledCardTitle",componentId:"sc-19xvztj-1"})(["margin:0 0 0.5rem 0;font-size:1.1rem;font-weight:500;line-height:1.5rem;word-spacing:0.05rem;"]),I=n.c.h3.withConfig({displayName:"work-card__StyledCardDate",componentId:"sc-19xvztj-2"})(["font-weight:lighter;margin:0.5rem 0 0 0;font-size:1rem;"]),L=n.c.p.withConfig({displayName:"work-card__StyledCardDescription",componentId:"sc-19xvztj-3"})(["margin:1.2rem 0 0 0;font-weight:400;font-style:italic;line-height:1.4rem;"])}}]);
//# sourceMappingURL=e40d5592b610d24691b31bfc04e1f906e6820c94-c31d69960fbfbf992781.js.map