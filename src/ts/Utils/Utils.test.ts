import { bring } from "./Utils";
// import { Ana } from "../Ana/Ana";

// const A = new Ana()
// const a = A.render

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _   _ _   _ _ _ _   _             _____         _   
//  | | | | |_(_) (_) |_(_) ___  ___  |_   _|__  ___| |_ 
//  | | | | __| | | | __| |/ _ \/ __|   | |/ _ \/ __| __|
//  | |_| | |_| | | | |_| |  __/\__ \   | |  __/\__ \ |_ 
//   \___/ \__|_|_|_|\__|_|\___||___/   |_|\___||___/\__|
//                                                       
////////////////////////////////////////////////////////////////////////////////////////////////////////


describe('Utils', () => {
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * @todo Test when a faulty URL is used, and an error is thrown.
   */
  describe('bring', () => {
    let httpRequestTestURL: string = 'https://httpbin.org/post'
    let httpRequestFaultyURL: string = 'https://httpbin.org/asdfgh'

    test('Posts an empty object to a test url.', async () => {
      let requestData = await bring(httpRequestTestURL, {})
      expect(requestData).toBeTruthy()
      expect(requestData.constructor.name).toBe('Object')
    })

    // test('Posts an empty object to a faulty url', async () => {
    //   await expect(() => bring(httpRequestFaultyURL, {})).toThrowError()
    //   // expect(requestData.constructor.name).toBe('Object')
    // })
  })

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This function will be tested after SSR is implemented.
   * 
   * const dom = new JSDOM(`<!DOCTYPE html><body><div id="app"></div></body>`);
   * const document = dom.window.document
   * 
   * @todo byId in a success case
   * @todo byId in a failed case
   */
  describe('byId', () => {
    test('', () => {})
  })
  
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * @todo passing an empty object
   * @todo passing an object that changes all properties of the default object
   */
  describe('applyDefaultParameters', () => {
    test('', () => {})
  })
})