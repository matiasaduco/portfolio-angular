import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  frontend_skills: any[] = [
    { title: 'Angular', src: '../../../assets/icons/skills/frontend/angular.svg' },
    { title: 'React', src: '../../../assets/icons/skills/frontend/react.svg' },
    { title: 'HTML', src: '../../../assets/icons/skills/frontend/html-5.png' },
    { title: 'CSS', src: '../../../assets/icons/skills/frontend/css-3.png' },
    { title: 'JavaScript', src: '../../../assets/icons/skills/frontend/javascript.png' },
    { title: 'TypeScript', src: '../../../assets/icons/skills/frontend/typescript.svg' },
  ];

  backend_skills: any[] = [
    { title: 'Java', src: '../../../assets/icons/skills/backend/java.png' },
    { title: 'Kotlin', src: '../../../assets/icons/skills/backend/kotlin.svg' },
    { title: 'SQL', src: '../../../assets/icons/skills/backend/sql.png' },
    { title: 'Neo4j', src: '../../../assets/icons/skills/backend/neo4j.svg' },
    { title: 'Spring', src: '../../../assets/icons/skills/backend/spring.png' },
    { title: 'Node.js', src: '../../../assets/icons/skills/backend/node-js.svg' },
    { title: 'Express.js', src: '../../../assets/icons/skills/backend/expressjs.png' },
    { title: 'Sequelize', src: '../../../assets/icons/skills/backend/sequelize.png' },
  ];

  tools_skills: any[] = [
    { title: 'git', src: '../../../assets/icons/skills/git.svg' },
    { title: 'S.O.L.I.D.', src: '../../../assets/icons/skills/solid.png' },
    { title: 'TDD', src: '../../../assets/icons/skills' },
    { title: 'Scrum', src: '../../../assets/icons/skills' },
  ];
}
