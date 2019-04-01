import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductSelectionService {

  constructor() { }
  public data = [] ;
  public subTotal = 0;
  public netTotal = 0;

  setData(data: any) {
      this.data.push(data);
  }

  getData(): any {
      return this.data;
  }

  removeAll()
  {

    this.data = [];
    return this.data;
  }

}
