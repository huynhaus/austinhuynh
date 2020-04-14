import { Component, OnInit } from '@angular/core';
import { Album } from '../_models/album';
import { LibraryService } from '../_services/library.service';
import { Library } from '../_models/library';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  library: Library;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getLibrary().subscribe(
      (library: Library) => { this.library = library; },
      (error: HttpErrorResponse) => { this.library = null } // TODO ERROR / EMPTY STATE
    );
  }

}
