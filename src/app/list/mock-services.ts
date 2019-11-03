import { Service } from './service';

export const SERVICES: Service[] = [
    { id: 11, author: 'Dr Nice', title: "Walk a sweet dog!", description: "Need some help for the evening!", image:"/assets/services/dog1.jpeg", time_start:"2019-01-05T09:05:05Z", duration_min: 45, badge: 5, category:'pet' },
    { id: 12, author: 'Narco', title: "Help in moving furniture!", description: "Need some help for the evening!", image:"/assets/services/dog1.jpeg", time_start:"2019-01-05T09:05:05Z", duration_min: 60, badge: 3, category:"work" },
    { id: 13, author: 'Celeritas', title: "Need for a ride!", description: "Need some help for the evening!", image:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", time_start:"2019-01-05T09:05:05Z", duration_min: 30, badge: 2, category:'ride' },
    { id: 14, author: 'Inge Smidth', title: "Help with groceries!", description: "Need some help for the evening!", image:'', time_start:"2019-08-06T09:05:05Z", duration_min: 90, badge: 2, category:'shop' },
  ];