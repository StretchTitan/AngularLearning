import { NoteSection } from './note-section/note-section.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {
  private note: NoteSection[] = [{
    sectionHeader: {
      title: 'Overall Patient Status',
      showReviewed: false,
    },
    sectionComment: true,
  }, {
    sectionHeader: {
      title: 'Physical Exam',
      showReviewed: true,
      reviewed: false,
    },
    sectionComment: false,
    sectionRows: [{
      title: 'General Appearance',
      buttons: [{
        title: 'Distress',
        selected: false,
      }],
      hasComment: true,
    }, {
      title: 'Access Status',
      buttons: [{
        title: 'Problem',
        selected: false,
      }],
      hasComment: true,
    }, {
      title: 'Neck',
      hasComment: false,
    }],
  }];
  noteChanged = new Subject<NoteSection[]>();

  constructor() {}

  public getNote() {
    return this.note.slice();
  }

  public updateSectionButton(sectionIndex, rowIndex, buttonIndex) {
    console.log('In update service');
    console.log(sectionIndex, rowIndex, buttonIndex);
    const buttonToUpdate = this.note[sectionIndex].sectionRows[rowIndex].buttons[buttonIndex];

    buttonToUpdate.selected = !buttonToUpdate.selected;
    this.noteChanged.next(this.note.slice());
  }
}
