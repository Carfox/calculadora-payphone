import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';
@Pipe({
  name: 'payphoneFees',
})
export class PayphoneFees implements PipeTransform {
  transform(value: number, format: string): number {
      if (format === 'total') {
            let total, aux;
            aux = value * environment.values.payphoneCharge;
            aux = aux + aux * environment.values.iva;
            total = Number(value) +  Number(aux);
            return total;
      } else {
          value = value * environment.values.payphoneCharge;
          value = value + value * environment.values.iva;
          return value;
      }

  }
}
