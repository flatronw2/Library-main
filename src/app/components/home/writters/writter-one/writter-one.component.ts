import { Component, Input, OnInit } from '@angular/core';
import { Writter } from '../writter.model';

@Component({
  selector: 'app-writter-one',
  templateUrl: './writter-one.component.html',
  styleUrls: ['./writter-one.component.scss']
})
export class WritterOneComponent implements OnInit {

  @Input() writter!: Writter;
  
  constructor() { }

  ngOnInit(): void {
  }

}
