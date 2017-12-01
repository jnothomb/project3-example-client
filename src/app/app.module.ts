import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


// Services
import { JournalEntryService } from './services/journal-entry.service';

// Components
import { AppComponent } from './app.component';
import { PageJournalDetailComponent } from './pages/page-journal-detail/page-journal-detail.component';
import { PageJournalComponent } from './pages/page-journal/page-journal.component';
import { JournalDetailComponent } from './components/journal-detail/journal-detail.component';
import { JournalListComponent } from './components/journal-list/journal-list.component';
import { JournalListItemComponent } from './components/journal-list-item/journal-list-item.component';


const routes: Routes = [
  { path: '', redirectTo: 'journal', pathMatch: 'full' },
  { path: 'journal', component: PageJournalComponent },
  { path: 'journal/:id', component: PageJournalDetailComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    PageJournalDetailComponent,
    PageJournalComponent,
    JournalDetailComponent,
    JournalListComponent,
    JournalListItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
