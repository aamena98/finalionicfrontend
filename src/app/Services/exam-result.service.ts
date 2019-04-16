import { Injectable } from '@angular/core';
import { examResult } from "../../Classes/examResult";
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExamResultService {

  result_url:string="http://localhost:3000/getresult/";

  constructor(public _http:HttpClient) { }

  getResultByID(fk_u_id:number,r_examtype:string)
  {
    return this._http.get(this.result_url+fk_u_id+"/"+r_examtype); 
  }

}
