import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [],
})
export class UserDetailComponent implements OnInit {
  userInfo: any;
  id: any;
  constructor(myRoute: ActivatedRoute, public myServices: ServiceService) {
    this.id = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.userInfo = this.myServices.GetDataById(this.id).subscribe({
      next: (data) => {
        this.userInfo = data;
      },
      error: (error) => {
        console.log('error');
      },
    });
  }
}
