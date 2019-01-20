
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarRow, MatIcon, MatButton, MatSidenavModule,
   MatRipple, MatInput,  MatFormFieldModule, MatGridListModule} 
   from'@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ERPGridComponent } from './erp-grid/erp-grid.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    MatToolbarRow,
    MatIcon,
    MatButton,
    ERPGridComponent,
    MatRipple,
    MatInput,
    AddProductComponent,
  ],

  exports:[ ],

  imports: [
    HttpClientModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,

    AgGridModule.withComponents([]),
    [BrowserAnimationsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
