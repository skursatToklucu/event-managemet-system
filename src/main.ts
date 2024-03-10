import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  const port = 3000;
  await app.listen(port);

  console.log(`http://localhost:${port}/api`);
}
bootstrap();
