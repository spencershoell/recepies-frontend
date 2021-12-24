import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import DataSource from "devextreme/data/data_source";
import { RecipeStoreService } from "src/app/stores/recipe.store";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
    dataSource: DataSource;
    constructor(recipeStoreSerivce: RecipeStoreService) {
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