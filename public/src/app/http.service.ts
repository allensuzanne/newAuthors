import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/api/read');
  }
  createNewAuthor(newAuthor){
    return this._http.post('/api/new', newAuthor);
  }

  deleteAuthor(num){
    return this._http.delete('/api/delete/'+num.data, num);
  }

  getEditedAuthor(num){
    return this._http.get('/api/read/'+num.data, num);
  }

  editAuthor(editedAuthor){
    return this._http.put('/api/edit/'+editedAuthor._id, editedAuthor);
  }

}
