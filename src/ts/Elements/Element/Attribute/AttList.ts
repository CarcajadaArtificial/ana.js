import { MatchAttributeValue } from '../../../types'
import { Attribute } from './Attribute'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A List Attribute is one that not only must be a string, it must be part of a predefined list of string values. This lists are organized in the `ATTRIBUTE_VALUES` dictionary.
 * @module Ana/Render
 */
export class AttList extends Attribute {
  constructor(name: string, public validList: string, public invalidList?: string) {
    if (!Object.keys(ATTRIBUTE_VALUES).includes(validList)) {
      // Error: the attribute ${this.name} received an unknown list name (${validList}), it must be included in the list of keys in the ATTRIBUTE_VALUES global constant: ${Object.keys(ATTRIBUTE_VALUES)}
    } else if (
      invalidList &&
      !Object.keys(ATTRIBUTE_VALUES).includes(invalidList)
    ) {
      // Error: the attribute ${this.name} received an unknown list name (${invalidList}), it must be included in the list of keys in the ATTRIBUTE_VALUES global constant: ${Object.keys(ATTRIBUTE_VALUES)}
    }
    
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      let value = attributeValues.value
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
    })
  }

  /**
   * This function checks if the value matches the valid and invalid lists.
   * @returns True if the value is included inside `ATTRIBUTE_VALUES[this.validList]` and not included inside `ATTRIBUTE_VALUES[this.invalidList]`
   */
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
