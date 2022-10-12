import { FacaVoceMesmoComponent } from './faca-voce-mesmo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: FacaVoceMesmoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacaVoceMesmoRoutingModule { }
