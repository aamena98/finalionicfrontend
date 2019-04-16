export class Leaves{
    constructor(
      public fk_u_id:number,
      public l_fromdate:Date,
      public l_todate:Date,
      public l_totaldays:number,
      public l_leavetype:string,
      public l_description:string,
      public l_status:string
    )
    {}
  }
  