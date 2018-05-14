import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import { environment } from '../../environments/environment'
import { AccessToken } from '../model/accessToken'

@Injectable()
export class OAuthService {
    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
    ) { }

    accessToken: AccessToken

    requestAccessToken() {
        var code = '';
        this.route.queryParams
            .subscribe(params => {
                if (params.code) { code = params.code }
            })
        const body = 'code=' + code + '&client_id=' + environment.clientId + '&client_secret=' + environment.clientSecret + '&grant_type=authorization_code&redirect_uri=' + environment.redirectUri
        return this.http.post(environment.Host + '/tokens', body, {
            headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded' })
        }).subscribe(params => {
            localStorage.setItem("accessToken", JSON.stringify(params))
        })
    }

    checkTokenExpires() {
        if (localStorage.getItem('accessToken')) {
            this.accessToken = JSON.parse(localStorage.getItem('accessToken'))
            const expires = new Date(this.accessToken.expires_at)
            const current = new Date()
            if (expires == current) {
                this.refreshToken()
                console.log('token expired')
            } else {
                console.log('token not expired')
            }
        }
    }

    refreshToken() {
        this.accessToken = JSON.parse(localStorage.getItem('accessToken'))
        var refresh_token = this.accessToken.refresh_token
        const body = 'refresh_token=' + refresh_token + '&client_id=' + environment.clientId + '&client_secret=' + environment.clientSecret + '&grant_type=refresh_token'

        this.http.post(environment.Host + '/tokens', body, {
            headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded' })
        }).subscribe(params => {
            const body = JSON.parse(params['_body'])
            localStorage.setItem("accessToken", JSON.stringify(body))
        })
    }
}