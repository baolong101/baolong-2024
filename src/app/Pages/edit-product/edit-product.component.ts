import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../interface/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  products!: IProduct
  constructor(private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private roter: ActivatedRoute,
  ){}
  ngOnInit(){
    this.roter.params.subscribe(params=>{
      const id= params['id']
      this.productService.getById(id).subscribe(product=>{
        this.products = product
        this.form.patchValue(this.products)
      })
    })
  }
  form= this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    image: ['', [Validators.required]],
    price: [0, [Validators.required]],
    category: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })
  onSubmit(){
    if(this.form.invalid) return
    this.productService.updatePr({...this.products, ...this.form.value} as IProduct).subscribe(()=>{
      alert('ban da them thanh cong')
      this.router.navigate(['/'])
    })
  }
}
