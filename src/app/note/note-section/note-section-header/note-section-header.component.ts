import { Component, OnInit, Input } from '@angular/core';
import { NoteSectionHeader } from './note-section-header.model';

@Component({
  selector: 'app-note-section-header',
  templateUrl: './note-section-header.component.html',
  styleUrls: ['./note-section-header.component.css'],
})
export class NoteSectionHeaderComponent implements OnInit {

  @Input() sectionHeader: NoteSectionHeader;

  constructor() { }

  ngOnInit() {
  }

}
