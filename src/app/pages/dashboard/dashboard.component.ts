import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../resources/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading=true;
  @ViewChild('cardWrapper', { static: true }) cardWrapper!: ElementRef;
  scrollOffset=310;
  cards=[
    {
      imageSrc: '',
      subtitle: ''
    },
  ]

  videos=[
    {
      imageSrc:
        'https://www.youtube.com/embed/BTok0FvxA7Q',
      subtitle: 'Trakto Design - Perfeito para empreendedores',
    },
    {
      imageSrc:
        'https://www.youtube.com/embed/kPdWyVW0o8E',
      subtitle: 'Trakto para Empresas',
    },
    {
      imageSrc:
        'https://www.youtube.com/embed/oRWfxt1Z_fA',
      subtitle: '4 formas de ganhar dinheiro com a Trakto!',
    },
    {
      imageSrc:
        'https://www.youtube.com/embed/MbEPCzDeQeY',
      subtitle: 'Confira as NOVIDADES e ATUALIZAÇÕES da TRAKTO',
    },
    {
      imageSrc:
        'https://www.youtube.com/embed/1oKuM-S4Tcc',
      subtitle: 'Como criar e publicar o Trakto Link',
    },
    {
      imageSrc:
        'https://www.youtube.com/embed/vvjhXpyfsw0',
      subtitle: 'Como criar story animado',
    },
  ]

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
    this.LoginService.SlideAll({}).subscribe(
      (response: any) => {
        this.cards=response.data.map((card: any) => ({
          id: card.id,
          imageSrc: card.thumbs.raw,
          subtitle: card.title,
        }));
        this.isLoading=false;
      },
      (error: any) => {
        console.log('Error:', error);
        this.isLoading=false;
      }
    );
  }

  moveLeft() {
    this.cardWrapper.nativeElement.scrollLeft-=this.scrollOffset;
  }

  moveRight() {
    this.cardWrapper.nativeElement.scrollLeft+=this.scrollOffset;
  }

}