(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{37:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"b",function(){return s});var l=n(5);function c(e,t){var n,r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length)return r&&(e=r),n=0,{s:t=function(){},n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(e){return{type:l.b,payload:{item:e}}},r=function(e){return{type:l.e,payload:{id:e}}},o=function(e,t){return{type:l.f,payload:{id:e,qty:parseInt(t)}}},a=function(t,n){return console.log("Items To Be Saved",t),function(e){window.fetch("http://localhost:9000/cart/api/saveUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:n,cart:t})}).then(function(e){return e.json()}).then(function(e){console.log("response ",e)}).catch(function(e){console.log("Error While Saving Cart",e)})}},s=function(e){return function(a){console.log("Get List Of items"),window.fetch("http://localhost:9000/cart/api/getUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:e})}).then(function(e){return e.json()}).then(function(e){console.log("response - get user cart ",e),a({type:l.d});var t,n=c(e.cart);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=(console.log("item in for of",r),i(r));a(o)}}catch(e){n.e(e)}finally{n.f()}}).catch(function(e){console.log("Error While Login",e)})}}},49:function(e,t,n){"use strict";n.r(t);var u=n(0),i=n.n(u),s=n(10),r=n(5),f=n(37),p=function(e){return{type:r.g,payload:{user:e}}};t.default=function(e){var r=Object(u.useRef)(null),o=Object(u.useRef)(null),a=Object(u.useRef)(null),l=Object(u.useRef)(null),t=Object(s.d)(function(e){return e.userReducer.user}),c=(Object(u.useEffect)(function(){return r.current.value=t.userName,o.current.value=t.password,l.current.value=t.street,a.current.value=t.mobile,function(){console.log("User Component is un mounted - we can do cleaning of subscriptions like clearinterval")}}),Object(s.c)());return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"User Component"),i.a.createElement("form",{className:"form col-md-10 userHook",onSubmit:function(e){var n,t={userName:r.current.value,password:o.current.value,street:l.current.value,mobile:a.current.value};c((n=t,function(t,e){console.log("called by dispatch and synced by thunk"),window.fetch("http://localhost:9000/user/api/signinup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){t(p(e)),t(Object(f.b)(e._id))}).catch(function(e){console.log("err in login ",e)})})),e.preventDefault()}},i.a.createElement("label",null,i.a.createElement("b",null,"User Name :"),i.a.createElement("input",{type:"text",className:"form-control col-md-12",ref:r,placeholder:"Please enter user name",maxLength:20,required:!0})),i.a.createElement("br",null),i.a.createElement("label",null,i.a.createElement("b",null,"Password :"),i.a.createElement("input",{type:"password",className:"form-control col-md-12",ref:o,placeholder:"Please enter password",maxLength:20,required:!0})),i.a.createElement("br",null),i.a.createElement("label",null,i.a.createElement("b",null,"Street :"),i.a.createElement("input",{type:"text",className:"form-control col-md-12",ref:l,placeholder:"Please enter address",maxLength:20})),i.a.createElement("br",null),i.a.createElement("label",null,i.a.createElement("b",null,"Mobile :"),i.a.createElement("input",{type:"number",className:"form-control col-md-12",ref:a,placeholder:"Please enter mobile"})),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Signin"})))}}}]);