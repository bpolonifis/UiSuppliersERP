import { SuppliercategoryComponent } from './../../suppliercategory/suppliercategory.component';
import { SharedService } from './../../shared.service';
import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-add-edit-supplier',
  templateUrl: './add-edit-supplier.component.html',
  styleUrls: ['./add-edit-supplier.component.css']
})
export class AddEditSupplierComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() supplier:any;
  SupplierId:number;
  FullName:string;
  AFM:string;
  Address:string;
  Email:string;
  Phone:string;
  Active:boolean=true;
  SupplierCategoryId:string;
  SupplierCategoriesList:any=[];
  SupplierCategory:any;
  CategoryId:number;
  ngOnInit(): void {
    this.loadSupplierCategoriesList();
    
  }

  loadSupplierCategoriesList(){
    this.service.getSupplierCategoryList().subscribe((data:any)=>{
      this.SupplierCategoriesList=data;
      });
    this.SupplierId=this.supplier.SupplierId;
    this.FullName=this.supplier.FullName;
    this.AFM=this.supplier.AFM;
    this.Address=this.supplier.Address;
    this.Email=this.supplier.Email;
    this.Phone=this.supplier.Phone;
    this.Active=this.supplier.Active;
    this.CategoryId=this.supplier.SupplierCategoryId;
  }

  addSupplier(){
     var val={SupplierId:this.SupplierId,
      FullName:this.FullName,
      AFM:this.AFM,
      Address:this.Address,
      Email:this.Email,
      Phone:this.Phone,
      Active:this.Active,
      SupplierCategoryId:this.CategoryId,};
      this.service.addSupplier(val).subscribe(res=>{
       alert(res.toString());
      });
    }
    updateSupplier(){
      var val={SupplierId:this.SupplierId,
        FullName:this.FullName,
        AFM:this.AFM,
        Address:this.Address,
        Email:this.Email,
        Phone:this.Phone,
        Active:this.Active,
        SupplierCategoryId:this.CategoryId};
        this.service.updateSupplier(val).subscribe(res=>{
         alert(res.toString());
        });
    }


}
