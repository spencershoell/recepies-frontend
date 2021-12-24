import Guid from "devextreme/core/guid";
import { RecipeCategory } from ".";
import { IIdentifiable } from "./interfaces";

export class Category implements IIdentifiable<string>{
    id: string;
    rowId?: number;

    name?: string;

    recipies?: Array<RecipeCategory>;

    constructor() {
        this.id = new Guid().toString();
    }
}