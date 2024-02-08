import { SharedService } from './../../shared.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-delete-suppliercategory',
  templateUrl: './show-delete-suppliercategory.component.html',
  styleUrls: ['./show-delete-suppliercategory.component.css']
})
export class ShowDeleteSuppliercategoryComponent implements OnInit {

  constructor(private service:SharedService) { }
  SupplierCategoryList:any=[];
  ModalTitle:string;
  ActivateAddEditSuppliercategoryComponent:boolean=false;
  supcategory:any ;

  ngOnInit(): void {
    this.refreshSupplierCategoryList();
  }
  addClick(){
    this.supcategory={
      SupplierCategoryId:0,
      Category:""
    }
    this.ModalTitle="Add Supplier Category";
    this.ActivateAddEditSuppliercategoryComponent=true;
  }
  editClick(item){
   this.supcategory=item;
   this.ModalTitle="Edit Category";
   this.ActivateAddEditSuppliercategoryComponent=true;
  }
  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteSupplierCategory(item.SupplierCategoryId).subscribe(data=>{
        alert(data.toString());
        this.refreshSupplierCategoryList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditSuppliercategoryComponent=false;
    this.refreshSupplierCategoryList();
  }


  refreshSupplierCategoryList(){
    this.service.getSupplierCategoryList()
    .subscribe(data=>{
          this.SupplierCategoryList=data;
       });
  }
}
