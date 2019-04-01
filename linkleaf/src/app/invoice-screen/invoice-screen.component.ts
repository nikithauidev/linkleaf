import { Component, OnInit } from '@angular/core';
import { ProductSelectionService } from '../Service/product-selection.service';
import { Router } from '@angular/router';
import { debug } from 'util';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-invoice-screen',
  templateUrl: './invoice-screen.component.html',
  styleUrls: ['./invoice-screen.component.scss']
})
export class InvoiceScreenComponent implements OnInit {
  public invoiceNO = 1000;
  public invoiceDate = new Date();
  public productData: any = {};
  public selectedCategory: string;
  public selectedItem: string;
  public selectedBrand: string;
  public selectedModel: string;
  public selectedItemPrice: number;
  public selectedProductPrice: number;
  public selectedQty: number;
  public finalTotal: number;
  public subtotal: number;
  public taxTotal: number;
  public user = "";

  constructor(private productDataService: ProductSelectionService,private authservice : AuthGuardService,
              private router: Router) {

               
  }

  ngOnInit() {
    this.user =  this.authservice.userAccess[0].user;
    this.productData = this.productDataService.getData();
    if (this.productData !== undefined) {

      this.selectedCategory = this.productData.selCategory;
      this.selectedItem = this.productData.selItem;
      this.selectedBrand = this.productData.selBrand;
      this.selectedModel = this.productData.selModel;
      this.selectedQty = this.productData.selQty;
      this.selectedItemPrice = this.productData.selPrice;
      this.selectedProductPrice = this.productData.selProductTotal;
      this.subtotal = this.productDataService.subTotal;
      this.finalTotal = this.productDataService.netTotal;
      this.subTotalCalculator();
   } else {
     alert('No data');
   }
  }
  addMoreProducts() {
    this.router.navigate(['welcome/products']);
  }

  confirmOrder() {
    confirm('Are you sure want to place order?');
  }
  minusCounter(data) {
    if (data.selQty > 1) {
      data.selQty = data.selQty - 1;

      //  this.productData.selPrice = this.selectedItemPrice;
      data.selProductTotal = data.selQty * data.selPrice;
    }
    this.subTotalCalculator();
  }

  plusCounter(data) {
    if (data.selQty < 10) {
      data.selQty = data.selQty + 1;
      data.selProductTotal = data.selQty * data.selPrice;
    }
    this.subTotalCalculator();
  }


  subTotalCalculator() {
    let subtotal = 0;
    for (var i = 0; i < this.productData.length; i++) {
      subtotal = subtotal + this.productData[i].selProductTotal;
    }
    this.subtotal = subtotal;
    this.taxTotal = (this.subtotal * 10) / 100;
    this.finalTotal = this.subtotal + this.taxTotal;
  }

  removeItem(data) {
    this.productDataService.data;
    
    let tempArr = [];

    for (var i = 0; i < this.productDataService.data.length; i++) {

      if ((data.selCategory !== this.productDataService.data[i].selCategory) &&
        (data.selItem !== this.productDataService.data[i].selItem) &&
        (data.selBrand !== this.productDataService.data[i].selBrand) &&
        (data.selModel !== this.productDataService.data[i].selModel)) {
        tempArr.push(this.productDataService.data[i]);
      }
    }
    this.productDataService.data = tempArr;

    this.productData = this.productDataService.data;

    this.subTotalCalculator();
  }

  removeAll()
  {
    this.productData  = this.productDataService.removeAll();
  }
}
