import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Autor } from '../models/Autor.interfaces';
import { Bandas } from '../models/Banda.interfaces';
import { AutorService } from '../services/autor-service.service';
import { BandaService } from '../services/banda.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit, OnDestroy {

  id = 0;  
  paramsSubscription: Subscription = new Subscription;
  // autor!:Autor;
  banda!:Bandas;

  constructor(
    private route: ActivatedRoute,
    private bandaService: BandaService
    // private autorService: AutorService
  ) { }

  ngOnInit(): void {
    this.CargarDatos();
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  CargarDatos(){
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.banda = this.bandaService.ObtenerBanda(this.id);
  }

}
