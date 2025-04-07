import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-guia',
  imports: [NzCardModule, NzIconModule],
  template: `
    <nz-card nzTitle="¿Cómo usar la Calculadora?" nzBordered="false">
      <ul class="guia-list">
        <li>
          <i nz-icon nzType="edit" nzTheme="twotone"></i>
          <span
            >Ingresa el monto que deseas recibir o el que deseas cobrar.</span
          >
        </li>
        <li>
          <i nz-icon nzType="calculator" nzTheme="twotone"></i>
          <span
            >La calculadora aplicará automáticamente la comisión de Payphone
            (5%) y el IVA (15%).</span
          >
        </li>
        <li>
          <nz-icon nzType="sync" [nzSpin]="true" />
          <span
            >Los demás campos se actualizarán automáticamente según tu
            entrada.</span
          >
        </li>
        <li>
          <i nz-icon nzType="check-circle" nzTheme="twotone"></i>
          <span
            >Revisa el total a cobrar o el total a recibir antes de compartirlo
            con el cliente.</span
          >
        </li>
        <li>
          <i nz-icon nzType="info-circle" nzTheme="twotone"></i>
          <span>
            Usa punto (<strong>.</strong>) como separador decimal. Las
            comisiones están basadas en los
            <a
              href="https://www.payphone.app/terminos-y-condiciones"
              target="_blank"
              >términos y condiciones oficiales de Payphone</a
            >.
          </span>
        </li>
      </ul>
    </nz-card>
  `,
  styleUrl: './guia.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuiaComponent {}
