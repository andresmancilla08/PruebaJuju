import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { PersonajesModule } from "../personajes/personajes.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PersonajesModule, FormsModule],
})
export class HomeModule {}
