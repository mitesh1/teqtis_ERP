import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from  '../models/productModel';
//import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  providers: [ AppHttpService ],
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  submitted = false;
  
 onSubmit() {
  // TODO: Use EventEmitter with form value
  this.submitted = true;

  if(this.addProductForm.invalid){
   // this.snackBar.open("please fill the required fields");
   alert("please fill the required fields");
    return;
  }

  const newProduct: Product  = this.addProductForm.value ;
  this.appHttpService.addProduct(newProduct).subscribe();
  console.log(this.addProductForm.value);
}
  
  constructor(private appHttpService: AppHttpService,
    private formBuilder: FormBuilder,
    //public snackBar: MatSnackBar,
    ) { }

  ngOnInit() {

    this.addProductForm =  this.formBuilder.group({
      generic_name: ['',  Validators.required],
      brand : ['',  Validators.required],
      typed : ['',  Validators.required],
      skusize : ['',  Validators.required],
      vendor_name: ['',  Validators.required],
      //  past_purchase : ['',  Validators.required],
      //lastpurchaseunit: ['',  Validators.required],
      minimum_qty : ['',  Validators.required]
     });
  }

  get addProductEA() { return this.addProductForm.controls; }

}
