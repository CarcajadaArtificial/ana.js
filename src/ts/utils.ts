/**
 * @module Ana/Utils
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _   _ _   _ _ _ _   _
//  | | | | |_(_) (_) |_(_) ___  ___
//  | | | | __| | | | __| |/ _ \/ __|
//  | |_| | |_| | | | |_| |  __/\__ \
//   \___/ \__|_|_|_|\__|_|\___||___/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

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
export const byId: Function = (id: string): HTMLElement | undefined => {
  const element = document.getElementById(id)
  return element ? element : undefined
}

/**
 * 
 * @param defaultParameters 
 * @param inputParameters 
 * @returns 
 */
export function applyDefaultParameters<Type, iType>(
  defaultParameters: Type,
  inputParameters: iType
): Type {
  return { ...defaultParameters, ...inputParameters }
}

/**
 * `x => f => f(x)`
 */
 export const thrush = <T>(x: T) => (f: Function) => f(x)