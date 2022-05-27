//      _                  ___       _             __                
//     / \   _ __   __ _  |_ _|_ __ | |_ ___ _ __ / _| __ _  ___ ___ 
//    / _ \ | '_ \ / _` |  | || '_ \| __/ _ \ '__| |_ / _` |/ __/ _ \
//   / ___ \| | | | (_| |  | || | | | ||  __/ |  |  _| (_| | (_|  __/
//  /_/   \_\_| |_|\__,_| |___|_| |_|\__\___|_|  |_|  \__,_|\___\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The main interface of the framework
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
* This type aids in the configuration object used during the class instance construction.
* ```Typescript
* const a = new Ana(AnaConfiguration)
* ```
*/
export interface iAna {
  configuration: iAnaConfiguration
  render: Function
}

export interface iAnaConfiguration {
  standardVerificationMode?: boolean
}