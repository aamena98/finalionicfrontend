declare var require:any;
import { Component, OnInit } from '@angular/core';
import { remark } from "../../Classes/remark";
import { RemarkService } from "../Services/remark.service";
import { ActivatedRoute,Router } from "@angular/router";

var moment=require('moment');
moment().format();

@Component({
  selector: 'app-add-remark-desc',
  templateUrl: './add-remark-desc.page.html',
  styleUrls: ['./add-remark-desc.page.scss'],
})
export class AddRemarkDescPage implements OnInit {

  r_date:Date;
  r_desc:string;
  r_fk_t_id:number=parseInt(localStorage.getItem('user_id'));
  r_fk_u_id:number;
  r_status:string;
  
  constructor(private _ser:RemarkService,private _aroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {

    }
    onback()
    {
        this._route.navigate(['/add-remark']);
    }
    
  addRemark()
  {
    this.r_fk_u_id=this._aroute.snapshot.params['id'];
    this.r_date=moment(Date.now()).format("YYYY-MM-DD");
      this._ser.AddRemark(new remark(this.r_desc,this.r_fk_t_id,this.r_date,this.r_fk_u_id)).subscribe(
        (data:any)=>
        {
          alert("Remark sent SuccessFully");
          console.log(data);
          this._route.navigate(['/add-remark']);
        }
      );
  }
}
