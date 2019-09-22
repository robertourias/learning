import { Component, OnInit, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
    public coracoes: Coracao[] = [
        new Coracao(true), new Coracao(true), new Coracao(true)
    ];
    @Input() public tentativas:number = 3;

    constructor() {
        console.log(this.coracoes);
    }

    ngOnInit() {
    }

    ngOnChanges() {
        // this.tentativas
        // this.coracoes.length
        if(this.tentativas !== this.coracoes.length) {
            let indice = this.coracoes.length - this.tentativas;

            this.coracoes[indice - 1].cheio = false;
        }
        console.log("Tentativas: " + this.tentativas);
    }

}
