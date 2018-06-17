import KoaRouter = require('koa-router');

import Request = require('../middle/exchange/base/request');
import Response = require('../middle/exchange/base/response');
import SampleContoroller = require('./app/controller/sample.controller');

/** ミドルウェア ルータ */
class MiddlewareRouter {
    /** 各ルータを束ねたミドルウェアを生成 */
    public routes(): KoaRouter.IMiddleware {
        const koaRouter = new KoaRouter();

        koaRouter.get('/api/get-sample', this.callGet(new SampleContoroller().test));
        koaRouter.post('/api/post-sample', this.callPost(new SampleContoroller().test));

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

    /**
     * 実行処理の呼び出し(POST)
     * @param controll 実行される処理
     * @returns ルータに設定するミドルウェア
     */
    private callPost(controll: (request: Request) => Promise<Response>): any {
        return async function(ctx: KoaRouter.IRouterContext) {
            const ctxRequest: any = ctx.request;
            const ctxResponse = await controll(ctxRequest.body);
            ctx.body = ctxResponse;
        };
    }
}
export = MiddlewareRouter;
