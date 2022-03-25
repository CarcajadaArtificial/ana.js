//    ____  _                  _               _
//   / ___|| |_ __ _ _ __   __| | __ _ _ __ __| |
//   \___ \| __/ _` | '_ \ / _` |/ _` | '__/ _` |
//    ___) | || (_| | | | | (_| | (_| | | | (_| |
//   |____/ \__\__,_|_| |_|\__,_|\__,_|_|  \__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The Standard module contains a diversity of classes, they are abstracts for standard HTML Elements with attributes and event listeners
 * @module Ana/Standard
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Global Overrides
declare global {
  // HTML Element interface override to support match functions.
  interface HTMLElement {
    matchDictionary: MatchFunctionsDictionary
    has(attributes: AttributeValuesDictionary): HTMLElement
    setAttributes(attributes: AttributeValuesDictionary): HTMLElement
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type represents the dictionary of attribte values inputed by the user.
 */
export type AttributeValuesDictionary = { [key: string]: string | Function }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Attributes are mostly organized in dictionary with the attribute's name used as index. The value can be any of the classes extended by the `AttributeBase` class. This is the case for attributes inside the `Element` class or in the `GLOBAL_ATTRIBUTES` variable.
 */
export type AttributesDictionary = {
  [key: string]:
    | AttributeNonstandard
    | AttributeDeprecated
    | AttributeExperimental
    | AttributeString
    | AttributeBoolean
    | AttributeList
    | AttributeInput
    | AttributeFunction
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * The HTMLElement prototype is extended to support `.match` functions that check an element for standard rendering. These functions are indexed using `HTMLElement.tagName.toLowerCase()`.
 */
export type MatchFunctionsDictionary = { [key: string]: Function }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Attributes are systematically categorized according to their value. Must be part of the following list:
 * - '_empty': Placeholder text
 * - {@link AttributeNonstandard | 'nonstandard'}
 * - {@link AttributeDeprecated | 'deprecated'}
 * - {@link AttributeExperimental | 'experimental'}
 * - {@link AttributeString | 'string'}
 * - {@link AttributeBoolean | 'boolean'}
 * - {@link AttributeFunction | 'function'}
 * - {@link AttributeList | 'list'}
 * - {@link AttributeInput | 'input'}
 */
export type AttributeType =
  | '_empty'
  | 'nonstandard'
  | 'deprecated'
  | 'experimental'
  | 'string'
  | 'boolean'
  | 'function'
  | 'list'
  | 'input'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type generalizes the parameters of `Attribute.match()` functions.
 */
export type AttributeValue = {
  /**
   * The attribute values are generally strings, and in case of event listeners are functions.
   */
  value: string | Function
  /**
   * In the cases of attributes in the `<input/>` element that depend on the value of the type attribute, must also receive said value to compare.
   */
  typeValue: string | Function
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class groups all Attribute classes with their common properties. All of these classes manage different types of HTMLElement Attributes and their standard values.
 */
export class AttributeBase {
  /**
   * Every attribute needs a string name for it to be indexed in a `AttributeDictionary`. These names must remain unchanged from their original HTMLElement Attribute name.
   */
  name: string = ''

  /**
   * This property is set according to the expected correct value for the attribute. If unsure of which to choose look into the classes that inherit `AttributeBase`.
   */
  type: AttributeType = '_empty'

  /**
   * This constructor should not be used except for the `super()` call.
   * ```typescript
   * export class AttributeExample extends AttributeBase {
   *  constructor(name: string, type: AttributeType) {
   *    super(name, type)
   *  }
   * }
   * ```
   * @param name {@link AttributeBase.name | Read more}
   * @param type {@link AttributeBase.type | Read more}
   */
  constructor(name: string, type: AttributeType) {
    this.name = name
    this.type = type
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). A Nonstandard Attribute is one that is compatible with HTML and isn't deprecated nor experimental, nevertheless it was opted out for the Ana standard.
 */
export class AttributeNonstandard extends AttributeBase {
  /**
   * ```Typescript
   * new AttributeNonstandard('example')
   * ```
   * @param name {@link AttributeBase.name | Read more}
   */
  constructor(name: string) {
    super(name, 'nonstandard')
  }

  /**
   * As this is a forbidden attribute type, it will always return false.
   * @returns False
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    return false
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). A Deprecated Attribute is one that is old and proven no to work anymore. It might be because it was replaced by a newer technology or because modern web browsing weeded it out eventually.
 */
export class AttributeDeprecated extends AttributeBase {
  /**
   * ```Typescript
   * new AttributeDeprecated('example')
   * ```
   * @param name {@link AttributeBase.name | Read more}
   */
  constructor(name: string) {
    super(name, 'deprecated')
  }

  /**
   * As this is a forbidden attribute type, it will always return false.
   * @returns False
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    return false
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). An Experimental Attribute is one that isn't fully compatible with modern browsers yet, it has new functionalities that may or may not become standard practice in the future.
 */
export class AttributeExperimental extends AttributeBase {
  /**
   * ```Typescript
   * new AttributeExperimental('example')
   * ```
   * @param name {@link AttributeBase.name | Read more}
   */
  constructor(name: string) {
    super(name, 'experimental')
  }

  /**
   * As this is a forbidden attribute type, it will always return false.
   * @returns False
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    return false
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A String Attribute can get any string as it's value.
 * @todo Check for a string length limit.
 */
export class AttributeString extends AttributeBase {
  /**
   * ```Typescript
   * new AttributeString('example')
   * ```
   * @param name {@link AttributeBase.name | Read more}
   */
  constructor(name: string) {
    super(name, 'string')
  }

  /**
   * This function checks if the attribute value matches a string type.
   * @returns True if value is a string.
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    if (typeof value !== 'string') {
      // Error: the attribute ${this.name} must receive a string value, instead found: ${value} with type of ${typeof value}.
      return false
    }
    return true
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Boolean Attribute works for "hard boolean" attributes that either are or ot declared in the element.
 */
export class AttributeBoolean extends AttributeBase {
  /**
   * ```Typescript
   * new AttributeBoolean('example')
   * ```
   * @param name {@link AttributeBase.name | Read more}
   */
  constructor(name: string) {
    super(name, 'boolean')
  }

  /**
   * This function checks if the attribute value matches a 'true' or 'false' string.
   * @returns True if value is 'true' or 'false'.
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    if (value === 'true' || value === 'false') {
      return true
    } else {
      // Error: the attribute ${this.name} must receive the exact string value (case-sensitive) of 'true' or 'false', instead found: ${value}.
      return false
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Function Attribute works for event listeners that receive functions as values.
 */
export class AttributeFunction extends AttributeBase {
  /**
   * ```Typescript
   * new AttributeFunction('example')
   * ```
   * @param name {@link AttributeBase.name | Read more}
   */
  constructor(name: string) {
    super(name, 'function')
  }

  /**
   * This function checks if the attribute value matches a Function type.
   * @returns True if value is a Function.
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    if (typeof value !== 'function') {
      // Error: the attribute ${this.name} must receive a function value, instead found: ${value} with type of ${typeof value}.
      return false
    }
    return true
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A List Attribute is one that not only must be a string, it must be part of a predefined list of string values. This lists are organized in the `ATTRIBUTE_VALUES` dictionary.
 */
export class AttributeList extends AttributeBase {
  /**
   * The name of the list that contains the valid values for this attribute. Must be an index of the dictionary `ATTRIBUTE_VALUES`.
   */
  validList: string

  /**
   * The name of the list that contains invalid values for this attribute. Must be an index of the dictionary `ATTRIBUTE_VALUES`.
   */
  invalidList?: string

  /**
   * ```Typescript
   * new AttributeList('example', 'validListName', 'invalidListName')
   * ```
   * @param name {@link AttributeBase.name | Read more}
   */
  constructor(name: string, validList: string, invalidList?: string) {
    super(name, 'list')
    if (!Object.keys(ATTRIBUTE_VALUES).includes(validList)) {
      // Error: the attribute ${this.name} received an unknown list name (${validList}), it must be included in the list of keys in the ATTRIBUTE_VALUES global constant: ${Object.keys(ATTRIBUTE_VALUES)}
    } else if (
      invalidList &&
      !Object.keys(ATTRIBUTE_VALUES).includes(invalidList)
    ) {
      // Error: the attribute ${this.name} received an unknown list name (${invalidList}), it must be included in the list of keys in the ATTRIBUTE_VALUES global constant: ${Object.keys(ATTRIBUTE_VALUES)}
    }
    this.invalidList = invalidList
    this.validList = validList
  }

  /**
   * This function checks if the value matches the valid and invalid lists.
   * @returns True if the value is included inside `ATTRIBUTE_VALUES[this.validList]` and not included inside `ATTRIBUTE_VALUES[this.invalidList]`
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    if (typeof value === 'string') {
      if (ATTRIBUTE_VALUES[this.validList].includes(value)) {
        return true
      } else if (
        this.invalidList &&
        ATTRIBUTE_VALUES[this.invalidList].includes(value)
      ) {
        // Error: the attribute ${this.name} received an invalid value (${value}), it must not be included in the ATTRIBUTE_VALUES[${this.invalidList}] array: ${ATTRIBUTE_VALUES[this.invalidList]}
        return false
      } else {
        // Error: the attribute ${this.name} received an unknown value (${value}), it must be included in the ATTRIBUTE_VALUES[${this.validList}] array: ${ATTRIBUTE_VALUES[this.validList]}
        return false
      }
    } else {
      // Error: the attribute ${this.name} must receive a string value, instead found: ${value} with type of ${typeof value}.
      return false
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * An Input Attribute is a type exclusive to the `<input/>` element. Some attributes of this element depend on the `type` attribute's value. This attribute is the only one that requires a `typeValue` for the `match()` function.
 */
export class AttributeInput extends AttributeBase {
  /**
   * The list of acceptable values for the type attribute in this `<input/>` element given this attribute.
   */
  dependantValue: string[]

  /**
   * This value determines if the matching value should be a string or a boolean.
   */
  matchingType: 'string' | 'boolean'

  /**
   * ```Typescript
   * new AttributeInput('example', ['inputType'], 'string')
   * ```
   * @param name {@link AttributeBase.name | Read more}
   */
  constructor(
    name: string,
    dependantValue: string[],
    matchingType: 'string' | 'boolean'
  ) {
    super(name, 'input')
    this.matchingType = matchingType
    this.dependantValue = dependantValue
  }

  /**
   * This function checks if `value` and `typeValue` match the attribute's property settings.
   * @returns True if `value` matches `this.matchingType` and `typeValue` is included in `this.dependantValue`.
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    if (typeof value !== 'string') {
      // Error: the attribute ${this.name} must receive a string value, instead found: ${value} with type of ${typeof value}.
      return false
    } else if (this.matchingType === 'boolean') {
      if (value === 'true' || value === 'false') {
        return true
      } else {
        // Error: the attribute ${this.name} must receive the exact string value (case-sensitive) of 'true' or 'false', instead found: ${value}.
        return false
      }
    } else if (
      typeValue === 'string' &&
      this.dependantValue.includes(typeValue)
    ) {
      return true
    } else {
      // Error: the attribute ${this.name} received the value ${value} when the type had the invalid value of ${typeValue}, it must be included in the following: ${this.dependantValue}
      return false
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is used to manage the HTMLElements standard, renders them correctly and extends the HTMLElement prototype to support a match dictionary.
 */
export class Element {
  /**
   * The individual HTMLElement Tag Name in lowercase. It is used as a unique identifier among all Elements.
   */
  name: string = ''

  /**
   * Most elements can have children elements rendered inside, but some are built specifically to not have one, and doing so would go against it's design. The list of empty elements is the following:
   * - `<area/>`
   * - `<base/>`
   * - `<br/>`
   * - `<col/>`
   * - `<embed/>`
   * - `<hr/>`
   * - `<img/>`
   * - `<input/>`
   * - `<link/>`
   * - `<meta/>`
   * - `<param/>`
   * - `<source/>`
   * - `<track/>`
   * - `<wbr/>`
   */
  empty: boolean = false

  /**
   * The Attribute Dictionary with all attributes related to the element. This dictionary is what standarizes all elements and their attributes.
   */
  attributes?: AttributesDictionary = {}

  /**
   * This function extends the HTMLElement prototype to support a attribute standard filter. If `standardVerificationMode` is set to False, this function will simply continue to `this.setAttributes(attributes)`.
   * @param attributes The attributes that might be set to this element.
   * @returns An element with the dictionary of attributes applied if the attributes match the element's satandard.
   */
  private has = function (
    this: HTMLElement,
    attributes: AttributeValuesDictionary
  ): HTMLElement {
    let tagName = this.tagName.toLowerCase()
    if (this.matchDictionary[tagName](attributes)) {
      return this.setAttributes(attributes)
    } else {
      return this
    }
  }

  /**
   * This function extends the HTMLElement prototype to support a dictionary version of the similar method `.setAttribute()`.
   * @param attributes The attributes that will be set to this element.
   * @returns An element with the dictionary of attributes applied.
   */
  private setAttributes = function (
    this: HTMLElement,
    attributes: AttributeValuesDictionary
  ): HTMLElement {
    Object.keys(attributes).forEach((attributeName: string) => {
      let attribute = attributes[attributeName]
      if (typeof attribute === 'string') {
        this.setAttribute(attributeName, attribute)
      } else {
        let listenerFunction: Function = attribute
        this.addEventListener(attributeName, (event: Event) => {
          listenerFunction(event)
        })
      }
    })
    return this
  }

  /**
   * This function overrides the HTMLElement prototype to support the `HTMLElement.prototype.match` dictionary.
   * @param standardVerificationMode If True, it creates standarized `match` functions inside the overriten dictionary. If False, it all `match` functions return true, without standarization.
   * @returns The match function for this particular Element adjusted to `standardVerificationMode`.
   */
  addMatch = (standardVerificationMode: boolean): Function =>
    standardVerificationMode
      ? (attributes: AttributeValuesDictionary): boolean => {
          let allGood = true
          Object.keys(attributes).forEach((attributeName: string) => {
            if (this.attributes && this.attributes[attributeName]) {
              if (
                !this.attributes[attributeName].match(
                  attributes[attributeName],
                  attributes.type
                )
              ) {
                allGood = false
              }
            } else if (GLOBAL_ATTRIBUTES[attributeName]) {
              if (
                !GLOBAL_ATTRIBUTES[attributeName].match(
                  attributes[attributeName],
                  attributes.type
                )
              ) {
                allGood = false
              }
            } else {
              allGood = false
            }
          })
          return allGood
        }
      : () => true

  /**
   * This function assigns renderer functions. This will be the building block of the framework.
   * @param standardVerificationMode If True, it creates standarized `match` functions inside the overriten dictionary. If False, it all `match` functions return true, without standarization.
   * @returns One of two different renderer functions, depending on `this.empty` value.
   * - renderWithChildren `a.div(a.div(), a.div(), ...)`
   * - renderWithoutChildren `a.input({type: 'text', class: 'example'})`
   */
  render = (standardVerificationMode: boolean): Function => {
    let newMatch: MatchFunctionsDictionary = {}
    newMatch[this.name] = this.addMatch(standardVerificationMode)

    HTMLElement.prototype.matchDictionary = {
      ...HTMLElement.prototype.matchDictionary,
      ...newMatch
    }
    HTMLElement.prototype.has = this.has
    HTMLElement.prototype.setAttributes = this.setAttributes

    const renderWithChildren = (
      ...children: [HTMLElement | string]
    ): HTMLElement => {
      let elem = document.createElement(this.name)
      elem.append(...children)
      return elem
    }

    const renderWithoutChildren = (
      attributes: {
        [key: string]: string | Function
      } = {}
    ): HTMLElement => {
      let elem = document.createElement(this.name)
      elem.has(attributes)
      return elem
    }

    return this.empty ? renderWithoutChildren : renderWithChildren
  }

  /**
   * ```Typescript
   * new Element('example', true, {
   *  exampleAttribute: new AttributeString('exampleAttribute')
   * })
   * ```
   * @param name {@link Element.name | Read more}
   * @param empty {@link Element.empty | Read more}
   * @param attributes {@link Element.attributes | Read more}
   */
  constructor(name: string, empty: boolean, attributes?: AttributesDictionary) {
    this.name = name
    this.attributes = attributes
    this.empty = empty
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This dictionary contains the values for HTMLElements with attributes limited to a list. Some lists are shared among elements.
 */
export const ATTRIBUTE_VALUES: { [key: string]: string[] } = {
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
  wrap: ['hard', 'soft'],
  invalidInputType: ['datetime'],
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This dictionary contains attributes that can be used in any Element.
 */
export const GLOBAL_ATTRIBUTES: AttributesDictionary = {
  autocapitalize: new AttributeList('autocapitalize', 'autocapitalize'),
  dir: new AttributeList('dir', 'bdoDir'),
  enterkeyhint: new AttributeList('enterkeyhint', 'enterkeyhint'),
  inputmode: new AttributeList('inputmode', 'inputmode'),
  lang: new AttributeList('lang', 'isoCodes'),
  contenteditable: new AttributeList('contenteditable', 'softBoolean'),
  draggable: new AttributeList('draggable', 'softBoolean'),
  spellcheck: new AttributeList('spellcheck', 'softBoolean'),
  accesskey: new AttributeString('accesskey'),
  class: new AttributeString('class'),
  data: new AttributeString('data'),
  id: new AttributeString('id'),
  itemid: new AttributeString('itemid'),
  itemprop: new AttributeString('itemprop'),
  itemref: new AttributeString('itemref'),
  itemtype: new AttributeString('itemtype'),
  nonce: new AttributeString('nonce'),
  style: new AttributeString('style'),
  tabindex: new AttributeString('tabindex'),
  title: new AttributeString('title'),
  hidden: new AttributeBoolean('hidden'),
  itemscope: new AttributeBoolean('itemscope'),
  // Event Listener
  cancel: new AttributeFunction('cancel'),
  error: new AttributeFunction('error'),
  scroll: new AttributeFunction('scroll'),
  select: new AttributeFunction('select'),
  show: new AttributeFunction('show'),
  wheel: new AttributeFunction('wheel'),
  copy: new AttributeFunction('copy'),
  cut: new AttributeFunction('cut'),
  paste: new AttributeFunction('paste'),
  compositionend: new AttributeFunction('compositionend'),
  compositionstart: new AttributeFunction('compositionstart'),
  compositionupdate: new AttributeFunction('compositionupdate'),
  blur: new AttributeFunction('blur'),
  focus: new AttributeFunction('focus'),
  focusin: new AttributeFunction('focusin'),
  focusout: new AttributeFunction('focusout'),
  fullscreenchange: new AttributeFunction('fullscreenchange'),
  fullscreenerror: new AttributeFunction('fullscreenerror'),
  keydown: new AttributeFunction('keydown'),
  keypress: new AttributeFunction('keypress'),
  keyup: new AttributeFunction('keyup'),
  auxclick: new AttributeFunction('auxclick'),
  click: new AttributeFunction('click'),
  contextmenu: new AttributeFunction('contextmenu'),
  dblclick: new AttributeFunction('dblclick'),
  mousdown: new AttributeFunction('mousdown'),
  mouseenter: new AttributeFunction('mouseenter'),
  mouseleave: new AttributeFunction('mouseleave'),
  mousemove: new AttributeFunction('mousemove'),
  mouseout: new AttributeFunction('mouseout'),
  mouseover: new AttributeFunction('mouseover'),
  mouseup: new AttributeFunction('mouseup'),
  change: new AttributeFunction('change'),
  webkitmouseforcechanged: new AttributeFunction('webkitmouseforcechanged'),
  webkitmouseforcedown: new AttributeFunction('webkitmouseforcedown'),
  webkitmouseforcewillbegin: new AttributeFunction('webkitmouseforcewillbegin'),
  webkitmouseforceup: new AttributeFunction('webkitmouseforceup'),
  touchcancel: new AttributeFunction('touchcancel'),
  touchend: new AttributeFunction('touchend'),
  touchmove: new AttributeFunction('touchmove'),
  touchstart: new AttributeFunction('touchstart'),
}
