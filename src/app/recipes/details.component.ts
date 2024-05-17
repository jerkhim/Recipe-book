import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {

 
    constructor(private router: Router) {}

    recipes = [
        { id: 1, name: 'Egg Sandwich', image: 'assets/images/recpie_1.png', description: 'Description for Egg Sandwich' },
        { id: 2, name: 'Pure Vegetable Bowl', image: 'assets/images/recpie_2.png', description: 'Description for Pure Vegetable Bowl' },
        { id: 3, name: 'Egg Adobo', image: 'assets/images/recpie_3.png', description: 'Description for Egg Sandwich' },
        { id: 4, name: 'Soup', image: 'assets/images/recpie_4.png', description: 'Description for Egg Sandwich' },
        { id: 5, name: 'Salad Sad', image: 'assets/images/recpie_5.png', description: 'Description for Egg Sandwich' },
        { id: 6, name: 'Salad', image: 'assets/images/recpie_6.png', description: 'Description for Egg Sandwich' },
        // Add more recipes here
    ];

    viewRecipe(index: number) {
        const recipeId = this.recipes[index].id;
        this.router.navigate(['/recipe', recipeId]);
    }
}