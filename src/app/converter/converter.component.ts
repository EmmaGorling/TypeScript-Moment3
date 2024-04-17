import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  // Properties for meter too foot
  meter: number = 0;
  foot:number = 0;
  celsius:number = 0;
  fahrenheit:number = 0;
  result:string = '';

  /* Methods */

  // From meter to foot
  convertMeter():void {
    this.result = (this.meter * 0.3048).toFixed(2);
    this.foot = parseFloat(this.result);
  }
  // From foot to meter
  convertFoot():void {
    this.result = (this.foot * 3.2808399).toFixed(2);
    this.meter = parseFloat(this.result);
  }

  convertCelsius():void {

  }

  convertFahrenheit():void {
    
  }

}
