import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { bio } from '../../entities/bio-info';

@Component({
  selector: 'app-title-info',
  templateUrl: './title-info.component.html',
  styleUrls: ['./title-info.component.scss']
})
export class TitleInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.from(".easeDown", {stagger: .275, y: -20, opacity: 0, duration: .3});
  }

}
