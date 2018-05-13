import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
    constructor(
    ) { }
  
    showForm = false

    ngOnInit() {
      var check_tokens = localStorage.getItem('accessToken')
      if (check_tokens) {
          this.showForm = true //show form
      } else {
          this.showForm = false //hide form
      }
    }
}