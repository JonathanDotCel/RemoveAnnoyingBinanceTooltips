// ==UserScript==
//
// There is no warranty or guarantee that the script is safe or fit for purpose.
// All of these terms apply: https://www.lawinsider.com/clause/no-warranty
// By using this script you accept that anything that goes wrong is your own fault.
// You'll need to install something like the TamperMonkey extension to use the script.
//
// @name         Binance No Tooltips
// @namespace    https://www.binance.com/
// @version      0.1
// @description  Disables the annoying OnHover tooltips on binance.
// @author       Jonathan Cel
// @match        https://www.binance.com/*
// @grant        none
//
// Make sure this always points to the real jquery domain and not some dodgy mirror.
// Please always take a moment to verify these things.
//
// @require http://code.jquery.com/jquery-latest.js
//
// ==/UserScript==


$(document).ready(function() {

    // We'll want it fast enough that it's not annoying but not
    // so fast as to chew up CPU on an already-heavy page.
    // Using intervals make the code more immediately identifiable
    // and so trustworthy, so no MutationObservers, etc.

    alert( "You must remove the line containing this warning in the Binance Tooltips script to signify that you have read the terms, agree to and understand that there is no warranty and any issues are your own fault. Please go to you browser's extention settings to disable the script if you are unable or unwilling. It may be under TamperMonkey, GreaseMonkey, User Scripts, etc." ); return;

    var clearTimer = self.setInterval( AttemptClear, 200 );

    function AttemptClear(){

        // Look for any of these that have titles.
        var tooltips = $(".bnc-tooltip");

        // If we didn't find any tooltips then wait it out.
        // They're created on hover (not just hidden away)
        if ( tooltips.length == 0 ) return false;

        // Otherwise, let's cycle through them
        tooltips.each( function(){

            // Check the tooltip's title (it might not have one)
            var titles = $(this).find( ".title" );

            // Does the tool tip have a title?
            // If it does, we'll ignore it; probably important
            // If it has no title, it's annoying and unworthy.
            if ( titles.length == 0 ){

                // Hide it...
                $(this).hide();

            }

        });

        return true;

    }

    // window.clearInterval( clearTimer );

});

