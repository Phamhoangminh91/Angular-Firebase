import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component'
import { AddContentComponent } from './pages/add-content/add-content.component'


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-content', component: AddContentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
