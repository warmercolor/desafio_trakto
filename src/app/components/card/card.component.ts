import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() imageSrc: string = ''
  @Input() imageAlt: string = ''
  @Input() slideCount: number = 0;
  @Input() materialTitle: string = ''
  @Input() slideIndex: number = 0;

  constructor() {}

  ngOnInit(): void {

  }

}
