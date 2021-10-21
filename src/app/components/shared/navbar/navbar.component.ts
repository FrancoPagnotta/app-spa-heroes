import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor ( 
                private _heroesService : HeroesService,
                private _router : Router 
   ) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino : string ) {
    if (termino) this._router.navigate(['/buscar',termino]);
    else alert('Ingresa un valor para iniciar la búsqueda.')
  }

}
