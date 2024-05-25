import { Component } from '@angular/core';
import { Recipe } from '../_models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  showRecipeDetails: boolean = false;
  selectedRecipe: any = null;

  recipes = [
    {
      name: 'Egg Manchurian',
      ingredients: ['Eggs', 'Soy sauce', 'Cornstarch', 'Ginger', 'Garlic', 'Vegetables'],
      instructions: ['Boil eggs', 'Prepare sauce', 'Cook vegetables', 'Combine all ingredients']
    },
    {
      name: 'Pure Vegetable Bowl',
      ingredients: ['Assorted vegetables', 'Rice', 'Soy sauce', 'Sesame oil'],
      instructions: ['Cook rice', 'Chop vegetables', 'Stir-fry vegetables', 'Combine with rice']
    },
    {
      name: 'Egg Masala Ramen',
      ingredients: ['Ramen noodles', 'Eggs', 'Masala spices', 'Vegetables', 'Broth'],
      instructions: ['Boil noodles', 'Prepare masala spice mix', 'Cook vegetables and eggs in broth', 'Combine all ingredients']
    }
  ];

  viewFullRecipe(recipe: any) {
    this.selectedRecipe = recipe;
    this.showRecipeDetails = true;
  }

  closeRecipeDetails() {
    this.showRecipeDetails = false;
  }
  getRecipeImage(index: number): string {
    return `assets/images/recipe_${index}.png`;
  }
}