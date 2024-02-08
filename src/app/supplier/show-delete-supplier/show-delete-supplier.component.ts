import { SuppliercategoryComponent } from './../../suppliercategory/suppliercategory.component';
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-delete-supplier',
  templateUrl: './show-delete-supplier.component.html',
  styleUrls: ['./show-delete-supplier.component.css']
})

export class ShowDeleteSupplierComponent implements OnInit {

  constructor(private service:SharedService) { }

  SupplierList:any=[];
  ModalTitle:string;
  ActivateAddEditSupplierComponent:boolean=false;
  supplier:any;

  ngOnInit(): void {
    this.refreshSupplierList();
  }

  addClick(){
    this.supplier={
      SupplierId:0,
      FullName:"",
      AFM:"",
      Address:"",
      Email:"",
      Phone:"",
      Active:true,
      Suppliercategory:""
      // SupplierCategoryId:0
    }
    this.ModalTitle="Add Supplier";
    this.ActivateAddEditSupplierComponent=true;
  }

  editClick(item){
   this.supplier=item;
   this.ModalTitle="Edit Supplier";
   this.ActivateAddEditSupplierComponent=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteSupplier(item.SupplierId).subscribe(data=>{
        alert(data.toString());
        this.refreshSupplierList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditSupplierComponent=false;
    this.refreshSupplierList();
  }

  refreshSupplierList(){
    this.service.getSupplierList().subscribe(data=>{
          this.SupplierList=data;
       });
  }
}
