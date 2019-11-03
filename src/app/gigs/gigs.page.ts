import { Component } from '@angular/core';

@Component({
  selector: 'app-gigs',
  templateUrl: 'gigs.page.html',
  styleUrls: ['gigs.page.scss']
})
export class GigsPage {
  showPostedList: boolean = true;
  showPendingList: boolean = false;

  constructor() {}

  showPosted() {
    this.showPostedList = true;
    this.showPendingList = !this.showPostedList;
  }
  showPending() {
    this.showPendingList = true;
    this.showPostedList = !this.showPendingList;
  }
}
