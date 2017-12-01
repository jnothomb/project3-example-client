import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJournalComponent } from './page-journal.component';

describe('PageJournalComponent', () => {
  let component: PageJournalComponent;
  let fixture: ComponentFixture<PageJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
