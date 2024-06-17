import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AddProductComponent } from './Pages/add-product/add-product.component';
import { EditProductComponent } from './Pages/edit-product/edit-product.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'add', component: AddProductComponent},
    {path: 'edit', component: EditProductComponent},
];
