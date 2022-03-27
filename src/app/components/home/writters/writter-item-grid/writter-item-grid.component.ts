import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Writter } from '../writter.model';
import { WritterService } from '../writter.service';

type writterKey = 'fullName'

@Component({
  selector: 'app-writter-item-grid',
  templateUrl: './writter-item-grid.component.html',
  styleUrls: ['./writter-item-grid.component.scss']
})
export class WritterItemGridComponent implements OnInit {

  @Input() writterNumber: number | undefined;
  @Input()
  sortBy!: writterKey;

  writters: Writter[] = [];

  pageIndex: number = 0;
  pageSize: number = 15;
  lowValue: number = 0;
  highValue: number = 20;

  constructor(private writterService: WritterService) { }

  ngOnInit(): void {
    this.getCelebs();
  }

  getCelebs(): void {
    const sub: Subscription = this.writterService.getWritter().subscribe({
      next: (writterResult: Writter[]) => {
        console.log(writterResult);
        this.writters = writterResult;
        if(this.sortBy !== undefined){
          this.writters = this.writters.sort((a, b) => (a[this.sortBy] < b[this.sortBy]) ? 1 : -1)
        }
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })
  }
  getPaginatorData(event: { pageIndex: number }) {
    console.log(event);
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    } else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }

}
