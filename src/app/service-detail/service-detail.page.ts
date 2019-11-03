import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../list/service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  templateUrl: 'service-detail.page.html',
  styleUrls: ['service-detail.page.scss']
})

export class ServiceDetailPage implements OnInit {
  @Input() service: Service;

  constructor(private _location: Location) { }
    ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}
