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

  sayHello() { 
    var hola = new Note("Mi dia a dia", "Esto es una nota");
    this.note.push(hola);

    var x = this.note.pop() as Note;
    this.test = x.toString();
  }

  addNote(title: string, content: string) {
    var note = new Note(title, content);
    this.note.push(note);
    this.test = 'new item';
    this.title = '';
    this.content = '';
  }
}
