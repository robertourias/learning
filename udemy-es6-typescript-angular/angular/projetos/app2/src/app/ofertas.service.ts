import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from "./shared/oferta.model";
import { Observable } from "rxjs";
import { URL_API } from "./app.api";
import { map, retry } from "rxjs/operators";

@Injectable()
export class OfertasService {
  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    // Efetua um requisição http
    return this.http
      .get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((response: any) => response.json());
    // retorna um array de ofertas
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${URL_API}/ofertas/?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0]);
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http
      .get(`${URL_API}/ofertas/?descricao_oferta_like=${termo}`)
      .pipe(
        retry(10),
        map((resposta: any) => resposta.json())
      );
  }
}
