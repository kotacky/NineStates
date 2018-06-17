import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePipe } from './sample.pipe';

/**
 * サンプル パイプモジュール
 */
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
      SamplePipe
    ],
    exports: [
      SamplePipe
    ]
})
export class SamplePipeModule {}
