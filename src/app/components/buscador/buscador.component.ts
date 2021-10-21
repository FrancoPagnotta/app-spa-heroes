import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

    heroes:any[] = [];
    termino:string;

  constructor (
              private _activatedRoute : ActivatedRoute,
              private _heroesService : HeroesService,
              private _router : Router
  ) {}

  ngOnInit(): void {
         this._activatedRoute.params.subscribe( params => { 
          console.log(params['termino']);
          this.termino = params['termino'];
          this.heroes = this._heroesService.buscarHeroes( params['termino'] );
          console.log(this.heroes);
    }); 
  }

  verHeroe(idx : number) {  
    this._router.navigate(['/heroe',idx]);
  }
  // Con este metodo verHeroe estamos usando la misma interaccion que hicimos entre heroe-tarjeta-component.html -> heroe-tarjeta.component.ts -> heroes.component.html -> heroes.component.ts -> app.routes.ts -> heroe.component.ts -> heroe.component.html solo que en este caso estamos haciendo
  // la siguiente interaccion navbar.component.html -> navbar.component.ts -> app.routes.ts -> buscador.component.ts -> buscador.component.html -> heroe-tarjeta.component.html -> buscador.component.html -> buscador.component.ts -> app.routes.ts -> heroe.component.ts -> heroe.component.html
  
}
