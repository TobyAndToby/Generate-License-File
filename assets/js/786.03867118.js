"use strict";(self.webpackChunk_generate_license_file_website=self.webpackChunk_generate_license_file_website||[]).push([[786],{8417:(e,t,r)=>{r.d(t,{Z:()=>ae});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,i=String.fromCharCode,o=Object.assign;function s(e){return e.trim()}function c(e,t,r){return e.replace(t,r)}function l(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function d(e,t,r){return e.slice(t,r)}function f(e){return e.length}function p(e){return e.length}function h(e,t){return t.push(e),e}var m=1,g=1,v=0,y=0,b=0,k="";function x(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:m,column:g,length:o,return:""}}function w(e,t){return o(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function C(){return b=y>0?u(k,--y):0,g--,10===b&&(g=1,m--),b}function _(){return b=y<v?u(k,y++):0,g++,10===b&&(g=1,m++),b}function A(){return u(k,y)}function S(){return y}function P(e,t){return d(k,e,t)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O(e){return m=g=1,v=f(k=e),y=0,[]}function T(e){return k="",e}function E(e){return s(P(y-1,M(91===e?e+2:40===e?e+1:e)))}function R(e){for(;(b=A())&&b<33;)_();return $(e)>2||$(b)>3?"":" "}function z(e,t){for(;--t&&_()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return P(e,S()+(t<6&&32==A()&&32==_()))}function M(e){for(;_();)switch(b){case e:return y;case 34:case 39:34!==e&&39!==e&&M(b);break;case 40:41===e&&M(e);break;case 92:_()}return y}function L(e,t){for(;_()&&e+b!==57&&(e+b!==84||47!==A()););return"/*"+P(t,y-1)+"*"+i(47===e?e:_())}function I(e){for(;!$(A());)_();return P(e,y)}var N="-ms-",j="-moz-",H="-webkit-",F="comm",q="rule",D="decl",G="@keyframes";function U(e,t){for(var r="",n=p(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function W(e,t,r,n){switch(e.type){case"@import":case D:return e.return=e.return||e.value;case F:return"";case G:return e.return=e.value+"{"+U(e.children,n)+"}";case q:e.value=e.props.join(",")}return f(r=U(e.children,n))?e.return=e.value+"{"+r+"}":""}function Z(e){return T(B("",null,null,null,[""],e=O(e),0,[0],e))}function B(e,t,r,n,a,o,s,d,p){for(var m=0,g=0,v=s,y=0,b=0,k=0,x=1,w=1,P=1,$=0,O="",T=a,M=o,N=n,j=O;w;)switch(k=$,$=_()){case 40:if(108!=k&&58==u(j,v-1)){-1!=l(j+=c(E($),"&","&\f"),"&\f")&&(P=-1);break}case 34:case 39:case 91:j+=E($);break;case 9:case 10:case 13:case 32:j+=R(k);break;case 92:j+=z(S()-1,7);continue;case 47:switch(A()){case 42:case 47:h(V(L(_(),S()),t,r),p);break;default:j+="/"}break;case 123*x:d[m++]=f(j)*P;case 125*x:case 59:case 0:switch($){case 0:case 125:w=0;case 59+g:b>0&&f(j)-v&&h(b>32?Y(j+";",n,r,v-1):Y(c(j," ","")+";",n,r,v-2),p);break;case 59:j+=";";default:if(h(N=X(j,t,r,m,g,a,d,O,T=[],M=[],v),o),123===$)if(0===g)B(j,t,N,N,T,o,v,d,M);else switch(99===y&&110===u(j,3)?100:y){case 100:case 109:case 115:B(e,N,N,n&&h(X(e,N,N,0,0,a,d,O,a,T=[],v),M),a,M,v,d,n?T:M);break;default:B(j,N,N,N,[""],M,0,d,M)}}m=g=b=0,x=P=1,O=j="",v=s;break;case 58:v=1+f(j),b=k;default:if(x<1)if(123==$)--x;else if(125==$&&0==x++&&125==C())continue;switch(j+=i($),$*x){case 38:P=g>0?1:(j+="\f",-1);break;case 44:d[m++]=(f(j)-1)*P,P=1;break;case 64:45===A()&&(j+=E(_())),y=A(),g=v=f(O=j+=I(S())),$++;break;case 45:45===k&&2==f(j)&&(x=0)}}return o}function X(e,t,r,n,i,o,l,u,f,h,m){for(var g=i-1,v=0===i?o:[""],y=p(v),b=0,k=0,w=0;b<n;++b)for(var C=0,_=d(e,g+1,g=a(k=l[b])),A=e;C<y;++C)(A=s(k>0?v[C]+" "+_:c(_,/&\f/g,v[C])))&&(f[w++]=A);return x(e,t,r,0===i?q:u,f,h,m)}function V(e,t,r){return x(e,t,r,F,i(b),d(e,2,-2),0)}function Y(e,t,r,n){return x(e,t,r,D,d(e,0,n),d(e,n+1,-1),n)}var K=function(e,t,r){for(var n=0,a=0;n=a,a=A(),38===n&&12===a&&(t[r]=1),!$(a);)_();return P(e,y)},J=function(e,t){return T(function(e,t){var r=-1,n=44;do{switch($(n)){case 0:38===n&&12===A()&&(t[r]=1),e[r]+=K(y-1,t,r);break;case 2:e[r]+=E(n);break;case 4:if(44===n){e[++r]=58===A()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=i(n)}}while(n=_());return e}(O(e),t))},Q=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Q.get(r))&&!n){Q.set(e,!0);for(var a=[],i=J(t,a),o=r.props,s=0,c=0;s<i.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=a[s]?i[s].replace(/&\f/g,o[l]):o[l]+" "+i[s]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function re(e,t){switch(function(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+j+e+N+e+e;case 6828:case 4268:return H+e+N+e+e;case 6165:return H+e+N+"flex-"+e+e;case 5187:return H+e+c(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return H+e+N+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return H+e+N+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return H+e+N+c(e,"shrink","negative")+e;case 5292:return H+e+N+c(e,"basis","preferred-size")+e;case 6060:return H+"box-"+c(e,"-grow","")+H+e+N+c(e,"grow","positive")+e;case 4554:return H+c(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(f(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+j+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~l(e,"stretch")?re(c(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,f(e)-3-(~l(e,"!important")&&10))){case 107:return c(e,":",":"+H)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+H+(45===u(e,14)?"inline-":"")+"box$3$1"+H+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return H+e+N+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+N+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+N+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return H+e+N+e+e}return e}var ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=re(e.value,e.length);break;case G:return U([w(e,{value:c(e.value,"@","@"+H)})],n);case q:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([w(e,{props:[c(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return U([w(e,{props:[c(t,/:(plac\w+)/,":"+H+"input-$1")]}),w(e,{props:[c(t,/:(plac\w+)/,":-moz-$1")]}),w(e,{props:[c(t,/:(plac\w+)/,N+"input-$1")]})],n)}return""}))}}];const ae=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||ne;var i,o,s={},c=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;c.push(e)}));var l,u,d,f,h=[W,(f=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],m=(u=[ee,te].concat(a,h),d=p(u),function(e,t,r,n){for(var a="",i=0;i<d;i++)a+=u[i](e,t,r,n)||"";return a});o=function(e,t,r,n){l=r,U(Z(e?e+"{"+t.styles+"}":t.styles),m),n&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new n({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:o};return g.sheet.hydrate(c),g}},5042:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},8137:(e,t,r)=>{r.d(t,{O:()=>m});const n=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)};const a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var i=r(5042),o=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},l=function(e){return null!=e&&"boolean"!=typeof e},u=(0,i.Z)((function(e){return c(e)?e:e.replace(o,"-$&").toLowerCase()})),d=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(s,(function(e,t,r){return p={name:t,styles:r,next:p},t}))}return 1===a[e]||c(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return p={name:r.name,styles:r.styles,next:p},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)p={name:n.name,styles:n.styles,next:p},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=f(e,t,r[a])+";";else for(var i in r){var o=r[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":l(o)&&(n+=u(i)+":"+d(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=f(e,t,o);switch(i){case"animation":case"animationName":n+=u(i)+":"+s+";";break;default:n+=i+"{"+s+"}"}}else for(var c=0;c<o.length;c++)l(o[c])&&(n+=u(i)+":"+d(i,o[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=p,i=r(e);return p=a,f(e,t,i)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var p,h=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var m=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,i="";p=void 0;var o=e[0];null==o||void 0===o.raw?(a=!1,i+=f(r,t,o)):i+=o[0];for(var s=1;s<e.length;s++)i+=f(r,t,e[s]),a&&(i+=o[s]);h.lastIndex=0;for(var c,l="";null!==(c=h.exec(i));)l+="-"+c[1];return{name:n(i)+l,styles:i,next:p}}},3786:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7294),a=r(7462),i=r(5042),o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const s=(0,i.Z)((function(e){return o.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var c=r(8417),l=r(8137),u=r(7278),d=(0,n.createContext)("undefined"!=typeof HTMLElement?(0,c.Z)({key:"css"}):null);d.Provider;var f=function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(d);return e(t,a,r)}))},p=(0,n.createContext)({});var h=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},m=s,g=function(e){return"theme"!==e},v=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?m:g},y=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},b=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;h(t,r,n);(0,u.L)((function(){return function(e,t,r){h(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)}));return null};const k=function e(t,r){var i,o,s=t.__emotion_real===t,c=s&&t.__emotion_base||t;void 0!==r&&(i=r.label,o=r.target);var u=y(t,r,s),d=u||v(c),h=!d("as");return function(){var m=arguments,g=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&g.push("label:"+i+";"),null==m[0]||void 0===m[0].raw)g.push.apply(g,m);else{0,g.push(m[0][0]);for(var k=m.length,x=1;x<k;x++)g.push(m[x],m[0][x])}var w=f((function(e,t,r){var a,i,s,f,m=h&&e.as||c,y="",k=[],x=e;if(null==e.theme){for(var w in x={},e)x[w]=e[w];x.theme=(0,n.useContext)(p)}"string"==typeof e.className?(a=t.registered,i=k,s=e.className,f="",s.split(" ").forEach((function(e){void 0!==a[e]?i.push(a[e]+";"):f+=e+" "})),y=f):null!=e.className&&(y=e.className+" ");var C=(0,l.O)(g.concat(k),t.registered,x);y+=t.key+"-"+C.name,void 0!==o&&(y+=" "+o);var _=h&&void 0===u?v(m):d,A={};for(var S in e)h&&"as"===S||_(S)&&(A[S]=e[S]);return A.className=y,A.ref=r,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b,{cache:t,serialized:C,isStringTag:"string"==typeof m}),(0,n.createElement)(m,A))}));return w.displayName=void 0!==i?i:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=c,w.__emotion_styles=g,w.__emotion_forwardProp=u,Object.defineProperty(w,"toString",{value:function(){return"."+o}}),w.withComponent=function(t,n){return e(t,(0,a.Z)({},r,n,{shouldForwardProp:y(w,n,!0)})).apply(void 0,g)},w}};var x=k.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){x[e]=x(e)}));const w=x},7278:(e,t,r)=>{var n;r.d(t,{L:()=>o});var a=r(7294),i=!!(n||(n=r.t(a,2))).useInsertionEffect&&(n||(n=r.t(a,2))).useInsertionEffect,o=i||function(e){return e()}}}]);