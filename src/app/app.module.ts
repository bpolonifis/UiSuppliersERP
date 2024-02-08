import { SharedService } from './shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SuppliercategoryComponent } from './suppliercategory/suppliercategory.component';
import { ShowDeleteSuppliercategoryComponent } from './suppliercategory/show-delete-suppliercategory/show-delete-suppliercategory.component';
import { AddEditSuppliercategoryComponent } from './suppliercategory/add-edit-suppliercategory/add-edit-suppliercategory.component';
import { SuppliercountryComponent } from './suppliercountry/suppliercountry.component';
import { ShowDeleteSuppliercountryComponent } from './suppliercountry/show-delete-suppliercountry/show-delete-suppliercountry.component';
import { AddEditSuppliercountryComponent } from './suppliercountry/add-edit-suppliercountry/add-edit-suppliercountry.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ShowDeleteSupplierComponent } from './supplier/show-delete-supplier/show-delete-supplier.component';
import { AddEditSupplierComponent } from './supplier/add-edit-supplier/add-edit-supplier.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SuppliercategoryComponent,
    ShowDeleteSuppliercategoryComponent,
    AddEditSuppliercategoryComponent,
    SuppliercountryComponent,
    ShowDeleteSuppliercountryComponent,
    AddEditSuppliercountryComponent,
    SupplierComponent,
    ShowDeleteSupplierComponent,
    AddEditSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
