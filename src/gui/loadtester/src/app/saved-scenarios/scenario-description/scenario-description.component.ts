import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScenarioDescription } from 'src/app/shared/models/scenario-description.model';

@Component({
  selector: 'app-scenario-description',
  templateUrl: './scenario-description.component.html',
  styleUrls: ['./scenario-description.component.css']
})
export class ScenarioDescriptionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ScenarioDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ScenarioDescription) { }

  ngOnInit(): void {
  }

}
