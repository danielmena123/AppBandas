import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './autor/autor.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoDeAutoresComponent } from './listado-de-autores/listado-de-autores.component';

const routes: Routes = [

  { path: '', component: ListadoDeAutoresComponent  },
  { path: 'autor/:id', component: AutorComponent  }, //autor/1
  { path: 'autor', component: AutorComponent  }, //autor?id=1
  { path: 'formulario', component: FormularioComponent }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
