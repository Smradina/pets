import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AddKorisnikDto } from "src/dtos/korisnik/add.korisnik.dto";
import { EditKorisnikDto } from "src/dtos/korisnik/edit.korisnik.dto";
import { Korisnik } from "src/entities/korisnik.entity";
import { ApiResponse } from "src/misc/api.response";
import { KorisnikService } from "src/services/korisnik/korisnik.service";

@Controller('api/korisnik')
export class KorisnikController {
    constructor(
        private korisnikService: KorisnikService
    ) {}

    @Get() // http://localhost:3000/api/korisnici
    getAllUsers() {
      return this.korisnikService.getAll();
    }

    @Post()
    addKorisnik(@Body() data: AddKorisnikDto): Promise<Korisnik | ApiResponse> {
        return this.korisnikService.addKorisnik(data);
    }

    @Post(':id')
    editKorisnik(@Param('id') id: number, @Body() data: EditKorisnikDto): Promise<Korisnik | ApiResponse> {
        return this.korisnikService.editKorisnik(id, data);
    }

}