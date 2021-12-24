import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { Recipe } from "src/app/models";

@Injectable()
export class DexieService extends Dexie {
    recipes?: Dexie.Table<Recipe, string>;

    constructor() {
        super('com.shoell.recipes');
        this.version(1).stores({
            recipes: '&id'
        });

        this.recipes?.mapToClass(Recipe);
    }
}