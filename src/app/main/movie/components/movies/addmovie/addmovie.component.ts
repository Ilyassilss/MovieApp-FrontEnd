import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddmovieComponent implements OnInit {

  movieCover: File | null = null;
  coverPreview: string = 'https://placeholder.pics/svg/110x170';
  public selectCategories: Observable<any[]>;
  public categories = [];
  public selectCategoriesSelected = this.categories[0];
  
  movie = {
    id: 0,
    title: '',
    description: '',
    director: {
      name: '',
      phone: '12458745',
      photoLink: '',
    },
    actors: [{
      age: 0,
      firstName: "",
      lastName: "",
      photoLink: ""
    }],
    categories: [],
    images: [],
    traillers: []
  };
  constructor(private movieService: MovieService, private router: Router) { }
  contentHeader: Object;
  ngOnInit(): void {
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

  getAllCategories(): void {
    this.movieService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => { console.error(err); }
    });
  }

   /**
    * Add actor
    */
   addItem() {
     this.movie.actors.push({
      age: 0,
      firstName: "",
      lastName: "",
      photoLink: ""
     });
   }

  saveMovie(): void {
    this.movie.description = this.movie.description.substring(3,this.movie.description.length-4)
    console.log(this.movie);
    this.movieService.addMovie(this.movie).subscribe({
      next: (data) => {
        console.log(data);
        const movie_id = data.id;
        this.uploadCover(this.movieCover, movie_id);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  selectImage(event: Event): void {
    this.movieCover = (event.target as HTMLInputElement).files.item(0);
    if ((event.target as HTMLInputElement).files.item(0)) {
      const reader = new FileReader();
      reader.onload = (e) => (this.coverPreview = reader.result.toString());

      reader.readAsDataURL((event.target as HTMLInputElement).files.item(0));
    }
  }
  uploadCover(file: File, movie_id: number): void {
    if (file) {
      this.movieService.uploadImage(file, movie_id, true).subscribe(
        (event: any) => {
          if (event instanceof HttpResponse) {
            console.log(event.body);
            this.router.navigateByUrl('');
          }
        },
        (err: any) => {
          console.error(err);
        }
      );
    } else {
      console.log('No File');
    }
  }

}
