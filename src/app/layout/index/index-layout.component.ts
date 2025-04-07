import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from "../../features/calculator/calculator/calculator.component";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { GuiaComponent } from '../../features/guia/guia.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  imports: [
    CalculatorComponent,
    GuiaComponent,
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
  ],
  template: `
    <nz-layout class="main-layout">
      <nz-header>
        <div class="header-content">
          <h1>Calculadora de Comisiones Payphone</h1>
        </div>
      </nz-header>

      <nz-content>
        <div class="content-wrapper">
          <nz-row [nzGutter]="24">
            <!-- Columna izquierda: Guía -->
            <nz-col [nzSpan]="24" [nzMd]="12">
              <app-guia></app-guia>
            </nz-col>

            <!-- Columna derecha: Calculadora -->
            <nz-col [nzSpan]="24" [nzMd]="12">
              <feature-calculator></feature-calculator>
            </nz-col>
          </nz-row>
        </div>
      </nz-content>

      <nz-footer>
        <div class="footer-content">
          <p class="disclaimer">
            Esta herramienta no está afiliada ni asociada oficialmente con
            Payphone.
          </p>
          <div class="footer-links">
            <nz-icon nzType="github" nzTheme="outline" />
            <a
              href="https://github.com/carfox/calculadora-payphone"
              target="_blank"
              >GitHub</a
            >
            <span>|</span>

            <nz-icon
              nzType="mail"
              nzTheme="outline"
              style="padding-left: 5px;"
            />
            <a href="mailto:carlotreball@gmail.com">Contacto</a>
          </div>
          <p class="rights">
            © 2025 Calculadora Payphone. Todos los derechos reservados.
          </p>
        </div>
      </nz-footer>
    </nz-layout>
  `,
  styles: `

      /* Asegura que el layout ocupe toda la pantalla */
html, body, nz-layout {
  height: 100%;
  margin: 0;
}

/* Header */
nz-header {
  background: #df7f1b;
  color: #fff;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 64px;
}

.header-content h1 {
  font-size: 20px;
  margin: 0;
  color: #fff;
  font-weight: 500;
}

/* Content */
nz-content {
  background: #F4F6FF;
  flex: 1 0 auto;
  padding: 24px;
}

.content-wrapper {
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  min-height: 300px;
}

/* Footer */
nz-footer {
  background: #3c3c3c;
  color: #fff;
  text-align: center;
  padding: 24px;
  flex-shrink: 0;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-links {
  margin: 8px 0;
}

.footer-links a {
  color: #fff;
  margin: 0 8px;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-links a:hover {
  opacity: 0.8;
}

.disclaimer {
  font-size: 13px;
  margin-bottom: 8px;
  opacity: 0.9;
}

.rights {
  font-size: 12px;
  margin-top: 8px;

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexLayoutComponent {}
