import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewScenario } from '../shared/models/new-scenario.model';

@Component({
  selector: 'app-create-scenario',
  templateUrl: './create-scenario.component.html',
  styleUrls: ['./create-scenario.component.css']
})
export class CreateScenarioComponent implements OnInit {
  form;
  
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      taskforce: '',
      bps: '',
      txTtl: '',
      maxBodySize: '',
      timeToRun: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    let scenario = new NewScenario().deserialize(data);
    this.form.reset();
  }
}
