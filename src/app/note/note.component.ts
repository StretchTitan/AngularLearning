import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  noteSections = [{
    title: 'Section 1',
    rows: [{
      title: 'Row 1'
    }, {
      title: 'Row 2'
    }, {
      title: 'Row 3'
    }, {
      title: 'Row 4'
    }],
  }, {
    title: 'Section 2',
    rows: [{
      title: 'Row 1'
    }, {
      title: 'Row 2'
    }],
  }];

  constructor() { }

  ngOnInit() {
  }

}
