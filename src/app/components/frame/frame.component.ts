import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  @Input() dateRange = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() textColor = '';
  @Input() bgColor = '';
  @Input() hoverColor = '';
  @Input() titleBtn = '';
  @Input() icon?: string;
  @Input() frameType: 'default' | 'view' = 'default';
  @ViewChild('cardWrapper', { static: true }) cardWrapper!: ElementRef;

  public readonly scrollOffset = 310;

  constructor() { }

  ngOnInit(): void {
  }

  scrollCardsLeft(): void {
    this.scrollCards(-this.scrollOffset);
  }

  scrollCardsRight(): void {
    this.scrollCards(this.scrollOffset);
  }

  private scrollCards(offset: number): void {
    this.cardWrapper.nativeElement.scrollTo({
      left: this.cardWrapper.nativeElement.scrollLeft + offset,
      behavior: 'smooth',
    });
  }
}
