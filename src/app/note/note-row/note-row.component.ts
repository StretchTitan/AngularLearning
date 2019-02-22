import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-row',
  templateUrl: './note-row.component.html',
  styleUrls: ['./note-row.component.css']
})
export class NoteRowComponent implements OnInit {
  @Input() item: {};

  constructor() { }

  ngOnInit() {
  }

}
