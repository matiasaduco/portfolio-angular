import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  private lastScrollPosition: number = window.scrollY

  // skills: any[] = [
  //   { title: 'Angular', src: '../../../assets/icons/skills/angular.svg' },
  //   { title: 'React', src: '../../../assets/icons/skills/react.svg' },
  //   { title: 'HTML', src: '../../../assets/icons/skills/html-5.png' },
  //   { title: 'CSS', src: '../../../assets/icons/skills/css-3.png' },
  //   { title: 'JavaScript', src: '../../../assets/icons/skills/javascript.png' },
  //   { title: 'TypeScript', src: '../../../assets/icons/skills/typescript.svg' },
  // ];

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const currentScroll = window.scrollY
    if(currentScroll < this.lastScrollPosition) {
      const section = document.getElementById('start')
      section?.scrollIntoView()
    }
    this.lastScrollPosition = currentScroll
  }
}
