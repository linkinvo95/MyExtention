/*! For license information please see content.js.LICENSE.txt */
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=330)}({16:function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return u})),r.d(e,"f",(function(){return c})),r.d(e,"k",(function(){return f})),r.d(e,"j",(function(){return s})),r.d(e,"h",(function(){return l})),r.d(e,"i",(function(){return d})),r.d(e,"g",(function(){return h})),r.d(e,"l",(function(){return y}));var n="SET_MATCH_WHOLE",o="SET_MATCH_CASE",i="SET_COLOR",a="SET_COLOR_BG",u="SET_BOLD",c="SET_UNDERLINE",f=function(t){return{type:n,data:t}},s=function(t){return{type:o,data:t}},l=function(t){return{type:i,data:t}},d=function(t){return{type:a,data:t}},h=function(t){return{type:u,data:t}},y=function(t){return{type:c,data:t}}},20:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},21:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return o}))},23:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},24:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"d",(function(){return a})),r.d(e,"f",(function(){return u})),r.d(e,"e",(function(){return c}));var n="SET_ENABLED",o="SET_STATS",i="SET_ICONHASH",a=function(t){return{type:n,data:t}},u=function(t){return{type:o,data:t}},c=function(t){return{type:i,data:t}}},25:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"d",(function(){return a})),r.d(e,"f",(function(){return u})),r.d(e,"e",(function(){return c}));var n="ACCOUNT_AUTH",o="ACCOUNT_PROFILE",i="ACCOUNT_LOGOUT",a=function(t){return{type:n,data:t}},u=function(t){return{type:o,data:t}},c=function(){return{type:i}}},26:function(t,e,r){t.exports=r(90)},27:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return u}));var n=r(48),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(t){if("object"!==typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function u(t,e,r){var o;if("function"===typeof e&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof e&&"undefined"===typeof r&&(r=e,e=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error("Expected the enhancer to be a function.");return r(u)(t,e)}if("function"!==typeof t)throw new Error("Expected the reducer to be a function.");var c=t,f=e,s=[],l=s,d=!1;function h(){l===s&&(l=s.slice())}function y(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function p(t){if("function"!==typeof t)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return h(),l.push(t),function(){if(e){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,h();var r=l.indexOf(t);l.splice(r,1),s=null}}}function b(t){if(!a(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,f=c(f,t)}finally{d=!1}for(var e=s=l,r=0;r<e.length;r++){(0,e[r])()}return t}function v(t){if("function"!==typeof t)throw new Error("Expected the nextReducer to be a function.");c=t,b({type:i.REPLACE})}function m(){var t,e=p;return(t={subscribe:function(t){if("object"!==typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function r(){t.next&&t.next(y())}return r(),{unsubscribe:e(r)}}})[n.a]=function(){return this},t}return b({type:i.INIT}),(o={dispatch:b,subscribe:p,getState:y,replaceReducer:v})[n.a]=m,o}function c(t,e){var r=e&&e.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function f(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];0,"function"===typeof t[o]&&(r[o]=t[o])}var a,u=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if("undefined"===typeof r(void 0,{type:i.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof r(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(f){a=f}return function(t,e){if(void 0===t&&(t={}),a)throw a;for(var n=!1,o={},i=0;i<u.length;i++){var f=u[i],s=r[f],l=t[f],d=s(l,e);if("undefined"===typeof d){var h=c(f,e);throw new Error(h)}o[f]=d,n=n||d!==l}return(n=n||u.length!==Object.keys(t).length)?o:t}}function s(t,e){return function(){return e(t.apply(this,arguments))}}function l(t,e){if("function"===typeof t)return s(t,e);if("object"!==typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var n in t){var o=t[n];"function"===typeof o&&(r[n]=s(o,e))}return r}},29:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return function(){var e,r=n(t);if(o()){var i=n(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return a(this,e)}}r.d(e,"a",(function(){return u}))},30:function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",(function(){return o}))},330:function(t,e,r){"use strict";r.r(e);var n,o,i=r(26),a=r.n(i),u=r(42),c=r(27),f=r(64),s=r(65),l=r(24),d=r(36),h=function(t,e){n||((n=document.createElement("style")).type="text/css",document.body.appendChild(n)),n.innerHTML=t?".".concat(e," {").concat(t,"}"):""},y=!1,p=!1,b=function(t,e){var r=t.getState(),n=r.account,i=r.marker,a=r.settings,u={account:n&&{keywords:n.keywords},marker:i&&{enabled:i.enabled},settings:a},c=JSON.stringify(u);if(c===o)return!1;var f=n.keywords&&i.enabled;if(y&&function(){var t=document.querySelectorAll("span.".concat("keywordmarker","-container"));h(!1);var e,r=Object(d.a)(t);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(n.parentNode){var o=n.innerHTML.replace(/<[^<>]+>/g,""),i=document.createTextNode(o);n.parentNode.replaceChild(i,n)}}}catch(a){r.e(a)}finally{r.f()}}(),o=c,e)return!1;if(p=!1,!f)return!1;y=f;var s=n.keywords,l=a.matchWhole,b=a.matchCase;return p=function(t){var e=t.keywords,r=t.matchWhole,n=t.matchCase,o=t.style;if(!e||!e.length)return!1;for(var i,a=document.createNodeIterator(document.body,NodeFilter.SHOW_TEXT,null),u=[];i=a.nextNode();)if(i.parentNode){var c=i.parentNode;1===c.nodeType&&"SCRIPT"!==c.nodeName&&i.nodeValue.trim()&&u.push(i)}if(!u.length)return!1;var f="".concat("keywordmarker","-item");h(o,f);var s=document.createElement("span");s.classList.add("".concat("keywordmarker","-container")),e=e.map((function(t){return t.replace(/\W+/g,"")}));for(var l=new RegExp((r?"\\b(?:":"")+e.join("|")+(r?")\\b":""),"g"+(n?"":"i")),d='<span class="'.concat(f,'">'),y=e.map((function(t){return n?t:t.toLowerCase()})),p=e.map((function(){return 0})),b=0,v=u;b<v.length;b++){var m=v[b],w=m.nodeValue,g=m.parentNode,O=!1;if(w=w.replace(l,(function(t){O=!0;var e=y.indexOf(n?t:t.toLowerCase());return e>-1&&p[e]++,d+t+"</span>"})),O){var j=s.cloneNode();j.innerHTML=w,g.replaceChild(j,m)}}return p}({keywords:s,matchWhole:l,matchCase:b,style:v(a)}),m(t),!0},v=function(t){var e=t.color,r=t.colorBg,n=t.bold,o=t.underline,i=[];return e&&i.push(["color",e]),r&&i.push(["background-color",r]),(e||r)&&i.push(["padding","0.2em"]),n&&i.push(["font-weight","bold"]),o&&i.push(["text-decoration","underline"]),i.map((function(t){return t[0]+":"+t[1]})).join(";")},m=function(t){p&&t.dispatch(Object(l.f)(p))};Object(u.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return chrome.runtime.onMessage.addListener((function(t){t&&"tabFocusPass"===t.id&&!b(e)&&m(e)})),t.next=3,Object(f.a)({createStore:c.c})(s.a);case 3:(e=t.sent).subscribe((function(){b(e,document.hidden)})),b(e);case 6:case"end":return t.stop()}}),t)})))()},36:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,a=!0,u=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==o.return||o.return()}finally{if(u)throw i}}}}r.d(e,"a",(function(){return o}))},42:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void r(f)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,"a",(function(){return o}))},48:function(t,e,r){"use strict";(function(t,n){var o,i=r(63);o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:n;var a=Object(i.a)(o);e.a=a}).call(this,r(67),r(91)(t))},63:function(t,e,r){"use strict";function n(t){var e,r=t.Symbol;return"function"===typeof r?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}r.d(e,"a",(function(){return n}))},64:function(t,e,r){"use strict";var n=r(30),o=r(29),i=r(23),a=r(36),u=r(20),c=r(21);function f(t){return null==t||"object"!==typeof t?t:Array.isArray(t)?t.map((function(t){return f(t)})):Object.keys(t).reduce((function(e,r){return e[r]=f(t[r]),e}),{})}function s(t,e){if(t===e)return!0;if(null==t||"object"!==typeof t||null==e||"object"!==typeof e)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(var o=0,i=r;o<i.length;o++){var a=i[o];if(n.indexOf(a)<=-1||!s(t[a],e[a]))return!1}return!0}function l(t,e){return Array.isArray(e)?f(e):"object"!==typeof t||Array.isArray(t)||"object"!==typeof e?"undefined"!==typeof e?e:t:Object.keys(t).concat(Object.keys(e).filter((function(e){return!t[e]}))).reduce((function(r,n){return r[n]=l(t[n],e[n]),r}),{})}var d,h=function(){function t(e){var r=e.createStore,n=e.reducer,o=e.storage,i=e.bufferLife,a=e.initialState,c=e.enhancer;Object(u.a)(this,t),this.createStore=r,this.storage=o,this.reducer=n,this.enhancer=c,this.buffLife=i?Math.min(Math.max(i,0),2e3):100,this.state=a,this.buffStore=null,this.lastState=null,this.listeners=[],this.inited=!1,this.dispatch=this.dispatch.bind(this),this.subscribe=this.subscribe.bind(this)}return Object(c.a)(t,[{key:"init",value:function(){var t=this;if(this.inited)return new Promise((function(e){e(t)}));var e=this.state;this.state=null;var r=this._createStore().getState();return this.storage.subscribe((function(e){if(!s(e,t.state)){t._setState(e);var r,n=Object(a.a)(t.listeners);try{for(n.s();!(r=n.n()).done;){(0,r.value)()}}catch(o){n.e(o)}finally{n.f()}}})),this.inited=!0,new Promise((function(n){t.storage.load((function(o){var i=o?l(r,o):r;e&&(i=l(i,e)),t._setState(i),s(i,o)||t._send2Storage(i),n(t)}))}))}},{key:"_createStore",value:function(t){try{return this.createStore(this.reducer,t,this.enhancer)}catch(e){throw new Error("createStore() call failed")}}},{key:"_send2Storage",value:function(t){try{this.storage.save(t)}catch(e){throw new Error("Browser storage limit exceeded")}}},{key:"_setState",value:function(t){t&&(this.state=f(t))}},{key:"getState",value:function(){return this.state}},{key:"subscribe",value:function(t){var e=this;return"function"===typeof t&&this.listeners.push(t),function(){"function"===typeof t&&(e.listeners=e.listeners.filter((function(e){return e!==t})))}}},{key:"dispatch",value:function(t){var e=this;this.buffStore||(this.buffStore=this._createStore(this.state),this.lastState=this.buffStore.getState(),setTimeout((function(){e.buffStore=null}),this.buffLife));var r=this.buffStore,n=r.subscribe((function(){var t=e.buffStore||r,o=t&&t.getState();s(o,e.lastState)||(e._send2Storage(o),e.lastState=o,n(),r=null)}));return r.dispatch(t)}},{key:"replaceReducer",value:function(t){return"function"===typeof t&&(this.reducer=t),this}},{key:Symbol.observable,value:function(){var t=this.getState,e=this.subscribe;return Object(i.a)({subscribe:function(r){if("object"!==typeof r||null===r)throw new TypeError("Expected the observer to be an object.");function n(){var e=r;e.next&&e.next(t())}return n(),{unsubscribe:e(n)}}},Symbol.observable,(function(){return this}))}}]),t}();!function(t){t.local="local",t.sync="sync"}(d||(d={}));var y,p=function(){function t(e){var r=e.namespace,n=e.area,o=e.key;Object(u.a)(this,t),this.ns=r,this.areaName=n===d.sync?d.sync:d.local,this.key=o||"reduxed",this.listeners=[]}return Object(c.a)(t,[{key:"init",value:function(){var t=this;this.ns.storage.onChanged.addListener((function(e,r){if(r===t.areaName&&t.key in e){var n=e[t.key].newValue;if(n){var o,i=Object(a.a)(t.listeners);try{for(i.s();!(o=i.n()).done;){(0,o.value)(n,t.areaName)}}catch(u){i.e(u)}finally{i.f()}}}}))}},{key:"subscribe",value:function(t){"function"===typeof t&&this.listeners.push(t)}}]),t}(),b=function(t){Object(n.a)(r,t);var e=Object(o.a)(r);function r(t){var n,o=t.namespace,i=t.area,a=t.key;return Object(u.a)(this,r),(n=e.call(this,{namespace:o,area:i,key:a})).areaApi=n.ns.storage[n.areaName],n}return Object(c.a)(r,[{key:"load",value:function(t){var e=this;"function"===typeof t&&this.areaApi.get(this.key,(function(r){t(!e.ns.runtime.lastError&&r&&r[e.key])}))}},{key:"save",value:function(t){var e=this;this.areaApi.set(Object(i.a)({},this.key,t),(function(){if(e.ns.runtime.lastError)throw new Error}))}}]),r}(p),v=function(t){Object(n.a)(r,t);var e=Object(o.a)(r);function r(t){var n,o=t.namespace,i=t.area,a=t.key;return Object(u.a)(this,r),(n=e.call(this,{namespace:o,area:i,key:a})).areaApi=n.ns.storage[n.areaName],n}return Object(c.a)(r,[{key:"load",value:function(t){var e=this;"function"===typeof t&&this.areaApi.get(this.key).then((function(r){t(!e.ns.runtime.lastError&&r&&r[e.key])}))}},{key:"save",value:function(t){var e=this;this.areaApi.set(Object(i.a)({},this.key,t)).then((function(){if(e.ns.runtime.lastError)throw new Error}))}}]),r}(p);!function(t){t.chrome="chrome",t.browser="browser"}(y||(y={})),e.a=function(t){var e=t.createStore,r=t.namespace,n=t.chromeNs,o=t.browserNs,i=t.storageArea,a=t.storageKey,u=t.bufferLife;if("function"!==typeof e)throw new Error("Missing 'createStore' parameter/property");var c=o||r===y.browser?new v({namespace:o||browser,area:i,key:a}):new b({namespace:n||chrome,area:i,key:a});return c.init(),function(t,r,n){if("function"!==typeof t)throw new Error("Missing 'reducer' parameter");if("function"===typeof r&&"function"===typeof n)throw new Error("Multiple 'enhancer' parameters unallowed");return"function"===typeof r&&"undefined"===typeof n&&(n=r,r=void 0),new h({createStore:e,storage:c,bufferLife:u,reducer:t,initialState:r,enhancer:n}).init()}}},65:function(t,e,r){"use strict";var n=r(27),o=r(23);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r(25),c={token:!1,name:"",keywords:!1};var f=r(16),s={matchWhole:!1,matchCase:!1,color:"#ffffff",colorBg:"#ff9632",bold:!1,underline:!1};var l=r(24),d={enabled:!1,stats:!1,iconHash:""};var h=Object(n.b)({account:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0,r=e.type,n=e.data;switch(r){case u.a:return a(a({},t),{},{token:n});case u.c:var o=n.name,i=n.keywords;return a(a({},t),{},{name:o,keywords:!!Array.isArray(i)&&i.slice()});case u.b:return a(a({},t),{},{token:!1,name:"",keywords:!1});default:return t}},settings:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0,r=e.type,n=e.data;switch(r){case f.e:return a(a({},t),{},{matchWhole:Boolean(n)});case f.d:return a(a({},t),{},{matchCase:Boolean(n)});case f.b:return a(a({},t),{},{color:n});case f.c:return a(a({},t),{},{colorBg:n});case f.a:return a(a({},t),{},{bold:Boolean(n)});case f.f:return a(a({},t),{},{underline:Boolean(n)});default:return t}},marker:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0,r=e.type,n=e.data;switch(r){case l.a:return a(a({},t),{},{enabled:Boolean(n)});case l.c:return a(a({},t),{},{stats:!!Array.isArray(n)&&n.slice()});case l.b:return a(a({},t),{},{iconHash:n});default:return t}}});e.a=h},67:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}t.exports=r},90:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(x){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=g(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(x){return{type:"throw",arg:x}}}t.wrap=c;var s={};function l(){}function d(){}function h(){}var y={};y[o]=function(){return this};var p=Object.getPrototypeOf,b=p&&p(p(S([])));b&&b!==e&&r.call(b,o)&&(y=b);var v=h.prototype=l.prototype=Object.create(y);function m(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function g(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v.constructor=h,h.constructor=d,d.displayName=u(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},m(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(v),u(v,a,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},91:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}}});
//# sourceMappingURL=content.js.map