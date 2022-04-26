import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
<<<<<<< Updated upstream
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(5000);
=======
  const app = await NestFactory.create(AppModule, {cors: true})
  app.enableCors()
  await app.listen(5000)
>>>>>>> Stashed changes
}
bootstrap()
