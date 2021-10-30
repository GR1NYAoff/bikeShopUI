import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgForm } from '@angular/forms';
import { Shared } from 'src/app/shared.model';
@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styles: [
  ]
})
export class BikeDetailComponent implements OnInit {

  constructor(public service:SharedService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postBikeDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
      },
      err=>{console.log(err); }      
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Shared(); 
  }

}
