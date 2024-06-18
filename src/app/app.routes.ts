import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AddProductComponent } from './Pages/add-product/add-product.component';
import { EditProductComponent } from './Pages/edit-product/edit-product.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'add', component: AddProductComponent},
    {path: 'edit/:id', component: EditProductComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
];
