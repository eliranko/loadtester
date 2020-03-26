import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScenarioDescription } from 'src/app/shared/models/scenario-description.model';

@Component({
  selector: 'app-scenario-description',
  templateUrl: './scenario-description.component.html',
  styleUrls: ['./scenario-description.component.css']
})
export class ScenarioDescriptionComponent implements OnInit {
  @Input() description: ScenarioDescription;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
