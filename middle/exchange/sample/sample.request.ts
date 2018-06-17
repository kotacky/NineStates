import Request = require('../base/request');

/** サンプル リクエスト */
interface ISampleRequest extends Request {
    num1: number;
    num2: number;
}
export = ISampleRequest;
