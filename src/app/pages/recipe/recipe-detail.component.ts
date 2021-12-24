import { CommonModule } from "@angular/common";
import { Component, NgModule, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DxDataGridModule } from "devextreme-angular";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import { Subscription } from "rxjs";
import { Recipe } from "src/app/models";
import { CourseStoreService } from "src/app/stores/course.store";
import { RecipeStoreService } from "src/app/stores/recipe.store";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
    private _routerSubscription!: Subscription;
    private _recipe!: Recipe;
    private _recipeId!: string;

    dataSource: DataSource;
    courses: CustomStore;

    get recipe(): Recipe {
        return this._recipe;
    }

    constructor(
        courseStoreService: CourseStoreService,
        private recipeStoreSerivce: RecipeStoreService,
        private router: ActivatedRoute) {
        this.courses = courseStoreService.store;

        this.dataSource = new DataSource({
            store: recipeStoreSerivce.store
        });
    }

    ngOnInit(): void {
        this._routerSubscription = this.router.params.subscribe(async (params) => {
            this._recipeId = params.recipeId;
            await this.loadRecipe();
        });
    }

    ngOnDestroy(): void {
        this._routerSubscription.unsubscribe();
    }

    private async loadRecipe(): Promise<void> {
        console.log(this._recipeId);
        this._recipe = await this.recipeStoreSerivce.byKey(this._recipeId);  
    }
}

@NgModule({
    imports: [CommonModule, DxDataGridModule],
    declarations: [RecipeDetailComponent],
    exports: [RecipeDetailComponent]
})
export class RecipeDetailModule { }