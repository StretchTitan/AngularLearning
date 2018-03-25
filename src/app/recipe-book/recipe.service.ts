import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Init Recipe',
      'This is simply init',
      'assets/images/frying-pan-pizza.jpg',
      [
        new Ingredient('butter', 1),
        new Ingredient('flour', 4),
        new Ingredient('cheese', 3),
        new Ingredient('sauce', 2)
      ])
  ];
  detailRecipe = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.emit(this.recipes.slice());
  }
}
