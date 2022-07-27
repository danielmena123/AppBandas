import { Component, Input, OnInit } from '@angular/core';
import { Albums } from '../models/Albums.interfaces';
import { Libro } from '../models/Libro.interface';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  // foto='';
  // @Input() libro!:Libro;
  @Input() album!:Albums;

  constructor() { }

  ngOnInit(): void {

  }

}
