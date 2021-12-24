import { NgModule } from "@angular/core";
import { CourseListComponent, CourseListModule } from ".";

@NgModule({
    imports: [CourseListModule],
    declarations: [],
    exports: [CourseListComponent]
})
export class CourseModule { }