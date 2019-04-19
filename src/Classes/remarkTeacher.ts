export class remarkTeacher
{
 constructor(
    public r_description:string,
    public r_fk_t_id:number,
    public r_date:Date,
    public r_fk_u_id:number,
    public t_name:string,
    public t_profilepic:string
){}
}