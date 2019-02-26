import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSectionRowComponent } from './note-section-row.component';

describe('NoteSectionRowComponent', () => {
  let component: NoteSectionRowComponent;
  let fixture: ComponentFixture<NoteSectionRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteSectionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSectionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
