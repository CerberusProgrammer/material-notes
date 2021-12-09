import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  test: string = 'test';

  title: string = '';
  content: string = '';

  note: Array<Note> = [];

  addNote(title: string, content: string) {
    var note = new Note(title, content);
    this.note.push(note);
    this.test = 'new item';
  }

  deleteNote(note: Note) {}

}
