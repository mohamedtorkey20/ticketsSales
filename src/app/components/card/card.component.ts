import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    QRCodeModule,
    FormsModule,
    TooltipModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  code: string = 'www.tazkty.com/4738473';
  copySuccess: boolean = false;

  copyCode() {
    if (this.code) {
      navigator.clipboard.writeText(this.code).then(
        () => {
          this.copySuccess = true;
          setTimeout(() => {
            this.copySuccess = false;
          }, 2000);
        },
        (err) => {
          console.error('Could not copy code: ', err);
        }
      );
    }
  }
}
