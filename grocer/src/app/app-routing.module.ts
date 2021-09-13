import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';

const routes: Routes = [
  {path:"userLogin",component:UserPanelComponent},
  {path:"employeePanel",component:EmployeePanelComponent},
  {path:"",redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
