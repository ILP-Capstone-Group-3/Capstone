import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"raiseTicket", component:RaiseTicketComponent},
  {path:"home/:user", component:HomeComponent},
  {path:"", redirectTo: "home", pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
