import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private deviceService: DeviceDetectorService) {}

  get isMobile(): boolean {
    return this.deviceService.isMobile();
  }
}
