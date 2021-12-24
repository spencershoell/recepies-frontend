import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import DataSource from "devextreme/data/data_source";
import { CourseStoreService } from "src/app/stores/course.store";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
    dataSource: DataSource;
    constructor(
        courseStoreService: CourseStoreService) {
        this.dataSource = new DataSource({
            store: courseStoreService.store
        });
    }
}

@NgModule({
    imports: [CommonModule, DxDataGridModule],
    declarations: [CourseListComponent],
    exports: [CourseListComponent]
})
export class CourseListModule {

}