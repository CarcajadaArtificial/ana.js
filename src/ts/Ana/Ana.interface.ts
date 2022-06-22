/**
 * @module Ana/Interface
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _                  ___       _             __                
//     / \   _ __   __ _  |_ _|_ __ | |_ ___ _ __ / _| __ _  ___ ___ 
//    / _ \ | '_ \ / _` |  | || '_ \| __/ _ \ '__| |_ / _` |/ __/ _ \
//   / ___ \| | | | (_| |  | || | | | ||  __/ |  |  _| (_| | (_|  __/
//  /_/   \_\_| |_|\__,_| |___|_| |_|\__\___|_|  |_|  \__,_|\___\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface iAnaConfiguration {
  // includeComponentLibrary?: boolean
  // includeAtoms?: boolean
  // includeMolecules?: boolean
  // includeOrganisms?: boolean
  // includePages?: boolean
  // includeSVGLibrary?: boolean
  extensions?: { [key:string]: any }

  // Component/Organisms/App
  // appContainerId?: string = 'app' // index.html -> <body><div id="app"></div></body>
}

export interface AnaConfiguration {
  extensions: { [key:string]: any }
}


export const dAnaConfiguration: AnaConfiguration = {
  extensions: {}
}