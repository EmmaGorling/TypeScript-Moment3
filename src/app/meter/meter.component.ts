import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meter.component.html',
  styleUrl: './meter.component.scss'
})
export class MeterComponent {
  // Properties for meter and foot
  meter: number = 0;
  foot:number = 0;
  result:string = '';

  /* Methods */

  // From meter to foot
  convertMeter():void {
    this.result = (this.meter * 3.2808399).toFixed(2);
    this.foot = parseFloat(this.result);
  }
  // From foot to meter
  convertFoot():void {
    this.result = (this.foot * 0.3048).toFixed(2);
    this.meter = parseFloat(this.result);
  }
}
