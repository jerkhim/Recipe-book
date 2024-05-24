import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Recipe } from '../_models/recipe';

const baseUrl = `${environment.apiUrl}/recipes`;

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipeSubject: BehaviorSubject<Recipe>;
  public recipe: Observable<Recipe>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.recipeSubject = new BehaviorSubject<Recipe>(null);
    this.recipe = this.recipeSubject.asObservable();
  }

  public get recipeValue(): Recipe {
    return this.recipeSubject.value;
  }

  getAll() {
    return this.http.get<Recipe[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<Recipe>(`${baseUrl}/${id}`);
  }

  createRecipe(params) {
    return this.http.post(baseUrl, params);
  }

  updateRecipe(id, params) {
    return this.http.put(`${baseUrl}/${id}`, params)
      .pipe(map((recipe: any) => {
        if (this.recipeValue && recipe.id === this.recipeValue.id) {
          recipe = { ...this.recipeValue, ...recipe };
          this.recipeSubject.next(recipe);
        }
        return recipe;
      }));
  }

  deleteRecipe(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
