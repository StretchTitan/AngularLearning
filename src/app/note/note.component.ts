import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoteService } from './note.service';
import { NoteSection } from './note-section/note-section.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NoteService]
})
export class NoteComponent implements OnInit, OnDestroy {

  noteSubscription: Subscription;
  noteSections: NoteSection[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteSections = this.noteService.getNote();
    this.noteSubscription = this.noteService.noteChanged.subscribe(note => this.noteSections = note);
  }

  ngOnDestroy(): void {
    this.noteSubscription.unsubscribe();
  }
}
