import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private myClient: HttpClient) {}
  base_URL = 'http://localhost:3000/users';
  AddUser(newUser: any) {
    return this.myClient.post(this.base_URL, newUser);
  }
  GetAllData() {
    return this.myClient.get(this.base_URL);
  }
  GetDataById(id: any) {
    return this.myClient.get(this.base_URL + '/' + id);
  }
  DeleteData(id: any) {
    return this.myClient.delete(this.base_URL + '/' + id);
  }
  UpdateData(id: any, newUser: any) {
    return this.myClient.put(this.base_URL + '/' + id, newUser);
  }
}
