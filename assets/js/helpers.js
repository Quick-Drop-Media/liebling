(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(n,t,e){"use strict";e.r(t),e.d(t,"isRTL",(function(){return o})),e.d(t,"isMobile",(function(){return a})),e.d(t,"isDarkMode",(function(){return i})),e.d(t,"formatDate",(function(){return r})),e.d(t,"getParameterByName",(function(){return c})),e.d(t,"adjustImageGallery",(function(){return u})),e.d(t,"managePostImages",(function(){return s})),e.d(t,"makeImagesZoomable",(function(){return l}));var o=function(){var n=document.querySelector("html");return["ar","he","fa"].includes(n.getAttribute("lang"))},a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(n,")")).matches},i=function(){var n=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return n&&n.matches},r=function(n){return n?new Date(n).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},c=function(n,t){t||(t=window.location.href),n=n.replace(/[\[\]]/g,"\\$&");var e=new RegExp("[?&]".concat(n,"(=([^&#]*)|&|#|$)")).exec(t);return e?e[2]?decodeURIComponent(e[2].replace(/\+/g," ")):"":null},u=function(){for(var n=document.querySelectorAll(".kg-gallery-image img"),t=0,e=n.length;t<e;t++){var o=n[t].closest(".kg-gallery-image"),a=n[t].attributes.width.value/n[t].attributes.height.value;o.style.flex="".concat(a," 1 0%")}},s=function(n){n(".js-post-content").find("img").each((function(){n(this).closest("figure").hasClass("kg-bookmark-card")||n(this).parent().is("a")||n(this).addClass("js-zoomable");var t=n(this).parent().find("figcaption");t?n(this).attr("alt",t.text()):n(this).attr("alt","")}))},l=function(n,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=n(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}},12:function(n,t,e){e(1),e(24),e(29),e(31),e(33),e(35),e(37),e(39),e(41),n.exports=e(43)},24:function(n,t){},29:function(n,t){},31:function(n,t){},33:function(n,t){},35:function(n,t){},37:function(n,t){},39:function(n,t){},41:function(n,t){},43:function(n,t){}},[[12,0,1]]]);