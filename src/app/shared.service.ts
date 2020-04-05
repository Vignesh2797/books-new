import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  romance; scifi; fantasy; drama; thriller; horror;
  books = [
    {
      'bookname': 'Hunger Games',
      'author': 'Suzane Collins',
      'genre': 'Sci-Fi',
      'favourite': true,
      'year': 2014
    },
    {
      'bookname': 'Perfect Chemistry',
      'author': 'Simone Elkeles',
      'genre': 'Romance',
      'favourite': true,
      'year': 2012
    },
    {
      'bookname': 'Dune',
      'author': 'Frank Herbert',
      'genre': 'Fantasy',
      'favourite': false,
      'year': 2013
    },
    {
      'bookname': 'The Exorcist',
      'author': 'William Peter Blatty',
      'genre': 'Horror',
      'favourite': false,
      'year': 2016
    },
    {
      'bookname': 'The Crucible',
      'author': 'Arthur Miller',
      'genre': 'Drama',
      'favourite': true,
      'year': 2014
    },
    {
      'bookname': 'A Game of Thrones',
      'author': 'George R.R. Martin',
      'genre': 'Fantasy',
      'favourite': true,
      'year': 2012
    },
    {
      'bookname': 'The Lord of The Rings',
      'author': 'J.R.R. Tolkien',
      'genre': 'Fantasy',
      'favourite': true,
      'year': 2011
    },
    {
      'bookname': 'The Notebook',
      'author': 'Nicholas Sparks',
      'genre': 'Romance',
      'favourite': false,
      'year': 2012
    },
    {
      'bookname': 'The Da Vinci Code',
      'author': 'Dan Brown',
      'genre': 'Thriller',
      'favourite': true,
      'year': 2002
    },
  ]
  constructor() { }


}
