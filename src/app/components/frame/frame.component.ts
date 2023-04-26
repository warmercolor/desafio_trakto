import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  @Input() dateRange: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @ViewChild('cardWrapper', { static: true }) cardWrapper!: ElementRef;
  scrollOffset = 310;

  constructor() {}
  ngOnInit(): void {

  }

  moveLeft() {
    this.cardWrapper.nativeElement.scrollTo({
      left: this.cardWrapper.nativeElement.scrollLeft - this.scrollOffset,
      behavior: 'smooth',
    });
  }

  moveRight() {
    this.cardWrapper.nativeElement.scrollTo({
      left: this.cardWrapper.nativeElement.scrollLeft + this.scrollOffset,
      behavior: 'smooth',
    });
  }
}
