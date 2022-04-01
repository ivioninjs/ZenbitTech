import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateCallbackDto } from './create-callback.dto';


@Controller('callback')
export class CallbackController {
    @Get()
    getAll(): string {
        return 'Get All'
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Header('Cache-Control', 'none')
    createOrder(@Body() createCallback: CreateCallbackDto): string {
        return 'created today ' + createCallback.name + '!'
    }
}
