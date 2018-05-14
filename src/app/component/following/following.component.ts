import { Component, OnInit } from '@angular/core'
import { environment } from '../../../environments/environment'
import { FollowingService } from '../../service/following.service'
import { Profile } from '../../model/profile'

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  constructor(
    private followingService: FollowingService,
  ) { }

  objectKeys = Object.keys
  Following = {};
  proFile: Profile
  limitShow = {};

  ngOnInit() {

    var check_tokens = localStorage.getItem('accessToken')
    if (localStorage.getItem('userProfile') && localStorage.getItem('following')) {

      this.proFile = JSON.parse(localStorage.getItem("userProfile")).data
      this.Following = JSON.parse(localStorage.getItem('following')).payload.references.User
      this.limitShow = JSON.parse(localStorage.getItem('following')).payload.paging.next.limit
    }

  }
}

