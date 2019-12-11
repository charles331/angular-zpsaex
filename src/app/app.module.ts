import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewCompoComponent } from './new-compo/new-compo.component';
import { InputchatComponent } from './inputchat/inputchat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent},
      { path: 'new', component: NewCompoComponent},
      { path: 'chat', component: InputchatComponent},
    ]),FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    NewCompoComponent,
    InputchatComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/