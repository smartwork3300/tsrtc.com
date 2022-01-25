import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ImageModule} from 'primeng/image';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import { HomeComponent } from './components/home/home.component';
import { ConsignmentComponent } from './components/consignment/consignment.component';
import { DispatchcargoComponent } from './components/dispatchcargo/dispatchcargo.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

const allImports=[
  ButtonModule,
  InputTextModule,
  PasswordModule,
  ImageModule,
  DropdownModule,
  CalendarModule,
  InputTextareaModule,
  InputNumberModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsignmentComponent,
    DispatchcargoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    allImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
