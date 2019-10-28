import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  Observable,
  Observer,
  interval,
  ObjectUnsubscribedError,
  Subscription
} from "rxjs";
import { OfertasService } from "../ofertas.service";
import { Oferta } from "../shared/oferta.model";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.scss"],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {
  private tempoObservableSubscription: Subscription;
  private meuObservableTesteSubscription: Subscription;

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    this.ofertasService
      .getOfertasPorId(this.route.snapshot.params["id"])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        console.log(this.oferta);
      });
    // this.route.params.subscribe(
    //   (parametro: any) => {
    //     console.log(parametro.id);
    //   },
    //   (error: any) => console.log("Erro: ", error),
    //   () => console.log("Processamento foi classificado como concluido")
    // );

    let tempo = interval(2000);

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    });

    // observable (Observavel)
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(3);
      observer.next(1);
      observer.error("Um erro aconteceu");
      // observer.complete();
    });

    // Observable (Observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      (resultado: number) => {
        console.log("Resultaod:", resultado);
      },
      (erro: string) => {
        console.log(erro);
      },
      () => {
        console.log("Stream de eventos finalizada");
      }
    );
  }

  ngOnDestroy() {
    this.meuObservableTesteSubscription.unsubscribe();
    this.tempoObservableSubscription.unsubscribe();
  }
}
