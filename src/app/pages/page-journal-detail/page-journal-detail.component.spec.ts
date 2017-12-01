import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJournalDetailComponent } from './page-journal-detail.component';

describe('PageJournalDetailComponent', () => {
  let component: PageJournalDetailComponent;
  let fixture: ComponentFixture<PageJournalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJournalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJournalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
