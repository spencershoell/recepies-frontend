import { Injectable } from "@angular/core";
import { Unit } from "../models";
import { DexieService } from "./core";
import { BaseStoreService } from ".";


@Injectable({
    providedIn: 'root'
})
export class UnitStoreService extends BaseStoreService<Unit, string> {
    constructor(db: DexieService) {
        super(db);
        this.table = db.units!;
    }
}