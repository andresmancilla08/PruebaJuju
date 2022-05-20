import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPersonajesComponent } from "./list-personajes/list-personajes.component";
import { DetallePersonajeComponent } from "./detalle-personaje/detalle-personaje.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ListPersonajesComponent, DetallePersonajeComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListPersonajesComponent, DetallePersonajeComponent],
})
export class PersonajesModule {}
