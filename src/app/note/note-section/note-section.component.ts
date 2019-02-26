import { Component, OnInit, Input } from '@angular/core';
import { NoteSection } from './note-section.model';

@Component({
  selector: 'app-note-section',
  templateUrl: './note-section.component.html',
  styleUrls: ['./note-section.component.css'],
})
export class NoteSectionComponent implements OnInit {

  @Input() section: NoteSection;
  @Input() sectionIndex: number;

  constructor() { }

  ngOnInit() {

  }

}
