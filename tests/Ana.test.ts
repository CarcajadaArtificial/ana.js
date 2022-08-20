//     _               _____       _
//    /_\  _ _  __ _  |_   _|__ __| |_
//   / _ \| ' \/ _` |   | |/ -_|_-<  _|
//  /_/ \_\_||_\__,_|   |_|\___/__/\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { assertEquals } from './test.deps.ts';
import { Ana } from '../src/Ana/Ana.ts';
import { Renderer } from '../src/Renderer.ts';

const ana = new Ana();
const a = ana.render;

const divRenderer = () => new Renderer('div', false, false);
const inputRenderer = () => new Renderer('input', false, true);

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test(
  'Ana.render - Check for a parent element without attributes or children',
  () => {
    assertEquals(a.div()().render(), divRenderer().render());
  }
);

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('Ana.render - Check for a parent element with children', () => {
  assertEquals(
    a.div()('Test', a.input()).render(),
    divRenderer().addChildren('Test', inputRenderer()).render()
  );
});

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('Ana.render - Check for a parent element with class', () => {
  assertEquals(
    a.div('Test')().render(),
    divRenderer().has({ class: 'Test' }).render()
  );
});

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('Ana.render - Check for a empty element', () => {
  assertEquals(a.input().render(), inputRenderer().render());
});

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('Ana.render - Check for a empty element', () => {
  assertEquals(
    a.input('Test').render(),
    inputRenderer().has({ class: 'Test' }).render()
  );
});
