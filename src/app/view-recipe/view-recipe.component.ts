import { Component } from '@angular/core';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.css']
})
export class ViewRecipeComponent {
  recipeDetails = {
    title: 'Spanish Egg Bowl',
    description: 'Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    price: '$10.99'
  };

  addToShoppingList() {
    // Logic to add the recipe to the shopping list
    console.log('Recipe added to shopping list');
  }

  editRecipe() {
    // Logic to edit the recipe
    console.log('Editing recipe');
  }

  deleteRecipe() {
    // Logic to delete the recipe
    console.log('Deleting recipe');
  }
}
