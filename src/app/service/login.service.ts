import { URLSearchParams } from '@angular/http';

import { IUser } from './../dto/user';
import { register } from 'ts-node/dist';
import { Injectable } from '@angular/core';
import { LocalFileService } from '../file/file.service'

@Injectable()
export class LoginService {

  constructor() { }

  loginUser(username: string, password: string) {
    var fs : LocalFileService = new LocalFileService();
    var usersStr:string = fs.readFile();
    var users:IUser[] = JSON.parse(usersStr);
  }
}
