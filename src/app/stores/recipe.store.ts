import { Injectable } from "@angular/core";
import { Recipe } from "../models";
import { BaseStoreService, DexieService } from ".";


@Injectable({
    providedIn: 'root'
})
export class RecipeStoreService extends BaseStoreService<Recipe, string> {
    constructor(db: DexieService) {
        super(db);
        this.table = db.recipes!;
    }
}