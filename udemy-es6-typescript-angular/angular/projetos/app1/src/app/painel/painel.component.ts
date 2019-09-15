import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
    selector: 'app-painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

    public instrucao: string = "Traduza a frase:";
    public frases: Frase[] = FRASES;
    public resposta: string = "";

    public rodada: number = 0;
    public rodadaFrase: Frase;

    public progresso: number = 0;

    constructor() {
        this.atualizaRodada();
    }

    ngOnInit() {
    }

    public atualizaResposta(resposta: Event): void {
        this.resposta = (<HTMLInputElement>resposta.target).value;
    }

    public verificaResposta(): void {
        if(this.rodadaFrase.frasePtBr == this.resposta) {
            // Trocar pergunta
            this.rodada++;

            // Atualizar progresso
            this.progresso = this.progresso + (100 / this.frases.length);

            //Atualizar Frase
            this.atualizaRodada();
        }
        else {

        }
    }

    public atualizaRodada(): void {
        //Atualizar Frase
        this.rodadaFrase = this.frases[this.rodada];

        //Limpar campo de texto
        this.resposta = "";
    }

}
