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
  selectedRecipeImage: string = '';

  recipes = [
    {
      name: 'Egg Manchurian',
      description: 'A delicious Indo-Chinese dish made with eggs and vegetables in a flavorful sauce.',
      ingredients: ['Eggs', 'Soy sauce', 'Cornstarch', 'Ginger', 'Garlic', 'Vegetables'],
      instructions: ['Boil eggs', 'Prepare sauce', 'Cook vegetables', 'Combine all ingredients']
    },
    {
      name: 'Pure Vegetable',
      description: 'A healthy and nutritious dish featuring assorted vegetables stir-fried with rice.',
      ingredients: ['Assorted vegetables', 'Rice', 'Soy sauce', 'Sesame oil'],
      instructions: ['Cook rice', 'Chop vegetables', 'Stir-fry vegetables', 'Combine with rice']
    },
    {
      name: 'Egg Masala Ramen',
      description: 'A spicy and aromatic noodle soup featuring eggs, masala spices, and fresh vegetables.',
      ingredients: ['Ramen noodles', 'Eggs', 'Masala spices', 'Vegetables', 'Broth'],
      instructions: ['Boil noodles', 'Prepare masala spice mix', 'Cook vegetables and eggs in broth', 'Combine all ingredients']
    },
    {
      name: 'Pumpkin Soup',
      description: 'A creamy and comforting soup made with fresh pumpkin, aromatic spices, and coconut milk.',
      ingredients: ['Pumpkin', 'Vegetable broth', 'Onion', 'Garlic', 'Coconut milk', 'Salt', 'Pepper', 'Nutmeg'],
      instructions: [
        'Peel and chop the pumpkin, onion, and garlic.',
        'In a large pot, sauté the onion and garlic until soft.',
        'Add the chopped pumpkin to the pot and cook for 5 minutes.',
        'Pour in the vegetable broth and bring to a boil. Reduce heat and simmer for 20 minutes, or until the pumpkin is tender.',
        'Using an immersion blender, blend the soup until smooth. Alternatively, transfer the soup to a blender and blend in batches until smooth.',
        'Stir in the coconut milk and season with salt, pepper, and nutmeg to taste.',
        'Simmer for an additional 5 minutes, then serve hot.'
      ]
    },
    {
      name: 'Egg Masala Ramen',
      description: 'A spicy and aromatic noodle soup featuring eggs, masala spices, and fresh vegetables.',
      ingredients: ['Ramen noodles', 'Eggs', 'Masala spices', 'Vegetables', 'Broth'],
      instructions: ['Boil noodles', 'Prepare masala spice mix', 'Cook vegetables and eggs in broth', 'Combine all ingredients']
    },
    {
      name: 'Egg Masala Ramen',
      description: 'A spicy and aromatic noodle soup featuring eggs, masala spices, and fresh vegetables.',
      ingredients: ['Ramen noodles', 'Eggs', 'Masala spices', 'Vegetables', 'Broth'],
      instructions: ['Boil noodles', 'Prepare masala spice mix', 'Cook vegetables and eggs in broth', 'Combine all ingredients']
    }
];

    


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
