import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { IAuth } from '../../interface/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private productService: ProductService,
    private formBuilder: FormBuilder
    ,
    private router: Router
  ){}
  form= this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]], 
    confirmPassword: [0, [Validators.required]],
  },{
    validator: (form: FormGroup)=>{
      const password= form.get('password')?.value || '';
      const confirmPassword= form.get('confirmPassword')?.value || '';
      return password == confirmPassword ? null : {notMatch:true}
    }
  })

  async onSubmit(){
    const user= await lastValueFrom(this.productService.register(this.form.value as IAuth))
    if(user){
      alert('dang ki thanh cong')
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['login'])
    }else{
      alert('dang ki that bai')
    }
  }
}
