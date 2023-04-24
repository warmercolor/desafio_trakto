import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit{
  @Input() title: string = '';
  @Input() lineColor: string = '#ffffff';
  @Input() lineWidth: string = '100px'
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() imageBorder: string = '#000'

  isExpanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleLine(): void {
    this.isExpanded = !this.isExpanded
  }
}
