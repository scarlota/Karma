import { Injectable } from '@angular/core';

@Injectable()
export class GigService {

    gigs: Array<KarmaGig> = [
        new KarmaGig(
            11,
            "/assets/services/dog1.jpeg",
            "Walk a sweet dog!",
            "2019-01-05T09:05:05Z",
            'pet',
            "Need some help for the evening!",
            new GigLocation(47.411305, 8.617046),
            'Dr Nice',
            5,
            45
        ),
        new KarmaGig(
            12,
            "",
            "Help in moving furniture!",
            "2019-01-05T09:05:05Z",
            'work',
            "Need some help for the evening!",
            new GigLocation(47.412305, 8.609046),
            'Narco',
            3,
            60
        ),
        new KarmaGig(
            13,
            "",
            "Need for a ride!",
            "2019-01-05T09:05:05Z",
            'ride',
            "Need some help for the evening!",
            new GigLocation(47.419305, 8.62046),
            'Celeritas',
            2,
            30
        ),
        new KarmaGig(
            14,
            '',
            "Help with groceries!",
            "2019-01-05T09:05:05Z",
            'shop',
            "Need some help for the evening!",
            new GigLocation(47.439305, 8.62146),
            'Inge Smidth',
            2,
            90
        ),

        new KarmaGig(
            15,
            '',
            "Walk my Doggi",
            "2019-01-05T09:05:05Z",
            "pet",
            "Please walk my good boy",
            new GigLocation(47.413305, 8.609046),
            "Anon1",
            3,
            30),
        new KarmaGig(
            16,
            '',
            "Need help at the stairs",
            "2019-01-05T09:05:05Z",
            "people",
            "Can somebody help me carry my bags?",
            new GigLocation(47.410205, 8.611046),
            "Anon2",
            1,
            120),
        new KarmaGig(17,
            '',
            "Boarding help",
            "2019-01-05T09:05:05Z",
            "people",
            "I need to board the train at 12:15 but can't get up the stairs",
            new GigLocation(47.416105, 8.610046),
            "Anon3",
            5,
            85),
        new KarmaGig(18,
            '',
            "Looking to have a lunch partner",
            "2019-01-05T09:05:05Z",
            "food",
            "Somebody like to join? I like talking and eating",
            new GigLocation(47.413005, 8.613046),
            "Anon4",
            4,
            60),
        new KarmaGig(
            19,
            '',
            "Need help at the stairs",
            "2019-01-05T09:05:05Z",
            "nature",
            "Can somebody help me carry my bags?",
            new GigLocation(47.416005, 8.618046),
            "Anon5",
            6,
            90),
    ]

    GetGigs(): Array<KarmaGig> {
        return this.gigs;
    }

}

export class KarmaGig {
    constructor(
        public id: number,
        public image: string,
        public title: string,
        public date: string,
        public category: string,
        public description: string,
        public location: GigLocation,
        public owner: string,
        public badge: number,
        public duration: number,
    ) {

    }
}

class GigLocation {
    constructor(public lat: any, public len: any) {

    }
}

