import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stylenclass',
  templateUrl: './stylenclass.component.html',
  styleUrls: ['./stylenclass.component.css']
})
export class StylenclassComponent implements OnInit {
  course:string="Angular";
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
  constructor() { }
  ngOnInit(): void {
  }
  getColor(country:string) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
      case 'India':
        return 'orange';
      default:
        return "black";
    }
  }
}