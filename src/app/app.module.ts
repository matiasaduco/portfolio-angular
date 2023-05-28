import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/projects/skills/skills.component';
import { ProjectsContainerComponent } from './components/projects/projects-container/projects-container.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectsContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
