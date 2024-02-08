import { SharedService } from '../../shared.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-delete-suppliercountry',
  templateUrl: './show-delete-suppliercountry.component.html',
  styleUrls: ['./show-delete-suppliercountry.component.css']
})
export class ShowDeleteSuppliercountryComponent implements OnInit {

  constructor(private service:SharedService) { }
  SupplierCountryList:any=[];
  ModalTitle:string;
  ActivateAddEditSuppliercountryComponent:boolean=false;
  supcountry:any ;

  ngOnInit(): void {
    this.refreshSupplierCountryList();
  }
  addClick(){
    this.supcountry={
      SupplierCountryId:0,
      Country:""
    }
    this.ModalTitle="Add Supplier Country";
    this.ActivateAddEditSuppliercountryComponent=true;
  }
  editClick(item){
   this.supcountry=item;
   this.ModalTitle="Edit Country";
   this.ActivateAddEditSuppliercountryComponent=true;
  }
  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteSupplierCountry(item.SupplierCountryId).subscribe(data=>{
        alert(data.toString());
        this.refreshSupplierCountryList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditSuppliercountryComponent=false;
    this.refreshSupplierCountryList();
  }


  refreshSupplierCountryList(){
    this.service.getSupplierCountryList()
    .subscribe(data=>{
          this.SupplierCountryList=data;
       });
  }
}
