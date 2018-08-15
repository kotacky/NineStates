import * as mongoose from 'mongoose';

import SampleRequest = require('../../../middle/exchange/sample/sample.request');
import SampleResponse = require('../../../middle/exchange/sample/sample.response');

/** サンプル コントローラ */
class SampleContoroller {

    public async test(request: SampleRequest): Promise<SampleResponse> {

        // console.log(this.usersModels.find());
        var Schema = mongoose.Schema;
        var users = new Schema({
            name:  String,
            address: String
          });
        mongoose.model('users', users);
        mongoose.connect('mongodb://localhost/NineStates');
        var users = mongoose.model('users');
        users.find({}, function(err, docs) {
            for (var i = 0, size = docs.length; i < size; ++i) {
                console.log(docs[i].name);
                console.log(docs[i].address);
            }
        });

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
