import Guid from "devextreme/core/guid";
import { Recipe } from ".";
import { IIdentifiable } from "./interfaces";

export class Course implements IIdentifiable<string> {
    id: string;
    rowId?: number;

    name?: string;
    displayOrder?: number;

    recipies?: Array<Recipe>;

    constructor() {
        this.id = new Guid().toString();
    }
}