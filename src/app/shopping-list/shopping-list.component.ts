import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addToList() {
    this.ingredients.push(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }
}
