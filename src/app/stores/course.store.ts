import { Injectable } from "@angular/core";
import { Course } from "../models";
import { BaseStoreService, DexieService } from ".";


@Injectable({
    providedIn: 'root'
})
export class CourseStoreService extends BaseStoreService<Course, string> {
    constructor(db: DexieService) {
        super(db);
        this.table = db.courses!;
    }
}