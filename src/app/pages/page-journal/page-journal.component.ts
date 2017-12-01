import { Component, OnInit } from '@angular/core';
import { JournalEntryService } from '../../services/journal-entry.service';
@Component({
  selector: 'app-page-journal',
  templateUrl: './page-journal.component.html',
  styleUrls: ['./page-journal.component.css']
})
export class PageJournalComponent implements OnInit {
  journals;

  constructor(private journalEntryService: JournalEntryService) { }

  ngOnInit() {
    this.journalEntryService.getJournalEntries().subscribe((data) => {
      this.journals = data;
    });
  }

}
