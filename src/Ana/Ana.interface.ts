//     _               ___     _            __
//    /_\  _ _  __ _  |_ _|_ _| |_ ___ _ _ / _|__ _ __ ___
//   / _ \| ' \/ _` |  | || ' \  _/ -_) '_|  _/ _` / _/ -_)
//  /_/ \_\_||_\__,_| |___|_||_\__\___|_| |_| \__,_\__\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This is a data structure contains the framework's initial settings.
 */
export interface AnaConfig {
  /**
   * This is the default list of supported SVG element tagnames.
   */
  svgElements: string[];
  /**
   * This is the default list of HTMLElement tagnames marked as empty.
   */
  emptyElements: string[];
}

/**
 * Input interface for AnaConfig.
 */
export interface iAnaConfig {
  svgElements?: string[];
  emptyElements?: string[];
}

/**
 * Deafult values for AnaConfig.
 */
export const dAnaConfig = {
  // prettier-ignore
  svgElements: ['circle','ellipse','line','polygon','polyline','rect','defs','g','marker','mask','svg','switch','symbol','desc','linearGradient','radialGradient','stop','image','path','text','use'],
  // prettier-ignore
  emptyElements: ['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'],
};
