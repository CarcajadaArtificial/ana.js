//   ___  _    _   _                          _____       _
//  |   \(_)__| |_(_)___ _ _  __ _ _ _ _  _  |_   _|__ __| |_
//  | |) | / _|  _| / _ \ ' \/ _` | '_| || |   | |/ -_|_-<  _|
//  |___/|_\__|\__|_\___/_||_\__,_|_|  \_, |   |_|\___/__/\__|
//                                     |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
import { assertEquals } from './test.deps.ts';
import {
  dictionaryMap,
  dictionaryReduce,
  applyDefaults,
} from '../src/utils.ts';
import { Dictionary } from '../src/types.ts';

// Global variables
const sampleDictionary: Dictionary<number> = {
  a: 1,
  b: 2,
  c: 3,
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('dictionaryMap() - Check the dictionary remains the same.', () => {
  assertEquals(
    sampleDictionary,
    dictionaryMap<number>(sampleDictionary, (entry) => entry)
  );
});

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test(
  'dictionaryMap() - Check the dictionary after map alters values.',
  () => {
    assertEquals(
      {
        a: 2,
        b: 4,
        c: 6,
      },
      dictionaryMap<number>(sampleDictionary, (entry) => entry * 2)
    );
  }
);

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test(
  'dictionaryReduce() - Check that returns initial value when it does not alter the acummulator.',
  () => {
    assertEquals(
      0,
      dictionaryReduce<number, number>(
        sampleDictionary,
        (_entry, _key, acum) => acum,
        0
      )
    );
  }
);

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test('dictionaryReduce() - Check that returns reduced value.', () => {
  assertEquals(
    6,
    dictionaryReduce<number, number>(
      sampleDictionary,
      (entry, _key, acum) => acum + entry,
      0
    )
  );
});

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test(
  'applyDefaults() - Check that returns default dictionary when the input is {}',
  () => {
    assertEquals(sampleDictionary, applyDefaults(sampleDictionary, {}));
  }
);

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
Deno.test(
  'applyDefaults() - Check that the input dictionary is applied to the default one.',
  () => {
    assertEquals(
      {
        a: 1,
        b: 2,
        c: 100,
      },
      applyDefaults(sampleDictionary, {
        c: 100,
      })
    );
  }
);
