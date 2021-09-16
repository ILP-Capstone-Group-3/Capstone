import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterNormalUserComponent } from './register-normal-user/register-normal-user.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { environment } from '../environments/environment';
import { UserLoginComponent } from './user-login/user-login.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { UpdateOrderStatusComponent } from './employee-panel/update-order-status/update-order-status.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
// import { AddProductsComponent } from './admin/add-products/add-products.component';
// import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
// import { DeleteProductsComponent } from './admin/delete-products/delete-products.component';
// import { UpdateProductsComponent } from './admin/update-products/update-products.component';
// import { LoginComponent } from './login/login.component';

import { AdminPortalComponent } from "./admin/admin-portal/admin-portal.component";
import { LoginComponent } from "./login/login.component";
import { AddProductsComponent } from "./admin/add-products/add-products.component";
import { DeleteProductsComponent } from "./admin/delete-products/delete-products.component";
import {UpdateProductsComponent} from "./admin/update-products/update-products.component";
import { OrderCancelComponent } from './employee-panel/order-cancel/order-cancel.component';
import { SendRequestComponent } from './employee-panel/send-request/send-request.component';
import { UnlockUsersComponent } from './employee-panel/unlock-users/unlock-users.component';
import { EditProfileComponent } from './employee-panel/edit-profile/edit-profile.component';
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
    AddProductsComponent,
    DeleteProductsComponent,
    UpdateProductsComponent,
    OrderCancelComponent,
    SendRequestComponent,
    UnlockUsersComponent,
    EditProfileComponent
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
    MatTabsModule,
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
