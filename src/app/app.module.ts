import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

//shared
import { SharedModule } from './shared/shared.module'

//routing
import { AppRoutingModule } from './app-routing.module'

//service
import { OAuthService } from './service/oauth.service'

//page
import { CallbackComponent } from './component/callback/callback.component'
import { HomeComponent } from './component/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    OAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
