import { CommonModule } from "@angular/common";
import { Component, NgModule, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DxButtonModule, DxDataGridModule, DxFormModule, DxTabPanelModule } from "devextreme-angular";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import { Subscription } from "rxjs";
import { Recipe } from "src/app/models";
import { CourseStoreService } from "src/app/stores/course.store";
import { RecipeStoreService } from "src/app/stores/recipe.store";
import { faEdit } from '@fortawesome/pro-solid-svg-icons';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
    faEdit = faEdit;

    private _routerSubscription!: Subscription;
    private _recipe!: Recipe;
    private _recipeId!: string;

    private _detailEditing: boolean = false;

    dataSource: DataSource;
    courses: CustomStore;

    tabItems: Array<any> = [
        {
            title: 'Details',
            template: 'detailsTemplate'
        },
        {
            title: 'Ingredients',
            template: 'ingredientsTemplate'
        },
        {
            title: 'Instructions',
            template: 'instructionsTemplate'
        }
    ];

    get recipe(): Recipe {
        return this._recipe;
    }

    get detailEditing(): boolean {
        return this._detailEditing;
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

    async detailCancel() {
        await this.loadRecipe();
        this._detailEditing = false;
    }

    detailEdit() {
        this._detailEditing = true;
    }

    async detailSave() {
        await this.recipeStoreSerivce.update(this.recipe.id, this.recipe);
        this._detailEditing = false;
    }

    private async loadRecipe(): Promise<void> {
        this._recipe = await this.recipeStoreSerivce.byKey(this._recipeId);
    }
}

@NgModule({
    imports: [CommonModule, DxButtonModule, DxDataGridModule, DxFormModule, DxTabPanelModule],
    declarations: [RecipeDetailComponent],
    exports: [RecipeDetailComponent]
})
export class RecipeDetailModule { }