import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {DevicesApiService} from './devices/devices-api.service';
import {Device} from './devices/device.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  devicesListSubs : Subscription;
  devicesList: Device[];
  
  constructor(private devicesApi : DevicesApiService) {
  }
  ngOnInit() {
	this.devicesListSubs = this.devicesApi
	.getDevices()
	.subscribe(res => {
		this.devicesList = res;
	},
	console.error
  );
}
  ngOnDestroy() {
	  this.devicesListSubs.unsubscribe();
  }
}