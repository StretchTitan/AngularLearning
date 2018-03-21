import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Butter', .5),
    new Ingredient('Flour', 3),
    new Ingredient('Cheese', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

}
