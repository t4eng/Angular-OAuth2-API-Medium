import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Profile } from '../model/profile'
@Injectable()
export class FollowingService {
    constructor(
        private http: HttpClient,
    ) { }

    proFile:Profile;

    getFollowing() {

        if(localStorage.getItem('userProfile')){
            this.proFile = JSON.parse(localStorage.getItem('userProfile')).data
        return this.http.get(environment.API_BASE_URL + "/getFollowing", {
            headers: new HttpHeaders({ 'username': this.proFile.username })
        })
        //     .subscribe(followers => {
        //         var body = JSON.parse(followers['_body'])
        //         localStorage.setItem('following', JSON.stringify(body.payload.references.User))
        //         localStorage.setItem('followedCount', JSON.stringify(body.payload.references.SocialStats))
        // })
       }
    }
}