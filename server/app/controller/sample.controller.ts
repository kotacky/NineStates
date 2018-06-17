/** サンプル コントローラ */
class SampleContoroller {
    public async test(request: any): Promise<any> {

        console.log('============ SampleContoroller # test ===========');
        console.log(request);

        return await {
            status: true,
            statusCode: 200,
            result: 1
        };
    }
}
export = SampleContoroller;
