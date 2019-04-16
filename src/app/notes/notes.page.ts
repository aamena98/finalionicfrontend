import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewerOptions,DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { notes } from '../../Classes/Notes';
import { NotesServicesService } from '../Services/notes-services.service';

@Component({
  providers:[File],
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(private _ser:NotesServicesService,private _route:Router,private _router:Router,private file:File,private ft:FileTransfer,
    private fileopener:FileOpener,private document:DocumentViewer) { }
  notes_id:number;
  notes_title:string;
  notes_description:string;
  notes_attachment:string;
  notes_date:number;
  notes_month:number;
  notes_year:number;
  fk_class_id:number;
  fk_div_id:string;
  notes_uploadedby:string;
  notes_arr:notes[];
  ngOnInit() {

    this._ser.viewNotes().subscribe(
      (data:notes[])=>{
        console.log(data);
        this.notes_arr=data;
        console.log(this.notes_arr);
      }
    );

  }
  

  openLocalPdf()
  {
    // InAppBrowser.open()
    this._router.navigateByUrl('../../assets/5-tools.pdf');
    // this.fileopener.open('../../assets/5-tools.pdf','application/pdf').
    // then(()=>console.log('File is opened'))
    // .catch(e=>console.log('Error opening file',e));
    // let filepath=this.file.applicationDirectory + 'www/assets';
    // if(this.platform.is('android'))
    // {
    //   let fakeName=Date.now();
    //   this.file.copyFile(filepath,'5-tools.pdf',this.file.dataDirectory,'${fakeName}.pdf').then(result=>{
    //     this.fileopener.open(result.nativeURL,'application/pdf').then(
    //       ()=>console.log('File is opened')).catch
    //       (e=>console.log('Error opening file',e));
    //   });
    // }
    // else
    // {
    //   const options:DocumentViewerOptions = {
    //     title:'My PDF'
    //   }
    //   this.document.viewDocument('${filepath}/5-tools.pdf','application/pdf',options);
    // }
  }
}
