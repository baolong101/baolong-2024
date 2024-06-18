import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth, IProduct } from '../interface/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  getById(id: number|string): Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/` +id)
  }
  deletePr(id: number): Observable<IProduct|{}>{
    return this.http.delete<IProduct|{}>(`http://localhost:3000/products/${id}`)
  }
  addPr(product: IProduct){
    return this.http.post<IProduct>('http://localhost:3000/products', product)
  }
  updatePr(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product)
  }

  register(user:IAuth): Observable<IAuth> {
    return this.http.post<IAuth>('http://localhost:3000/users/register', user)
  }
  login(user:IAuth): Observable<IAuth> {
    return this.http.post<IAuth>('http://localhost:3000/login', user)
  }
}
