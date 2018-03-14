// ==UserScript==
// @name        sci-hub automatic link
// @namespace https://raw.githubusercontent.com/yakeworld/sci-hub/master/sci-hub_automatic_link.js
// @version     1.0
// @description link DOI to sci-hub.la
// @author      yakeworld
// @match       *://*/*
// @grant       none
// @run-at      document-idle

// ==/UserScript==
window.addEventListener('load', function() {
   var els = document.getElementsByTagName("A");
   for(var i = 0, l = els.length; i < l; i++) {
      var el = els[i];
      el.href = el.href.replace(/^((http(s|):\/\/(www\.|))|)(dx.|)doi\.org\//gim, 'http://sci-hub.la/');
   }
}, false);
