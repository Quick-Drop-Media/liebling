(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return o})),n.d(t,"isMobile",(function(){return a})),n.d(t,"isDarkMode",(function(){return i})),n.d(t,"formatDate",(function(){return s})),n.d(t,"getParameterByName",(function(){return r})),n.d(t,"adjustImageGallery",(function(){return c})),n.d(t,"managePostImages",(function(){return l})),n.d(t,"makeImagesZoomable",(function(){return d}));var o=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},i=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},s=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},r=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},c=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var o=e[t].closest(".kg-gallery-image"),a=e[t].attributes.width.value/e[t].attributes.height.value;o.style.flex="".concat(a," 1 0%")}},l=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable");var t=e(this).parent().find("figcaption");t?e(this).attr("alt",t.text()):e(this).attr("alt","")}))},d=function(e,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=e(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}},13:function(e,t,n){e.exports=n(14)},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(8),s=n.n(i),r=n(2),c=n(6),l=n(3),d=n(10),u=n.n(d),m=n(11),h=n(1);a()(document).ready((function(){Object(h.isRTL)()&&a()("html").attr("dir","rtl").addClass("rtl");var e,t,n=a()("body"),o=a()(".qd-logo"),i=a()(".js-header"),d=a()(".js-open-menu"),f=a()(".js-close-menu"),g=a()(".js-menu"),p=a()(".js-toggle-submenu"),v=a()(".js-submenu-option")[0],w=a()(".js-submenu"),b=a()(".js-recent-slider"),j=a()(".js-open-secondary-menu"),k=a()(".js-open-search"),C=a()(".js-close-search"),y=a()(".js-search"),O=a()(".js-input-search"),_=a()(".js-search-results"),S=a()(".js-no-results"),T=a()(".js-toggle-darkmode"),M=a()(".js-notification-close"),L=a()(".js-main-nav"),D=a()(".js-main-nav-left"),x=localStorage.getItem("theme"),I=null,R=!1,A=null,E=function(){i.removeClass("submenu-is-active"),p.removeClass("active"),w.removeClass("opened").addClass("closed")},G=function(){n.toggleClass("no-scroll-y")},H=function(e,t){var n=new GhostContentAPI({url:e,key:t,version:"v2"}),o=[],a={shouldSort:!0,ignoreLocation:!0,findAllMatches:!0,includeScore:!0,minMatchCharLength:2,keys:["title","custom_excerpt","tags.name"]};n.posts.browse({limit:"all",include:"tags",fields:"id, title, url, published_at, custom_excerpt"}).then((function(e){for(var t=0,n=e.length;t<n;t++)o.push(e[t]);I=new m.a(o,a)})).catch((function(e){console.log(e)}))},B=function(e){var t=a()('.js-alert[data-notification="'.concat(e,'"]'));t.addClass("opened"),setTimeout((function(){P(t)}),5e3)},P=function(e){e.removeClass("opened");var t=window.location.toString();if(t.indexOf("?")>0){var n=t.substring(0,t.indexOf("?"));window.history.replaceState({},document.title,n)}},V=function(e){Object(h.isMobile)()||(e?(L.addClass("toggle-overflow"),D.addClass("toggle-overflow")):(L.removeClass("toggle-overflow"),D.removeClass("toggle-overflow")))};(d.click((function(){i.addClass("mobile-menu-opened"),g.addClass("opened"),G()})),f.click((function(){i.removeClass("mobile-menu-opened"),g.removeClass("opened"),G()})),p.click((function(){(R=!R)?(i.addClass("submenu-is-active"),p.addClass("active"),w.removeClass("closed").addClass("opened")):E()})),k.click((function(){y.addClass("opened"),setTimeout((function(){O.focus()}),400),G()})),C.click((function(){O.blur(),y.removeClass("opened"),G()})),O.keyup((function(){if(O.val().length>0&&I){var e=I.search(O.val()).filter((function(e){if(e.score<=.5)return e})),t="";if(e.length>0){for(var n=0,o=e.length;n<o;n++)t+='\n          <article class="m-result">            <a href="'.concat(e[n].item.url,'" class="m-result__link">              <h3 class="m-result__title">').concat(e[n].item.title,'</h3>              <span class="m-result__date">').concat(Object(h.formatDate)(e[n].item.published_at),"</span>            </a>          </article>");S.hide(),_.html(t),_.show()}else _.html(""),_.hide(),S.show()}else _.html(""),_.hide(),S.hide()})),T.change((function(){T.is(":checked")?(o.attr("src",LOGO_DARK_MODE_SRC),a()("html").attr("data-theme","dark"),localStorage.setItem("theme","dark")):(o.attr("src",LOGO_LIGHT_MODE_SRC),a()("html").attr("data-theme","light"),localStorage.setItem("theme","light"))})),T.hover((function(){V(!0)}),(function(){V(!1)})),M.click((function(){P(a()(this).parent())})),a()(window).click((function(e){R&&v&&!v.contains(e.target)&&(R=!1,E())})),a()(document).keyup((function(e){"Escape"===e.key&&y.hasClass("opened")&&C.click()})),x&&("dark"===x||Object(h.isDarkMode)())?(T.attr("checked",!0),o.attr("src",LOGO_DARK_MODE_SRC)):o.attr("src",LOGO_LIGHT_MODE_SRC),i.length>0)&&new s.a(i[0],{tolerance:{down:10,up:20},offset:15,onUnpin:function(){if(!Object(h.isMobile)()&&A){var e=A[0];e&&e.state.isVisible&&e.hide()}}}).init();if(b.length>0){var K=new r.d(".js-recent-slider",{type:"slider",rewind:!1,perView:4,swipeThreshold:!1,dragThreshold:!1,gap:0,direction:Object(h.isRTL)()?"rtl":"ltr",breakpoints:{1024:{perView:3,swipeThreshold:80,dragThreshold:120},768:{perView:2,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}},568:{perView:1,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}}}});K.on("mount.after",(function(){Object(l.a)(".js-recent-article-title",50)})),K.mount({Swipe:r.c,Breakpoints:r.a})}if("undefined"!=typeof disableFadeAnimation&&disableFadeAnimation?a()("[data-aos]").addClass("no-aos-animation"):u.a.init({once:!0,startEvent:"DOMContentLoaded"}),j.length>0){var q=document.getElementById("secondary-navigation-template");A=Object(c.a)(".js-open-secondary-menu",{content:q.innerHTML,allowHTML:!0,arrow:!0,trigger:"click",interactive:!0,onShow:function(){V(!0)},onHidden:function(){V(!1)}})}Object(c.a)(".js-tooltip"),Object(l.a)(".js-article-card-title",100),Object(l.a)(".js-article-card-title-no-image",250),e=Object(h.getParameterByName)("action"),t=Object(h.getParameterByName)("stripe"),"subscribe"===e&&B("subscribe"),"signup"===e&&(window.location="".concat(ghostHost,"/signup/?action=checkout")),"checkout"===e&&B("signup"),"signin"===e&&B("signin"),"success"===t&&B("checkout"),"undefined"!=typeof ghostSearchApiKey?H(ghostHost,ghostSearchApiKey):(k.css("visibility","hidden"),C.remove(),y.remove())}))}},[[13,0,1]]]);