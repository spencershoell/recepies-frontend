import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { Course, Ingredient, Recipe, Unit } from "src/app/models";

@Injectable({
    providedIn: 'root'
})
export class DexieService extends Dexie {
    courses?: Dexie.Table<Course, string>;
    ingredients?: Dexie.Table<Ingredient, string>;
    recipes?: Dexie.Table<Recipe, string>;
    units?: Dexie.Table<Unit, string>;

    constructor() {
        super('com.shoell.recipes');
        this.version(2).stores({
            courses: "&id",
            ingredients: "&id",
            recipes: '&id,rowId,prepTime,cookTime,servingSize,courseId',
            units: "&id"
        });

        this.courses?.mapToClass(Course);
        this.ingredients?.mapToClass(Ingredient);
        this.recipes?.mapToClass(Recipe);
        this.units?.mapToClass(Unit);
    }
}