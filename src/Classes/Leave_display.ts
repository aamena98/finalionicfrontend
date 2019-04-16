export class Leave_Display
{
 constructor(
public s_fname:string,
public s_lname:string,
public s_roll_no:number,
public s_class:number,
public s_div:string,
public fk_u_id:number,
public l_fromdate:Date,
public l_todate:Date,
public l_totaldays:number,
public l_leavetype:string,
public l_description:string,
public fk_t_number:number
){}
}