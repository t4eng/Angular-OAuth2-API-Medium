import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CallbackComponent } from './component/callback/callback.component'
import { HomeComponent } from './component/home/home.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }