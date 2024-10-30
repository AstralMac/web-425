import { Component } from '@angular/core';
import { Service, ServiceItem } from '../service';
import {ActivatedRoute, RouterLink} from '@angular/router';


@Component({
  selector: 'app-view-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h1>Service Details</h1>
      <p> Here are the details of the service:</p>
      <ul>
        <li>Service ID: {{serviceItem.id}}</li>
        <li>Service Name: {{serviceItem.name}}</li>
      </ul>

      <a routerLink = "/services">Back to Services</a>
    </div>
  `,
  styles: ``
})
export class ViewServicesComponent {
  serviceItem: ServiceItem;
  serviceId: number;

  constructor(private route: ActivatedRoute) {
    this.serviceId = this.route.snapshot.params['id'];
    console.log(this.serviceId);

    const service = new Service();
    this.serviceItem = service.getService(this.serviceId);
  }
}
