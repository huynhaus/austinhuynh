import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogsPageComponent } from './logs-page/logs-page.component';
import { WordleComponent } from './wordle/wordle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'logs',
    component: LogsPageComponent
  },
  {
    path: 'projects/wordle',
    component: WordleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
