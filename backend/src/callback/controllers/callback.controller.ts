import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ICallback } from '../model/callback.interface';

import { CallbackService } from '../services/callback.service';


@Controller('callback')
export class CallbackController {

    constructor(
        private readonly callbackService: CallbackService
    ) { }

    // get all callbacks
    @Get()
    get() {
        return this.callbackService.getAll()
    }

    // get todo by id
    @Get(':id')
    getById(@Param('id') id: string) {
        return this.callbackService.getById(Number(id))
    }

    // create 
    @Post()
    async create(@Body() callback: ICallback) {
        return this.callbackService.create(callback)
    }

    // update 
    @Put(':id')
    async update(@Param('id') id: string, @Body() callback: ICallback) {
        return this.callbackService.update(Number(id), callback)
    }

    //delete todo
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.callbackService.delete(Number(id));
    }
}
