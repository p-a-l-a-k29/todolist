import { Component, OnInit } from '@angular/core';
import { TodoserService } from '../todoser.service';

@Component({
  selector: 'app-addtolist',
  templateUrl: './addtolist.component.html',
  styleUrls: ['./addtolist.component.css']
})
export class AddtolistComponent implements OnInit {

  constructor(private td:TodoserService) { }
  t_name
  add(){
    const t=
      {
       t_name:this.t_name
      }
    this.td.addTdList(t)
  }
  delete()
  {
    this.td.deleteTdList()
  }
  ngOnInit() {
  }

}
