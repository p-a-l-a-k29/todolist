import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserService {

  constructor() { }
  tdlist=[
  {t_name:'Get up at 5:30.'},
  {t_name:'Meditate for 15 mins.'},
  {t_name:'Go to the Gym.'},
  {t_name:'Take a shower'},
  {t_name:'Breakfast!'},
  {t_name:'Attend lectures:('},
  {t_name:'ASSIGNMENTS'},
  {t_name:'Netflix and chill!:)'}
  ]
  getTdList(){
    return this.tdlist
  }
  addTdList(at){
    this.tdlist.push(at)
  }
  deleteTdList(){
    this.tdlist.pop()
  }
}