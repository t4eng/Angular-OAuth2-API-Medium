import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { ProfileService } from '../../service/profile.service'
import { Profile } from '../../model/profile'
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
    constructor(
        private profileService : ProfileService
    ) { }

    showForm = false;
    proFile: Profile;

    ngOnInit() {

    this.profileService.getProfile().subscribe(res=>{
        localStorage.setItem("userProfile", JSON.stringify(res))
    })  

    this.proFile = JSON.parse(localStorage.getItem("userProfile")).data
    console.log(this.proFile.url)


      var check_tokens = localStorage.getItem('accessToken')
      if (check_tokens) {
          this.showForm = true //show form
      } else {
          this.showForm = false //hide form
      }
    }
}