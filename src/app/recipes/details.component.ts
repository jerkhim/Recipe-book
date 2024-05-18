import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {

 
    constructor(private router: Router) {}
    addToShoppingListMessage: string = ''; 
    shoppingList: string[] = [];
    selectedRecipe: any;

    recipes = [
        {  name: 'Adobo', image: 'assets/images/adobo.png', description: 'Adobo is a popular Filipino dish known for its savory and tangy flavors. It typically consists of meat (such as chicken, pork, or beef) marinated in vinegar, soy sauce, garlic, and spices, then simmered until tender. The cooking process allows the meat to absorb the rich flavors of the marinade, resulting in a deliciously tender and flavorful dish. Adobo is often served with steamed rice and is a staple in Filipino cuisine, enjoyed by many for its comforting and hearty taste.' },
        {  name: 'siken', image: 'assets/images/chicken.png', description: ' Chicken is a versatile and widely consumed poultry meat known for its tender texture and mild flavor. It is used in various cuisines worldwide and can be cooked in numerous ways, including roasting, grilling, frying, and stewing. Rich in protein and low in fat, chicken is a nutritious choice enjoyed in dishes ranging from classic comfort foods to gourmet specialties.'},
        {  name: 'Dinuguan', image: 'assets/images/dugo2.png', description: ' Dinuguan, also known as "chocolate meat" or "blood stew," is a unique Filipino dish characterized by its rich and savory flavor profile. ' },
        {  name: 'Pancit', image: 'assets/images/pancit.png', description: 'Pancit is a popular Filipino noodle dish made with stir-fried noodles, vegetables, and often meat or seafood. It is seasoned with soy sauce and other flavorings, resulting in a savory and satisfying dish that is commonly served during celebrations and gatherings.' },
        {  name: 'Diwata Pares', image: 'assets/images/pares.png', description: 'Pares is a Filipino dish consisting of tender beef stewed in a sweet and savory sauce, typically flavored with soy sauce, sugar, garlic, and spices. It is often served with steamed rice and a side of clear soup, providing a comforting and flavorful meal.' },
        {  name: 'Sinigang', image: 'assets/images/sinigang.png', description: 'Sinigang is a traditional Filipino soup known for its sour flavor, derived from tamarind or other souring agents like calamansi or green mango. It typically includes meat (commonly pork, beef, or shrimp) and a variety of vegetables such as radish, eggplant, and spinach. Sinigang is cherished for its tangy taste and is enjoyed as a comforting and hearty meal.' },
        // Add more recipes here
    ];

   
    addToShoppingList(recipe: any) {
        this.shoppingList.push(recipe.name);

    }
    deleteFromShoppingList(index: number) {
        this.shoppingList.splice(index, 1);
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
