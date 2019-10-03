import { Component } from '@angular/core';
import { TodoserService } from './todoser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(private td:TodoserService){}
  tdList=this.td.getTdList();
  
}
