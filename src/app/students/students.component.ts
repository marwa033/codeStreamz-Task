import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
