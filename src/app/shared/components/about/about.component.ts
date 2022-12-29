import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    gsap.from('.fadeIn', {
      stagger: 0.3,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });
  }
}
