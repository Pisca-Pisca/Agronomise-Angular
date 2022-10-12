import { Conteudo } from './interface/conteudo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faca-voce-mesmo',
  templateUrl: './faca-voce-mesmo.component.html',
  styleUrls: ['./faca-voce-mesmo.component.scss']
})
export class FacaVoceMesmoComponent implements OnInit {

  page: number = 1;

  conteudos: Conteudo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getConteudos();
  }

  getConteudos(){
   this.conteudos = [
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
      {
        titulo:         "Como iniciar projeto de Horta ?",
        descricao:      "A cada dia se faz mais necessário viver de uma forma sustentável e estabelecer uma relação mais próxima da natureza e com o meio em que vivemos. Devido a cultura dominante, é muito fácil esquecer que o alface....",
        imagem:         "https://cdn.uso.com.br/13530/2021/07/b64b349550df8509a46c7ae9e7b850ad.jpg",
        link:           "https://pindorama.org.br/agroecologia/como-iniciar-projeto-de-horta-urbana-comunitaria/"
      },
    ]
  }
}
