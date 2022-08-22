import { Application, Context, Router, send, join } from './app.deps.ts';
import { index } from './index.ts';

const app = new Application();
const router = new Router();

router.get('/:path+', async (ctx: Context) => {
  return await send(ctx, ctx.request.url.pathname, {
    root: join(Deno.cwd(), 'app/static'),
  });
});

router.get('/', (ctx) => {
  ctx.response.body = index;
});

app.use(router.routes());

await app.listen({ port: 3000 });
