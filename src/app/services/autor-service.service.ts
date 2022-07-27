import { Injectable } from '@angular/core';
import { Autor } from '../models/Autor.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

//*******
  private autores:Autor[]=[
      {
        id:1,
        nombre:'Claudia Lars',
        pais:'El Salvador',
        genero:'Cuentos',
        year:1930,
        foto: 'https://www.biografiasyvidas.com/biografia/l/fotos/lars.jpg',
        libros:[
          {id:1,nombre:'Estrellas en el pozo',year:1950},
          {id:2,nombre:'Cuentos de miedo',year:1960}
        ]
      },
      {
        id:2,
        nombre:'Alfredo Espino',
        pais:'El Salvador',
        genero:'Cuentos',
        year:1920,
        foto: 'https://www.biografiasyvidas.com/biografia/e/fotos/espino.jpg',
        libros:[
          {id:1,nombre:'Cuentos de barro',year:1950}
        ]
      },
      {
        id:3,
        nombre:'Roque Dalton',
        pais:'El Salvador',
        genero:'Poemas',
        year:1935,
        foto: 'https://www.biografiasyvidas.com/biografia/d/fotos/dalton_roque.jpg',
        libros:[
          {id:1,nombre:'Poemas del Alma',year:1975}
        ]
      }
    ];
//******* 


  constructor() { }

  ListadoAutores():Autor[]{
    return this.autores;
  }

  InsertarAutor(autor:Autor){
    this.autores.push(autor);
  }

  ObtenerAutor(id:number): Autor{
    return <Autor>this.autores.find(x => x.id === id)
  }

  ActualizarAutor(autor: Autor){
    
  }
}
