//     ____                _              _    __     __    _                 
//    / ___|___  _ __  ___| |_ __ _ _ __ | |_  \ \   / /_ _| |_   _  ___  ___ 
//   | |   / _ \| '_ \/ __| __/ _` | '_ \| __|  \ \ / / _` | | | | |/ _ \/ __|
//   | |__| (_) | | | \__ \ || (_| | | | | |_    \ V / (_| | | |_| |  __/\__ \
//    \____\___/|_| |_|___/\__\__,_|_| |_|\__|    \_/ \__,_|_|\__,_|\___||___/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Const
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This object manages the environments in which the client scripts exists. It must be correctly configured before a release.
 */
 const CLIENT_ENVIRONMENT = {
  // This environment manages the exports of client scripts (~/src/js/client/*.js). When running unit testing scripts that test client functions the object must be set to 'true'.
  UNIT_TESTING: true,
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This array contains the list of all keyword to be avoided when creating component options.
 */
// prettier-ignore
const ATTRIBUTE_KEYWORDS = ["cancel","error","scroll","select","show","wheel","copy","cut","paste","compositionend","compositionstart","compositionupdate","blur","focus","focusin","focusout","fullscreenchange","fullscreenerror","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousdown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","change","webkitmouseforcechanged","webkitmouseforcedown","webkitmouseforcewillbegin","webkitmouseforceup","touchcancel","touchend","touchmove","touchstart","accesskey","autocapitalize","class","contenteditable","data","dir","draggable","enterkeyhint","hidden","id","inputmode","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","spellcheck","style","tabindex","title","rel","download","href","hreflang","ping","target","coords","alt","shape","autoplay","controls","crossorigin","loop","muted","preload","src","cite","disabled","name","value","autofocus","form","formaction","formenctype","formmethod","formnovalidate","formtarget","type","height","width","span","datetime","open","autocomplete","method","enctype","novalidate","action","accept-charset","xmlns","sandbox","allow","allowfullscreen","allowpaymentrequest","srcdoc","hieght","decoding","ismap","srcset","sizes","usemap","accept","capture","checked","dirname","list","max","maxlength","min","minlength","multiple","pattern","placeholder","readonly","required","step","for","as","imagesizes","imagesrcset","media","content","http-equiv","charset","high","low","optimum","reversed","start","label","selected","async","corssorigin","defer","nomodule","integrity","size","colspan","headers","rowspan","cols","rows","wrap","abbr","scope","default","kind","srclang","poster","playsinline"]

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * List of data type names in string format to avoid typos.
 */
// prettier-ignore
const TYPE = {url:'url',nul:'null',arr:'array',obj:'object',num:'number',str:'string',boo:'boolean',ele:'element',fun:'function',und:'undefined'}