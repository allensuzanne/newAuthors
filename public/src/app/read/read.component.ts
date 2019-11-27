import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  
  authors: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("List of the authors");
      console.log(this.authors);
      this.authors = data;
    })
  }
  deleteAuthor(num: Number) {
    let observable = this._httpService.deleteAuthor({ data: num });
    observable.subscribe(data => {
      console.log("deleted an author");
      this.getAuthors();
    })
  }
}
