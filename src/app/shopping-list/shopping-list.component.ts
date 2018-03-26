import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  shoppingListSubscription: Subscription;

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListSubscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => this.ingredients = ingredients
      );
  }

  addToList() {
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

  ngOnDestroy() {
    this.shoppingListSubscription.unsubscribe();
  }
}
