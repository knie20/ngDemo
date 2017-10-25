import { HttpClient } from '@angular/common/http';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  apiRoot: string = "https://jsonplaceholder.typicode.com";
  todos: any[];
  apiIsCalled: boolean = false;

  constructor(private loginService: LoginService, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  callApi() {
    this.httpClient.get(this.apiRoot + "/todos").subscribe((data: any[]) => {
      console.log(data);
      this.todos = data;
    });
    console.log("noot noot");
    this.apiIsCalled = true;
  }

}
