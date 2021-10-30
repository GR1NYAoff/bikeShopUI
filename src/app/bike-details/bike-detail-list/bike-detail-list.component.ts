import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
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

}
