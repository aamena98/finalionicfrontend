export class notes{
    constructor(
      public notes_title:string,
      public notes_description:string,
      public notes_attachment:string,
      public notes_date:Date,
      public fk_class_id:number,
      public fk_div_id:string,
      public notes_uploadedby:string
    )
    {}
  }
  