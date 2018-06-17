import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SampleService } from './sample.service';

/**
 * サンプル サービスモジュール
 */
@NgModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      SampleService
    ]
})
export class SampleServiceModule {}
