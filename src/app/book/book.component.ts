import { Component, OnInit } from '@angular/core';
import {Book} from '../model/Book';

@Component({
  selector: 'app-library',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookList:Book[];
  book:Book={
    name:'',
    author:'',
    isbn:'',
    price:0,
    quantity:0
  }
  constructor() {
    this.bookList=[]
   }
  ngOnInit(): void {
  }
  addBook(){
    console.log('add book')
    console.log("book ",this.book);
    this.bookList.push(this.book);
    console.log("Updated Book list ",this.bookList);
    this.book={
      name:'',
      author:'',
      isbn:'',
      price:0,
      quantity:0
 
    }
  }
}