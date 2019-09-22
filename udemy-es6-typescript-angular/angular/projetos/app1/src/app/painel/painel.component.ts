import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
    selector: 'app-painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

    public instrucao: string = "Traduza a frase:";
    public frases: Frase[] = FRASES;
    public resposta: string = "";

    public rodada: number = 0;
    public rodadaFrase: Frase;

    public progresso: number = 0;

    public tentativas: number = 3;

    @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.atualizaRodada();
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        console.log("Componente painel foi destruido");
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

            // Acertos
            if(this.rodada === 4) {
                this.encerrarJogo.emit("vitoria");
            }

            //Atualizar Frase
            this.atualizaRodada();
        }
        else {
            this.tentativas--;

            if(this.tentativas === -1) {
                this.encerrarJogo.emit("derrota");
            }
        }
    }

    public atualizaRodada(): void {
        //Atualizar Frase
        this.rodadaFrase = this.frases[this.rodada];

        //Limpar campo de texto
        this.resposta = "";
    }

}
