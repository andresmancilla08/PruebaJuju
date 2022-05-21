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

  ngOnInit(): void {}
}
