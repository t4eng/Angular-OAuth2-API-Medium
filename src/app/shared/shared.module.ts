import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

//shered component
import { LoginComponent } from './login/login.component'
import { CardComponent } from './card/card.component'

import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    CardComponent
  ],
  exports: [
    LoginComponent,
    CardComponent
  ]
})
export class SharedModule {

}
