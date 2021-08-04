import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from 'config/configuration';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle(configuration().swagger.title)
  .setDescription( configuration().swagger.description)
  .setVersion( configuration().swagger.version)
  .addBearerAuth({
    type: 'http', scheme: 'bearer', bearerFormat: 'jwt'
  }, 'jwt')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup( configuration().swagger.url, app, document);
  
  app.enableCors();
  await app.listen(configuration().port);
}
bootstrap();