import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  private lastScrollPosition: number = window.scrollY

  ngOnInit(): void {
    window.addEventListener('load', () => {
      const main = document.getElementById('start');
      main!.style.opacity = '1';
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const currentScroll = window.scrollY
    if(currentScroll > this.lastScrollPosition) {
      const section = document.getElementById('about')
      section?.scrollIntoView()
    }
    this.lastScrollPosition = currentScroll
  }
}
