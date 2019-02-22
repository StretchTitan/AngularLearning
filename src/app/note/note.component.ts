import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor() { }

  rowItems: any = [{
    title: 'Row 1'
  }, {
    title: 'Row 2'
  }, {
    title: 'Row 3'
  }, {
    title: 'Row 4'
  }];

  ngOnInit() {
  }

}
