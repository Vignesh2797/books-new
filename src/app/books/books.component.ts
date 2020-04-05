import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  genres = ['Sci-Fi', 'Romance', 'Horror', 'Thriller', 'Fantasy', 'Drama'];
  bookForm: FormGroup = this.fb.group({
    bookname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    author: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    genre: new FormControl('', [Validators.required]),
    favourite: new FormControl(''),
    year: new FormControl()
  })
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<BooksComponent>) { }

  ngOnInit() {

  }

  getErrorMessage(e) {
    if (e == 'bookname') {
      return this.bookForm.get("bookname").hasError('required') ? 'Book name is required' : 'Enter a valid name (2-50 characters)';
    }
    if (e == 'author') {
      return this.bookForm.get("author").hasError('required') ? 'Author is required' : 'Enter a valid name (2-50 characters)';
    }
    if (e == 'genre') {
      return this.bookForm.get("genre").hasError("required") ? 'Genre is required' : '';
    }

  }

  onSubmit() {
    if (this.bookForm.valid) {
      Swal.fire({
        title: "Book added successfully",
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,
      })
      this.dialogRef.close(this.bookForm.value);
    }
  }

}
