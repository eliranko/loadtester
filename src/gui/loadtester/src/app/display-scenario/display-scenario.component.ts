import { Component, OnInit, Input } from '@angular/core';
import { Scenario } from '../shared/models/scenario.model';

@Component({
  selector: 'app-display-scenario',
  templateUrl: './display-scenario.component.html',
  styleUrls: ['./display-scenario.component.css']
})
export class DisplayScenarioComponent implements OnInit {
  @Input() scenario: Scenario;
  @Input() type: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
