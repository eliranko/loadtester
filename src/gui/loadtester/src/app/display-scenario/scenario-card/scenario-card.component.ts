import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Scenario } from 'src/app/shared/models/scenario.model';

@Component({
  selector: 'app-scenario-card',
  templateUrl: './scenario-card.component.html',
  styleUrls: ['./scenario-card.component.css']
})
export class ScenarioCardComponent implements OnInit, OnChanges {
  @Input() scenario: Scenario;
  @Input() type: string;
  brokerAckProgress: number;
  platformsAckProgress: number;

  constructor() {}

  ngOnInit(): void {
    this.calcProgress();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.scenario = changes.scenario.currentValue;
    this.calcProgress();
  }

  calcProgress() {
    this.brokerAckProgress = Math.floor((this.scenario.txAckedByBroker / this.scenario.sentTx) * 100);
    this.platformsAckProgress = Math.floor((this.scenario.txFullyAcked / this.scenario.sentTx)  * 100);
  }
}
