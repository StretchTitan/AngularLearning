import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => this.recipes = recipes);
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }
}
