import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SampleComponent } from './sample.component';

/**
 * サンプル コンポーネントモジュール
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
      SampleComponent,
    ],
    exports: [
      SampleComponent
    ]
})
export class SampleModule {}
