import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  menu: MenuItem[] = [
    { title: 'Home', routerLink: '/home' },
    { title: 'About Us', routerLink: '/about-us' },
    { title: 'Educations', routerLink: '/educations' },
    { title: 'Experiences', routerLink: '/experiences' },
    { title: 'Projects', routerLink: '/projects' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
