import Guid from "devextreme/core/guid";
import { Unit } from ".";

export class Ingredient {
    id: string;
    rowId?: number;

    name?: string;
    quantity?: number;
    unit?: Unit;

    constructor() {
        this.id = new Guid().toString();
    }
}