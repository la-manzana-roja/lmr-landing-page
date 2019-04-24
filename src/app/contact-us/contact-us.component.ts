import { Component } from '@angular/core';

const LATITUDE = -17.3942928;
const LONGITUDE = -66.1586233;
@Component({
  selector: 'lmr-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  latitude = LATITUDE;
  longitude = LONGITUDE;
  zoom = 18;

  constructor() {}
}
