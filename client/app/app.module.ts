import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app_routing.module';

import { AppComponent } from './app.component';
import { SampleModule } from './components/sample/sample.module';
import { SampleServiceModule } from './services/sample/sample_service.module';
import { SamplePipeModule } from './pipes/sample/sample_pipe.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleModule,
    SampleServiceModule,
    SamplePipeModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
