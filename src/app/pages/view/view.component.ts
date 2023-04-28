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
      imageSrc: '',
      subtitle: '',
    },
  ]

  constructor(private service: ServiceTrakto) {}

  ngOnInit(): void {
    this.service.SlideAll({}).subscribe(
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
}
