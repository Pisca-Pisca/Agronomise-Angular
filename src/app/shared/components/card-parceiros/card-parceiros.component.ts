import { Parceiro } from './../../../pages/parceiros/interface/parceiro';
import { environment } from '../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-parceiros',
  templateUrl: './card-parceiros.component.html',
  styleUrls: ['./card-parceiros.component.scss']
})
export class CardParceirosComponent implements OnInit {

  @Input("parceiro") parceiro: Parceiro | null = null;
  @Input("resultadoCompletoParceiros") parceiros: Parceiro[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
