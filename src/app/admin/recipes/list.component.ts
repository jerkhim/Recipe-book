import { Component, OnInit } from '@angular/core';
import { RecipeService } from '@app/_services'; // Import RecipeService


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  recipes: any[] = []; // Define the recipes property

  constructor(private recipeService: RecipeService) { } // Inject RecipeService

  ngOnInit(): void {
    this.loadRecipes(); // Call loadRecipes method on component initialization
  }

  loadRecipes() {
    this.recipeService.getAll().subscribe(
      (data) => {
        this.recipes = data; // Assign the fetched recipes to the recipes property
      },
      (error) => {
        console.log('Error fetching recipes:', error);
      }
    );
  }
}
