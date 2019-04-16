import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentTimetableService {


  stuTimetableurl:string='http://localhost:3000/timeTable/';
  classUrl:string='http://localhost:3000/class/';
  constructor(public _http:HttpClient) { }

  getStuTimetableByClassId(fk_class_id:number)
  {
    return this._http.get(this.stuTimetableurl+fk_class_id);
  }
  getclassByclassId(class_id:number)
  {
    return this._http.get(this.classUrl+class_id);
  }
  
}
