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
      {name: 'Sircilla', code: 'RM'},
      {name: 'Secunderabad', code: 'NY'},
      {name:'Karimnagar' ,code:'KNR'}
      
  ];
   }

  ngOnInit(): void {
  }

}
