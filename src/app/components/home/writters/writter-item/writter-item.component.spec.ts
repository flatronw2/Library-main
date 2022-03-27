import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritterItemComponent } from './writter-item.component';

describe('WritterItemComponent', () => {
  let component: WritterItemComponent;
  let fixture: ComponentFixture<WritterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
