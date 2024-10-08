import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService) {}

  @MessagePattern({ cmd: 'login' })
  login(data) {
    // 로그인 진행
    console.log(data);
    return 'accessToken';
  }

  logout() {
    // 로그아웃 진행
  }

  restoreAccessToken() {
    // 토근 재발급
  }
}
