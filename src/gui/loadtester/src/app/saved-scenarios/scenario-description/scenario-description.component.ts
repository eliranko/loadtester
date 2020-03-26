import { Component, OnInit } from '@angular/core';
import { ScenarioDescription } from 'src/app/shared/models/scenario-description.model';

@Component({
  selector: 'app-scenario-description',
  templateUrl: './scenario-description.component.html',
  styleUrls: ['./scenario-description.component.css']
})
export class ScenarioDescriptionComponent implements OnInit {
  description: ScenarioDescription;

  constructor() { 
    this.description = new ScenarioDescription();
    this.description.id = "34adf-456gggh-3dfffb";
    this.description.bps = 500;
    this.description.maxBodySize = 1300;
    this.description.taskforce = "HelloWorld";
    this.description.timeToRun = 60;
    this.description.txTtl = 5;
  }

  ngOnInit(): void {
  }

}
