import { Component, OnInit } from '@angular/core';
import { Scenario } from 'src/app/shared/models/scenario.model';

@Component({
  selector: 'app-scenario-card',
  templateUrl: './scenario-card.component.html',
  styleUrls: ['./scenario-card.component.css']
})
export class ScenarioCardComponent implements OnInit {
  scenario: Scenario;
  brokerAckProgress: number;
  platformsAckProgress: number;

  constructor() { 
    this.scenario = new Scenario();
    this.scenario.sentTx = 100;
    this.scenario.txAckedByBroker = 80;
    this.scenario.txFullyAcked = 50;

    this.calcProgress();
  }

  ngOnInit(): void {
  }

  calcProgress() {
    this.brokerAckProgress = Math.floor((this.scenario.txAckedByBroker / this.scenario.sentTx) * 100);
    this.platformsAckProgress = Math.floor((this.scenario.txFullyAcked / this.scenario.sentTx)  * 100);
  }
}
