'use strict';
// const Koa = require('koa');
import Koa from 'koa';
const app = new Koa();


app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);

console.log('koa server is started!');
