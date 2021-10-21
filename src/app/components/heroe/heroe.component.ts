import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe : any = {};

  heroes : Heroe[] = [];

  constructor( private _activatedRoute : ActivatedRoute,
               private _heroesService : HeroesService,
               ) { // AcivatedRoute nos da acceso a la informacion de una ruta que esta asociada a un componente que se carga en la pagina y posee la propiedad params que es un observarble para poder observar esta info. Para poder "escuchar" u "observar" a este observarble, debemos subscribirnos mediante el metodo subscribe().
    
    this._activatedRoute.params.subscribe( params => { // En este caso, el observable nos esta devolviendo el id de cada heroe, esa es la info que lleva la url de la ruta de cada heroe cuando se carga en la pagina. Con parameters['id] le pido al observable que solo me muestre el valor de esa propiedad id, en cambio si solo pongo parameters me muestra propiedad y valor, pero nosotros solo queremos los numeros. 
      // console.log( parameters['id'] );
      this.heroe = this._heroesService.getHeroe( params['id'] );
      console.log(this.heroe);
    } ); 

    this.heroes = this._heroesService.getHeroes();
   }


}
