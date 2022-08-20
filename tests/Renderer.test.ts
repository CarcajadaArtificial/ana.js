//   ___             _                   _          _
//  | _ \___ _ _  __| |___ _ _ ___ _ _  | |_ ___ __| |_
//  |   / -_) ' \/ _` / -_) '_/ -_) '_| |  _/ -_|_-<  _|
//  |_|_\___|_||_\__,_\___|_| \___|_|    \__\___/__/\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { assertEquals } from './test.deps.ts';
import { Renderer } from '../src/Renderer.ts';

const divRenderer = () => new Renderer('div', false, false);
const svgRenderer = () => new Renderer('svg', true, false);
const inputRenderer = () => new Renderer('input', false, true);

const sampleAttributes = { foo: 'bar', boolean: true };

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test(
  'Renderer - Check for a parent element without attribute or children',
  () => {
    assertEquals(divRenderer().render(), '<div></div>');
  }
);

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('Renderer - Check for a parent element with attributes', () => {
  assertEquals(
    divRenderer().has(sampleAttributes).render(),
    '<div foo="bar" boolean></div>'
  );
});

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('Renderer - Check for a parent element with children', () => {
  assertEquals(
    divRenderer().addChildren('Test', inputRenderer()).render(),
    '<div>Test<input /></div>'
  );
});

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test(
  'Renderer - Check for a parent element with attributes and children',
  () => {
    assertEquals(
      divRenderer()
        .has(sampleAttributes)
        .addChildren('Test', inputRenderer())
        .render(),
      '<div foo="bar" boolean>Test<input /></div>'
    );
  }
);

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('Renderer - Check for a empty element without attributes', () => {
  assertEquals(inputRenderer().render(), '<input />');
});

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('Renderer - Check for a empty element with attributes', () => {
  assertEquals(
    inputRenderer().has(sampleAttributes).render(),
    '<input foo="bar" boolean />'
  );
});

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('Renderer - Check for a svg element', () => {
  assertEquals(
    svgRenderer().render(),
    '<svg xmnls="http://www.w3.org/2000/svg"></svg>'
  );
});
