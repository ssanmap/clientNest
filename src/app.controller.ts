import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/greeting")
  async getHello() {
    return this.appService.getHello();
  }

  @Get("/notifications")
  async getNotifications() {
    return this.appService.getNotifications();
  }

  @Get("/greeting-async")
  async getHelloAsync() {
    return this.appService.getHelloAsync();
  }

  @Get("/publish-event")
  async publishEvent() {
    this.appService.publishEvent();
  }
}
