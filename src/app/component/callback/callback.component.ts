import { Component, OnInit } from '@angular/core'
import { OAuthService } from '../../service/oauth.service'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html'
})

export class CallbackComponent implements OnInit {

  constructor(
    private oauthService: OAuthService,
  ) { }

  ngOnInit() {
    this.oauthService.requestAccessToken()
  }
}