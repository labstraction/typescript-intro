import { Component } from '@angular/core';
import { ITodo } from 'src/app/model/i-todo';
import { Todo } from 'src/app/model/todo';
import { DataService } from 'src/app/services/data/data.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoArray: ITodo[] = []

  // library: Library | undefined;

  constructor(private utilityService: UtilityService, private dataS: DataService){
    // const book1 = new Book('iliade', 'omero', 200);
    // const book2 = new Book('odissea', 'omero', 210);
    // const book3 = new Book('divina commedia', 'dante', 1200);

    // const books: Book[] = [book1, book2, book3];

    // const newLibrary = new Library(books);

    // this.library = newLibrary;

    // const todo1 = new Todo('comprare il pane', false);
    // const todo2 = new Todo('chiamare la nonna', false);
    // const todo3 = new Todo('pagare la bolleta', false);

    // this.todoArray = [todo1, todo2, todo3];
    this.dataS.getData().then(data => {
      console.log(data);
      this.todoArray = data;
      console.log(this.todoArray)
    });
  }

  sortTodo():void{
    this.todoArray = this.utilityService.sortArrayAlphabetically(this.todoArray);
  }


}


// class Book{

//   title: string;
//   author: string;
//   pages: number;

//   constructor(title: string, author: string, pages:number){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//   }

// }
// class Library{

//   books: Book[];

//   constructor( books: Book[]){
//     this.books = books
//   }
// }
