import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { AccessToken } from '../model/accessToken'
import { Profile } from '../model/profile'
import { Publications } from '../model/publications'

@Injectable()
export class PublicationsService {
    constructor(
        private http: HttpClient,
    ) { }

    accessToken: AccessToken
    proFile: Profile

    getPublications() {
        if (localStorage.getItem('accessToken') && localStorage.getItem('userProfile')) {
            this.accessToken = JSON.parse(localStorage.getItem('accessToken'))
            this.proFile = JSON.parse(localStorage.getItem('userProfile')).data

            return this.http.get(environment.API_BASE_URL + '/getPublications', {
                headers: new HttpHeaders({
                    Authorization: this.accessToken.token_type + ' ' + this.accessToken.access_token,
                    iduser: this.proFile.id
                })
            })
            // .map(
            //     publications => {
            //         var body = JSON.parse(publications['_body'])
            //         localStorage.setItem("publicationsList", JSON.stringify(body.data))
            //         return body.data
            //     })
        }
    }
}