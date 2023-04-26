import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './../../resources/service/login.service';
import { TraktoProfile } from './../../resources/models/responseProfile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  currentDate!: string;
  userName: string = "First Name";
  profileImageUrl: string | null = '';

  constructor(private service: LoginService) {}

  @Input() theme: 'dark' | 'light' = 'dark';

  ngOnInit(): void {
    this.currentDate = this.formatDate(new Date());

    this.service.Profile({}).subscribe(
      (response: TraktoProfile) => {
        this.userName = response.firstname
        this.profileImageUrl = response.logo.url.low.secure_url
      },
      (error: any) => {
        console.log('Error:', error)
      }
    )
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  }

  getInitials(name: string): string {
    return name.split(' ').map((part) => part.charAt(0).toUpperCase()).join('');
  }

  hasProfileImage(): boolean {
    return this.profileImageUrl !== null;
  }
}
