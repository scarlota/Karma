import { Component, OnInit } from '@angular/core';
import { GigService, KarmaGig } from 'src/app/services/gig.service';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gigs',
  templateUrl: 'gigs.page.html',
  styleUrls: ['gigs.page.scss']
})

export class GigsPage implements OnInit {
  showPostedList: boolean = true;
  showPendingList: boolean = false;

  gigs : Array<KarmaGig> = []
  ownGigs : Array<KarmaGig> = []
  pendingGigs : Array<KarmaGig> = []
  numberPending : number = 0;
  numberCreated : number = 0;

  pendingGigsIds : Array<number> = [17,18]

  constructor(private gigService : GigService, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    let addPendingGig = this.activatedRoute.snapshot.paramMap.get('gid');
    let hasAddedGig = addPendingGig != undefined;

    if (hasAddedGig) {
      this.pendingGigsIds.push(Number(addPendingGig));
      this.showPending();
    }
  }

  ionViewDidEnter()
  {
    this.gigs = this.gigService.GetGigs();  
    this.ownGigs = this.gigs.filter(x => x.owner == "Anon1");
    this.pendingGigs = this.gigs.filter(x => this.pendingGigsIds.includes(x.id));
    this.numberPending = this.pendingGigs.length;
    this.numberCreated = this.ownGigs.length;
  }

  showPosted() {
    this.showPostedList = true;
    this.showPendingList = false;
  }
  showPending() {
    this.showPendingList = true;
    this.showPostedList = false;
  }
}
