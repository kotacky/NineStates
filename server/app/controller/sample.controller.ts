import SampleRequest = require('../../../middle/exchange/sample/sample.request');
import SampleResponse = require('../../../middle/exchange/sample/sample.response');

/** サンプル コントローラ */
class SampleContoroller {
    public async test(request: SampleRequest): Promise<SampleResponse> {

        console.log('=== SampleContoroller # test ===');
        console.log(request);

        return await {
            status: true,
            statusCode: 200,
            result: 1
        } as SampleResponse;
    }
}
export = SampleContoroller;
