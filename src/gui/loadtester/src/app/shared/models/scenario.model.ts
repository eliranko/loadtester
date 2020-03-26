export class PlatfromStat {
    averageRtt: number;
    standardDeviation: number;
}

export class Scenario {
    id: string;
    sentTx: number;
    txAckedByBroker: number;
    txFullyAcked: number;
    platformStats: Map<number, PlatfromStat>;

    deserialize(input: any): Scenario {
        Object.assign(this, input);
        return this;
    }
}