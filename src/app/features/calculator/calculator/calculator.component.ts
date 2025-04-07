import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
@Component({
  selector: 'feature-calculator',
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzIconModule,
    NzToolTipModule,
    NzDividerModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
  public baseAmount: number = 0;
  public fees: number = 0;
  public totalAmount: number = 0;
  public iva = environment.values.iva;
  public payphoneCharge =
    environment.values.payphoneCharge * this.iva +
    Number(environment.values.payphoneCharge);

  updateFromBase() {
    this.totalAmount = Number(
      (this.baseAmount / (1 - this.payphoneCharge)).toFixed(2)
    );
    this.fees = Number((this.totalAmount - this.baseAmount).toFixed(2));
  }
  updateFromTotal() {
    this.fees = Number(
      Number(this.totalAmount * this.payphoneCharge).toFixed(2)
    );
    this.baseAmount = Number(this.totalAmount) - Number(this.fees);
  }
}
