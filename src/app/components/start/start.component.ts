import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('load', () => {
      const main = document.getElementById('start');
      main!.style.opacity = '1';
    });
  }
}
