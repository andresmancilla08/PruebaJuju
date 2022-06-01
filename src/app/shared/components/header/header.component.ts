import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  nameOptionHeader = "Personajes";

  constructor(private router: Router) {}

  // Metodo encargado de detectar los cambios sobre el input de busqueda por nombre y filtrar la lista de personajes.
  changeSearch(text: string) {
    if (text === "") {
      this.router.navigate(["/home"]);
    } else if (text && text.length > 3) {
      this.router.navigate(["/listPersonajes"], {
        queryParams: { name: text },
      });
    }
  }

  ngOnInit(): void {}
}
