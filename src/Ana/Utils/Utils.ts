/**
 * @module Utils
 */
import { GenericData } from '../types'

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
export const thrush =
  <T>(x: T) =>
  (f: Function) =>
    f(x)
