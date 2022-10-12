import { CadastroImovelComponent } from './../cadastro-imovel/cadastro-imovel.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModal(){
    this.modalRef = this.modalService.show(CadastroImovelComponent,  Object.assign({}, { class: 'modal-fullscreen' }));
  }
}
