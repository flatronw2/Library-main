import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritterItemGridComponent } from './writter-item-grid.component';

describe('WritterItemGridComponent', () => {
  let component: WritterItemGridComponent;
  let fixture: ComponentFixture<WritterItemGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritterItemGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritterItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
