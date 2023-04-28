import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ServiceTrakto } from '../../resources/service/api.service';
import { TraktoProfile } from './../../resources/models/responseProfile';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentDate: string = '';
  userName: string = '';
  profileImageUrl: string | null = null;

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Input() theme: 'dark' | 'light' = 'dark';

  constructor(private service: ServiceTrakto, private router: Router) {}

  ngOnInit(): void {
    this.currentDate = this.formatDate(new Date());
    this.loadUserProfile();
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  loadUserProfile(): void {
    this.service.Profile({}).subscribe(
      (response: TraktoProfile) => {
        this.userName = response.firstname;
        this.profileImageUrl = response.logo.url.low.secure_url;
      },
      (error) => {
        console.log('Error loading user profile:', error);
      }
    );
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  }

  hasProfileImage(): boolean {
    return !!this.profileImageUrl;
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  userLogout(): void {
    this.service.ClearCookie();
    this.router.navigate(['/login']);
  }
}
