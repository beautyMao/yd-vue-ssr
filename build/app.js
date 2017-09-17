'use strict';
// const Koa = require('koa');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);