import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { OneComponent } from './one.component';


@NgModule({
  declarations: [
    AppComponent, OneComponent
  ],
  imports: [
    BrowserModule,
    AngularMultiSelectModule,
    RouterModule.forRoot([
  {
    path: 'one',
    component: OneComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
