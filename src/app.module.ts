import { INestApplication, Module } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationsController } from './registrations/registrations.controller';
import { RegistrationsService } from './registrations/registrations.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';
import { Event } from './events/event.entity';
import { Registration } from './registrations/registration.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '8823',
      database: 'EventManagementDb',
      entities: [User, Event, Registration],
      synchronize: true
    }), TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Event]), TypeOrmModule.forFeature([Registration])
  ],
  controllers: [EventsController, RegistrationsController, UsersController],
  providers: [EventsService, RegistrationsService, UsersService],
})
export class AppModule {
}

export function setupSwagger(app: INestApplication<any>): void {
  const options = new DocumentBuilder()
    .setTitle('Event Management System')
    .setDescription('The event management system API description')
    .setVersion('1.0')
    .addTag('events')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
