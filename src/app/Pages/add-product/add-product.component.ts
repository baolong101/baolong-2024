import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IProduct } from '../../interface/product.service';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
products!: IProduct
  constructor(private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}
  form= this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    image: ['', [Validators.required]],
    price: [0, [Validators.required]],
    category: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })

  onSubmit(){
    if(this.form.invalid) return
    this.productService.addPr(this.form.value as IProduct).subscribe(()=>{
      alert('ban da them thanh cong')
      this.router.navigate(['/'])
    })
  }
}
