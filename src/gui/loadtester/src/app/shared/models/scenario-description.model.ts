import { Scenario } from './scenario.model';

export class ScenarioDescription {
    id: string;
    taskforce: string;
    bps: number;
    txTtl: number;
    maxBodySize: number;
    timeToRun: number;
    prevScenarios: Scenario[];

    deserialize(input: any): ScenarioDescription {
        Object.assign(this, input);
        this.prevScenarios = [];
        for(let s of input.prevScenarios) {
            this.prevScenarios.push(new Scenario().deserialize(s));
        }
        
        return this;
    }
}