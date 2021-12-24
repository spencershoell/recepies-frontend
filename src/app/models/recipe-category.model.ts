import { Category, Recipe } from ".";
import { IIdentifiableIntersect } from "./interfaces";

export class RecipeCategory implements IIdentifiableIntersect<string, string> {
    courseId?: string;
    categoryId?: string;

    course?: Recipe;
    category?: Category;

    get id1(): string {
        return this.courseId!;
    }

    get id2(): string {
        return this.categoryId!;
    }
}