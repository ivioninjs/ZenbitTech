import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ICallback } from '../model/callback.interface';

import { CallbackService } from '../services/callback.service';


@Controller('callback')
export class CallbackController {

    constructor(
        private callbackService: CallbackService
    ) { }

    @Get()
    get() {
        return 'hello'
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Header('Cache-Control', 'none')
    createOrder(@Body() callback: ICallback) {
        return this.callbackService.create(callback)
    }
}
