import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteComponent } from './note/note.component';
import { NoteTemplateComponent } from './note-template/note-template.component';
import { NoteRowComponent } from './note/note-row/note-row.component';
import { CommentComponent } from './note/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NoteComponent,
    NoteTemplateComponent,
    NoteRowComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
