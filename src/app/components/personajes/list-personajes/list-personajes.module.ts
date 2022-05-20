import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListPersonajesRoutingModule } from "./list-personajes-routing.module";
import { ListPersonajesComponent } from "./list-personajes.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, ListPersonajesRoutingModule],
})
export class ListPersonajesModule {}
