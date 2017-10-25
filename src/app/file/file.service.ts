import { IUser } from './../dto/user';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalFileService {

  constructor() { }

  readFile(): string {
    var users: string = `[
      {
        "email": "foo@bar.com",
        "username" : "foo",
        "password" : "bar"
      }
    ]`
    return users;
  }
}


