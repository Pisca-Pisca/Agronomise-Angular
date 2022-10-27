import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  uploadDocumentos(campo: string){
    if(campo === "uploadDocFoto"){
      const inputFile =  document.createElement("input");

      inputFile.id = "uploadDocFoto";
      inputFile.type = "file";
      inputFile.style.display = "none";
      inputFile.accept = ".png, .jpg, .jpeg,";
      inputFile.click();

      inputFile.onchange = (ev: any) => {
        console.log(ev.target.files[0]);
      }

    }else if(campo === "uploadCompEnd"){
      const inputFileEscritura =  document.createElement("input");

      inputFileEscritura.id = "uploadCompEnd";
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
