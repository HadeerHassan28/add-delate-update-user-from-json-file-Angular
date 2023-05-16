import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent {
  constructor(public myService: ServiceService) {}

  AddUser(name: any, address: any, email: any, phone: any) {
    let newUser = { name, address, email, phone };
    this.myService.AddUser(newUser).subscribe();
  }
}
