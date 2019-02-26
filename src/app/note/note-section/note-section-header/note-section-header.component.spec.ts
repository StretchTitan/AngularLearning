import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSectionHeaderComponent } from './note-section-header.component';

describe('NoteSectionHeaderComponent', () => {
  let component: NoteSectionHeaderComponent;
  let fixture: ComponentFixture<NoteSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
