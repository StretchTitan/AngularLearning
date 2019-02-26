import { NoteSectionRow } from './note-section-row.model';
import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-note-section-row',
  templateUrl: './note-section-row.component.html',
  styleUrls: ['./note-section-row.component.css']
})
export class NoteSectionRowComponent implements OnInit {

  @Input() row: NoteSectionRow;
  @Input() sectionIndex: number;
  @Input() rowIndex: number;

  commentExpanded = false;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  onCommentToggle() {
    this.commentExpanded = !this.commentExpanded;
  }

  onSelectButton(buttonIndex: number) {
    this.noteService.updateSectionButton(this.sectionIndex, this.rowIndex, buttonIndex);
  }
}
