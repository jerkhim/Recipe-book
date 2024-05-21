import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {

 
    constructor(private router: Router) {}

    addToShoppingListMessage: string = ''; 
    shoppingList: string[] = [];
    selectedRecipe: any;
    addedItems: string[] = [];
   
    recipes = [
        {  
          name: 'Adobo', 
          image: 'assets/images/adobo.png', 
          description: 'Adobo is a popular Filipino dish known for its savory and tangy flavors. It typically consists of meat (such as chicken, pork, or beef) marinated in vinegar, soy sauce, garlic, and spices, then simmered until tender. The cooking process allows the meat to absorb the rich flavors of the marinade, resulting in a deliciously tender and flavorful dish. Adobo is often served with steamed rice and is a staple in Filipino cuisine, enjoyed by many for its comforting and hearty taste.', 
          ingredients: ['Meat (chicken, pork, or beef)', 'Vinegar', 'Soy sauce', 'Garlic', 'Spices']
        },   
        {  
            name: 'Dinuguan', 
            image: 'assets/images/dugo2.jpg', 
            description: 'Dinuguan, also known as "chocolate meat," is a Filipino dish with a rich and savory flavor.',
            ingredients: ['Pork belly', 'Pork blood', 'Vinegar', 'Garlic', 'Onion', 'Chilies', 'Fish sauce', 'Salt', 'Pepper']
        },
        
          {  
            name: 'Pancit', 
            image: 'assets/images/pancit.png', 
            description: 'Bulalo is a Filipino beef soup made from beef shanks and bone marrow, corn on the cob, and various vegetables.', 
            ingredients: ['Beef shanks', 'Bone marrow', 'Corn on the cob', 'Potatoes', 'Cabbage', 'Green beans', 'Onion', 'Garlic', 'Salt', 'Pepper']
          },
          {  
            name: 'Egg Salad', 
            image: 'assets/images/recpie_2.png', 
            description: 'Egg Salad is a classic dish made with boiled eggs, mayonnaise, mustard, and seasonings, creating a creamy and flavorful mixture.',
            ingredients: ['Boiled eggs', 'Mayonnaise', 'Mustard', 'Salt', 'Pepper']
        }
        
          
        // Add more recipes here
      ];
      
   
    
    addToShoppingList(recipe: any) {
   
    this.shoppingList.push(recipe.name);
    this.addedItems.push(recipe.name); // Add the item to the addedItems array
}
    deleteFromShoppingList(index: number) {
        const deletedItem = this.shoppingList[index];
        this.shoppingList.splice(index, 1);
        const addedItemIndex = this.addedItems.indexOf(deletedItem);
        if (addedItemIndex !== -1) {
            this.addedItems.splice(addedItemIndex, 1);
       
    }
    }
    viewRecipe(recipe: any) {
        this.selectedRecipe = recipe;
        // Show modal
        document.querySelector('.modal').classList.add('show');
    }

    closeModal() {
        this.selectedRecipe = null;
        // Hide modal
        document.querySelector('.modal').classList.remove('show');
    }

    
}
