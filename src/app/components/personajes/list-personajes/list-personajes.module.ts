import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListPersonajesRoutingModule } from "./list-personajes-routing.module";
import { PaginatorComponent } from "src/app/shared/components/paginator/paginator.component";

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, ListPersonajesRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListPersonajesModule {}
