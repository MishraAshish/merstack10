(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{48:function(e,n,t){"use strict";t.r(n);var u=t(0),i=t.n(u);function r(e){var n=e.text,e=e.count;return console.log("rendering ".concat(n)),i.a.createElement("div",null,n," - ",e)}var s=i.a.memo(r);function a(e){var n=e.handleClick,e=e.children;return console.log("Rendering button - ",e),i.a.createElement("button",{onClick:n},e)}var m=i.a.memo(a);function l(){return console.log("rendering title"),i.a.createElement("h2",null,"Using Hooks")}var f=i.a.memo(l);function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}n.default=function(e){var n=(l=d(Object(u.useState)(18),2))[0],t=l[1],r=(l=d(Object(u.useState)(2e4),2))[0],a=l[1],l=Object(u.useCallback)(function(){console.log("Increment Age Gets Called"),t(n+1)},[n]),o=Object(u.useCallback)(function(){console.log("salary"),a(r+100)},[r]),c=Object(u.useMemo)(function(){console.log("IsEven");for(var e=1;e<2e8;)e++;return n%2==0},[n]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),i.a.createElement(s,{text:"AGE",count:n}),i.a.createElement(m,{handleClick:l},"Increment Age"),i.a.createElement("span",null,c?" Even":" Odd"),i.a.createElement(s,{text:"Salary",count:r}),i.a.createElement(m,{handleClick:o},"Increment Salary"))}}}]);