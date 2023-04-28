import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button-frame.component.html',
  styleUrls: ['./button-frame.component.scss']
})
export class ButtonFrameComponent {
  @Input() textColor: string = '';
  @Input() bgColor: string = '';
  @Input() hoverColor: string = '';
  @Input() icon?: string = '';
  @Input() titleBtn: string = '';
  @Input() buttonUrl: string = '';
  hovering: boolean = false;

  constructor(private router: Router) {}

  navigateToExternalSite(url: string): void {
    window.open(url, '_blank');
  }

  buttonNavigate() {
    if (this.buttonUrl.startsWith('http://') || this.buttonUrl.startsWith('https://')) {
      this.navigateToExternalSite(this.buttonUrl);
    } else {
      this.router.navigateByUrl(this.buttonUrl);
    }
  }
}
