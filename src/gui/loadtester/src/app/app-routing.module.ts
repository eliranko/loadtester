import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateScenarioComponent } from './create-scenario/create-scenario.component';

const routes: Routes = [
  { path: '', component: CreateScenarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
