import { Unit } from "../class/measurment-unit.class";

export interface Recipe {
    id: string
    rowId: number;

    name: string;
    prepTime: number;
    prepTimeUnit: Unit;
    cookTime: number;
    cookTimeUnit: Unit;
    totalTime: number;
    totalTimeUnit: Unit;
    yeild: number;
    yeildUnit: Unit
}