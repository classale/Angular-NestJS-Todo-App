import { Module } from '@nestjs/common';
import { TodoModule } from './todo.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from 'typeorm';
import { Todo } from './entities/todo.entity';

const envData = process.env;

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: envData.DATABASE_HOST,
      port: Number(envData.DATABASE_PORT),
      username: envData.DATABASE_USER,
      password: envData.DATABASE_PASSWORD,
      database: envData.DATABASE_NAME,
      entities: [Todo],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}