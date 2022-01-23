import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass']
})
export class QuoteComponent implements OnInit {

  @Input() quote: string;
  @Input() author: string;

  constructor() { }

  ngOnInit(): void {
  }
}
