import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities:City[];

  constructor() { 
    this.cities = [
      {name: 'RTC Agent', code: 'NY'},
      {name: 'Private Agent', code: 'RM'}
      
  ];
  }

  ngOnInit(): void {
  }

}
