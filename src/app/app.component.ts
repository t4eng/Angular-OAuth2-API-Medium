import { Component,OnInit } from '@angular/core';
import { environment } from '../environments/environment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(

  ){}
  
  scope = 'basicProfile,publishPost,listPublications';
  Url = 'https://medium.com/m/oauth/authorize?' + 'client_id=' + environment.API_SECRET.clientId + '&scope=' + this.scope + '&state=state&response_type=code&redirect_uri=' + environment.redirectUri;

  ngOnInit(){
    var url = window.location.href.slice().toString(); 
    var CVurl = new URL(url);
    var code = CVurl.searchParams.get("code");
    console.log(code);
  }
 
}
