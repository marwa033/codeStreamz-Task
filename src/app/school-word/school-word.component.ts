import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-school-word',
  templateUrl: './school-word.component.html',
  styleUrls: ['./school-word.component.css']
})
export class SchoolWordComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    AOS.init({
      duration: 3000,
      once: true,});
  }

}
