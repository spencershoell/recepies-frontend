import { Injectable } from "@angular/core";
import Guid from "devextreme/core/guid";
import { Course } from "../models";
import { DexieService } from "./core";
import { BaseStoreService } from "./core/base.store";


@Injectable({
    providedIn: 'root'
})
export class CourseStoreService extends BaseStoreService<Course, string> {
    constructor(db: DexieService) {
        super(db);
        this.table = db.courses!;
    }

    async insert(values: Course): Promise<Course> {
        values.id = new Guid().toString();
        return super.insert(values);
    }
}