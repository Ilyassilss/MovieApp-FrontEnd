import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allactors',
  templateUrl: './allactors.component.html',
  styleUrls: ['./allactors.component.scss']
})
export class AllactorsComponent implements OnInit {

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
