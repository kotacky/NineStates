import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './components/sample/sample.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'sample-page',
    component: SampleComponent
  }
];

@NgModule({
  // URL直打ちでの画面遷移を防ぎたい場合は forRoot のオプション部分(, { useHash: true })を削除
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
