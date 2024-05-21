import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Recipe } from '@app/_models';  // Make sure this import path is correct

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

    public get RecipeValue(): Recipe {
        return this.recipeSubject.value;
    }

    getAllRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(baseUrl);
    }

    getRecipeByName(name: string): Observable<Recipe> {
        return this.http.get<Recipe>(`${baseUrl}/${name}`);
    }

    createRecipe(params: Recipe): Observable<Recipe> {
        return this.http.post<Recipe>(baseUrl, params);
    }

    updateRecipe(name: string, params: Recipe): Observable<Recipe> {
        return this.http.put<Recipe>(`${baseUrl}/${name}`, params)
            .pipe(map((recipe: Recipe) => {
                if (recipe.name === this.RecipeValue.name) {
                    recipe = { ...this.RecipeValue, ...recipe };
                    this.recipeSubject.next(recipe);
                }
                return recipe;
            }));
    }

    deleteRecipe(name: string): Observable<void> {
        return this.http.delete<void>(`${baseUrl}/${name}`)
            .pipe(finalize(() => {
                if (name === this.RecipeValue.name) {
                    this.recipeSubject.next(null);
                }
            }));
    }
}
