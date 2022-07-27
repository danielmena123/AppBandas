import { Injectable } from '@angular/core';
import { Bandas } from '../models/Banda.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  private bandas:Bandas[] = [
    {
      id: 1,
      nombre: "Guns N' Roses",
      pais: 'LA. California Estados Unidos',
      year: 1985,
      genero: 'Rock',
      foto: 'https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c',
      albums: [
        {
          id: 1,
          nombre: 'Appetite for Destruction',
          year: 1987,
          foto: 'https://www.humonegro.com/wp-content/GUNS-N-ROSES-APPETITE-FOR-DESTRUCTION-BIG.png'
        },
        {
          id: 2,
          nombre: 'Use Your Illusion I',
          year: 1991,
          foto: 'https://upload.wikimedia.org/wikipedia/en/e/ea/GnR--UseYourIllusion1.jpg'
        },
        {
          id: 3,
          nombre: 'The Spaghetti Incident?',
          year: 1987,
          foto: 'https://i.scdn.co/image/ab67616d0000b273d8a68fd3e16f7ff6932b47d9'
        }
      ]
    },
    {
      id: 2,
      nombre: "AC/DC",
      pais: 'Australia',
      year: 1973,
      genero: 'Rock',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEnqV0uH-8BBtSjzlYdkqoa6zJh1vcifnfw&usqp=CAU',
      albums: [
        {
          id: 1,
          nombre: 'Highway to Hell',
          year: 1979,
          foto: 'https://www.todorock.com/wp-content/uploads/2019/07/ac-dc-highway-to-hell-1-1200x1200.jpg'
        },
        {
          id: 2,
          nombre: 'Back in Black',
          year: 1980,
          foto: 'https://www.guioteca.com/los-80/files/2020/11/ACDC-back-in-black-album.jpg'
        },
        {
          id: 3,
          nombre: 'Iron Man 2',
          year: 2010,
          foto: 'https://m.media-amazon.com/images/I/81PxGZ0W2ZL._SL1500_.jpg'
        },
        {
          id: 4,
          nombre: 'Dirty Deeds Done Dirt Cheap',
          year: 1976,
          foto: 'https://m.media-amazon.com/images/I/81FxlF27n8L._SL1500_.jpg'
        }
      ]
    },
    {
      id: 3,
      nombre: "Queen",
      pais: 'Londres, Inglaterra',
      year: 1970,
      genero: 'Rock',
      foto: 'https://i.pinimg.com/736x/e5/70/cc/e570cc991487add7797db0f78526edea.jpg',
      albums: [
        {
          id: 1,
          nombre: 'A Night at the Opera',
          year: 1975,
          foto: 'https://m.media-amazon.com/images/I/71nxRqKGA8L._SL1400_.jpg'
        },
        {
          id: 2,
          nombre: 'Queen II',
          year: 1974,
          foto: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fxRK-N2T/SharedImage-20939.jpg?t=60a9ea0fa63bbec7faec'
        },        
        {
          id: 3,
          nombre: 'Queen',
          year: 1973,
          foto: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/LP_Label_Queen.jpg'
        },
        {
          id: 4,
          nombre: 'News of the World',
          year: 1977,
          foto: 'https://i.discogs.com/NLxWOlgWhYEmRBS4XH7ZYGY101bePZi5-BovN902kTE/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMTk2/MDEtMTYyMTE3MDk4/Ni00MjExLmpwZWc.jpeg'
        }
      ]
    },
    {
      id: 4,
      nombre: "The Rolling Stones",
      pais: 'Londres, Inglaterra',
      year: 1970,
      genero: 'Rock',
      foto: 'https://i.pinimg.com/736x/bb/59/78/bb597812ef4c88234ae510309786a10d.jpg',
      albums: [
        {
          id: 1,
          nombre: 'Sticky Fingers',
          year: 1971,
          foto: 'https://m.media-amazon.com/images/I/71biD0lQgyL._SL1200_.jpg'
        },
        {
          id: 2,
          nombre: 'Beggars Banquet',
          year: 1968,
          foto: 'https://static.qobuz.com/images/covers/12/19/0001877181912_600.jpg'
        },        
        {
          id: 3,
          nombre: 'Hyde Park Live',
          year: 2013,
          foto: 'https://lastfm.freetls.fastly.net/i/u/500x500/eb4a9a51531c4968c9f8e2e5f47c8d59.jpg'
        }
      ]
    }
  ];
  
  constructor() { }

  ListadoBandas():Bandas[]{
    return this.bandas;
  }

  ObtenerBanda(id:number):Bandas {
    return <Bandas>this.bandas.find(x => x.id === id);
  }

  AgregarBanda(banda:Bandas) {
    this.bandas.push(banda);
  }

}
