import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { HomeRoutingModule } from "./components/home/home-routing.module";
import { HomeComponent } from "./components/home/home.component";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  // Verifica si el nombre o titulo indicado de la app es igual al que se le pasa para esta prueba.
  it(`Titulo de la app 'Prueba Rick and Morty - AM'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("Prueba Rick and Morty - AM");
  });
});
