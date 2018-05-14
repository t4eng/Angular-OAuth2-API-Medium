import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CallbackComponent } from './component/callback/callback.component'
import { ProfileComponent } from './component/profile/profile.component'
import { PublicationsComponent } from './component/publications/publications.component'
import { FollowingComponent } from './component/following/following.component'
import { FollowersComponent } from './component/followers/followers.component'

const routes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'following', component: FollowingComponent },
  { path: 'followers', component: FollowersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }