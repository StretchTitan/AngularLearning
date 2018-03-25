import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-link',
  templateUrl: './recipe-link.component.html',
  styleUrls: ['./recipe-link.component.css']
})
export class RecipeLinkComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  selectRecipe() {
    this.recipeService.detailRecipe.emit(this.recipe);
  }

}
