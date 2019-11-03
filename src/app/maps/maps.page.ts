import { Component, ViewChild, ElementRef } from "@angular/core";
import { GigService } from 'src/app/services/gig.service';

declare var google;

@Component({
    selector: 'app-maps',
    templateUrl: 'maps.page.html',
    styleUrls: ['maps.page.scss']
})
export class MapsPage {

    @ViewChild('map', { static: false }) mapElement: ElementRef;
    map: any;
    address: string;

    constructor(private gigService : GigService) {

    }



    ionViewDidEnter() {
        this.loadMap();
    }

    loadMap() {

        let latLng = new google.maps.LatLng(47.411205, 8.612046);
        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }


        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        this.map.addListener('tilesloaded', () => {
            console.log('accuracy', this.map);

        });

        let gigs =  this.gigService.GetGigs();

        let infoWindows : Array<any> = [];

        for (var index in gigs) {
            let marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.NONE,
                position: new google.maps.LatLng(gigs[index].location.lat, gigs[index].location.len)
            });

            let obj = gigs[index];
            let infowindow = new google.maps.InfoWindow({
                content: obj.title +' / '+ obj.date
              });

              infoWindows.push(infowindow);
            google.maps.event.addListener(marker, 'click', function() {
                infoWindows.forEach(element => {
                    element.close();
                });
                infowindow.open(this.map, marker);     
            });

        }
    }
}
