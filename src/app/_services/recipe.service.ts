import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Recipe } from '../_models/recipe';
import { throwError } from 'rxjs';

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

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(baseUrl);
  }

  getById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${baseUrl}/${id}`);
  }

  createRecipe(params): Observable<Recipe> {
    return this.http.post<Recipe>(baseUrl, params);
  }

  updateRecipe(id: string, params): Observable<Recipe> {
    return this.http.put<Recipe>(`${baseUrl}/${id}`, params)
      .pipe(
        map((recipe: any) => {
          // Update the current recipe if it was updated
          if (this.recipeValue && recipe.id === this.recipeValue.id) {
            // Publish updated recipe to subscribers
            recipe = { ...this.recipeValue, ...recipe };
            this.recipeSubject.next(recipe);
          }
          return recipe;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  deleteRecipe(id: string): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`)
      .pipe(
        finalize(() => {
          // Auto logout if the logged in account was deleted
          if (id === this.recipeValue.id) {
            this.logout();
          }
        })
      );
  }

  private logout() {
    // Implement your logout logic here
  }
}
