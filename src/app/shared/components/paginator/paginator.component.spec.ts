import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaginatorComponent } from "./paginator.component";

describe("PaginatorComponent", () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
    }).compileComponents();
  });

  it("Debe existir un metodo llamado changeTestUnitContIni()", () => {
    let metodoLlamado = spyOn(component, "validarCargaPersonajes");
    component.validarCargaPersonajes(42);
    expect(metodoLlamado).toHaveBeenCalled();
  });
});
