import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent implements OnInit {
  public projects: any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.github.com/users/matiasaduco/repos').subscribe(data => {
      if(Array.isArray(data)) this.projects.push(...data)
    })
  }
}
