import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
  ]
})
export class ViewsModule { }
