import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Albums } from '../models/Albums.interfaces';
import { Bandas } from '../models/Banda.interfaces';
import { BandaService } from '../services/banda.service';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // titulo:string='clase 06 Formularios';
  titulo:string = 'Agregar Nueva Banda'

  // usuarioForm: FormGroup;
  bandaForm:FormGroup;
  // albumForm:FormGroup;

  isLinear = false;
  enable = false;
  save = false;
  
  nombreAlbumForm: FormGroup;
  yearAlbumForm: FormGroup;
  fotoAlbumForm: FormGroup;

  banda!:Bandas;
  albums:string[] = []

  @ViewChild('stepper',{read:MatStepper}) stepper!:MatStepper;

  constructor(
    private bandaService: BandaService,
    private router: Router
    // private _builder: FormBuilder
    ) { 

    // this.usuarioForm = new FormGroup(
    //   {
    //     'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
    //     'email': new FormControl('', [Validators.required, Validators.email]),
    //   }
    // );
    this.bandaForm = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'pais': new FormControl('', [Validators.required]),
      'genero': new FormControl('', [Validators.required]),
      'año': new FormControl('', [Validators.required]),
      'foto': new FormControl('', [Validators.required]),
    });

    this.nombreAlbumForm = new FormGroup({
      'nombre': new FormControl('', [Validators.required])     
    });

    this.yearAlbumForm = new FormGroup({
      'año': new FormControl('', [Validators.required])
    });

    this.fotoAlbumForm = new FormGroup({      
      'foto': new FormControl('', [Validators.required])
    });

    // this.usuarioForm = this._builder.group({
    //   nombre: ['', Validators.required],
    //   email:['', Validators]
    // });
  }

  ngOnInit(): void {    
  }

  enviarDatos(){
    const lastIndex: Bandas[] = this.bandaService.ListadoBandas();
    this.banda.id = lastIndex.length + 1;
    this.bandaService.AgregarBanda(this.banda);
    this.router.navigate(['/']);
  }

  enableAlbum(){
    this.banda = {
      id: 0,
      nombre: this.bandaForm.value.nombre,
      pais: this.bandaForm.value.pais,
      genero: this.bandaForm.value.genero,
      year: this.bandaForm.value.año,
      foto: this.bandaForm.value.foto,
      albums: []
    }
    this.enable = true;
  }

  addAlbum(){
    var album: Albums = {
      id: this.albums.length + 1,
      nombre: this.nombreAlbumForm.value.nombre,
      foto: this.fotoAlbumForm.value.foto,
      year: this.yearAlbumForm.value.año,
    }

    this.albums.push(album.nombre);
    this.banda.albums.push(album);
    this.save = true;    
    this.stepper.reset();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.albums.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(name: string): void {
    const index = this.albums.indexOf(name);
    const i = this.banda.albums.indexOf({nombre: name});

    if (index >= 0) {
      this.albums.splice(index, 1);
      this.banda.albums.splice(i, 1);

      if(this.albums.length == 0){
        this.save = false;
      }
    }
  }

}
