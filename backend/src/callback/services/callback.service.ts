import { Injectable } from '@nestjs/common';
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

    create(callback: ICallback) {
        return this.callBackRepository.save(callback)
    }
}
