// ==UserScript==
// @name        Remove Upworthy links from Facebook
// @namespace   fractalboy.github.io
// @description Removes Upworthy links from Facebook so it doesn't annoy you
// @include     https://www.facebook.com/*
// @version     1
// @grant       none
// ==/UserScript==
window.setInterval(function() {
Array.prototype.slice.call(document.getElementsByClassName('_4-u2 mbm _5jmm _5pat _5v3q _5sq8 _5x16')).forEach(function(div) {
    var found = false;
    Array.prototype.slice.call(div.getElementsByClassName('_6lz _6mb ellipsis')).forEach(function(div1) {
        if(div1.textContent.toUpperCase().indexOf('UPWORTHY') > -1 || div1.textContent.toUpperCase().indexOf('BUZZFEED') > -1 || div1.textContent.toUpperCase().indexOf('VIRALNOVA') > -1) {
            found = true;
        }
    });
    if(found === true) {
        div.parentElement.removeChild(div);
    }
});
}, 500);
