// ==UserScript==
// @name          TP-Link WDR7500 v6 GUI translator
// @description   Author: Gyula Szegedi
// @version       1
// @include       http://192.168.182.254/*
// @grant         none
// ==/UserScript==

/*
To apply this script to your own router, please edit the address in the @include section.
If you want to insert your own translation script or you just simply don't want to use my
source, change the newScriptElement variable.
*/

window.onload = function(){
    var $newScriptLine = $( '<script type="text/javascript" src="http://www.szegedi.co.uk/downloads/tplink_wdr7500v6_str_en.js"></script>' ),
        newScriptElement = document.createElement( "script" ),
        existingObj = document.getElementById( "foo" );
    $( "head" ).append( $newScriptLine, [ newScriptElement, existingObj ] );
};
