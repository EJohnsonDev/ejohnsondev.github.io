import { Component, OnInit } from '@angular/core';
import { techStack } from '../../entities/tech-stack';
import { gsap } from 'gsap';


@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // gsap.from(".fade", {stagger: .275, y: -20, opacity: 0, duration: .3});
  }

}
