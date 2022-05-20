import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Personaje } from "../interface/personaje.interface";

@Injectable({
  providedIn: "root",
})
export class PersonajesService {
  constructor(private http: HttpClient) {}

  getObtenerPersonajes(input = "", pagina = 1) {
    return this.http.get<Personaje[]>(
      `${environment.baseUrlApi}character/?name=${input}&page=${pagina}`
    );
  }

  getDetallePersonaje(id: number) {
    return this.http.get<Personaje>(`${environment.baseUrlApi}character/${id}`);
  }
}
