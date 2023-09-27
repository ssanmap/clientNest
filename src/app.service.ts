import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('ms-service-ss') private client: ClientProxy){}

  async getHello(){
    return this.client.send({cmd: 'greeting'}, 'Progressive Coder');
  }

  async getNotifications() {
    return this.client
      .send<number[], number[]>('notifications', [1, 2, 3, 4, 5])
      .toPromise();
      
  }

  async getHelloAsync() {
    const message = await this.client.send({cmd: 'greeting-async'}, 'Progressive Coder');
    return message;
  }

  async publishEvent() {
    this.client.emit('book-created', {'bookName': 'The Way Of Kings', 'author': 'Brandon Sanderson'});
  }
}
