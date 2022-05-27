import { PartTree } from "./types"

/**
 * @module Ana/Utils
 */

/**
 *
 * @param unslugged
 */
export const slugify: Function = (unslugged: string): string => {
  return unslugged
}

/**
 *
 * @param url
 * @param data
 * @returns
 */
export const bring: Function = (url: string, data: any): Promise<any> => {
  let fetchBody = {
    ...data,
  }
  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(fetchBody),
  })
    .then((response) => {
      return response.json()
    })
    .catch((error) => console.error(error))
}

/**
 *
 * @param id
 * @returns
 */
export const eId: Function = (id: string): HTMLElement | null => {
  const element = document.getElementById(id) 
  return element ? element : document.createElement('div')
}

/**
 *
 */
export const areEqualArrays: Function = (): void => {
  // Applies override
}

/**
 *
 */
export const createPartTree: Function = (
  defaultTree: PartTree,
  override: PartTree
): PartTree => {
  Object.keys(override).forEach((overrideKey: string): void => {
    if (Object.keys(defaultTree).includes(overrideKey)) {
      defaultTree[overrideKey] = override[overrideKey]
    } else {
      // Error: The part trying to be overwritten does not exist.
    }
  })
  return defaultTree
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Function extendParameterDefaults
 * @param param 
 * @param defaultValues 
 * @returns 
 */
 export function extendParameterDefaults<Type>(
  param: { [key: string]: Type },
  defaultValues: { [key: string]: Type }
): { [key: string]: Type } {
  Object.keys(defaultValues).forEach((defaultPropertyName: string) => {
    if(param[defaultPropertyName] === undefined) {
      param[defaultPropertyName] = defaultValues[defaultPropertyName]
    }
  })
  return param
}