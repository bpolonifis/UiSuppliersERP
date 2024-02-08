import { SharedService } from '../../shared.service';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-add-edit-suppliercountry',
  templateUrl: './add-edit-suppliercountry.component.html',
  styleUrls: ['./add-edit-suppliercountry.component.css']
})
export class AddEditSuppliercountryComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() supcountry:any;
  SupplierCountryId:string;
  Country:string;
  ngOnInit(): void {
    this.SupplierCountryId=this.supcountry.SuppliercountryId;
    this.Country=this.supcountry.country;
  }

  addSupplierCountry(){
     var val={SupplierCountryId:this.SupplierCountryId,
      Country:this.Country};
      this.service.addSupplierCountry(val).subscribe(res=>{
       alert(res.toString());

      });
    }
    updateSupplierCountry(){
      var val={SupplierCountryId:this.SupplierCountryId,
        Country:this.Country};
        this.service.updateSupplierCountry(val).subscribe(res=>{
         alert(res.toString());

        });

    }



}
