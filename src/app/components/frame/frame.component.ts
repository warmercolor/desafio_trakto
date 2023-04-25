import { Component, HostListener, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

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
  @ViewChild(CdkVirtualScrollViewport, { static: true }) viewport!: CdkVirtualScrollViewport;

  cards = [
    {
      imageSrc:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      subtitle: 'Aula 1: Fono-ortografia',
    },
    {
      imageSrc:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      subtitle: 'Aula 2: Fono-ortografia',
    },
    {
      imageSrc:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      subtitle: 'Aula 3: Fono-ortografia',
    },
    {
      imageSrc:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      subtitle: 'Aula 4: Fono-ortografia',
    },
    {
      imageSrc:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      subtitle: 'Aula 5: Fono-ortografia',
    },
    {
      imageSrc:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      subtitle: 'Aula 6: Fono-ortografia',
    },
  ]
  imagePosition = 0;
  startDraggingPosition = 0;
  scrollOffset = 310;

  constructor() {}

  ngOnInit(): void {}


  moveLeft() {
    this.cardWrapper.nativeElement.scrollLeft -= this.scrollOffset;
  }

  moveRight() {
    this.cardWrapper.nativeElement.scrollLeft += this.scrollOffset;
  }
}
