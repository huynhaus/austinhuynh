import { Component, OnInit } from '@angular/core';
import { ApitestService } from '../_services/apitest.service';

@Component({
  selector: 'app-logs-page',
  templateUrl: './logs-page.component.html',
  styleUrls: ['./logs-page.component.sass']
})
export class LogsPageComponent implements OnInit {

  success: boolean = false;
  response: string = 'Call to api failed :(';

  constructor(private service: ApitestService) { }

  ngOnInit(): void {
    this.service.test().subscribe({ 
      next: (response) => {this.success = true; this.response = response;},
      error: (response) => this.success = false
    });
  }
}
