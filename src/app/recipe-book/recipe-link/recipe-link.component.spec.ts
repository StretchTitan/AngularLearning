import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLinkComponent } from './recipe-link.component';

describe('RecipeLinkComponent', () => {
  let component: RecipeLinkComponent;
  let fixture: ComponentFixture<RecipeLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
