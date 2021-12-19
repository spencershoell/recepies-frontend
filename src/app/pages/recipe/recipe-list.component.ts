import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
}

@NgModule({
    imports: [CommonModule, DxDataGridModule],
    declarations: [RecipeListComponent],
    exports: [RecipeListComponent]
})
export class RecipeListModule { }