import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.scss']
})
export class CadastroImovelComponent implements OnInit {

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

  uploadDocumentos(campo: string){
    if(campo === "uploadImagem"){
      const inputFile =  document.createElement("input");

      inputFile.id = "uploadImagem";
      inputFile.type = "file";
      inputFile.style.display = "none";
      inputFile.accept = ".png, .jpg, .jpeg,";
      inputFile.click();

      inputFile.onchange = (ev: any) => {
        console.log(ev.target.files[0]);
      }

    }else if(campo === "uploadEscritura"){
      const inputFileEscritura =  document.createElement("input");

      inputFileEscritura.id = "uploadEscritura";
      inputFileEscritura.type = "file";
      inputFileEscritura.style.display = "none";
      inputFileEscritura.accept = ".pdf, .png, .jpg, .jpeg,";
      inputFileEscritura.click();

      inputFileEscritura.onchange = (ev: any) => {
        const formdata = new FormData();
        formdata.append("escritura", ev.target.files[0]);

        console.log(formdata.get('escritura'));
      }

    }
  }
}
