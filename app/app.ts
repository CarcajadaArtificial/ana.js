import { Application, Router } from 'https://deno.land/x/oak@v10.6.0/mod.ts';
import { Ana } from '../mod.ts';

const app = new Application();
const router = new Router();

const ana = new Ana();
const a = ana.render;

router.get('/', (ctx) => {
  ctx.response.body = ana.app(a.p('test')('test'));
});

app.use(router.routes());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = 'Page not found';
});

app.addEventListener('error', (evt) => {
  console.log(evt.error);
});

await app.listen({ port: 3000 });
