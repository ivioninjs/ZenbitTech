import { Module } from '@nestjs/common'
import { CallbackService } from './services/callback.service'
import { CallbackController } from './controllers/callback.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CallbackEntity } from './model/callback.entity'

@Module({
    controllers: [CallbackController],
    providers: [CallbackService],
    imports: [
        TypeOrmModule.forFeature([CallbackEntity])
    ]
})
export class CallbackModule { }
