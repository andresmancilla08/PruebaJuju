import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from "@angular/router";
import { filter, map } from "rxjs";
import { Personaje } from "src/app/shared/interface/personaje.interface";
import { PersonajesService } from "src/app/shared/services/personajes.service";

@Component({
  selector: "app-list-personajes",
  templateUrl: "./list-personajes.component.html",
  styleUrls: ["./list-personajes.component.scss"],
})
export class ListPersonajesComponent implements OnInit {
  // Variables necesarias
  personajes: Personaje[] = [];
  infoData: any = {};
  pagina: number = 1;
  consulta: string = "";
  nextPageNull: boolean = false;
  totalPages: number = 0;
  loading: boolean = true;
  changePage: any = {};

  constructor(
    private personajeService: PersonajesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.onChangeUrl();
  }

  // Metodo para detectar cambio de url y enrutar
  onChangeUrl() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.personajes = [];
        this.pagina = 1;
        this.getDataPersonajes();
      });
  }

  // Metodo encargado de obtener todos los personajes del API.
  getDataPersonajes() {
    this.loading = true;

    if (
      this.router.parseUrl(this.router.url).queryParams["name"] !== undefined &&
      this.router.parseUrl(this.router.url).queryParams["name"] !== ""
    ) {
      this.consulta = this.router.parseUrl(this.router.url).queryParams["name"];
    }

    if (this.changePage.next) {
      this.pagina++;
    }

    if (this.changePage.prev) {
      this.pagina--;
    }

    this.personajeService
      .getObtenerPersonajes(this.consulta, this.pagina)
      .pipe(
        filter((res: HttpResponse<any[]>) => res.ok),
        map((res: HttpResponse<any[]>) => res.body)
      )
      .subscribe(
        (res: any) => {
          // Inicializando variables tras cada consulta para limpiar datos
          this.totalPages = 0;
          this.personajes = [];
          this.infoData = {};
          this.nextPageNull = false;

          // Insertando resultados en variables necesarias
          this.personajes = res.results;
          this.infoData = res;
          if (!res.info.next) {
            this.nextPageNull = true;
          }

          this.loading = false;
        },
        (res: HttpErrorResponse) => {
          console.log("Error al consultar los datos.", res.error);
          this.loading = false;
        }
      );
  }

  ngOnInit(): void {
    this.getDataPersonajes();
  }
}
