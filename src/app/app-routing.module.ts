import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponentn } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponentn },
  { path: 'home', component: HomeComponentn },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'adduser', component: AddComponent },
  { path: 'updateuser/:id', component: UpdateComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
