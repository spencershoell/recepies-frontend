import Guid from "devextreme/core/guid";

export class Unit {
    id: string;
    rowId?: number;

    name?: string;
    short?: string;
    measurementType?: MeasurementType;
    type?: UnitType;

    constructor() {
        this.id = new Guid().toString();
    }
}

export enum MeasurementType {
    Weight = "Weight",
    Volume = "Volume",
    Temperature = "Temperature",
    Time = "Time"
}

export enum UnitType {
    Standard = "Standard",
    Metric = "Metric",
    Both = "Both"
}