import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import DevExpress from "devextreme";
import { DxDataGridModule } from "devextreme-angular";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import { CourseStoreService } from "src/app/stores/course.store";
import { RecipeStoreService } from "src/app/stores/recipe.store";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
    dataSource: DataSource;
    courses: CustomStore;
    constructor(
        courseStoreService: CourseStoreService,
        recipeStoreSerivce: RecipeStoreService) {
        this.courses = courseStoreService.store;

        this.dataSource = new DataSource({
            store: recipeStoreSerivce.store
        });
    }
}

@NgModule({
    imports: [CommonModule, DxDataGridModule],
    declarations: [RecipeListComponent],
    exports: [RecipeListComponent]
})
export class RecipeListModule {

}