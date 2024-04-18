import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-celsius',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './celsius.component.html',
  styleUrl: './celsius.component.scss'
})
export class CelsiusComponent {
  // Properties for celsius and fahrenheit
  celsius:number = 0;
  fahrenheit:number = 0;
  result:string = '';

  /* Methods */
  // From celsius to fahrenheit
  convertCelsius():void {
    this.result = ((this.celsius * 1.8) + 32).toFixed(2);
    this.fahrenheit = parseFloat(this.result);
  }

  // From fahrenheit to celsius
  convertFahrenheit():void {
    this.result = ((this.fahrenheit - 32) / 1.8).toFixed(2);
    this.celsius = parseFloat(this.result);
  }
}
