import { NgModule } from "@angular/core";
import { RecipeListComponent, RecipeListModule } from ".";

@NgModule({
    imports: [RecipeListModule],
    declarations: [],
    exports: [RecipeListComponent]
})
export class RecipeModule { }