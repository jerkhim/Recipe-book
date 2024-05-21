import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';
import { Injectable } from '@angular/core';
@Component({
  templateUrl: 'details.component.html',
  styleUrls: ['shopping.css']  // Ensure the CSS file is correctly linked if you have any
})
export class DetailsComponent implements OnInit {
  account: any; // Define the type of account
  shoppingList: string[] = [];
  constructor(private accountService: AccountService) { }
  addToShoppingList(ingredients: string[]) {
    this.shoppingList.push(...ingredients);
  }

  ngOnInit() {
    this.account = this.accountService.accountValue; // Initialize account in ngOnInit

    const shoppingForm = document.getElementById('shoppingForm') as HTMLFormElement;
    const itemList = document.getElementById('itemList') as HTMLUListElement;
    const clearButton = document.getElementById('clearButton') as HTMLButtonElement;

    shoppingForm.addEventListener('submit', (event: Event) => {
      event.preventDefault();

      const nameInput = document.getElementById('name') as HTMLInputElement;
      const amountInput = document.getElementById('amount') as HTMLInputElement;

      const newItem = {
        name: nameInput.value,
        amount: parseInt(amountInput.value, 10)
      };

    
      this.addItemToList(newItem, itemList);
      shoppingForm.reset();
    });

    clearButton.addEventListener('click', () => {
      shoppingForm.reset();
    });
  }


  removeItem(button: HTMLButtonElement): void {
    const li = button.parentElement;
    if (li) {
        li.remove();
    }
  }

  addItemToList(item: { name: string; amount: number }, itemList: HTMLUListElement) {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} (${item.amount})`;
    
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '<i class="material-icons">close</i>';
    closeButton.classList.add('material-icons');
    closeButton.onclick = () => this.removeItem(closeButton);
    
    listItem.appendChild(closeButton);
    itemList.appendChild(listItem);
  }
}
