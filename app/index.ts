import { Ana } from '../mod.ts';

const ana = new Ana();
const a = ana.render;

export const index = ana.app(
  a.main()(a.h1()('Test').has({ id: 'clickable-title' }))
);
