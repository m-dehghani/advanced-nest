import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello the others Worlds! please respect the others Worlds!';
  }

}
