import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actordetails',
  templateUrl: './actordetails.component.html',
  styleUrls: ['./actordetails.component.scss']
})
export class ActordetailsComponent implements OnInit {

  constructor() { }

  contentHeader: any

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Actors',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'actors list',
            isLink: false
          }
        ]
      }
    }
  }

}
