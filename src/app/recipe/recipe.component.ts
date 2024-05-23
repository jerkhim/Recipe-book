import { Component } from '@angular/core';
import { Recipe } from '../_models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  fullRecipe: { name: string, description: string, ingredients: string[], instructions: string[] } | null = null;

  viewFullRecipe(recipeName: string) {
    // Sample data for demonstration
    if (recipeName === 'Egg Manchurian') {
      this.fullRecipe = {
        name: 'Egg Manchurian',
        description: 'Delicious Egg Manchurian recipe.',
        ingredients: ['Egg', 'Soy Sauce', 'Garlic'],
        instructions: ['Step 1: Boil eggs', 'Step 2: Prepare sauce', 'Step 3: Mix eggs with sauce']
      };
    } else if (recipeName === 'Pure Vegetable Bowl') {
      this.fullRecipe = {
        name: 'Pure Vegetable Bowl',
        description: 'Healthy and nutritious vegetable bowl recipe.',
        ingredients: ['Carrot', 'Broccoli', 'Bell Pepper'],
        instructions: ['Step 1: Chop vegetables', 'Step 2: Stir fry vegetables', 'Step 3: Serve with sauce']
      };
    } else if (recipeName === 'Egg Masala Ramen') {
      this.fullRecipe = {
        name: 'Egg Masala Ramen',
        description: 'Spicy and flavorful Egg Masala Ramen recipe.',
        ingredients: ['Ramen Noodles', 'Egg', 'Masala'],
        instructions: ['Step 1: Cook noodles', 'Step 2: Prepare masala', 'Step 3: Mix noodles with masala']
      };
    } else {
      console.error('Recipe not found:', recipeName);
    }
  }

  closeFullRecipe() {
    this.fullRecipe = null;
  }
}
