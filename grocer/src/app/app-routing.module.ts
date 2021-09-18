import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { RegisterNormalUserComponent } from './register-normal-user/register-normal-user.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';



const routes: Routes = [
  {path:"userLogin",component:UserLoginComponent},
  {path:"userPanel",component:UserPanelComponent},
  {path:"userPanel/:id",component:UserPanelComponent},
  {path:"registerUser",component:RegisterNormalUserComponent},
  {path:"employeeLogin",component:EmployeeLoginComponent},
  {path:"employeePanel/:id",component:EmployeePanelComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"adminPanel",component:AdminPanelComponent},
  {path:"",component:FirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
