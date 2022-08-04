import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})
export class AllmoviesComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  public contentHeader: object

  public movies = []
  public categories = []

  ngOnInit() {
    this.getAllMovies();
    this.getAllCategories();
    
    this.contentHeader = {
      headerTitle: 'Home',
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
            name: 'Sample',
            isLink: false
          }
        ]
      }
    }
  }

  getAllMovies() {
    this.movieService.getAllHome().subscribe({
      next : (res) => {
        this.movies = res;
        console.log(res);
      },
      error(err) {
        console.error(err);
      },
    })
  }

  getAllCategories() {
    this.movieService.getAllCategories().subscribe({
      next : (res) => {
        this.categories = res;
        console.log(res);
      },
      error(err) {
        console.error(err);
      },
    })
  }

}
