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
  public selectCategoriesSelected = ['Fashion'];
  
  categories = [];
  
  cat = [];
  movie = {
    id: 0,
    title: '',
    description: '',
    director: {
      name: '',
      link: '',
    },
    actors: [{
      actor_id: 0,
      age: 0,
      firstName: "",
      lastName: "",
      photoLink: "",
      movies: []
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

   // public
   public items = [{ itemId: '', itemName: '', itemQuantity: '', itemCost: '' }];

   public item = {
     itemName: '',
     itemQuantity: '',
     itemCost: ''
   };
 
   // Public Methods
   // -----------------------------------------------------------------------------------------------------
 
   /**
    * Add Item
    */
   addItem() {
     this.items.push({
       itemId: '',
       itemName: '',
       itemQuantity: '',
       itemCost: ''
     });
   }
 
   /**
    * DeleteItem
    *
    * @param id
    */
   deleteItem(id) {
     for (let i = 0; i < this.items.length; i++) {
       if (this.items.indexOf(this.items[i]) === id) {
         this.items.splice(i, 1);
         break;
       }
     }
   }

  dynamicRows = [0];

  addNew() {
    const act = {
      actor_id: 0,
      age: 0,
      firstName: '',
      lastName: '',
      photoLink: '',
      movies: []
    }
    this.movie.actors.push(act);
    this.dynamicRows.push(this.dynamicRows.length);

  }

  setCat(e: Event): void {
    e.stopPropagation();
    if (e.target["checked"]) {
      var newCategorie = {
        cat_id: 0,
        description: "",
        name: e.target["name"]
      };
      this.cat.push(newCategorie);
    }
  }

  saveMovie(): void {
    this.movie.actors.pop();
    const data = {
      title: this.movie.title,
      description: this.movie.description,
      director: this.movie.director,
      actors: this.movie.actors,
      categories: this.cat
    };
    this.movieService.addMovie(data).subscribe({
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
            this.router.navigateByUrl('/movies');
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
