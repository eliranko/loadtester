import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScenarioDescription } from 'src/app/shared/models/scenario-description.model';

@Component({
  selector: 'app-scenario-description-preview',
  templateUrl: './scenario-description-preview.component.html',
  styleUrls: ['./scenario-description-preview.component.css']
})
export class ScenarioDescriptionPreviewComponent implements OnInit {
  @Input() description: ScenarioDescription;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
