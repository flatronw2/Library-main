import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Writter } from '../writter.model';
import { WritterService } from '../writter.service';
import { DeleteDialogService } from './delete-writter/deleteDialog.service';

type ActorKey = 'fullName'

@Component({
  selector: 'app-writter-item',
  templateUrl: './writter-item.component.html',
  styleUrls: ['./writter-item.component.scss']
})
export class WritterItemComponent implements OnInit {

  @Input() sortBy!: ActorKey;
  @Input() writter!: Writter;
  writters: Writter[] = [];

  constructor(
    private writterService: WritterService,
    private deleteDialogService: DeleteDialogService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getWritters();
  }
  
  getWritters(): void {
    const sub: Subscription = this.writterService.getWritter().subscribe({
      next: (writterResult: Writter[]) => {
        this.writters = writterResult;
        if(this.sortBy !== undefined){
          this.writters = this.writters.sort((a, b) => (a[this.sortBy] < b[this.sortBy]) ? 1 : -1)
        }
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })
  }

  onDelete(id: number) {
    this.deleteDialogService
      .openDialog()
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.writterService.deleteWritter(id).subscribe((response) => {
            window.location.reload();
            this.getWritters();
          });
        }
      });
  }

  onEdit() {    
    this.router.navigate(['/writters/all-writters/add-new-writters', this.writter.id]);
  }
}
