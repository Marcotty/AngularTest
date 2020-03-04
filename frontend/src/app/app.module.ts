import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DevicesApiService} from './devices/devices-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DevicesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }