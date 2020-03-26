import { Component, OnInit } from '@angular/core';
import { ScenarioDescription } from '../shared/models/scenario-description.model';

@Component({
  selector: 'app-saved-scenarios',
  templateUrl: './saved-scenarios.component.html',
  styleUrls: ['./saved-scenarios.component.css']
})
export class SavedScenariosComponent implements OnInit {
  descriptions: ScenarioDescription[];

  constructor() { 
    this.descriptions = [];
    let description = new ScenarioDescription();
    description.id = "34adf-456gggh-3dfffb";
    description.bps = 500;
    description.maxBodySize = 1300;
    description.taskforce = "HelloWorld";
    description.timeToRun = 60;
    description.txTtl = 5;

    this.descriptions.push(description);
    this.descriptions.push(description);
    this.descriptions.push(description);
  }

  ngOnInit(): void {
  }

  clickedDescription(description: ScenarioDescription) {
    alert('clicked: ' + description.id);
  }
}
