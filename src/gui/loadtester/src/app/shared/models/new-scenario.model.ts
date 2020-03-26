export class NewScenario {
    taskforce: string;
    bps: number;
    txTtl: number;
    maxBodySize: number;
    timeToRun: number;

    deserialize(input: any): NewScenario {
        Object.assign(this, input);
        return this;
    }
}