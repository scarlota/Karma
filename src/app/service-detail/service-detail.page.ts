import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../list/service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { GigService, KarmaGig } from '../services/gig.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: 'service-detail.page.html',
  styleUrls: ['service-detail.page.scss']
})

export class ServiceDetailPage implements OnInit {
  service: KarmaGig;
  myId = null;
  //gigService: GigService;

  constructor(private activatedRoute: ActivatedRoute,
    private _location: Location, 
    private router: Router, 
    private gigService: GigService) {
      console.log(this.router.getCurrentNavigation().extras);
  }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.myId);
    this.service = this.gigService.GetGigById(this.myId);
    console.log(this.service);
  }

  backClicked() {
    this._location.back();
  }
}
