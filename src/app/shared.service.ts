import { Injectable } from '@angular/core';
import { Shared } from './shared.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  formData:Shared = new Shared();
  list:Shared[];
  readonly baseUrl="http://localhost:19551/api/BikeDetail";
  
  constructor(private http:HttpClient) { }

  postBikeDetail(){
    return this.http.post(this.baseUrl,this.formData);
  }

  updateBikeDetail(bikeID:number,bike:Shared){
    return this.http.put(`${this.baseUrl}/${bikeID}`,bike);
  }
  
  deleteBikeDetail(bikeID:number){
    return this.http.delete(`${this.baseUrl}/${bikeID}`);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as Shared[]);
  }

}
