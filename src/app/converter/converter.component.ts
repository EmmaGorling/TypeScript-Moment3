import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeterComponent } from '../meter/meter.component';
import { CelsiusComponent } from '../celsius/celsius.component';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, MeterComponent, CelsiusComponent],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  

}
