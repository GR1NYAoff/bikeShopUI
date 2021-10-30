import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Shared } from 'src/app/shared.model';

@Component({
  selector: 'app-bike-detail-list',
  templateUrl: './bike-detail-list.component.html',
  styles: [
  ]
})
export class BikeDetailListComponent implements OnInit {

  constructor(public service:SharedService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  getRentedBikes() {
    return this.service.list.filter((item) => item.bikeRented === true);
  }
  getNoRentedBikes() {
    return this.service.list.filter((item) => item.bikeRented === false);
  }

  Rent(bikeID:number,bike:Shared){
    bike.bikeRented = true;          
    this.service.updateBikeDetail(bikeID,bike).subscribe(
      res=>{this.service.refreshList();},
      err=>{console.log(err)});   
  }
  CancelRent(bikeID:number,bike:Shared){
    bike.bikeRented = false;          
    this.service.updateBikeDetail(bikeID,bike).subscribe(
      res=>{this.service.refreshList();},
      err=>{console.log(err)});   
  }

  Delete(bikeID:number){
    this.service.deleteBikeDetail(bikeID).subscribe(
      res=>{this.service.refreshList();},
      err=>{console.log(err)});
  }
}
