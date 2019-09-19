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

}
