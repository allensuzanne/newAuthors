import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newAuthor: {};
  FlashMessage: string;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newAuthor={
      name: ""
    }
  }

  createNewAuthor(){
    let observable = this._httpService.createNewAuthor(this.newAuthor);
    observable.subscribe(data=>{
      if(data['errors']){
        this.FlashMessage = data['errors']['name']['message'];
      }
      else{
        this.reRoute();
        console.log("made a new author", data);
      }
    })
  }
  
  reRoute(){
    this._router.navigate(['/']);
  }

}
