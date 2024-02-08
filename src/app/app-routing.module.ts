
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierComponent} from './supplier/supplier.component';
import { SuppliercategoryComponent } from './suppliercategory/suppliercategory.component';
import { SuppliercountryComponent } from './suppliercountry/suppliercountry.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowDeleteSupplierComponent } from './supplier/show-delete-supplier/show-delete-supplier.component';
import { AddEditSuppliercategoryComponent } from './suppliercategory/add-edit-suppliercategory/add-edit-suppliercategory.component';
import { AddEditSuppliercountryComponent } from './suppliercountry/add-edit-suppliercountry/add-edit-suppliercountry.component';
import { AddEditSupplierComponent } from './supplier/add-edit-supplier/add-edit-supplier.component';


const routes: Routes = [
  {path:'supplier', component:SupplierComponent},
  {path:'supplier', component:AddEditSupplierComponent},
  {path:'supplier', component:ShowDeleteSupplierComponent},

  {path:'suppliercategory', component:SuppliercategoryComponent},
  {path:'suppliercategory', component:AddEditSuppliercategoryComponent},
  {path:'suppliercategory', component:AddEditSuppliercategoryComponent},

  {path:'suppliercountry', component:SuppliercountryComponent},
  {path:'suppliercountry', component:AddEditSuppliercountryComponent},
  {path:'suppliercountry', component:AddEditSuppliercountryComponent},

  {path:'notfound', component:NotfoundComponent},
  //{path:'**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
