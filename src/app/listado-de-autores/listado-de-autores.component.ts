import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/Autor.interfaces';
import { Bandas } from '../models/Banda.interfaces';
import { AutorService } from '../services/autor-service.service';
import { BandaService } from '../services/banda.service';

@Component({
  selector: 'app-listado-de-autores',
  templateUrl: './listado-de-autores.component.html',
  styleUrls: ['./listado-de-autores.component.css']
})
export class ListadoDeAutoresComponent implements OnInit {

  titulo:string='Administración de Bandas'

  bandas:Bandas[]=[];
  // autores:Autor[]=[];

  constructor(
    private bandaService: BandaService
    // private autorService: AutorService
  ) { }

  ngOnInit(): void {
    this.CargarDatos();
  }

  CargarDatos(){
    this.bandas = this.bandaService.ListadoBandas();
  }

}
