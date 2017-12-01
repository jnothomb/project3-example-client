import { TestBed, inject } from '@angular/core/testing';

import { JournalEntryService } from './journal-entry.service';

describe('JournalEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalEntryService]
    });
  });

  it('should be created', inject([JournalEntryService], (service: JournalEntryService) => {
    expect(service).toBeTruthy();
  }));
});
