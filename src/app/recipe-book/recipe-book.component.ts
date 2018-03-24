import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[] = [
  ];
  detailRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    console.log('RECIPE BOOK INITIALIZED');
  }

  addRecipe() {
    this.recipes.push(new Recipe('Test Recipe', 'This is simply a test', 'assets/images/frying-pan-pizza.jpg'));
  }

  setRecipeDetail(detailRecipe: Recipe) {
    this.detailRecipe = detailRecipe;
  }
}
