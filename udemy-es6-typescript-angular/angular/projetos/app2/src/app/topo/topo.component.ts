import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();
  constructor(private ofertasService: OfertasService) {}

  // public pesquisa(termoDaBusca: string): void {
  //   this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca);

  //   this.ofertas.subscribe(
  //     (ofertas: Oferta[]) => {
  //       console.log(ofertas);
  //     },
  //     (erro: any) => {
  //       console.log("Erro status: ", erro.status);
  //     },
  //     () => console.log("Fluxo de eventos completo")
  //   );
  // }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), // Executa ação switchMap depois de 1 segundo
      distinctUntilChanged(), // Para fazer pesquisas distintas
      switchMap((termo: string) => {
        console.log('Requisição HTTP');
        if (termo.trim() === '') {
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      }),
      catchError((err: any) => {
        console.log(err);
        return of<Oferta[]>([]);
      })
    );

    // this.ofertas.subscribe((ofertas: Oferta[]) => {
    //   this.ofertas2 = ofertas;
    // });
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('Keyup do caracter:', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }
}
