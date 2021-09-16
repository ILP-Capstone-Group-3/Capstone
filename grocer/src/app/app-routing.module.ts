import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { RegisterNormalUserComponent } from './register-normal-user/register-normal-user.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminSandboxComponent } from './admin-sandbox/admin-sandbox.component';


const routes: Routes = [
  {path:"userLogin",component:UserLoginComponent},
  {path:"userPanel",component:UserPanelComponent},
  {path:"registerUser",component:RegisterNormalUserComponent},
  {path:"adminSandbox",component:AdminSandboxComponent},
  {path:"",component:FirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
