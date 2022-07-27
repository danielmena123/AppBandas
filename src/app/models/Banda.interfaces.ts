import { Albums } from "./Albums.interfaces";

export interface Bandas {
    id:number;
    nombre:string;
    pais:string;
    genero:string;
    year:number;
    foto:string;
    albums: Albums[]
}