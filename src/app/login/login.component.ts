import { Router, RouterModule } from '@angular/router';
import { IUser } from './../dto/user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  model: IUser = {
    username: "",
    email: "",
    password: ""
  };

  onSubmit() {
    this.router.navigate([ "table" ]);
  }
}
