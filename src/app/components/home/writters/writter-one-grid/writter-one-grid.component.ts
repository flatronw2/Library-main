import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Writter } from '../writter.model';
import { WritterService } from '../writter.service';

@Component({
  selector: 'app-writter-one-grid',
  templateUrl: './writter-one-grid.component.html',
  styleUrls: ['./writter-one-grid.component.scss']
})
export class WritterOneGridComponent implements OnInit {

  writters: Writter[] = []
  @Input() writterNumber: number | undefined;
  constructor(private writterService: WritterService) { }

  ngOnInit(): void {
    this.getWritter();
  }



  getWritter(): void {
    const sub: Subscription = this.writterService.getWritter().subscribe({
      next: (result: Writter[]) => {
        this.writters = result;
        if(this.writterNumber){
          this.writters = this.writters.slice(0, this.writterNumber);
        }
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })
  }
}
