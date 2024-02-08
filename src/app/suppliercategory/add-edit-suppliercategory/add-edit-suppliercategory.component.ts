import { SharedService } from './../../shared.service';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-add-edit-suppliercategory',
  templateUrl: './add-edit-suppliercategory.component.html',
  styleUrls: ['./add-edit-suppliercategory.component.css']
})
export class AddEditSuppliercategoryComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() supcategory:any;
  SupplierCategoryId:string;
  Category:string;
  ngOnInit(): void {
    this.SupplierCategoryId=this.supcategory.SupplierCategoryId;
    this.Category=this.supcategory.Category;
  }

  addSupplierCategory(){
     var val={SupplierCategoryId:this.SupplierCategoryId,
      Category:this.Category};
      this.service.addSupplierCategory(val).subscribe(res=>{
       alert(res.toString());

      });
    }
    updateSupplierCategory(){
      var val={SupplierCategoryId:this.SupplierCategoryId,
        Category:this.Category};
        this.service.updateSupplierCategory(val).subscribe(res=>{
         alert(res.toString());
  
        });

    }

  

}
