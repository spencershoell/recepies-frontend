import { Injectable } from "@angular/core";
import Guid from "devextreme/core/guid";
import { Recipe } from "../models";
import { DexieService } from "./core";
import { BaseStoreService } from "./core/base.store";


@Injectable({
    providedIn: 'root'
})
export class RecipeStoreService extends BaseStoreService<Recipe, string> {
    constructor(db: DexieService) {
        super(db);
        this.table = db.recipes!;
    }

    async insert(values: Recipe): Promise<Recipe> {
        values.id = new Guid().toString();
        return super.insert(values);
    }
}