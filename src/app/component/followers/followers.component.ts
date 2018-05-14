import { Component, OnInit } from '@angular/core'
import { environment } from '../../../environments/environment'
import { FollowersService } from '../../service/followers.service'
import { Profile } from '../../model/profile'
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(
    private followersService: FollowersService
  ) { }

  objectKeys = Object.keys
  Followers = {};
  proFile: Profile
  limitShow = {};

  ngOnInit() {

    if (localStorage.getItem('userProfile') && localStorage.getItem('followers')) {
      this.proFile = JSON.parse(localStorage.getItem("userProfile")).data
      this.Followers = JSON.parse(localStorage.getItem('followers')).payload.references.User
      this.limitShow = JSON.parse(localStorage.getItem('followers')).payload.paging.next.limit
    }

  }
}

