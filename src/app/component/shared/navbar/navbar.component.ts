import { Component, OnInit } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { Profile } from '../../../model/profile'
import { Router, Params } from '@angular/router'
import { ProfileService } from '../../../service/profile.service'
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
    private profileService: ProfileService
  ) { }

  showNavbar = false;
  imageUrl: string
  proFile: Profile

  ngOnInit() {

    if(this.profileService.getProfile()){
      this.profileService.getProfile().subscribe(res=>{
        localStorage.setItem("userProfile", JSON.stringify(res))
      this.showNavbar = true
    })  
 }   

 if(localStorage.getItem("userProfile")){
      this.showNavbar = true
 }
}
  signOut() {
    console.log("signOut")
    localStorage.clear()
  }
}