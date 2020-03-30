import { Component, OnInit } from '@angular/core';
import { Scenario, PlatfromStat } from '../shared/models/scenario.model';

@Component({
  selector: 'app-running-scenario',
  templateUrl: './running-scenario.component.html',
  styleUrls: ['./running-scenario.component.css']
})
export class RunningScenarioComponent implements OnInit {
  scenario: Scenario;

  constructor() { 
    this.scenario = this.getMock();
  }

  ngOnInit(): void {
  }

  getMock(): Scenario {
    let scenario = new Scenario();
    scenario.startedAt = Date.now();
    scenario.sentTx = 100;
    scenario.txAckedByBroker = 80;
    scenario.txFullyAcked = 50;

    scenario.platformStats = [];

    let platStats = new PlatfromStat();
    platStats.name = "ספינה 1";
    platStats.averageRtt = 50.5;
    platStats.standardDeviation = 6.8;
    scenario.platformStats.push(platStats);

    let platStats1 = new PlatfromStat();
    platStats1.name = "ספינה 2";
    platStats1.averageRtt = 33.4;
    platStats1.standardDeviation = 10.1;
    scenario.platformStats.push(platStats1);

    let platStats2 = new PlatfromStat();
    platStats2.name = "ספינה 3";
    platStats2.averageRtt = 5.9;
    platStats2.standardDeviation = 1.2;
    scenario.platformStats.push(platStats2);

    let platStats3 = new PlatfromStat();
    platStats3.name = "ספינה 4";
    platStats3.averageRtt = 558.1;
    platStats3.standardDeviation = 59.5;
    scenario.platformStats.push(platStats3);

    return scenario;
  }

}
