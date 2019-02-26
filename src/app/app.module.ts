import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteComponent } from './note/note.component';
import { NoteTemplateComponent } from './note-template/note-template.component';
import { CommentComponent } from './note/comment/comment.component';
import { NoteSectionComponent } from './note/note-section/note-section.component';
import { NoteSectionRowComponent } from './note/note-section/note-section-row/note-section-row.component';
import { NoteSectionHeaderComponent } from './note/note-section/note-section-header/note-section-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    HomeComponent,
    UserComponent,
    NoteComponent,
    NoteTemplateComponent,
    NoteSectionComponent,
    NoteSectionRowComponent,
    NoteSectionHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
