import { Component } from '@angular/core';
import { Service } from './service';
import { Services } from './services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  servicesList = new Services();
  services: Service[] = [
    this.servicesList.dental_implants,
    this.servicesList.aesthetic_dentistry,
    this.servicesList.root_canal,
    this.servicesList.oral_surgery,
    this.servicesList.dentistry,
    this.servicesList.crowns,
    this.servicesList.braces,
    this.servicesList.wisdom,
  ]
}
