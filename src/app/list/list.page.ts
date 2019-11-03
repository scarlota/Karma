import { Component, OnInit } from '@angular/core';
import { SERVICES } from './mock-services';
import { Service } from './service';
import { Router } from '@angular/router';

import { Routes } from '@angular/router';
import { ServiceDetailPage } from '../service-detail/service-detail.page';
import { GigService, KarmaGig } from 'src/app/services/gig.service';

// const routes: Routes = [
//   {
//     path: 'service-detail',
//     component: ServiceDetailPage,
//     // children: [
//     //   {
//     //     path: 'schedule',
//     //     children: [
//     //       {
//     //         path: '',
//     //         loadChildren: '../schedule/schedule.module#ScheduleModule'
//     //       }
//     //     ]
//       },
//       {
//         path: '',
//         redirectTo: '/app/list',
//         pathMatch: 'full'
//       }
//     ]

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})



export class ListPage implements OnInit {

  services = SERVICES;
  gigs: Array<KarmaGig>;

  selectedService: Service;

  constructor(private router: Router, private gigService: GigService) {
    this.gigs = gigService.GetGigs();
  }

  ngOnInit() {
  }

  onSelect(service: Service): void {
    this.selectedService = service;
    //this.router.navigate(['service-detail']);

    console.log("select", service);
  }

}
