import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ordem-compra",
  templateUrl: "./ordem-compra.component.html",
  styleUrls: ["./ordem-compra.component.scss"]
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = "";
  public numero: number = null;
  public complemento: string = "";
  public formaPagamento: string = "debito";
  constructor() {}

  ngOnInit() {}
}
