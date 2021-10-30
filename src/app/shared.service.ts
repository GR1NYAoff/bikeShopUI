import { Injectable } from '@angular/core';
import { Shared } from './shared.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  formData:Shared = new Shared();
  readonly baseUrl="http://localhost:19551/api/BikeDetail";
  constructor(private http:HttpClient) { }

  postBikeDetail(){
    return this.http.post(this.baseUrl,this.formData);
  }
}
