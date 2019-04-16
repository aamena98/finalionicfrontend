export class Teacher{
    constructor(
      public t_name:string,
      public t_address:string,
      public t_email:string,
      public t_qualification:string,
      public t_profilepic:string,
      public t_contactno:number,
      public fk_u_id:number,
      public t_dob:Date,
      public t_category:string,
      public t_gender:string
  
    ){
  
    }
  }
  