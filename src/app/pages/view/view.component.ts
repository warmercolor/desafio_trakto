import { Component, OnInit } from '@angular/core';
import { DataDocument, TraktoDocument } from 'src/app/resources/models/responseDocument';
import { ServiceTrakto } from 'src/app/resources/service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit{
  isLoading: boolean = true

  cards=[
    {
      id: '',
      imageSrc: '',
      subtitle: '',
      pages: ''
    },
    {
      id: '',
      imageSrc: '',
      subtitle: '',
      pages: ''
    },
    {
      id: '',
      imageSrc: '',
      subtitle: '',
      pages: ''
    },
  ]

  constructor(private service: ServiceTrakto) {}

  ngOnInit(): void {
    this.service.SlideAll({}).subscribe(
      (response: DataDocument) => {
        this.cards=response.data.map((card: TraktoDocument) => ({
          id: card.id,
          imageSrc: card.thumbs.raw,
          subtitle: card.title,
          pages: card.pages[0].length.toString() + ' Slide'
        }));
        this.isLoading=false;
      },
      (error: string) => {
        console.log('Error:', error);
        this.isLoading=false;
      }
    );
  }

  redirectToEditor(cardId: string) {
    const url = `https://editor.trakto.io/presentation/p/${cardId}`;
    window.open(url, '_blank');
  }
}
