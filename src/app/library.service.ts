import { Injectable } from '@angular/core';
import { Album } from 'src/album';

var rawLib: any = require('./_files/librarytest.json');


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  library: Album[] = []

  constructor() {
    this.library = rawLib.albums

    console.log(this.library);
  }
}
