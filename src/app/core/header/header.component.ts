import { AdminComodatarioComponent } from './../../shared/components/admin-comodatario/admin-comodatario.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { AdminComodanteComponent } from 'src/app/shared/components/admin-comodante/admin-comodante.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalRef?: BsModalRef;
  exibeMenu: boolean = true;
  usuarioLogado = false;
  tipoUsuario = "";

  constructor(
    private modalService: BsModalService
  ) {
    this.usuarioLogado = localStorage.getItem("usuarioLogado")? true : false;
    this.tipoUsuario = JSON.parse(localStorage.getItem("tipoUsuario"));
  }

  ngOnInit() {
    let pathName = window.location.pathname;

    if(pathName === '/login'){
      this.exibeMenu = false;
    }
  }

  abrirModalAdmin(){
    if(this.usuarioLogado){
      if(this.tipoUsuario == "Comodante"){
        this.modalRef = this.modalService.show(AdminComodanteComponent, Object.assign({}, { class: 'modal-end' }));
      }else if(this.tipoUsuario == "Comodatario"){
        this.modalRef = this.modalService.show(AdminComodatarioComponent, Object.assign({}, { class: 'modal-end' }));
      }
    }else{
      window.open('/login', "_self");
    }
  }
}
