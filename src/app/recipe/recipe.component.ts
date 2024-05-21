import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  newRecipe = { name: '', description: '', ingredients: [], image: '' };
  ingredient: string = '';
  ingredientAmount: string = '1';
  amounts = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  recipes = [];
  selectedRecipe: any = null;
  selectedRecipeIndex: number = -1;
  isEditing: boolean = false;
  ingredientAmounts: string[] = [];
  searchTerm: string = ''; // Add this property

  addRecipe() {
    const ingredientsWithAmounts = this.newRecipe.ingredients.map((ingredient, index) => `${ingredient} (${this.ingredientAmounts[index]})`);
    this.recipes.push({ ...this.newRecipe, ingredients: ingredientsWithAmounts });
    this.newRecipe = { name: '', description: '', ingredients: [], image: '' };
    this.ingredientAmounts = [];
  }

  addIngredient() {
    if (this.ingredient) {
      this.newRecipe.ingredients.push(this.ingredient);
      this.ingredientAmounts.push(this.ingredientAmount);
      this.ingredient = '';
      this.ingredientAmount = '1';
    }
  }

  removeIngredient(index: number) {
    this.newRecipe.ingredients.splice(index, 1);
    this.ingredientAmounts.splice(index, 1);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    if (index === this.selectedRecipeIndex) {
      this.closeRecipeDetail();
    }
  }

  viewRecipe(index: number) {
    this.selectedRecipeIndex = index;
    this.selectedRecipe = { ...this.recipes[index] };
    this.ingredientAmounts = this.selectedRecipe.ingredients.map(ingredient => ingredient.match(/\((\d+)\)$/)[1]);
    this.isEditing = false;
  }

  editRecipe() {
    this.isEditing = true;
  }

  saveRecipe() {
    const ingredientsWithAmounts = this.selectedRecipe.ingredients.map((ingredient, index) => `${ingredient} (${this.ingredientAmounts[index]})`);
    this.recipes[this.selectedRecipeIndex] = { ...this.selectedRecipe, ingredients: ingredientsWithAmounts };
    this.isEditing = false;
  }

  cancelEdit() {
    this.selectedRecipe = { ...this.recipes[this.selectedRecipeIndex] };
    this.ingredientAmounts = this.selectedRecipe.ingredients.map(ingredient => ingredient.match(/\((\d+)\)$/)[1]);
    this.isEditing = false;
  }

  addToShoppingList(recipe: any) {
    console.log('Add to shopping list:', recipe.ingredients);
  }

  closeRecipeDetail() {
    this.selectedRecipe = null;
    this.selectedRecipeIndex = -1;
    this.isEditing = false;
  }

  addNewIngredient() {
    this.selectedRecipe.ingredients.push('');
    this.ingredientAmounts.push('1');
  }

  removeSelectedIngredient(index: number) {
    this.selectedRecipe.ingredients.splice(index, 1);
    this.ingredientAmounts.splice(index, 1);
  }

  // Add the filteredRecipes and clearSearch methods here
  filteredRecipes() {
    if (!this.searchTerm.trim()) {
      return this.recipes;
    }
    return this.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  clearSearch() {
    this.searchTerm = '';
  }
}
