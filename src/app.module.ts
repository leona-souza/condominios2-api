import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApartamentoModule } from './apartamento/apartamento.module';
import { MoradorModule } from './morador/morador.module';
import { VeiculoModule } from './veiculo/veiculo.module';
import { VisitanteModule } from './visitante/visitante.module';
import { VisitaModule } from './visita/visita.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }),
    ApartamentoModule,
    MoradorModule,
    VeiculoModule,
    VisitanteModule,
    VisitaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
