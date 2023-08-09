import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ApiResponse } from './models/apiResponse.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  response!: ApiResponse

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getData().subscribe((data) => {
      this.response = data
      console.log(this.response)
    })
  }
}
