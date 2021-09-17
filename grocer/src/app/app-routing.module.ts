import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { RegisterNormalUserComponent } from './register-normal-user/register-normal-user.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { AdminSandboxComponent } from './admin-sandbox/admin-sandbox.component';
import { LoginComponent } from "./login/login.component";
const routes: Routes = [
  {path:"userLogin",component:UserLoginComponent},
  {path:"userPanel",component:UserPanelComponent},
  {path:"userPanel/:id",component:UserPanelComponent},
  {path:"registerUser",component:RegisterNormalUserComponent},
  {path:"employeePanel",component:EmployeePanelComponent},
  {path:"adminSandbox",component:AdminSandboxComponent},
  {path:"",component:FirstPageComponent},
  {path:"adminLogin",component:LoginComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
