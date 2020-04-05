import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Book {
  bookname: string;
  author: string;
  genre: string;
  favourite: boolean;
  year: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['bookname', 'author', 'genre', 'favourite', 'year'];
  piechart;
  romance = 0; scifi = 0; fantasy = 0; drama = 0; thriller = 0; horror = 0;
  arrLength = this.sharedService.books.length;
  isLoading = false;
  dataSource;
  length = this.sharedService.books.length;
  pageSize = 4;
  favGenre = [];

  constructor(private dialog: MatDialog, public sharedService: SharedService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.sharedService.books);
    this.piechart = this.sharedService.books.slice();
    this.calculate();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  addBook() {
    const dialogRef = this.dialog.open(BooksComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.sharedService.books.push(result);
      console.log(this.sharedService.books);
    });
  }

  calculate() {
    this.piechart.forEach((element) => {
      if (element.genre == 'Romance') {
        this.romance++;
      } else if (element.genre == 'Thriller') {
        this.thriller++;
      } else if (element.genre == 'Horror') {
        this.horror++;
      } else if (element.genre == 'Fantasy') {
        this.fantasy++;
      } else if (element.genre == 'Drama') {
        this.drama++;
      } else {
        this.scifi++;
      }
    })
    this.romance = (this.romance * 100) / (this.arrLength);
    this.thriller = (this.thriller * 100) / (this.arrLength);
    this.horror = (this.horror * 100) / (this.arrLength);
    this.fantasy = (this.fantasy * 100) / (this.arrLength);
    this.drama = (this.drama * 100) / (this.arrLength);
    this.scifi = (this.scifi * 100) / (this.arrLength);
    this.favGenreConstruct();
    this.sharedService.romance = this.romance;
    this.sharedService.thriller = this.thriller;
    this.sharedService.horror = this.horror;
    this.sharedService.fantasy = this.fantasy;
    this.sharedService.drama = this.drama;
    this.sharedService.scifi = this.scifi;
    this.isLoading = true;
  }

  favGenreConstruct() {
    this.favGenre = [
      {
        'name': 'Romance',
        'value': this.romance
      },
      {
        'name': 'Drama',
        'value': this.drama
      },
      {
        'name': 'Scifi',
        'value': this.scifi
      },
      {
        'name': 'Thriller',
        'value': this.thriller
      },
      {
        'name': 'Horror',
        'value': this.horror
      },
      {
        'name': 'Fantasy',
        'value': this.fantasy
      }
    ]
    console.log(this.favGenre[5])
    // this.favGenre.sort(this.compare);
    // console.log(this.favGenre)
  }

  compare(a, b) {
    const bandA = a.value;
    const bandB = b.value;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }


}
