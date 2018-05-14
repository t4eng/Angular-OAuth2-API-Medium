import { Component, OnInit } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { Profile } from '../../../model/profile'
import { Router, Params } from '@angular/router'
import { ProfileService } from '../../../service/profile.service'
import { FollowingService } from '../../../service/following.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private profileService: ProfileService,
    private followingService: FollowingService
  ) { }

  objectKeys = Object.keys
  showNavbar = false;
  imageUrl: string
  proFile: Profile
  FollowedCount = {};
 
  ngOnInit() {

  if(this.profileService.getProfile()){
      this.showNavbar = true
    }  

  // if(localStorage.getItem("userProfile")){
  //      this.showNavbar = true
  // }

  if(this.followingService.getFollowing()){
    this.FollowedCount = JSON.parse(localStorage.getItem('following')).payload.references.SocialStats
}

  if(localStorage.getItem("following")){
    this.FollowedCount = JSON.parse(localStorage.getItem('following')).payload.references.SocialStats
    }

}
  signOut() {
    console.log("signOut")
    localStorage.clear()
  }
}