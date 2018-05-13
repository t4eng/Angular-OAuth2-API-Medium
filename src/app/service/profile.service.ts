import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { AccessToken } from '../model/accessToken'

@Injectable()
export class ProfileService {

    constructor(
        private http: HttpClient,
    ) { }

    accessToken: AccessToken

    getProfile() {
        
        if (localStorage.getItem('accessToken')) {
            this.accessToken = JSON.parse(localStorage.getItem('accessToken'))
            return this.http.get( environment.API_BASE_URL+'/getProfile', {
                headers: new HttpHeaders({
                    Authorization: this.accessToken.token_type + ' ' + this.accessToken.access_token
                })
            })
        }
    }

}