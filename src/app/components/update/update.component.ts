import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [],
})
export class UpdateComponent implements OnInit {
  id: any;
  user: any;
  constructor(
    public myServic: ServiceService,
    private myRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myServic.GetDataById(this.id).subscribe({
      next: (data) => (this.user = data),
      error: (error) => console.log('error'),
    });
  }
  updateUser(name: any, address: any, email: any, phone: any) {
    let newUser = { name, address, email, phone };
    this.myServic.UpdateData(this.id, newUser).subscribe({});
    this.router.navigate(['/']);
  }
}
