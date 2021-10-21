// Creando nuestro primer servicio

import { Injectable } from "@angular/core";

// Creamos una interface para que la propiedad heroes de la clase HeroesService tenga un tipado de tipo heroes y así evitar que se inserten otros heroes que no cumplan con las caracteristicas que queremos que tengan, como por ejemplo las que tienen los heroes del arreglo.
export interface Heroe {
	nombre: string;
	bio: string;
	img: string;
	aparicion: string;
	casa: string;
  idx?: number; // Agregamos la propeidad idx para resolver el error a la hora de buscar, que estamos resolviendolo en el metodo verHeroe de abajo. 
}


@Injectable() //Decorador
export class HeroesService {

	private heroes: Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

	constructor() {

		console.log('Servicio listo para usar!!')
	}

	// getHeroes = ()=> this.heroes; // Metodo version funcion flecha. 

	getHeroes(): Heroe[] { // Mediante este metodo publico vamos a acceder a este servicio fuera de esta clase, porque recoredmos que la propiedad heroes, que es un array, es de tipo private o sea solo es accesible dentro de esta clase, por lo que para acceder a esta data desde afuera de esta clase necesitamos este metodo getHeroes.
		return this.heroes;
	}

  getHeroe(idx: number) {
    return this.heroes[idx];
  }

  buscarHeroes(termino : string) {

    // let heroesArr:Heroe[] = [];
    let heroesArr:Heroe[] = [];

    termino = termino.toLowerCase();

    for (let i = 0; i < this.heroes.length; i++) {// Cambiamos el for of por el for normal para resolver el error que sucede al buscar cualquier heroe y que al clickear en ver mas aparezca siempre aquaman porque queda en la posicion 0. 

        let heroe = this.heroes[i];

        let nombre = heroe.nombre.toLowerCase();

        if (nombre.indexOf(termino) >= 0) { // Esta validación hace que solo se almacenen en el heroesArr los objetos heroes que en cuya propiedad nombre tengan el valor del parametro termino. Por ejemplo si termino vale 'a', los heroes que en su nombre tengan la 'a' van a almacenarse en heroesArr, pero hulk no tiene 'a', entonces este no se almacena. Si le paso 'aq' solo se va guardar aquaman, porque es el unico que tiene 'aq' en su propiedad nombre. 

          heroe.idx = i;
          heroesArr.push(heroe);
        }
      
    }

    return heroesArr;
  }

}


