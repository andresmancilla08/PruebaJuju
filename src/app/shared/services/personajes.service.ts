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

  getObtenerPersonajes(
    name: string,
    pagina: number,
    status: string,
    species: string,
    type: string,
    gender: string
  ): Observable<any> {
    return this.http.get(
      `${environment.baseUrlApi}character/?name=${name}&page=${pagina}&status=${status}&species=${species}&type=${type}&gender=${gender}`,
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
