import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { debug } from 'util';
import { ProductSelectionService } from '../Service/product-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss']
})
export class SelectProductComponent implements OnInit {
  public productData: any = {selCategory: '', selItem: '', selBrand: '', selModel: '', selQty: '', selPrice: '', selProductTotal: ''};
  public products: any;
  public selectedCategory: [];
  public Categories: [];
  public categoriesArr: any;
  public itemArr: any;
  public selectedItem = [];
  public selectedBrand = [];
  public items = [];
  public brands = [];
  public models = [];
  public productName = {};
  public modelArr: any;
  public modelsArr: any;
  public selectedModel = [];
  public selectedItemPrice: number;
  public selectedProductPrice: number;
  public totalPrice: number;
  public selectedQty = 0;
  public nextPage = true;
  public triggerAlert = false;
  public resetPage = false;

  constructor(private productservice: ProductService,
              private productDataService: ProductSelectionService,
              private router: Router) {
    this.productservice.getEcommerceProduct().subscribe
      (data => {
        this.products = data;
      });
   }

  ngOnInit() {
  }

  selectionCat() {
    this.selectedCategory;
    for (let i = 0; i < this.selectedCategory.length; i++) {
      if (this.selectedCategory === this.products.Categories[i].productName) {
        this.categoriesArr = this.products.Categories[i].items;
      }

    }
  }

  selectionItem() {
    this.selectedItem;
    for (let i = 0; i < this.selectedItem.length; i++) {
      if (this.selectedItem === this.categoriesArr[i].item) {
        this.itemArr = this.categoriesArr[i].brands;
      }
    }
  }

  selectionBrand() {
    this.selectedBrand;
    for (let i = 0; i < this.selectedBrand.length; i++) {
      if (this.selectedBrand === this.itemArr[i].brand) {
        this.modelArr = this.itemArr[i].models;
      }
    }
  }

  selectionModel() {
    this.selectedModel;
    for (let i = 0; i < this.selectedModel.length; i++) {
      if (this.selectedModel === this.modelArr[i].model) {
        this.selectedItemPrice = this.modelArr[i].price;
        this.selectedQty = 1;
        this.selectedProductPrice = this.selectedItemPrice * this.selectedQty;
        this.resetPage = true;
      }
    }
  }

  minusCounter() {
    if (this.selectedQty > 1) {
      this.selectedQty = this.selectedQty - 1;
      this.selectedProductPrice = this.selectedItemPrice * this.selectedQty;
    } else {
      this.triggerAlert = true;
    }
  }

  plusCounter() {
    if (this.selectedQty < 10) {
      this.selectedQty = this.selectedQty + 1;
      this.selectedProductPrice = this.selectedItemPrice * this.selectedQty;
    } else {
      this.triggerAlert = true;
    }
  }

  addProduct() {
    this.productData.selCategory = this.selectedCategory;
    this.productData.selItem = this.selectedItem;
    this.productData.selBrand = this.selectedBrand;
    this.productData.selModel = this.selectedModel;
    this.productData.selQty = this.selectedQty;
    this.productData.selPrice = this.selectedItemPrice;
    this.productData.selProductTotal = this.selectedProductPrice;

    this.productDataService.setData(this.productData);
  }

}
