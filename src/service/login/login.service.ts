import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  login(info) {
    return {name:'ISIs'};
  }
  getUserInfo(id) {
    return {id }
  }
}
