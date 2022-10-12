import { FacaVoceMesmoComponent } from './pages/faca-voce-mesmo/faca-voce-mesmo.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'faca-voce-mesmo', component: FacaVoceMesmoComponent },
  { path: 'lotes', component: TerrenosComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
import { FaqComponent } from './pages/faq/faq.component';
import { TerrenosComponent } from './pages/terrenos/terrenos.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
