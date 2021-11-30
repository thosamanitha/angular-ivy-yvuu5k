import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
  coronacases:any[]=[
    {
      State:"Andhra Pradesh",
      Total:1020,
      Active:234,
      Recovered:120,
      Deaths:20,
    },
    {
      State:"Madhya Pradesh",
      Total:10200,
      Active:234,
      Recovered:120,
      Deaths:201,
    },
    {
      State:"Himachal Pradesh",
      Total:1920,
      Active:234,
      Recovered:120,
      deaths:200,
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  
  max(){
    var maxim=0;
    for(let i=0;i<this.coronacases.length;i++){
      if(this.coronacases[i].death>maxim){
        maxim=this.coronacases[i].deaths;
      }
    }
    return maxim;
  }

  min(){
    var minim=this.coronacases[0].deaths;
    for(let i=0;i<this.coronacases.length;i++){
      if(this.coronacases[i].death>minim){
        minim=this.coronacases[i].deaths;
      }
    }
    return minim;
  }
 
}