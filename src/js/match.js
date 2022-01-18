//    __  __       _       _
//   |  \/  | __ _| |_ ___| |__
//   | |\/| |/ _` | __/ __| '_ \
//   | |  | | (_| | || (__| | | |
//   |_|  |_|\__,_|\__\___|_| |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Match
 */
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This object contains standard values for html attributes tied to a list. Attributes with the switch _isMultivalid will have two lists, valid and invalid values; these will be named with the word "valid"/"invalid" before.
 */
 const ATTRIBUTE_VALUES = {
  softBoolean: ['true', 'false', ''],
  yesno: ['yes', 'no', ''],
  // prettier-ignore
  isoCodes: ['ab','aa','af','ak','sq','am','ar','an','hy','as','av','ae','ay','az','bm','ba','eu','be','bn','bh','bi','bs','br','bg','my','ca','ch','ce','ny','zh','zh-Hans','zh-Hant','cv','kw','co','cr','hr','cs','da','dv','nl','dz','en','eo','et','ee','fo','fj','fi','fr','ff','gl','gd','gv','ka','de','el','kl','gn','gu','ht','ha','he','hz','hi','ho','hu','is','io','ig','id','in','ia','ie','iu','ik','ga','it','ja','jv','kl','kn','kr','ks','kk','km','ki','rw','rn','ky','kv','kg','ko','ku','kj','lo','la','lv','li','ln','lt','lu','lg','lb','gv','mk','mg','ms','ml','mt','mi','mr','mh','mo','mn','na','nv','ng','nd','ne','no','nb','nn','ii','oc','oj','cu','or','om','os','pi','ps','fa','pl','pt','pa','qu','rm','ro','ru','se','sm','sg','sa','sr','sh','st','tn','sn','ii','sd','si','ss','sk','sl','so','nr','es','su','sw','ss','sv','tl','ty','tg','ta','tt','te','th','bo','ti','to','ts','tr','tk','tw','ug','uk','ur','uz','ve','vi','vo','wa','cy','wo','fy','xh','yi','ji','yo','za','zu'],
  crossorigin: ['anonymous', 'use-credentials', ''],
  decoding: ['sync', 'async', 'auto'],
  preload: ['none', 'metadata', 'auto', ''],
  // prettier-ignore
  linkAs: ['audio','document','embed','fetch','font','image','object','script','style','track','video','worker'],
  // prettier-ignore
  httpEquiv: ['content-security-policy','content-type','default-style','x-ua-compatible','refresh'],
  // prettier-ignore
  encryption: ['application/x-www-form-urlencoded','multipart/form-data','text/plain',],
  formmethod: ['get', 'post', 'get|post', 'dialog'],
  typeStyle: ['text/css'],
  // prettier-ignore
  inputType: ['button','checkbox','color','date','datetime-local','email','file','hidden','image','month','number','password','radio','range','reset','search','submit','tel','text','time','url','week'],
  // prettier-ignore
  inputAutocomplete: ['off','on','name','honorific-prefix','given-name','additional-name','family-name','honorific-suffix','nickname','email','username','new-password','current-password','one-time-code','organization-title','organization','street-address','address-line1','address-line2','address-line3','address-level1','address-level2','address-level3','address-level4','country','country-name','postal-code','cc-name','cc-given-name','cc-additional-name','cc-family-name','cc-number','cc-exp','cc-exp-month','cc-exp-year','cc-csc','cc-type','transaction-currency','transaction-amount','language','bday','bday-day','bday-month','bday-year','sex','tel','tel-country-code','tel-national','tel-area-code','tel-local','tel-extension','impp','url','photo'],
  // prettier-ignore
  validLinkTypes: ['alternate','author','bookmark','canonical','external','help','icon','license','manifest','modulepreload','next','nofollow','nooper','noreferrer','pingback','prefetch','preload','prev','search','shortlink','stylesheet','tag'],
  // prettier-ignore
  invalidLinkTypes: ['archives','dns-prefetch','first','import','index','last','opener','preconnect','prerender','sidebar','up'],
  // prettier-ignore
  validSandbox: ['allow-downloads','allow-forms','allow-modals','allow-orientation-lock','allow-pointer-lock','allow-popups','allow-popups-to-escape-sandbox','allow-presentation','allow-same-origin','allow-scripts','allow-top-navigation','allow-top-navigation-by-user-activation'],
  // prettier-ignore
  invalidSandbox: ['allow-downloads-without-user-activation','allow-storage-access-by-user-activation'],
  scope: ['row', 'col', 'rowgroup', 'colgroup'],
  // prettier-ignore
  trackKind: ['subtitles','captions','descriptions','chapters','metadata'],
  bdoDir: ['ltr', 'rtl', 'auto'],
  // prettier-ignore
  autocapitalize: ['off', 'none', 'on', 'sentences', 'wrods', 'characters'],
  // prettier-ignore
  enterkeyhint: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'],
  // prettier-ignore
  inputmode: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'url', 'email'],
  // prettier-ignore
  orderedListType: ['a', 'A', 'i', 'I', '1'],
  // prettier-ignore
  areaShape: ['default', 'rect', 'circle', 'poly'],
  // prettier-ignore
  buttonType: ['submit', 'reset', 'button'],
  // prettier-ignore
  wrap: ['hard', 'soft']
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function generalizes the process of verifying values of a list inside the object 'ATTRIBUTE_VALUES'.
 * @param {Array} list This must be a reference inside the object 'ATTRIBUTE_VALUES'.
 * @returns {Function} Callback function with standard MATCH parameters and returns an element with an attribute set.
 */
function _matchList(list) {
  if (CHECK.array(list)) {
    return function (value, element, attribute) {
      if (CHECK.string(value) && CHECK.element(element) && CHECK.string(attribute)) {
        if (list.includes(value)) {
          return element.setAttribute(attribute, value)
        } else {
          // Error
          return element
        }
      }
    }
  } else {
    return element
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function adds a hard boolean attribute to an html element.
 * @param {Boolean} value True if the attribute is to be added, or false to be removed.
 * @param {HTMLElement} element The element that will have the attribute toggled.
 * @param {String} attribute The name of the attribute that is going to be added.
 * @returns {HTMLElement} Returns an HTML Element with the attribute and value set.
 */
function _matchHardBoolean(value, element, attribute) {
  if(CHECK.boolean(value) && CHECK.element(element) && CHECK.string(attribute)) {
    if(element.hasAttribute(attribute)) {
      element.removeAttribute(attribute)
    }
    if(value) {
      element.toggleAttribute(attribute)
    }
    return element.cloneNode()
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function adds a string attribute to an html element.
 * @param {String} value String value of the added attribute.
 * @param {HTMLElement} element The element that will have the attribute added.
 * @param {String} attribute The name of the attribute that is going to be added.
 * @returns {HTMLElement} Returns an HTML Element with the attribute and value set.
 */
function _matchString(value, element, attribute) {
  if (CHECK.string(value)) {
    element.setAttribute(attribute, value)
    return element.cloneNode()
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function adds a slugged string attribute to an html element. This means only letter and numbers.
 * @param {String} value Slugged string value of the added attribute.
 * @param {HTMLElement} element The element that will have the attribute added.
 * @param {String} attribute The name of the attribute that is going to be added.
 * @returns {HTMLElement} Returns an HTML Element with the attribute and value set.
 */
function _matchSlug(value, element, attribute) {
  if (CHECK.string(value) && CHECK.element(element) && CHECK.string(attribute)) {
    if (value === slug(value)) {
      element.setAttribute(attribute, value)
      return element.cloneNode()
    } else {
      console.error(alarm('slug', { unslugged: value }))
      return null
    }
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function adds a number attribute to an html element.
 * @param {Number} value Number value of the added attribute.
 * @param {HTMLElement} element The element that will have the attribute added.
 * @param {String} attribute The name of the attribute that is going to be added.
 * @returns {HTMLElement} Returns an HTML Element with the attribute and value set.
 */
function _matchNumber(value, element, attribute) {
  if (CHECK.number(value) && CHECK.element(element) && CHECK.string(attribute)) {
    element.setAttribute(attribute, value)
    return element.cloneNode()
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function adds a function as certain event listener to an html element.
 * @param {Function} eventListener Callback function to be set as an event listener
 * @param {HTMLElement} element The element that will have the attribute added.
 * @param {String} eventName The name of the attribute that is going to be added.
 * @returns {HTMLElement} Returns an HTML Element with the event listener.
 */
 function _matchFunction(eventListener, element, eventName) {
  if (CHECK.function(eventListener) && CHECK.element(element) && CHECK.string(eventName)) {
    element.addEventListener(eventName, eventListener)
    return element.cloneNode()
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function adds a valud url string attribute to an html element. This means only letter and numbers.
 * @param {String} value Valid url string value of the added attribute.
 * @param {HTMLElement} element The element that will have the attribute added.
 * @param {String} attribute The name of the attribute that is going to be added.
 * @returns {HTMLElement} Returns an HTML Element with the attribute and value set.
 */
function _matchUrl(value, element, attribute) {
  if (CHECK.string(value) && CHECK.element(element) && CHECK.string(attribute)) {
    if (CHECK.url(value)) {
      return element.setAttribute(attribute, value)
    } else {
      return null
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This is a custom Match function that binds the click and keyup enter (keyCode 13) to the same function. This way it's simpler to add only one function instead of two.
 * @param {Function} eventListener Callback function to be set as an event listener
 * @param {HTMLElement} element The element that will have the attribute added.
 * @param {String} eventName The name of the attribute that is going to be added. This will always be "activate" and right now this function doesn't have any use for it. It cannot be avoided to get the event name parameter because of how every other match function is called.
 * @returns {HTMLElement} Returns an HTML Element with the event listener.
 */
 function _matchActivate(eventListener, element, eventName) {
  if (CHECK.function(eventListener) && CHECK.element(element)) {
    element.addEventListener('click', eventListener)
    element.addEventListener('keyup', function(e) {
      if(e.key === 'Enter') {
        this.click()
      }
    })
    return element.cloneNode()
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This namespace groups all the correct html attribute value validations.
 */
 const MATCH = {
   list: _matchList,
   hardBoolean: _matchHardBoolean,
   string: _matchString,
   slug: _matchSlug,
   number: _matchNumber,
   function: _matchFunction,
   url: _matchUrl,
   activate: _matchActivate,
   _attributeValues: ATTRIBUTE_VALUES
 }
 