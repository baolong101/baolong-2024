import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { IAuth } from '../../interface/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private productService: ProductService,
    private formBuilder: FormBuilder
    ,
    private router: Router
  ){}
  form= this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]  
  })

  async onSubmit(){
    const user= await lastValueFrom(this.productService.login(this.form.value as unknown as IAuth))
    if(user){
      alert('dang ki thanh cong')
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['/'])
    }else{
      alert('dang ki that bai')
    }
  }
}
