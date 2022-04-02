import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CallbackEntity } from '../model/callback.entity';
import { ICallback } from '../model/callback.interface';


@Injectable()
export class CallbackService {
    constructor(
        @InjectRepository(CallbackEntity)
        private readonly callBackRepository: Repository<CallbackEntity>
    ) { }

    // find all
    getAll() {
        return this.callBackRepository.find()
    }


    // find by id
    async getById(id: number) {
        const todo = await this.callBackRepository.findOne(id);
        if (todo) {
            return todo;
        }

        throw new HttpException('Callback not found', HttpStatus.NOT_FOUND);
    }

    // create
    async create(callback: ICallback) {
        const newCallback = await this.callBackRepository.create(callback)
        await this.callBackRepository.save(newCallback)

        return newCallback
    }

    // update
    async update(id: number, callback: ICallback) {
        await this.callBackRepository.update(id, callback);
        const updated = await this.callBackRepository.findOne(id);
        if (updated) {
            return updated;
        }

        throw new HttpException('Callback not found', HttpStatus.NOT_FOUND);
    }

    // delete
    async delete(id: number) {
        const deleted = await this.callBackRepository.delete(id);
        if (!deleted.affected) {
            throw new HttpException('Callback not found', HttpStatus.NOT_FOUND);
        }

        if (deleted) {
            return deleted
        }
        throw new HttpException('Callback not found', HttpStatus.NOT_FOUND);
    }
}
