import { Component } from '@angular/core';
import { GigService, KarmaGig, GigLocation } from 'src/app/services/gig.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'app-gigs-create',
    templateUrl: 'create_gig.page.html',
    styleUrls: ['create_gig.page.scss']
})
export class CreateGigPage {
    title : string;
    date : string;
    category: string;
    description: string;
    duration: number;

    constructor(private gigService : GigService, private router : Router, private location : Location)
    {

    }

    ionViewWillEnter()
    {
        this.title = '';
        this.date = '';
        this.category = '';
        this.description = '';
        this.duration = 0;
    }

    save() {
        let ids = this.gigService.GetGigs().map(x => x.id);
        let highestId = Math.max(...ids);
        let lat = 47.410505 + Math.random() * 0.01;
        let len = 8.603046 + Math.random() * 0.01;
        this.gigService.AddGig(new KarmaGig(highestId+1,'',this.title, this.date,this.category,this.description,new GigLocation(lat, len),'Anon1',2,this.duration));
        this.location.back();
    
    }

}