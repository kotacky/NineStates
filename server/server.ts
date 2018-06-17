// アプリケーションサーバ起動設定
import Koa = require('koa');
import bodyparser = require('koa-bodyparser');
import MiddlewareRouter = require('./middleware.router');

const app = new Koa();

// サーバ側ミドルウェアの提供
app.use(bodyparser({
    extendTypes: {
        json: ['application/x-javascript']
    }
}))
.use(new MiddlewareRouter().routes());

// サービス開始
const port = 3000;
app.listen(port, () => console.log(`App is listing port in ${port}`));
