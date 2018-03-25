import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => this.recipes = recipes);
  }

  addRecipe() {
    this.recipeService.addRecipe(
      new Recipe(
        'Test Recipe',
        'This is simply a test',
        'assets/images/frying-pan-pizza.jpg',
        [
          new Ingredient('butter', 1),
          new Ingredient('flour', 4),
          new Ingredient('cheese', 3),
          new Ingredient('sauce', 2)
        ]
      )
    );
  }
}
