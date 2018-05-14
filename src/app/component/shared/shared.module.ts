import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

//shered component
import { LoginComponent } from './login/login.component'
import { NavbarComponent } from './navbar/navbar.component'
 
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    NavbarComponent
  ],
  exports: [
    LoginComponent,
    NavbarComponent
  ]
})
export class SharedModule {

}
