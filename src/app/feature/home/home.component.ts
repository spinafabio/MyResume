import { Component, OnInit } from '@angular/core';
import data from '../../data/resume.json';
import { BasicInfo } from './interfaces/basic-info.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  basicInfo!: BasicInfo;

  constructor() {}

  ngOnInit(): void {
    this.basicInfo = data.basics;
  }
}
