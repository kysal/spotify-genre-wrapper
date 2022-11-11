import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';
import { LibraryService } from 'src/app/library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  library: Album[] = [];

  constructor(private libService: LibraryService) { }

  ngOnInit(): void {
    this.library = this.libService.library;
  }

}
