import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  @Input() ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

}
