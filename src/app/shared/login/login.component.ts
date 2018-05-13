import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(
        private http: HttpClient
    ) { }
    scope = 'basicProfile,publishPost,listPublications';
    Url = 'https://medium.com/m/oauth/authorize?' + 'client_id=' + environment.API_SECRET.clientId + '&scope=' + this.scope + '&state=state&response_type=code&redirect_uri=' + environment.redirectUri;
    showSignin = true;

    ngOnInit() {
        var check_tokens = localStorage.getItem('accessToken')
        if (check_tokens) {
            this.showSignin = false //hide signIn
        } else {
            this.showSignin = true //show signIn
        }
    }
    // signOut() {
    //     console.log("signOut")
    //     localStorage.clear()
    // }
}