import { Recipe } from './../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-link',
  templateUrl: './recipe-link.component.html',
  styleUrls: ['./recipe-link.component.css']
})
export class RecipeLinkComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
