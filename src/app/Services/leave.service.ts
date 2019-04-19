declare var require:any;
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
var moment=require('moment');
moment().format();
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  getstudentinfo:string='http://localhost:3000/students/';
  leaveurl:string="http://localhost:3000/leave/";
leaveaccepturl:string="http://localhost:3000/leaveAccept/";
leaverejceturl:string="http://localhost:3000/leaveReject/";
leavependingurl:string="http://localhost:3000/pendingleaves/";
viewaccept:string="http://localhost:3000/viewAcceptedLeave/";
viewreject:string="http://localhost:3000/viewRejectedLeave/";
stuaccepturl:string="http://localhost:3000/acceptstuleave/";
sturejecturl:string="http://localhost:3000/rejectstuleave/";
  constructor(public _http:HttpClient) { }


  AddLeave(item)
  {
    console.log('service'+item);
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.leaveurl,body,{headers:h});
  }
  getLeaves()
  {
  return this._http.get(this.leaveurl);
  }
  getStudentByUserId(fk_u_id:number)
  {
    return this._http.get(this.getstudentinfo+fk_u_id);  
  }
  getAllInfo(fk_t_id:number)
  {
    return this._http.get(this.leaveurl+fk_t_id); 
  }
  updateAcceptStatus(item)
  {
   let body=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json');
 let ldate=moment(item.l_date).format("YYYY-MM-DD");
  console.log(ldate);
    return this._http.put(this.leaveaccepturl+item.fk_u_id+"/"+ldate,body,{headers:h});
  }
  updateRejectStatus(item)
  {
      let body=JSON.stringify(item);
      let h=new HttpHeaders().set('Content-Type','application/json');
      let ldate=moment(item.l_date).format("YYYY-MM-DD");
      return this._http.put(this.leaverejceturl+item.fk_u_id+"/"+ldate,body,{headers:h});
    
  }
  getAcceptedLeaves(fk_t_number:number)
  {
    return this._http.get(this.leaveaccepturl+fk_t_number); 
  }
  getRejectedLeaves(fk_t_number:number)
  {
    return this._http.get(this.leaverejceturl+fk_t_number); 
  }
  getPendingLeaves(fk_t_number:number)
  {
    return this._http.get(this.leavependingurl+fk_t_number); 
  }
  getAllAccepted(fk_t_id:number)
  {
    return this._http.get(this.viewaccept+fk_t_id); 
  }
  getAllRejected(fk_t_id:number)
  {
    return this._http.get(this.viewreject+fk_t_id);  
  }
  getAcceptedLeavesforStudent(fk_u_id:number)
  {
    return this._http.get(this.stuaccepturl+fk_u_id);
  }
  getRejectedLeavesforStudent(fk_u_id:number)
  {
    return this._http.get(this.sturejecturl+fk_u_id);
  }
}
