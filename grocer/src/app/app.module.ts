import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AdminSandboxComponent } from './admin-sandbox/admin-sandbox.component';
// import { AddProductsComponent } from './admin/add-products/add-products.component';
// import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
// import { DeleteProductsComponent } from './admin/delete-products/delete-products.component';
// import { UpdateProductsComponent } from './admin/update-products/update-products.component';
// import { LoginComponent } from './login/login.component';
import { AdminPortalComponent } from "./admin/admin-portal/admin-portal.component";
//import { DeleteProductsComponent } from "./admin/delete-products/delete-products.component";
//import { UpdateProductsComponent } from "./admin/update-products/update-products.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProfileComponent } from './employee-panel/edit-profile/edit-profile.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { OrderCancelComponent } from './employee-panel/order-cancel/order-cancel.component';
import { SendRequestComponent } from './employee-panel/send-request/send-request.component';
import { UnlockUsersComponent } from './employee-panel/unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './employee-panel/update-order-status/update-order-status.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from "./login/login.component";
import { RegisterNormalUserComponent } from './register-normal-user/register-normal-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    RegisterNormalUserComponent,
    FirstPageComponent,
    UserLoginComponent,
    EmployeePanelComponent,
    UpdateOrderStatusComponent,
    AdminPortalComponent,
    LoginComponent,
    OrderCancelComponent,
    SendRequestComponent,
    UnlockUsersComponent,
    EditProfileComponent,
    AdminSandboxComponent,
    EmployeePanelComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    EmployeeLoginComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
