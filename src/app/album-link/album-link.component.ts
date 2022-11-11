import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Album } from 'src/album';

@Component({
  selector: 'app-album-link',
  templateUrl: './album-link.component.html',
  styleUrls: ['./album-link.component.css']
})
export class AlbumLinkComponent implements OnInit {

  @Input() album: Album = {name:"",url:"",artist:"",image:""};

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
    return this.sanitizer.bypassSecurityTrustUrl(this.album.url)
  }

}
