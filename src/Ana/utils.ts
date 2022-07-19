import { GenericData } from './types'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _   _ _   _ _ _ _   _
//  | | | | |_(_) (_) |_(_) ___  ___
//  | | | | __| | | | __| |/ _ \/ __|
//  | |_| | |_| | | | |_| |  __/\__ \
//   \___/ \__|_|_|_|\__|_|\___||___/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This function is a summary function for `.fetch()`. When using it, one repeats using the same method,
 * headers, `.then()`s, etc. So this function helps as a substitue for `.fetch()`.
 *
 * ```Typescript
 * let broughtData = await bring(url, postData)
 * ```
 * @param url URL of the resource that will be fetched.
 *
 * @param data The resource that will be posted.
 *
 * @param headers The Headers interface of the Fetch API allows you to perform various actions on HTTP
 * request and response headers. These actions include retrieving, setting, adding to, and removing
 * headers from the list of the request's headers.
 *
 * @param method The request method, e.g., GET, POST.
 *
 * @returns
 */
export const bring: Function = (
  url: string,
  data: GenericData,
  headers: { [key: string]: string } = { 'Content-Type': 'application/json' },
  method: string = 'POST'
): Promise<any> => {
  let fetchBody = {
    ...data,
  }
  return fetch(url, {
    headers: headers,
    method: method,
    body: JSON.stringify(fetchBody),
  })
    .then((response: Response) => {
      return response.json()
    })
    .catch(() => {
      throw new Error()
    })
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Summary function, instead of `document.getElementById(id)` use `byId(id)`.
 *
 * @param id The ID of the element to locate. The ID is case-sensitive string which is unique within the
 * document; only one element may have any given ID.
 *
 * @returns The Element linked to that id.
 */
export const byId: Function = (id: string): Element | undefined => {
  const element = document.getElementById(id)
  return element ? element : undefined
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 * @param selector
 * @returns
 */
export const query: Function = (selector: string): Element | undefined => {
  const element = document.querySelector(selector)
  return element === null ? undefined : element
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Inside Ana, there are interfaces that start with a lowercase `i`, e.g. `iAnaConfiguration`. These are input interfaces and have the same properties as their equivalent without the `i`. So then, what is the difference between each other? All of the properties of an input interface must be optional. Because we can't force the developer to input all properties of a interface every time. In other words, if a developer wants to configure Ana, it shouldn't be a requirement to add all AnaConfiguration properties only to change one of them.
 *
 * Then, the problem happens when trying to use the input interface. All values are optional, so it becomes verbose to validate each and everyone of them in a way simmilar to this: `interface.property ? interface.property : undefined`. That's why we need the second non-input interface, where no property is optional. This function transforms `iExample` into `Example` using the default values found in `dExample`.
 *
 * @param defaultParameters To transofrm an input interface into a non-input interface, one needs an Object with default values.
 *
 * @param inputParameters The set properties of the input interface.
 *
 * @returns An object of a non-input interface overwritten with input property values.
 */
export function applyDefaults<Type, iType>(
  defaultParameters: Type,
  inputParameters: iType
): Type {
  return { ...defaultParameters, ...inputParameters }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * `x => f => f(x)`
 */
export const thrush =
  <T>(x?: T) =>
  (f: Function) =>
    f(x)

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const objectMap = (
  obj: GenericData,
  cb: (value: any, key: string, obj?: GenericData) => any
): GenericData => {
  let mappedObject: GenericData = {}
  Object.keys(obj).forEach((key: string) => {
    mappedObject[key] = cb(obj[key], key, obj)
  })
  return mappedObject
}
