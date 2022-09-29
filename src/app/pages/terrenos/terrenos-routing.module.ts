import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrenosComponent } from './terrenos.component';

const routes: Routes = [
  { path: '', component: TerrenosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TerrenosRoutingModule { }
