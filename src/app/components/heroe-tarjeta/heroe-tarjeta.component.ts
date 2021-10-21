import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //El Input es un decorador que que marca una propiedad como 'propiedad de entrada', lo que quiere decir que es una propiedad que viene de afuera y esta vinculada a una propiedad DOM en el template. 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {}; // La propiedad heroe viene del template de heroes.component y tambien del tempalte de buscador.component (ambos componentes usan este componente heroe-tarjeta para mostrar los heroes, por eso) en donde figura así  [heroe]="heroe" *ngFor="let heroe of heroes, ¿que estamos haciendo? [heroe] creamos la propiedad heroe, [heroe]="heroe" le pasamos como valor el objeto que se esta almacenando en heroe por cada vuelta del ciclo for del array heroes y esta propiedad [heroe] con valor ="heroes" es la que entra "desde afuera" acá en este componente.
  @Input() idx:number; // Lo mismo que la propiedad de arriba

  @Output() heroeSeleccionado:EventEmitter<number>; // @Output es un decorador que a diferencia de Input, nos permite sacar desde aca hacia afuera una propiedad, en este caso, desde este heroeTarjetaComponent hacia HeroesComponent. Ahora, heroeSeleccionado es una propiedad de tipado EventEmitter o sea debo inicializar luego con un EventEmiter. ¿Que es un EventEmiter? Es una interface que usamos junto a la directiva Output para poder emitir eventos personalizados que a su vez emitan cierto tipo de dato, en este caso es number. También esta interfaz nos permite registrar manipuladores (handlers) para algunos eventos subscribiendonos a una instancia.

  constructor(private _router : Router) {

    this.heroeSeleccionado = new EventEmitter();   // Inicializo la propiedad heroeSeleccionado con el EventEmiter()

   }

  ngOnInit(): void {
  }

  //   verHeroe(idx : number) { // Este metodo recibe como parametro lo que viene en la propiedad idx que es el indice del objeto en el cual hicimos click. Por ejemplo, en heroes-component.html renderizamos el template de heroe-tarjeta.component o sea el template de cada heroe por cada objeto del array heroes, por lo tanto cada objeto tiene su indice claro, por eso cuando nosotros hacemos click en por ejemplo el heroe que esta en la posicion 2 del array heroes, se ejecuta este metodo que recibe como parametro la propiedad idx cuyo valor es el indice del objeto en el array y bueno agarra ese valor y lo agrega como segundo parametro al navigate y nos redirecciona. 
  //   this._router.navigate(['/heroe',idx]);
  // }

  verHeroe() {
    this.heroeSeleccionado.emit(this.idx); // heroeSeleccionado ya es un EventEmitter porque lo inicialice arriba, ahora lo que hago es decirle que quiero que emita este evento y lo hago mediante el metodo emit(). En este caso le digo que emita la propiedad idx. Entonces lo que hace este metodo verHeroe() es mediante el emit() emitir el idx. 
    console.log(this.idx);
  }

  
}
