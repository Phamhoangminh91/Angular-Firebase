import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  firstName="";
  lastName="";
  dob="";
  constructor() { }

  ngOnInit(): void {
  }
userEdit(){
  //implementing
}

}
