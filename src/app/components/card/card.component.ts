// card.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imageSrc: string = ''
  @Input() imageAlt: string = ''
  @Input() slideFix: string = '';
  @Input() materialTitle: string = ''
  @Input() slideIndex: number = 0;
  @Input() contentType: 'image' | 'video' = 'image';
  safeVideoUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.contentType === 'video') {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageSrc);
    }
  }

  ngOnDestroy(): void{
    if (this.contentType === 'video') {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageSrc);
    }
  }
}
