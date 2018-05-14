import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(
        private http: HttpClient
    ) { }
    Url = environment.GET_TEMP_CODE
    showSignin = true;

    ngOnInit() {
        if (localStorage.getItem('accessToken')) {
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