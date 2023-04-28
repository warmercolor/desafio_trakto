import { Component, OnInit } from '@angular/core';
import { ServiceTrakto } from 'src/app/resources/service/api.service';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit{
  isLoading: boolean = false

  cards=[
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Trakto Design - Perfeito para empreendedores',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Trakto para Empresas',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: '4 formas de ganhar dinheiro com a Trakto!',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Confira as NOVIDADES e ATUALIZAÇÕES da TRAKTO',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Como criar e publicar o Trakto Link',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Como criar story animado',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Trakto Design - Perfeito para empreendedores',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Trakto para Empresas',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: '4 formas de ganhar dinheiro com a Trakto!',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Confira as NOVIDADES e ATUALIZAÇÕES da TRAKTO',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Como criar e publicar o Trakto Link',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Como criar story animado',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Trakto Design - Perfeito para empreendedores',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Trakto para Empresas',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: '4 formas de ganhar dinheiro com a Trakto!',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Confira as NOVIDADES e ATUALIZAÇÕES da TRAKTO',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Como criar e publicar o Trakto Link',
    },
    {
      imageSrc: 'https://via.placeholder.com/200',
      subtitle: 'Como criar story animado',
    },
  ]

  constructor(private service: ServiceTrakto) {}

  ngOnInit(): void {
    // this.service.SlideAll({}).subscribe(
    //   (response: any) => {
    //     this.cards=response.data.map((card: any) => ({
    //       id: card.id,
    //       imageSrc: card.thumbs.raw,
    //       subtitle: card.title,
    //     }));
    //     this.isLoading=false;
    //   },
    //   (error: any) => {
    //     console.log('Error:', error);
    //     this.isLoading=false;
    //   }
    // );
  }
}
