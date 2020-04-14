import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../_models/album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.sass']
})
export class AlbumCardComponent implements OnInit {

  @Input() album: Album;

  constructor() { }

  ngOnInit(): void {
  }

  getThumbnailUrl(): string {
    return "http://localhost:8080" + this.album.coverImageUrl;
  }
}
