import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateScenarioComponent } from './create-scenario/create-scenario.component';
import { SavedScenariosComponent } from './saved-scenarios/saved-scenarios.component';
import { RunningScenarioComponent } from './running-scenario/running-scenario.component';

const routes: Routes = [
  { path: 'create', component: CreateScenarioComponent },
  { path: 'saved', component: SavedScenariosComponent },
  { path: 'running', component: RunningScenarioComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
