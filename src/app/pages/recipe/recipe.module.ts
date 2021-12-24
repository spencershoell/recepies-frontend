import { NgModule } from "@angular/core";
import { RecipeDetailComponent, RecipeDetailModule, RecipeListComponent, RecipeListModule } from ".";

@NgModule({
    imports: [RecipeListModule, RecipeDetailModule],
    declarations: [],
    exports: [RecipeListComponent, RecipeDetailComponent]
})
export class RecipeModule { }