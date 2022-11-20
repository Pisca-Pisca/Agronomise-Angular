import { Terreno } from './interface/terreno';
import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-terrenos',
  templateUrl: './terrenos.component.html',
  styleUrls: ['./terrenos.component.scss']
})
export class TerrenosComponent implements OnInit {

  /* Config slider*/
  value: number = 0;
  highValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return value + "m²";
    }
  };
  /* fim  Config slider*/

  page: number = 1;

  terrenos: Terreno[] = [];

  constructor() { }

  ngOnInit() {
    this.getTerrenos();
  }

  getTerrenos(){
    this.terrenos = [
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae12",
        cep:                           "18079-302",
        endereco:                      "Rua Qualquer para teste",
        numero:                        120,
        bairro:                        "Bairro de teste",
        cidade:                        "Sorocaba",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Sorocaba",
        descricao:                     "Terreno localizado na zona oeste de Sorocaba",
        uploadImagem:                  "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
      {
        id:                            "ae13",
        cep:                           "18079-852",
        endereco:                      "Rua Qualquer para teste",
        numero:                        10,
        bairro:                        "Bairro de teste",
        cidade:                        "Votorantim",
        estado:                        "São Paulo",
        complemento:                   "--",
        metragem:                      100,
        titulo:                        "Terreno na cidade de Votorantim",
        descricao:                     "Terreno localizado na zona oeste de Votorantim",
        uploadImagem:                  "https://www.delta.mg.gov.br/wp-content/uploads/2021/04/shutterstock_507200902-1-1024x683.jpg",
        uploadEscritura:               "https://cdn.agronomise.com.br/escrituras/ae12/escritura.pdf"
      },
    ]
  }
}
