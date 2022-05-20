import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./components/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "listPersonajes",
    loadChildren: () =>
      import(
        "./components/personajes/list-personajes/list-personajes.module"
      ).then((m) => m.ListPersonajesModule),
  },
  {
    path: "detallePersonaje/:id",
    loadChildren: () =>
      import(
        "./components/personajes/detalle-personaje/detalle-personaje.module"
      ).then((m) => m.DetallePersonajeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
