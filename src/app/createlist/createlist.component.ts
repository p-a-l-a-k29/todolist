import { Component, OnInit } from '@angular/core';
import { TodoserService } from '../todoser.service';

@Component({
  selector: 'app-createlist',
  templateUrl: './createlist.component.html',
  styleUrls: ['./createlist.component.css']
})
export class CreatelistComponent implements OnInit {
  contentEditable: boolean;

  constructor(private td:TodoserService) {}
  tdList=[]
  ngOnInit() {
    this.tdList=this.td.getTdList();


  }
  

}
