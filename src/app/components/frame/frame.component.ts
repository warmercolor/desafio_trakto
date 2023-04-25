import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { LoginService } from './../../resources/service/login.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  @Input() dateRange: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  scrollOffset = 310;
  isLoading = true;
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

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.SlideAll({}).subscribe(
      (response: any) => {
        this.cards = response.data.map((card: any) => ({
          id: card.id,
          imageSrc: card.thumbs.raw,
          subtitle: card.title,
        }));
        this.isLoading = false;
      },
      (error: any) => {
        console.log('Error:', error);
        this.isLoading = false;
      }
    );
  }


  moveLeft() {
    this.cardWrapper.nativeElement.scrollLeft -= this.scrollOffset;
  }

  moveRight() {
    this.cardWrapper.nativeElement.scrollLeft += this.scrollOffset;
  }
}
