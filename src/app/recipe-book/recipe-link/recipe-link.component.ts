import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-link',
  templateUrl: './recipe-link.component.html',
  styleUrls: ['./recipe-link.component.css']
})
export class RecipeLinkComponent implements OnInit {
  @Input() recipe;

  constructor() { }

  ngOnInit() {
  }

}
