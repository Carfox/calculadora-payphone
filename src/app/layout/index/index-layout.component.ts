import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from "../../features/calculator/calculator/calculator.component";

@Component({
  imports: [CalculatorComponent],
  template: `
  <h3>Agregar diseño en el index</h3>
  <app-calculator/>


  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexLayoutComponent {


}
