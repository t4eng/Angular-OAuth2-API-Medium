import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { PublicationsService } from '../../service/publications.service';
import { Publications } from '../../model/publications'

@Component({
    selector: 'app-publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.css']
})

export class PublicationsComponent implements OnInit {
    constructor(
        private publicationService: PublicationsService
    ) { }

    publications:Publications
    showPublications = false;

    ngOnInit() {

        if(localStorage.getItem('accessToken') && localStorage.getItem('userProfile')){
        this.publicationService.getPublications().subscribe(res=>{
            localStorage.setItem("publicationsList", JSON.stringify(res))
            if (localStorage.getItem('publicationsList')) {
                this.publications = JSON.parse(localStorage.getItem('publicationsList')).data
                this.showPublications = true;
                }
          })
        }
        if (localStorage.getItem('publicationsList')) {
        this.publications = JSON.parse(localStorage.getItem('publicationsList')).data
        this.showPublications = true;
        }
  }
}