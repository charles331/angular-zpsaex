import { Component } from '@angular/core';

import { products } from '../products';
import { chats } from '../chats';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  chats=chats;

  share() {
    window.alert('The product has been shared!');
  }
  share2(){
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/