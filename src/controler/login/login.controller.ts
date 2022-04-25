import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LoginService } from '../../service/login/login.service';
@Controller('user')
export class LoginController {
  constructor(private readonly loginServe: LoginService){};
  @Post('/login')
  login(@Body() obj) {
    return this.loginServe.login(obj);
  }
  @Get('/userInfo')
  userInfo(@Query() {id}) {
    return this.loginServe.getUserInfo(id);
  }
}
