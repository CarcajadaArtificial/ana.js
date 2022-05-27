//    ___           _
//   |_ _|_ __   __| | _____  __
//    | || '_ \ / _` |/ _ \ \/ /
//    | || | | | (_| |  __/>  <
//   |___|_| |_|\__,_|\___/_/\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains overrides of global prototypes to support the functionality needed to execute the framework.
 * @module Ana/Index
 */

import { Ana } from './Ana/Ana'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Global Overrides
declare global {
  // Window interface override to support `const a = new Ana()`.
  interface Window {
    Ana: Object
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Global prototype overrides
window.Ana = Ana
