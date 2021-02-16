import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderbarComponent, 
    FooterComponent
  ],

  imports: [
    CommonModule
  ],
  exports:[
    HeaderbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
