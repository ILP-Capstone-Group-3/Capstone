import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';

const routes: Routes = [
  {path:"login", component:RaiseTicketComponent},
  {path:"", redirectTo: "login", pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
