import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from "./shared/oferta.model";

@Injectable()
export class OfertasService {
  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    // Efetua um requisição http
    return this.http
      .get("http://localhost:3000/ofertas?destaque=true")
      .toPromise()
      .then((response: any) => response.json());
    // retorna um array de ofertas
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`http://localhost:3000/ofertas/?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0]);
  }
}
