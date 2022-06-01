import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, map, Observable } from "rxjs";
import { Personaje } from "src/app/shared/interface/personaje.interface";
import { PersonajesService } from "src/app/shared/services/personajes.service";
import { Location } from "@angular/common";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-detalle-personaje",
  templateUrl: "./detalle-personaje.component.html",
  styleUrls: ["./detalle-personaje.component.scss"],
})
export class DetallePersonajeComponent implements OnInit {
  idPersonaje: number = 0;
  loading: boolean = true;
  datosPersonaje: any = [];

  constructor(
    private route: ActivatedRoute,
    private personajeService: PersonajesService,
    private location: Location,
    private router: Router
  ) {}

  // Metodo que se encarga de consultar los datos del personaje respecto al id obtenido.
  getDetallePersonaje() {
    this.personajeService
      .getDetallePersonaje(this.idPersonaje)
      .pipe(
        filter((res: HttpResponse<any[]>) => res.ok),
        map((res: HttpResponse<any[]>) => res.body)
      )
      .subscribe(
        (res: any) => {
          this.datosPersonaje = res;
          this.loading = false;
        },
        (res: HttpErrorResponse) => {
          console.log("Error al consultar los datos.", res.error);
          this.loading = false;
        }
      );
  }

  // Metodo que redirecciona a la pagina anterior.
  salirDetalle() {
    this.location.back();
  }

  ngOnInit(): void {
    this.idPersonaje = this.router.parseUrl(this.router.url).queryParams["id"];

    this.getDetallePersonaje();
  }
}
