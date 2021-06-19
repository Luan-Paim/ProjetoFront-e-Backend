import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularesAddComponent } from "./celulares-add/celulares-add.component";
import { CelularListComponent } from "./celular-list/celular-list.component";
import { CelularUpdateComponent } from './celular-update/celular-update.component';

const routes: Routes = [
  {path:'criar', component:CelularesAddComponent},
  {path:'listar', component:CelularListComponent},
  {path:'editar', component:CelularUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
