export class ScenarioDescription {
    id: string;
    taskforce: string;
    bps: number;
    txTtl: number;
    maxBodySize: number;
    timeToRun: number;

    deserialize(input: any): ScenarioDescription {
        Object.assign(this, input);
        return this;
    }
}