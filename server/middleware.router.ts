import KoaRouter = require('koa-router');

import SampleContoroller = require('./app/controller/sample.controller');

/** 仮リクエスト */
interface Request {
    requestId: string;
}
/** 仮レスポンス */
interface Response {
    status: boolean;
    statusCode: number;
}

/** ミドルウェア ルータ */
class MiddlewareRouter {
    /** 各ルータを束ねたミドルウェアを生成 */
    public routes(): KoaRouter.IMiddleware {
        const koaRouter = new KoaRouter();
        koaRouter.get('/', function (ctx) {
            ctx.body = 'Hello, Koa!!';
            console.log('=== Hello, Koa!! ===');
        });

        koaRouter.get('/api/get-sample', this.callGet(new SampleContoroller().test));

        return koaRouter.routes();
    }

    /**
     * 実行処理の呼び出し(GET)
     * @param controll 実行される処理
     * @returns ルータに設定するミドルウェア
     */
    private callGet(controll: (request: Request) => Promise<Response>): any {
        return async function(ctx: KoaRouter.IRouterContext) {
            const ctxRequest: any = ctx.request;
            const ctxResponse = await controll(ctxRequest.query);
            ctx.body = ctxResponse;
        };
    }
}
export = MiddlewareRouter;
