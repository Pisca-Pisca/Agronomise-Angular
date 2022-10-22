import { Conteudo } from '../../../pages/faca-voce-mesmo/interface/conteudo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-conteudo',
  templateUrl: './card-conteudo.component.html',
  styleUrls: ['./card-conteudo.component.scss']
})
export class CardConteudoComponent implements OnInit {

  @Input("conteudo") conteudo: Conteudo | null = null;
  @Input("resultadoCompletoConteudos") conteudos: Conteudo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
