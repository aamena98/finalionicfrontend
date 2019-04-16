export class Leave
{
 constructor(
   public fk_u_id:number,
   public l_fromdate:Date,
   public l_todate:Date,
   public l_totaldays:number,
   public l_leavetype:string,
   public l_description:string,
   public fk_t_number:number,
   public l_date:Date
){}
}