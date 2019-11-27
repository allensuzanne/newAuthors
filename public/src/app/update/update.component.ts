import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  editedAuthor: {};
  id: Number;
  FlashMessage: string;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.id = data['id'];
      console.log("This id is" + this.id);
    })
    this.getEditedAuthor(this.id);
  }

  getEditedAuthor(num: Number) {
    let observable = this._httpService.getEditedAuthor({ data: num });
    observable.subscribe(data => {
      if(data['name']=="CastError"){
        console.log("got here");
        this.pageNotFound();
      }else{
      console.log(data);
      console.log("got an author");
      this.editedAuthor = data;
      }
    })
  }
  
  editAuthor(){
    let observable = this._httpService.editAuthor(this.editedAuthor);
    observable.subscribe(data=>{
      if(data['errors']){
        this.FlashMessage = data['errors']['name']['message'];
      } else{
        console.log("Edited the author "+data);
        this.reRoute();
      }
    })
  }

  reRoute(){
    this._router.navigate(['/']);
  }
  pageNotFound(){
    this._router.navigate(['/notFound'])
  }

}
