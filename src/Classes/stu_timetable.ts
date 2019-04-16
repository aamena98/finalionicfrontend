export class stu_timetable_class{
    constructor(public s_timetable_date:Date,
        public fk_class_id:number,
        public fk_div_id:number,
        public s_timetable_pdfpath:string)
        {}
      }  