import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

const Conection = 'Insert key connect MongoDB-Atlas here !'

@Module({
  imports: [
    MongooseModule.forRoot(
      Conection,
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
