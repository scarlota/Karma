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

  gigs: Array<KarmaGig>;

  selectedService: Service;

  constructor(private router: Router, private gigService: GigService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let now = new Date();
    this.gigs = this.gigService.GetGigs();
    this.gigs = this.gigs.sort((a,b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }

  onSelect(service: Service): void {
    this.selectedService = service;
    this.router.navigate(['app/tabs/service-detail', this.selectedService.id]);

    //console.log("select", service);
  }

}
