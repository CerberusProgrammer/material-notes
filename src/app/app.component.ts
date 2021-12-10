import { Component, Inject } from '@angular/core';
import { Note } from './note';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = '';
  content: string = '';

  notes: Array<Note> = [];

  test: string = '';

  constructor(public dialog: MatDialog) {}

  addNote(title: string, content: string) {
    var note = new Note(title, content);
    this.notes.push(note);
  }

  createNote(title: string, content: string) {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppDialog, {
      width: '250px',
      data: {title: this.title, content: this.content},
    });

    dialogRef.afterClosed().subscribe(result => {
      var note = new Note(result.title, result.content);
      this.notes.push(note);
    });

    this.saveToObject();
  }

  saveToObject() {
    var json = JSON.stringify(this.notes);
    this.test = json;
  }

  writeFile() {
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'app-dialog.html',
})
export class AppDialog {

  constructor(
    public dialogRef: MatDialogRef<AppDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Note,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewNote() {

    this.onNoClick();
  }
}