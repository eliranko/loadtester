import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CreateScenarioComponent } from './create-scenario/create-scenario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SavedScenariosComponent } from './saved-scenarios/saved-scenarios.component';
import { DisplayScenarioComponent } from './display-scenario/display-scenario.component';
import { MatCardModule } from '@angular/material/card';
import { ScenarioCardComponent } from './display-scenario/scenario-card/scenario-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScenarioPlatsStatsComponent } from './display-scenario/scenario-plats-stats/scenario-plats-stats.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ScenarioDescriptionPreviewComponent } from './saved-scenarios/scenario-description-preview/scenario-description-preview.component';
import { ScenarioDescriptionComponent } from './saved-scenarios/scenario-description/scenario-description.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RunningScenarioComponent } from './running-scenario/running-scenario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CreateScenarioComponent,
    SavedScenariosComponent,
    DisplayScenarioComponent,
    ScenarioCardComponent,
    ScenarioPlatsStatsComponent,
    ScenarioDescriptionPreviewComponent,
    ScenarioDescriptionComponent,
    RunningScenarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule
  ],
  entryComponents: [
    ScenarioDescriptionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
