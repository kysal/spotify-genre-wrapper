import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-link',
  templateUrl: './album-link.component.html',
  styleUrls: ['./album-link.component.css']
})
export class AlbumLinkComponent implements OnInit {

  albumLink: string = "spotify:album:0wBiN0fKhy0ywx732SpgUs?si=1nxa2altRs6Ta5SI-hUduA&nd=1"
  name: string = "The Campfire Headphase"
  artist: string = "Boards of Canada"


  constructor(
    private sanitizer: DomSanitizer,
    private router: Router
    ) { 

  }

  ngOnInit(): void {
  }

  // open(): void {
  //   let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(this.albumLink)
  //   this.router.navigate([sanitizedUrl]);
  // }

  sanitize() {
    return this.sanitizer.bypassSecurityTrustUrl(this.albumLink)
  }

}
