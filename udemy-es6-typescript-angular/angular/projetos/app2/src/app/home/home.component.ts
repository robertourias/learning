import { Component, OnInit } from "@angular/core";
import { OfertasService } from "../ofertas.service";
import { log } from "util";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  constructor(private ofertaService: OfertasService) {}

  ngOnInit() {
    console.log(this.ofertaService.getOfertas());
  }
}
