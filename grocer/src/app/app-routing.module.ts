import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { RegisterNormalUserComponent } from './register-normal-user/register-normal-user.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { DeleteProductsComponent } from './admin/delete-products/delete-products.component';
import { UpdateProductsComponent } from './admin/update-products/update-products.component';
import { LoginComponent } from "./login/login.component";
import { ViewRequestsComponent } from "./admin/view-requests/view-requests.component";



const routes: Routes = [
  {path:"userLogin",component:UserLoginComponent},
  {path:"userPanel",component:UserPanelComponent},
  {path:"registerUser",component:RegisterNormalUserComponent},
  {path:"",component:FirstPageComponent},
  {path:"adminLogin",component:LoginComponent},
  {
    path: "\adminPortal", component: AdminPortalComponent,
    children: [
      { path: 'addProducts', component: AddProductsComponent },
      { path: 'deleteProducts', component: DeleteProductsComponent },
      { path: 'updateProducts', component: UpdateProductsComponent },
      { path: 'viewRequests', component: ViewRequestsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
