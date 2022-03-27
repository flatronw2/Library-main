import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat, Observable, take, switchMap, tap, EMPTY } from 'rxjs';
import { Writter } from '../writter.model';
import { WritterService } from '../writter.service';

@Component({
  selector: 'app-writter-description',
  templateUrl: './writter-description.component.html',
  styleUrls: ['./writter-description.component.scss']
})
export class WritterDescriptionComponent implements OnInit {

  constructor(
    private writterService: WritterService,
    private route: ActivatedRoute,
  ) {}

  isDataLoaded = false;
  @Input() writter!: Writter;
  last_index = 200;
  counter = 200;
  showTxt = 'Show More';

  ngOnInit(): void {
    concat(this.formMethod()).subscribe();

  }

  public formMethod(): Observable<any> {
    return this.route.params.pipe(
      take(1),
      switchMap((params) => {
        this.isDataLoaded = true;
        if (params['id']) {
          return this.writterService.getWritterById(params['id']).pipe(
            tap((re) => {
              this.writter = re;
            }),
          );
        } else {
          return EMPTY;
        }
      }),
    );
  }
}