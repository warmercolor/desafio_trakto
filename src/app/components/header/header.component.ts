import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentDate!: string;
  userName: string = "John Doe";
  profileImageUrl: string | null = 'https://bahaiteachings.s3.us-west-1.amazonaws.com/2018/10/How-Set-Good-Example-Be-Role-Model-Others.jpg';

  constructor() {}

  @Input() theme: 'dark' | 'light' = 'dark';

  ngOnInit(): void {
    this.currentDate = this.formatDate(new Date());
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
