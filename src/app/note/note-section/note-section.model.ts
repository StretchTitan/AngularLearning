import { NoteSectionRow } from './note-section-row/note-section-row.model';
import { NoteSectionHeader } from './note-section-header/note-section-header.model';

export class NoteSection {
  sectionHeader: NoteSectionHeader;
  sectionRows?: NoteSectionRow[];
  sectionComment: boolean;
}
