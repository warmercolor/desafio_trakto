import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent {

  constructor(private router: Router){}

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
