import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonajesComponent } from './list-personajes.component';

const routes: Routes = [{ path: '', component: ListPersonajesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPersonajesRoutingModule { }
