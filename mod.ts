import { Ana } from './src/Ana/Ana.ts';

const ana = new Ana();
const a = ana.render;

console.log(
  'Ran renderer: ',
  a
    .div('class')(
      a.div('class')(
        a.div('class')(
          a.div('class')(
            a
              .input('class')
              .has({ type: 'number', hidden: true, required: false }),
            a.svg('class')()
          )
        )
      )
    )
    .render()
);
