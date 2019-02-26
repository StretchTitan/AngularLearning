import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-section',
  templateUrl: './note-section.component.html',
  styleUrls: ['./note-section.component.css']
})
export class NoteSectionComponent implements OnInit {

  @Input() section: {
    title: string,
    rows: { title: string }[],
  };

  constructor() { }

  ngOnInit() {
  }

}
