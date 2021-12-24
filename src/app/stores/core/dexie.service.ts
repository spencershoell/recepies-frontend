import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { Course, Recipe } from "src/app/models";

@Injectable({
    providedIn: 'root'
})
export class DexieService extends Dexie {
    courses?: Dexie.Table<Course, string>;
    recipes?: Dexie.Table<Recipe, string>;

    constructor() {
        super('com.shoell.recipes');
        this.version(1).stores({
            courses: "&id",
            recipes: '&id,rowId,prepTime,cookTime,servingSize,courseId'
        });

        this.recipes?.mapToClass(Recipe);
        this.courses?.mapToClass(Course);
    }
}