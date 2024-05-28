import { Component } from '@angular/core';
import { Recipe } from '@app/_models';

import { RecipeService } from '@app/_services';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  showRecipeDetails: boolean = false;
  selectedRecipe: any = null;
  selectedRecipeImage: string = '';
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getAll().subscribe(
      recipes => {
        this.recipes = recipes;
      },
      error => {
        console.error('Error fetching recipes:', error);
      }
    );
  }



  viewFullRecipe(recipe: any, index: number) {
    this.selectedRecipe = recipe;
    this.selectedRecipeImage = this.getRecipeImage(index);
    this.showRecipeDetails = true;
  }

  closeRecipeDetails() {
    this.showRecipeDetails = false;
  }

  getRecipeImage(index: number): string {
    return `assets/images/recipe_${index}.png`;
  }
  
  
}
