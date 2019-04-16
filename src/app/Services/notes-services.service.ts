import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { notes } from '../../Classes/Notes';
import { User } from '../../Classes/User';

@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {

  addGetDeletenotesurl:string='http://localhost:3000/notesAddGetDelete/';
  
  constructor(public _http:HttpClient) { }


  viewNotes()
  {
    return this._http.get(this.addGetDeletenotesurl);
  }

  viewNotesById(notes_id:number)
  {
    return this._http.get(this.addGetDeletenotesurl+notes_id);
  }

}
