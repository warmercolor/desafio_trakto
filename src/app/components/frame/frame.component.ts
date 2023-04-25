import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  @Input() dateRange: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';

  constructor() {}

  ngOnInit(): void {

  }
}
