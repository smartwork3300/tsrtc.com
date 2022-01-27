import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-createmanifest',
  templateUrl: './createmanifest.component.html',
  styleUrls: ['./createmanifest.component.css']
})
export class CreatemanifestComponent implements OnInit {
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
