parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var d={};function j(e){for(var r,o=/\+/g,n=/([^&=]+)=?([^&]*)/g,p=function(e){return decodeURIComponent(e.replace(o," "))},a={};r=n.exec(e);)a[p(r[1])]=p(r[2]);return a}function f(e){var r=[];for(var o in e)e.hasOwnProperty(o)&&e[o]&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r.join("&")}d.deparam=j,d.param=f;var g=j(location.search.substr(1)),k=g.utterances;if(k){delete g.utterances;var h=f(g);h.length&&(h="?"+h),history.replaceState(void 0,document.title,location.pathname+h+location.hash)}var c=document.currentScript;void 0===c&&(c=document.querySelector("script[src^=\"https://hanabiiii.github.io/mason-dev-comments/client.js\"],script[src^=\"http://localhost:4000/client.js\"]"));for(var b={},i=0;i<c.attributes.length;i++){var l=c.attributes.item(i);b[l.name.replace(/^data-/,"")]=l.value}var m=document.querySelector("link[rel='canonical']");b.url=m?m.href:location.origin+location.pathname+location.search,b.origin=location.origin,b.pathname=location.pathname.length<2?"index":location.pathname.substr(1).replace(/\.\w+$/,""),b.title=document.title;var q=document.querySelector("meta[name='description']");b.description=q?q.content:"";var s=document.querySelector("meta[property='og:title'],meta[name='og:title']");b["og:title"]=s?s.content:"",b.token=k,document.head.insertAdjacentHTML("afterbegin","<style>\n    .utterances {\n      position: relative;\n      box-sizing: border-box;\n      width: 100%;\n      max-width: 760px;\n      min-height: 300px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .utterances-frame {\n      position: absolute;\n      left: 0;\n      right: 0;\n      width: 1px;\n      min-width: 100%;\n      max-width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  </style>");var u=c.src.match(/^https:\/\/mason-dev\.cf|https:\/\/hanabiiii\.github.io\/mason-dev-comments|http:\/\/localhost:\d+/)[0],v=u+"/utterances.html";c.insertAdjacentHTML("afterend","<div class=\"utterances\">\n    <iframe class=\"utterances-frame\" title=\"Comments\" scrolling=\"no\" src=\""+v+"?"+f(b)+"\"></iframe>\n  </div>");var w=c.nextElementSibling;c.parentElement.removeChild(c),addEventListener("message",function(t){if(t.origin===u){var a=t.data;a&&"resize"===a.type&&a.height&&(w.style.height=a.height+"px")}});d.__esModule=true;return{"D53L":{},"ieWq":d};});