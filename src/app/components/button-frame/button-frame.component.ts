import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button-frame.component.html',
  styleUrls: ['./button-frame.component.scss']
})
export class ButtonFrameComponent {
  @Input() textColor: string = ''
  @Input() bgColor: string = ''
  @Input() hoverColor: string = ''
  @Input() icon?: string = ''
  @Input() titleBtn: string = ''
  hovering: boolean = false
}
