(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"0I9F":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n("mXGw"))&&r.__esModule?r:{default:r};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){return e&&e[t]?e[t]:""}var l=function(e){var t=e.data;if(!t)return null;var n=function(t){e.onAnalytics&&e.onAnalytics("click",{cta:{text:t.target.text,element:"text",destination:t.target.href||"/"},module:{moduleName:"Footer",bandName:e.bandName||null,modalText:null,pageDepth:t.pageY,interaction:null}})},r=function(e){n(e),e.preventDefault()},l=function(t,l,u){var c={className:"".concat(l," ot-sdk-show-settings d-inline-block"),id:"compliance-link",href:"#compliance-link",onClick:r},d={className:l,href:t.url,onClick:n,target:t.openInNewTab?"_blank":"_top"};return t.isCCPALink?a.default.createElement("a",i({},c,{key:u}),o(t.label,"en_US")||e.ccpaLabel):a.default.createElement("a",i({},d,{key:u}),o(t.label,"en_US"))},u=t.primaryRow,c=t.secondaryRow,d=t.legal;return a.default.createElement("footer",{id:e.id,className:"footer w-100"},a.default.createElement("div",{className:"container-fluid p-0"},u&&u.map&&a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col-12 text-center"},u.map((function(e,t){return l(e,"btn btn-link","prow-".concat(t))})))),c&&c.map&&a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col-12 text-center d-inline-block"},c.map((function(e,t){return l(e,"small btn-legal d-inline-block","srow-".concat(t))})))),a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col-12 text-center d-inline-block"},a.default.createElement("p",{className:"small legal d-inline-block"},o(d,"en_US"))))))};t.default=l},MX5F:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n("mXGw"))&&r.__esModule?r:{default:r},i=n("r/w2");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){return a.default.createElement(i.Text,o({},e,{className:"w-100"}))};t.default=l},Zr5d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n("mXGw"))&&r.__esModule?r:{default:r},i=n("nuXc");var o=function(e){return a.default.createElement(i.StyledImage,e)};t.default=o},hJJI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("mXGw")),a=i(n("0I9F"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){return r.default.createElement(a.default,e)};t.default=o},nuXc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Image=v,t.StyledImage=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("mXGw")),a=u(n("PDtE")),i=u(n("UutA")),o=n("XuNH"),l=u(n("zlD+"));function u(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  &.initial-img-wrapper {\n    padding-bottom: ",';\n    position: relative;\n    display: inline-block;\n    width: 100%;\n  }\n &.initial-img-wrapper.img-wrapper-override {\n  padding-bottom: 0;\n    position: static;\n    width: auto;\n }\n &.lozad[data-loaded="false"], &.lozad:not([data-loaded]) {\n    position: absolute;\n    left: 0;\n  }\n  @media (max-width: 480px) {\n    width: 100%;\n  }\n  ']);return d=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return"object"===g(e)?e.large:e}function b(e){var t=e.id,n=e.imageWidth,i=e.imageSrc,u=e.imageSrcMaxWidth,c=e.imageSrcMaxHeight,d=e.altText,s=e.onImageLoaded,f=e.className,m=e.classes,g=e.srcSetConfig,b=e.useDataAttributes,v=e.compPercentWidthByScreenSize,y=t&&t.replace&&t.replace(/(:)/g,"");(0,r.useEffect)((function(){void 0===b&&y&&(0,l.default)("#".concat(y,".lozad"),{rootMargin:"0px 0px 10% 0px",loaded:function(){s(!0)}}).observe()}),[]);var h=(0,o.getImageConfig)({sources:i,maxWidths:u,srcSetConfigName:g||"fullWidth",percentWidthByScreenSize:v}),w={id:y,src:h.defaultSrc,alt:d,className:(0,a.default)("img",{"img-fluid":"fluid"===n},{lozad:void 0===b},m,f),srcSet:h.srcSet,sizes:h.sizes};return w.height=p(c),w.width=p(u),"static"===n&&u&&(w.style={width:h.defaultMaxWidth}),b&&(w["data-src"]=w.src,w["data-srcset"]=w.srcSet,w["data-sizes"]=w.sizes,h.artDirection=void 0,w.srcSet=void 0,w.sizes=void 0,w.src=void 0),void 0===b&&(w["data-src"]=w.src,w["data-srcset"]=w.srcSet,w.srcSet=void 0,w.src=void 0),h.artDirection?(w.srcSet=void 0,w.sizes=void 0,r.default.createElement("picture",null,h.artDirection.map((function(e){return r.default.createElement("source",{media:e.media,srcSet:e.srcset})})),r.default.createElement("img",w))):r.default.createElement("img",w)}function v(e){var t=e.id,n=e.imageWidth,i=e.targetLink,o=e.openNewTab,l=e.imageSrc,u=e.imageSrcMaxWidth,c=e.imageSrcMaxHeight,d=e.altText,m=e.srcSetConfig,g=e.bandName,p=e.className,v=e.classes,y=e.onAnalytics,h=e.useDataAttributes,w=e.compPercentWidthByScreenSize,S=(e.userCountryFromUrl,e.userLanguage,f((0,r.useState)(!0),2)),k=S[0],A=S[1],x=o?"_blank":"_top",O={srcSetConfig:m,imageWidth:n,imageSrc:l,imageSrcMaxWidth:u,imageSrcMaxHeight:c,altText:d,className:p,classes:v,useDataAttributes:h,compPercentWidthByScreenSize:w},N=function(){A(!1)},E=function(e){return e.includes("internal:")?e.replace("internal:",""):e};return i?r.default.createElement("a",{href:E(i),target:x,id:"".concat(t,"-link"),onClick:function(e){y&&y("click",{module:{moduleName:"Image",bandName:g||null,modalText:null,pageDepth:e.pageY,interaction:null},content:{altText:O.altText,linkURL:E(i),contentID:null,contentName:null,elementType:"tile"}})}},r.default.createElement("div",{className:(0,a.default)(p,!1===k&&"img-wrapper-override",void 0===h&&"initial-img-wrapper")},r.default.createElement(b,s({},O,{id:t,onImageLoaded:N})))):r.default.createElement("div",{className:(0,a.default)(p,!1===k&&"img-wrapper-override",void 0===h&&"initial-img-wrapper")},r.default.createElement(b,s({},O,{id:t,onImageLoaded:N})))}var y=(0,i.default)(v)(d(),(function(e){var t=function(e,t){var n=p(e),r=p(t);if(0!==r&&0!==n)return r>=n?n/r*100:r/n*100}(e.imageSrcMaxHeight,e.imageSrcMaxWidth);return t?"".concat(t,"%"):"auto"}));t.StyledImage=y},"r/w2":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Text=b;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("mXGw")),i=u(n("PDtE")),o=u(n("W0B4")),l=u(n("UutA"));function u(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  word-wrap: break-word;\n  & ul,\n  & li {\n    list-style-position: inside !important;\n  }\n\n  & a {\n    text-transform: inherit;\n  }\n\n\t& .btn-link {\n\t\tcolor: #9e86ff;\n\t\tfont-size: inherit;\n\t\tletter-spacing: inherit;\n    text-decoration: none;\n    \n\t\t@media (hover: hover) {\n\t\t\t&:hover {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}\n    }\n\t}\n  \n  & .readMore {\n    height: auto;\n    overflow: hidden;\n\n    &.collapsed {\n      height: ",";\n\t    -webkit-mask-image: linear-gradient(black calc(100% - 50px), transparent);\n\t    mask-image: linear-gradient(black calc(100% - 50px), transparent);\n    }\n  }\n"]);return f=function(){return e},e}var m="LESS",g="MORE",p=l.default.div(f(),(function(e){return e.heightLimit}));function b(e){var t=e.className,n=e.id,r=e.onAnalytics,o=e.parentModuleName,l=e.bandName,u=e.heightLimit,c=e.ltsLess,s=e.ltsMore,f=d((0,a.useState)(!1),2),b=f[0],v=f[1],y=d((0,a.useState)(!1),2),h=y[0],w=y[1],S=h?"".concat(u,"px"):"auto",k=c&&c.length>0?c:m,A=s&&s.length>0?s:g;(0,a.useEffect)((function(){var e=x();if(u&&u>0){var t=e>=u;w(t),v(t)}}),[]);var x=function(){var e=document.getElementById(n);if(e)return e.offsetHeight};var O=a.default.createElement("div",{className:"text-center",dangerouslySetInnerHTML:{__html:e.text},onClick:function(t){if(r&&"A"===t.target.tagName){var n=document.getElementById(e.id),a=n?n.getElementsByTagName("H1"):null,i=a&&a.length?a[0].innerText:null;r("click",{cta:{text:t.target.text,element:"text",destination:t.target.href},module:{moduleName:o||"Text",bandName:l||null,headline:i,pageDepth:t.pageY,interaction:null}})}}});return a.default.createElement(p,{className:(0,i.default)("text rich-text w-100",t),id:n,heightLimit:S},h?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:(0,i.default)("readMore",{collapsed:b}),id:n},O),h&&a.default.createElement("button",{className:"btn btn-link font-weight-normal p-0",onClick:function(){v(!b)}},b?A:k)):O)}b.propTypes={bandName:o.default.string,className:o.default.string,heightLimit:o.default.number,id:o.default.string,ltsLess:o.default.string,ltsMore:o.default.string,onAnalytics:o.default.func,parentModuleName:o.default.element}},"zlD+":function(e,t,n){e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var n=t.querySelector("img"),r=!1;null===n&&(n=document.createElement("img"),r=!0),e&&t.getAttribute("data-iesrc")&&(n.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(n.alt=t.getAttribute("data-alt")),r&&t.append(n)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,i=void 0,o=0;o<=a.length-1;o++)(i=a[o].getAttribute("data-src"))&&(a[o].src=i);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var l=",";if(t.getAttribute("data-background-delimiter")&&(l=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(l).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var u=t.getAttribute("data-background-image-set").split(l),c=u[0].substr(0,u[0].indexOf(" "))||u[0];c=-1===c.indexOf("url(")?"url("+c+")":c,1===u.length?t.style.backgroundImage=c:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+c+"; background-image: -webkit-image-set("+u+"); background-image: image-set("+u+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function n(e){e.setAttribute("data-loaded",!0)}var r=function(e){return"true"===e.getAttribute("data-loaded")},a=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e,i,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},u=Object.assign({},t,l),c=u.root,d=u.rootMargin,s=u.threshold,f=u.load,m=u.loaded,g=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver((e=f,i=m,function(t,a){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(a.unobserve(t.target),r(t.target)||(e(t.target),n(t.target),i(t.target)))}))}),{root:c,rootMargin:d,threshold:s}));for(var p,b=a(o,c),v=0;v<b.length;v++)(p=b[v]).getAttribute("data-placeholder-background")&&(p.style.background=p.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=a(o,c),t=0;t<e.length;t++)r(e[t])||(g?g.observe(e[t]):(f(e[t]),n(e[t]),m(e[t])))},triggerLoad:function(e){r(e)||(f(e),n(e),m(e))},observer:g}}}()}}]);