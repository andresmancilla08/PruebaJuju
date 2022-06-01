import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent implements OnInit {
  // Variable input que se encarga de obtener los datos que se envian desde el home para operar
  @Input() datosPaginador: any;
  @Output() btnNext = new EventEmitter<any>();
  @Output() btnPrev = new EventEmitter<any>();

  contInicio: number = 0;
  contFin: number = 0;

  constructor() {}

  // Se pudo simplificar realizando solo un metodo que reciba por parametro si es next o no y validar internamente
  // en vez de crear dos metodos uno para next y otro para prev.

  // Metodo que se encarga de enviar por emit del output el json con los datos correspondientes a siguiente
  changeBtnNext() {
    this.btnNext.emit({
      next: true,
      prev: false,
    });
  }

  // Metodo que se encarga de enviar por emit del output el json con los datos correspondientes a anterior
  changeBtnPrev() {
    this.btnNext.emit({
      next: false,
      prev: true,
    });
  }

  // Metodo creado para prueba unitaria y validar la pagina en la que se encontraba el usuario
  validarCargaPersonajes(valor: number) {
    if (this.datosPaginador.length > valor) {
      return this.datosPaginador.length;
    }
  }

  ngOnInit(): void {
    this.contInicio = this.datosPaginador.results[0].id;
    this.contFin = this.datosPaginador.results[
      this.datosPaginador.results.length - 1
    ].id;
  }
}
