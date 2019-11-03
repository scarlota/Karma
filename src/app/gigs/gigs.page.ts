import { Component } from '@angular/core';
import { GigService, KarmaGig } from 'src/app/services/gig.service';

@Component({
  selector: 'app-gigs',
  templateUrl: 'gigs.page.html',
  styleUrls: ['gigs.page.scss']
})
export class GigsPage {
  showPostedList: boolean = true;
  showPendingList: boolean = false;

  gigs : Array<KarmaGig> = []
  numberPending : number = 0;
  numberCreated : number = 0;

  pendingGigs : Array<number> = [17,18]

  constructor(private gigService : GigService) {
    this.gigs = gigService.GetGigs();

    this.numberPending = this.pendingGigs.length;
    this.numberCreated = this.gigs.filter(x => x.owner == "Anon1").length;

  }

  showPosted() {
    this.showPostedList = true;
    this.showPendingList = !this.showPostedList;
  }
  showPending() {
    this.showPendingList = true;
    this.showPostedList = !this.showPendingList;
  }
}
