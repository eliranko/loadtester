import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
      bps: 0,
      txTtl: 0,
      maxBodySize: 0,
      timeToRun: 0
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.form.reset();
  }
}
