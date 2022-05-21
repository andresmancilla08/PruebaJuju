import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Personaje } from "../interface/personaje.interface";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

type ArrayResponseAny = HttpResponse<any[]>;

@Injectable({
  providedIn: "root",
})
export class PersonajesService {
  constructor(private http: HttpClient) {}

  getObtenerPersonajes(input: string, pagina: number): Observable<any> {
    return this.http.get(
      `${environment.baseUrlApi}character/?name=${input}&page=${pagina}`,
      {
        observe: "response",
      }
    );
  }

  getDetallePersonaje(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrlApi}character/${id}`, {
      observe: "response",
    });
  }
}
