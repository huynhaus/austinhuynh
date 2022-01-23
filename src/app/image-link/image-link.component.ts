import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-link',
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.sass']
})
export class ImageLinkComponent implements OnInit {

  @Input() title: string;
  @Input() imgSrc: string;

  hover: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  route(): void {
    
  }

}
