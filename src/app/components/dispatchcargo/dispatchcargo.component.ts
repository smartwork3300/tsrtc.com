import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-dispatchcargo',
  templateUrl: './dispatchcargo.component.html',
  styleUrls: ['./dispatchcargo.component.css']
})
export class DispatchcargoComponent implements OnInit {
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
