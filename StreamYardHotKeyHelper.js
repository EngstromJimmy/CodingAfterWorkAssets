// ==UserScript==
// @name         StreamYard hotkey helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script to make videos, overlays etc accessable from Stream Deck
// @author       You
// @match        https://streamyard.com/*
// @icon         https://www.google.com/s2/favicons?domain=streamyard.com
// @grant        none
// ==/UserScript==

(function() {
'use strict';

let spancontent = [
    'Raid', //ctrl + shift + 0
    'Raid', //ctrl + shift + 1
    'Raid', //ctrl + shift + 2
    'Raid', //ctrl + shift + 3
    'Raid', //ctrl + shift + 4
    'Raid', //ctrl + shift + 5
    'Raid', //ctrl + shift + 6
    'Raid', //ctrl + shift + 7
    'Raid', //ctrl + shift + 8
    'Raid', //ctrl + shift + 9
];

window.onkeyup = function(e){
    var key=String.fromCharCode(e.keyCode);
    if(e.shiftKey && e.ctrlKey && !isNaN(key)){
     var text=spancontent[key];
        for (const a of document.querySelectorAll("span")) {
            if (a.textContent.includes(text)) {
                a.click();
            }
        }
    }
}

})();
