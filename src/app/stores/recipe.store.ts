import { Injectable } from "@angular/core";
import { Recipe } from "../models";
import { DexieService } from "./core";
import { BaseStoreService } from "./core/base.store";


@Injectable()
export class RecipeStoreService extends BaseStoreService<Recipe, string> {
    constructor(db: DexieService) {
        super(db, db.recipes!);
    }
}