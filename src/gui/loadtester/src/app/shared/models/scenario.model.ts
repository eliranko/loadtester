export class PlatfromStat {
    name: string;
    averageRtt: number;
    standardDeviation: number;
    pendingAcks: number;
}

export class Scenario {
    id: string;
    startedAt: number;
    sentTx: number;
    txAckedByBroker: number;
    txFullyAcked: number;
    platformStats: PlatfromStat[];

    deserialize(input: any): Scenario {
        Object.assign(this, input);
        return this;
    }
}