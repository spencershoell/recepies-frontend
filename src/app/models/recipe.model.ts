import Guid from "devextreme/core/guid";
import { RecipeCategory } from ".";
import { Common } from "../class";
import { Unit } from "../class/measurment-unit.class";
import { Course } from "./course.model";
import { IIdentifiable } from "./interfaces";

export class Recipe implements IIdentifiable<string> {
    id: string;
    rowId?: number;

    name?: string;
    prepTime?: number;
    cookTime?: number;
    get totalTime(): number {
        let totalTime = 0;
        if (Common.isNotNull(this.prepTime)) {
            totalTime += +this.prepTime!;
        }
        if (Common.isNotNull(this.cookTime)) {
            totalTime += +this.cookTime!;
        }
        return totalTime;
    }
    servingSize?: number;

    courseId?: string;

    course?: Course;

    categories?: Array<RecipeCategory>;

    constructor() {
        this.id = new Guid().toString();
    }
}