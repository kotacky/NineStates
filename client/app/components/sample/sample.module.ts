import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SampleComponent } from './sample.component';
import { SampleServiceModule } from '../../services/sample/sample_service.module';

/**
 * サンプル コンポーネントモジュール
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SampleServiceModule
    ],
    declarations: [
      SampleComponent,
    ],
    exports: [
      SampleComponent
    ]
})
export class SampleModule {}
