import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddKorisnikDto } from 'src/dtos/korisnik/add.korisnik.dto';
import { Korisnik } from 'src/entities/korisnik.entity';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import { EditKorisnikDto } from 'src/dtos/korisnik/edit.korisnik.dto';

@Injectable()
export class KorisnikService {
    constructor(
        @InjectRepository(Korisnik)
        private readonly korisnik: Repository<Korisnik>
    ) { }

    getAll(): Promise<Korisnik[]> {
        return this.korisnik.find();
    }

    getById(id: number): Promise<Korisnik> {
        return this.korisnik.findOne(id);
    }

    addKorisnik(data: AddKorisnikDto) {

        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);
        const passwordHashString = passwordHash.digest('hex').toUpperCase();

        const newKorisnik = new Korisnik();
        newKorisnik.korisnickoIme = data.username;
        newKorisnik.lozinka = passwordHashString;


        return this.korisnik.save(newKorisnik);
    }

    async editKorisnik(id: number, data: EditKorisnikDto) {
        let korisnik: Korisnik = await this.korisnik.findOne(id);

        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);
        const passwordHashString = passwordHash.digest('hex').toUpperCase();

        korisnik.lozinka = passwordHashString;

        return this.korisnik.save(korisnik);
    }
}
