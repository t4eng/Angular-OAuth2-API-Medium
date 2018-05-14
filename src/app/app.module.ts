import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

//shared
import { SharedModule } from './component/shared/shared.module'

//routing
import { AppRoutingModule } from './app-routing.module'

//service
import { OAuthService } from './service/oauth.service'
import { ProfileService } from './service/profile.service'
import { PublicationsService } from './service/publications.service'
import { FollowingService } from './service/following.service'

//page
import { CallbackComponent } from './component/callback/callback.component'
import { ProfileComponent } from './component/profile/profile.component'
import { PublicationsComponent } from './component/publications/publications.component'
import { FollowingComponent } from './component/following/following.component'

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    ProfileComponent,
    PublicationsComponent,
    FollowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    OAuthService,
    ProfileService,
    PublicationsService,
    FollowingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
