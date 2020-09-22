import { Controller, Get } from '@nestjs/common';
import { KorisnikService } from './services/korisnik/korisnik.service';


@Controller()
export class AppController {
  constructor(
    private readonly korisnikService: KorisnikService
  ) {

  }

  @Get('api/korisnici') // http://localhost:3000/api/korisnici
  getAllUsers() {
    return this.korisnikService.getAll();
  }  
}
