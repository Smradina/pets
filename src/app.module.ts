import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from 'config/database.configuration';
import { KorisnikController } from './controllers/api/korisnik.controller';
import { AppController } from './controllers/app.controller';
import { Korisnik } from './entities/korisnik.entity';
import { Ljubimac } from './entities/ljubimac.entity';
import { Rasa } from './entities/rasa.entity';
import { Slika } from './entities/slika.entity';
import { Vrsta } from './entities/vrsta.entity';
import { KorisnikService } from './services/korisnik/korisnik.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatabaseConfiguration.hostname,
      port: 3306,
      username: DatabaseConfiguration.username,
      password: DatabaseConfiguration.password,
      database: DatabaseConfiguration.database,
      entities: [
          Korisnik,
          Ljubimac,
          Rasa,
          Slika,
          Vrsta
      ]
    }),
    TypeOrmModule.forFeature([
        Korisnik
    ])
  ],
  controllers: [
    AppController,
    KorisnikController,
  ],
  providers: [KorisnikService],
})
export class AppModule {}
