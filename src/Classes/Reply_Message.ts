export class reply_Message
{
 constructor(
   public fk_m_id:number,
    public r_description:string,
    public r_fk_u_id:number,
    public r_date:Date,
    public r_fk_t_id:number
){}
}