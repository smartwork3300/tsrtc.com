import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';


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

  constructor(private fb:FormBuilder) { 
    this.cities = [
      {name: 'RTC Agent', code: 'NY'},
      {name: 'Private Agent', code: 'RM'}
      
  ];
  }

signForm=this.fb.group({

  agentId:[null,[Validators.required]],
  password:[null,[Validators.required,Validators.minLength(5)]],
  userType:[null,[Validators.required]]
})


get agentId(){
  return this.signForm.get('agentId');
}
get password(){
  return this.signForm.get('password');
}
get userType(){
  return this.signForm.get('userType');
}
  ngOnInit(): void {
  }

}
