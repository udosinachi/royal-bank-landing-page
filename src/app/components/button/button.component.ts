import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  smallIcon: boolean = false;
  mobileMedia: any = window.matchMedia('(max-width: 640px)');

  constructor() {}

  ngOnInit(): void {
    if (this.mobileMedia.matches) {
      this.smallIcon = true;
    }
  }
}
