import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Recipe } from '@app/_models';  // Make sure this import path is correct

const baseUrl = `${environment.apiUrl}/recipe`;

@Injectable({ providedIn: 'root' })

export class RecipesService {
    private recipe: Recipe[] = [];
    private filteredRecipes: Recipe[] = [];
  
    constructor() {}
  
    getAllRecipes(): Recipe[] {
      return this.filteredRecipes;
    }
  
    addRecipe(recipe: Recipe) {
    
    }
  
    deleteRecipe(index: number) {
      // Delete recipe logic here
    }
  
    // Add other methods for editing, searching, etc.
  }
  