import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { ProfileService } from '../../service/profile.service'
import { Profile } from '../../model/profile'
import { FollowingService } from '../../service/following.service'
import { FollowersService } from '../../service/followers.service'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    constructor(
        private profileService : ProfileService,
        private followingService: FollowingService,
        private followersService: FollowersService
    ) { }

    showForm = false;
    proFile: Profile;

    ngOnInit() {

    if(this.profileService.getProfile()){
         this.profileService.getProfile().subscribe(res=>{
         localStorage.setItem("userProfile", JSON.stringify(res))

         this.proFile = JSON.parse(localStorage.getItem("userProfile")).data
         this.showForm = true

             if(this.followingService.getFollowing()){
              this.followingService.getFollowing().subscribe( res => {
              localStorage.setItem('following', JSON.stringify(res))
               })
             }

             if(this.followersService.getFollowers()){
                this.followersService.getFollowers().subscribe( res => {
                localStorage.setItem('followers', JSON.stringify(res))
                 })
             }
       })  
    }   

  
  
     

    if(localStorage.getItem("userProfile")){
         this.proFile = JSON.parse(localStorage.getItem("userProfile")).data
         this.showForm = true;

        //  if(this.followingService.getFollowing()){
        //     this.followingService.getFollowing().subscribe( res => {
        //         localStorage.setItem('following', JSON.stringify(res))
        //     })
        // }
    }



    // var check_profile = localStorage.getItem('userProfile')
    //   if (check_profile) {
    //       this.showForm = true //show form
    //   } else {
    //       this.showForm = false //hide form
    //   }
    }
}