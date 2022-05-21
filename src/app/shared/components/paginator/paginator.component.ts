import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent implements OnInit {
  @Input() datosPaginador: any;
  @Output() btnNext = new EventEmitter<any>();
  @Output() btnPrev = new EventEmitter<any>();

  contInicio: number = 0;
  contFin: number = 0;

  constructor() {}

  changeBtnNext() {
    this.btnNext.emit({
      next: true,
      prev: false,
    });
  }

  changeBtnPrev() {
    this.btnNext.emit({
      next: false,
      prev: true,
    });
  }

  ngOnInit(): void {
    if (this.datosPaginador.results.length > 1) {
      this.contInicio = this.datosPaginador.results[0].id;
      this.contFin = this.datosPaginador.results[
        this.datosPaginador.results.length - 1
      ].id;
    } else {
    }
  }
}
