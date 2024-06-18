import { Component } from '@angular/core';
import { IProduct } from '../../interface/product.service';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  products!: IProduct[]
  constructor(private productService: ProductService){
    this.productService.getAll().subscribe(product=>{
      this.products= product
    })
  }
  dlProduct(id:number){
    this.productService.deletePr(id).subscribe(()=>{
      this.products= this.products.filter(product=> product.id !==id)
    })
  }
}
