import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService : HeroesService,
               private _router : Router 
               ) { 
    // console.log('Constructor');

  }

  ngOnInit(): void { // Este metodo es bastante utilizado cuando la pagina ya esta toda renderizada. El constructor se ejecuta mucho antes que este metodo ngOnInit.  
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);

  }

  verHeroe(idx : number) {
    this._router.navigate(['/heroe',idx]);
  }

}
