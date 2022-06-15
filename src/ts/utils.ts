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
export const eId: Function = (id: string): HTMLElement | undefined => {
  const element = document.getElementById(id) 
  return element ? element : undefined
}
