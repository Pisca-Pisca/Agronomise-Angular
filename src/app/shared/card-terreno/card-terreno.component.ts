import { Terreno } from './../../pages/terrenos/interface/terreno';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-terreno',
  templateUrl: './card-terreno.component.html',
  styleUrls: ['./card-terreno.component.scss']
})
export class CardTerrenoComponent implements OnInit {

  curtido: boolean = false;

  @Input("terreno") terreno: Terreno | null = null;
  @Input("resultadoCompletoTerrenos") terrenos: Terreno[] = [];

  constructor() { }

  ngOnInit() {
  }

  curtir(){
    if(this.curtido === false){
      this.curtido = true;
    }else{
      this.curtido = false;
    }
  }

}
