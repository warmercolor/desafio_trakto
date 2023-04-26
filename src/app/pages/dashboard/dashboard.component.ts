import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './../../resources/service/login.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading = true;
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

  

  constructor(private LoginService: LoginService) {}

  ngOnInit(): void {
    this.LoginService.SlideAll({}).subscribe(
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

}