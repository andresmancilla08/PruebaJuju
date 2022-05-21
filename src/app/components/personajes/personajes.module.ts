import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPersonajesComponent } from "./list-personajes/list-personajes.component";
import { DetallePersonajeComponent } from "./detalle-personaje/detalle-personaje.component";
import { RouterModule } from "@angular/router";
import { PaginatorComponent } from "src/app/shared/components/paginator/paginator.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ListPersonajesComponent,
    DetallePersonajeComponent,
    PaginatorComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [ListPersonajesComponent, DetallePersonajeComponent],
})
export class PersonajesModule {}
