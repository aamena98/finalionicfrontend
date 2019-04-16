export class StudentAttendance{
    constructor(
       public s_a_status:boolean,
       public fk_s_number:number,
       public s_a_date:Date,
       public fk_class_id:number,
       public fk_div_name:string,
       public fk_s_gr_no:number
      ){
  
    }
  }
  