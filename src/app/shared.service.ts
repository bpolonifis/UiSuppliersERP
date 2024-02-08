import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly  APIUrl="http://localhost:52239/api";


  constructor(private http:HttpClient) { }

  // crud for supplierCategory

  getSupplierCategoryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/SupplierCategory');
  }

  addSupplierCategory(val:any){
    return this.http.post(this.APIUrl+'/SupplierCategory',val);
  }
  updateSupplierCategory(val:any){
    return this.http.put(this.APIUrl+'/SupplierCategory',val);
  }
  deleteSupplierCategory(val:any){
    return this.http.delete(this.APIUrl+'/SupplierCategory/'+val);
  }


  // crud for supplierCountry

  getSupplierCountryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/SupplierCountry');
  }

  addSupplierCountry(val:any){
    return this.http.post(this.APIUrl+'/SupplierCountry',val);
  }
  updateSupplierCountry(val:any){
    return this.http.put(this.APIUrl+'/SupplierCountry',val);
  }
  deleteSupplierCountry(val:any){
    return this.http.delete(this.APIUrl+'/SupplierCountry/'+val);
  }

// crud for supplier
  getSupplierList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Supplier');
  }

  addSupplier(val:any){
    return this.http.post(this.APIUrl+'/Supplier',val);
  }
  updateSupplier(val:any){
    return this.http.put(this.APIUrl+'/Supplier',val);
  }
  deleteSupplier(val:any){
    return this.http.delete(this.APIUrl+'/Supplier/'+val);
  }

  //get for AllSupplierCategories

}
