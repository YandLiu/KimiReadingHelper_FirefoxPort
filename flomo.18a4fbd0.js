var e,n;"function"==typeof(e=globalThis.define)&&(n=e,e=null),function(n,o,t,r,u){var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof f[r]&&f[r],l=i.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(e,o){if(!l[e]){if(!n[e]){var t="function"==typeof f[r]&&f[r];if(!o&&t)return t(e,!0);if(i)return i(e,!0);if(a&&"string"==typeof e)return a(e);var u=Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}d.resolve=function(o){var t=n[e][1][o];return null!=t?t:o},d.cache={};var c=l[e]=new s.Module(e);n[e][0].call(c.exports,d,c,c.exports,this)}return l[e].exports;function d(e){var n=d.resolve(e);return!1===n?{}:s(n)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=n,s.cache=l,s.parent=i,s.register=function(e,o){n[e]=[function(e,n){n.exports=o},{}]},Object.defineProperty(s,"root",{get:function(){return f[r]}}),f[r]=s;for(var c=0;c<o.length;c++)s(o[c]);if(t){var d=s(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof e&&e.amd?e(function(){return d}):u&&(this[u]=d)}}({"8kRXh":[function(e,n,o){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(o),t.export(o,"config",()=>r);let r={matches:["*://*.flomoapp.com/*"],all_frames:!0,run_at:"document_end"};(()=>{let e=null,n=()=>{let o=JSON.parse(localStorage.getItem("me")).access_token;clearTimeout(e),o?chrome.runtime.sendMessage({action:"flomoTokenResponse",data:{token:o}}):(chrome.runtime.sendMessage({action:"flomoTokenResponse",data:{}}),e=window.setTimeout(n,2e3))};n()})()},{"@parcel/transformer-js/src/esmodule-helpers.js":"fRZO2"}],fRZO2:[function(e,n,o){o.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},o.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.exportAll=function(e,n){return Object.keys(e).forEach(function(o){"default"===o||"__esModule"===o||n.hasOwnProperty(o)||Object.defineProperty(n,o,{enumerable:!0,get:function(){return e[o]}})}),n},o.export=function(e,n,o){Object.defineProperty(e,n,{enumerable:!0,get:o})}},{}]},["8kRXh"],"8kRXh","parcelRequirec277"),globalThis.define=n;