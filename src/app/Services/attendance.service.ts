import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  attendance_url:string='http://localhost:3000/s_attendance1/';
  getstudentinfo:string='http://localhost:3000/students/';
  getcount:string='http://localhost:3000/s_attendance/';
  addgetstudentAttendanceurl:string='http://localhost:3000/s_attendance/';
 
  constructor(public _http:HttpClient) { }

  getattendanceByUserid(fk_u_id:number)
  {
    return this._http.get(this.attendance_url+fk_u_id);
  }
  onStudentAttendance(student_id){
    return this._http.get(this.attendance_url+student_id);
   }
   getStudentByUserId(fk_u_id:number)
   {
     return this._http.get(this.getstudentinfo+fk_u_id);  
   }

   getAttendanceCount(fk_u_id:number)
   {
    return this._http.get(this.getcount+fk_u_id);
   }
   
  AddAttendance(item)
  {
    //console.log(item);
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.addgetstudentAttendanceurl,body,{headers:h});
  
  }
  getStudentByclassdiv(class_no:number,div_name:string)
  {
    return this._http.get(this.addgetstudentAttendanceurl+class_no+"/"+div_name);
  }
  getStudentAttendance()
  {
    return this._http.get(this.addgetstudentAttendanceurl);
  }
  updateAttendance(item)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.addgetstudentAttendanceurl,body,{headers:h});
  
  
  }
  
}
