import { Component, OnInit } from '@angular/core';
import {DestinationsService} from './destinations.service'

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private service: DestinationsService) { }
  destinationList: string;

  ngOnInit() {
    this.service.getDestinations().subscribe(data => {
      this.destinationList = data;
    });
  }

}
