import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { AppComponent } from './app.component';
import { OneComponent } from './one.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularMultiSelectModule,
    RouterModule.forRoot([
      { path: 'one', component: OneComponent }
    ]) // , { useHash: true, preloadingStrategy: PreloadAllModules, enableTracing: true } )
  ],
  declarations: [
    AppComponent, OneComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
