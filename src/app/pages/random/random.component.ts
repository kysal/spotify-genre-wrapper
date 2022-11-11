import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';
import { LibraryService } from 'src/app/library.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  library: Album[] = [];
  random: number = 0;

  constructor(private libService: LibraryService) { 
    this.library = this.libService.library
    this.changeAlbum();
  }

  ngOnInit(): void {

  }

  changeAlbum(): void {
    this.random = Math.floor(Math.random() * (this.library.length + 1));
  }

}
