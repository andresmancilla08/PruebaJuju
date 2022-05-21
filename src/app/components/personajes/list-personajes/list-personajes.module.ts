import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListPersonajesRoutingModule } from "./list-personajes-routing.module";
import { PaginatorComponent } from "src/app/shared/components/paginator/paginator.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [CommonModule, ListPersonajesRoutingModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListPersonajesModule {}
