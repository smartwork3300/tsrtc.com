import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent implements OnInit {
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
