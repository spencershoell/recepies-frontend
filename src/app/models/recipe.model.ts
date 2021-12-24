import Guid from "devextreme/core/guid";
import { Unit } from "../class/measurment-unit.class";
import { IIdentifiable } from "./interfaces";

export class Recipe implements IIdentifiable<string> {
    id: string;
    rowId: number;

    name: string;
    prepTime?: number;
    prepTimeUnit?: Unit;
    cookTime?: number;
    cookTimeUnit?: Unit;
    totalTime?: number;
    totalTimeUnit?: Unit;
    yeild?: number;
    yeildUnit?: Unit

    constructor() {
        this.id = new Guid().toString();
        this.rowId = 0;
        this.name = "";        
    }
}