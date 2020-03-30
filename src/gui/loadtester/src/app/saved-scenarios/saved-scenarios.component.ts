import { Component, OnInit } from '@angular/core';
import { ScenarioDescription } from '../shared/models/scenario-description.model';
import { Scenario, PlatfromStat } from '../shared/models/scenario.model';
import { MatDialog } from '@angular/material/dialog';
import { ScenarioDescriptionComponent } from './scenario-description/scenario-description.component';

@Component({
  selector: 'app-saved-scenarios',
  templateUrl: './saved-scenarios.component.html',
  styleUrls: ['./saved-scenarios.component.css']
})
export class SavedScenariosComponent implements OnInit {
  descriptions: ScenarioDescription[];

  constructor(public dialog: MatDialog) { 
    this.descriptions = this.getMock();
  }

  ngOnInit(): void {
  }

  clickedDescription(description: ScenarioDescription) {
    let dialogRef = this.dialog.open(ScenarioDescriptionComponent, {
      data: description,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(res => {
    });
  }

  getMock(): ScenarioDescription[] {
    let description = new ScenarioDescription();
    description.id = "34adf-456gggh-3dfffb";
    description.bps = 500;
    description.maxBodySize = 1300;
    description.taskforce = "HelloWorld";
    description.timeToRun = 60;
    description.txTtl = 5;
    description.prevScenarios = this.getScenarios();

    return [description, description, description];
  }

  getScenarios(): Scenario[] {
    let scenario = new Scenario();
    scenario.sentTx = 100;
    scenario.txAckedByBroker = 80;
    scenario.txFullyAcked = 50;

    let platStats = new PlatfromStat();
    platStats.name = "ספינה 1";
    platStats.averageRtt = 50.5;
    platStats.standardDeviation = 6.8;
    scenario.platformStats = [platStats];

    let platStats1 = new PlatfromStat();
    platStats1.name = "ספינה 2";
    platStats1.averageRtt = 33.4;
    platStats1.standardDeviation = 10.1;
    scenario.platformStats.push(platStats1);

    let scenario2 = new Scenario();
    scenario2.sentTx = 10;
    scenario2.txAckedByBroker = 53;
    scenario2.txFullyAcked = 22;
    scenario2.platformStats = [platStats, platStats1];

    return [scenario, scenario2, scenario, scenario2, scenario, scenario2];
  }
}
