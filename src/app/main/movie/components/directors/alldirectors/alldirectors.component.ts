import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alldirectors',
  templateUrl: './alldirectors.component.html',
  styleUrls: ['./alldirectors.component.scss']
})
export class AlldirectorsComponent implements OnInit {

  constructor() { }

  contentHeader: any

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Directors',
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
            name: 'directors list',
            isLink: false
          }
        ]
      }
    }
  }

}
