import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'nest_db',
      autoLoadEntities: true,
      synchronize: true, // ❗ dev only
    }),
    UsersModule,
  ],
})
export class AppModule {}
