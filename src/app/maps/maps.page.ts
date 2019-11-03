import { Component, ViewChild, ElementRef } from "@angular/core";

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

    locs: Array<GigLocation> = [
        new GigLocation(47.411305, 8.612046),
        new GigLocation(47.410205, 8.611046),
        new GigLocation(47.412105, 8.614046),
        new GigLocation(47.413005, 8.613046),
    ]

    constructor() {

    }


    ngAfterViewInit() {
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


        for (var index in this.locs) {
            var marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.NONE,
                position: new google.maps.LatLng(this.locs[index].lat, this.locs[index].len)
            });

        }
    }
}

class GigLocation {
    constructor(public lat: any, public len: any) {

    }
}