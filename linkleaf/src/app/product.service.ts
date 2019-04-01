import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICommerce } from '../app/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myurl = '/assets/CommerceProject.json';

  constructor(private http: HttpClient) { }



getEcommerceProduct():  any {
    return this.http.get (this.myurl);
    }

}
