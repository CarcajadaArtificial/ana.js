//   __  __         _
//  |  \/  |___  __| |
//  | |\/| / _ \/ _` |
//  |_|  |_\___/\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 * Hello! Welcome to my module’s page! Firstly, thank you very much for being interested enough to click on my project, and secondly, for taking the time to read this. So what did you click on?
 *
 * ## What is Ana?
 * Ana (or `Ana.js`) is me trying to escape framework hell. Specifically, escape frameworks whose syntax looks like HTML (I'm looking at you JSX). Ana does this by still looking like TypeScript (and JavaScript). Rendering elements looks like readable phrases `a.button('primary')` renders `<button class=”primary” />`, and reads like “a button primary”. The aim of the framework is for it to look and feel as if it was another update for the JavaScript language itself, providing a set of shortcuts to known JS features, instead of proposing a new language itself.
 *
 * ### Why should I use Ana in my projects?
 * The short answer is: if you need to render reactive HTML/SVG elements focusing on time to interaction. Pure Ana.js is like pure JSX, it is a very useful tool but requires others for complex applications.
 *
 * ## Features
 *
 * ### Good ‘ol JavaScript syntax
 * The syntax doesn’t look like HTML. It doesn’t have any `< />`, and looks more like pure TypeScript (or JavaScript). Ana provides functions that render reactive web elements without the need for any .html files at all.
 *
 * ### Render anywhere
 * You are not stuck to rendering on the server or the client. In its ideal form, Ana renderers all static content on the server and works the interactions with the client. Nevertheless, this feature is flexible for apps that render purely on the client or purely on the server.
 *
 * ### Standard intellisense
 * Thanks to TypeScript Magic, I defined an interface with a standard of good practices for HTML/SVG elements that uses Ana’s render methods. This avoids the need of researching if an element’s attribute is a good practice, experimental, deprecated or whatever.
 *
 * ## Getting started
 *
 * *Comming soon*
 *
 * @module
 */

export { Ana } from './src/Ana/Ana.ts';
