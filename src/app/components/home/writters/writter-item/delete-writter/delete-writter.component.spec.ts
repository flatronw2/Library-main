import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWritterComponent } from './delete-writter.component';

describe('DeleteCelebComponent', () => {
  let component: DeleteWritterComponent;
  let fixture: ComponentFixture<DeleteWritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWritterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
