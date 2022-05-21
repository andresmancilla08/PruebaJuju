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
