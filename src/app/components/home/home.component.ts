import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponentn implements OnInit {
  id: any;
  users: any;
  constructor(myRoute: ActivatedRoute, public myService: ServiceService) {
    this.id = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    // All data:
    this.myService.GetAllData().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (data) => {},
    });
  }
  // Delate

  delate(id: any) {
    this.myService.DeleteData(id).subscribe({});
    this.users = this.users.filter((u: any) => u.id !== id);
  }
}
