import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { RecipeService } from '@app/_services';
import { Recipe } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private recipeService: RecipeService) {}

    ngOnInit() {
        this.loadRecipes();
    }

    loadRecipes() {
        this.recipeService.getAll()
            .pipe(first())
            .subscribe(
                recipes => {
                    this.recipes = recipes;
                },
                error => {
                    console.error('Error loading recipes:', error);
                }
            );
    }

    deleteRecipe(id: string) {
        const index = this.recipes.findIndex(x => x.id === id);
        if (index !== -1) {
            const deletedRecipe = this.recipes[index];
            this.recipes.splice(index, 1);
            this.recipeService.deleteRecipe(id)
                .pipe(first())
                .subscribe(
                    () => {
                        console.log('Recipe deleted successfully');
                    },
                    error => {
                        // Handle error
                        console.error('Error deleting recipe:', error);
                        // Restore the recipe if deletion fails
                        this.recipes.splice(index, 0, deletedRecipe);
                    }
                );
        }
    }
}
