import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
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
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminPortalComponent } from "./admin/admin-portal/admin-portal.component";
import { AdminSandboxComponent } from './admin-sandbox/admin-sandbox.component';
import { LoginComponent } from "./login/login.component";
import { AddProductsComponent } from "./admin/add-products/add-products.component";
import { DeleteProductsComponent } from "./admin/delete-products/delete-products.component";
import {UpdateProductsComponent} from "./admin/update-products/update-products.component"
@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    RegisterNormalUserComponent,
    FirstPageComponent,
    UserLoginComponent,
    AdminPortalComponent,
    LoginComponent,
    AddProductsComponent,
    DeleteProductsComponent,
    UpdateProductsComponent,
    AdminSandboxComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
