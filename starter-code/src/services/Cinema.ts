import { Injectable } from '@angular/core'
import moviesSample from '../sample-movies'

export class Movie {
  constructor(public id:number, public title:string, public poster:string, public synopsis:string,
    public genres:Array<string>, public year:number, public director:string, public actors:Array<string>, public hours:Array<string>, public room:number) {}
}

@Injectable()
export class Movies {
  public movies:Array<Movie> = moviesSample

   constructor() { }

   getMovies():Array<Movie> {
     return this.movies
   }
   getMovie(id:number) {
     return this.movies.filter(movie => movie.id === id)
   }
}
