import { DataStorage } from './../../common/services/data.storage';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
 message:string="";
  constructor(private route: ActivatedRoute,private _dataStorage:DataStorage) { }

  ngOnInit(): void {
   this.message=this._dataStorage.data;
  }

}
