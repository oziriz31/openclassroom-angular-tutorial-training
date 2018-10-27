import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'journal des étudiant',
      content: 'Aujourd\'hui c\'est la rentrée scolaire',
      loveIts: -2,
      create_at: Date.now()
    },
    {
      title: 'journées porte ouverte',
      content: 'Participer à la journée porte ouverte tout les mercredis durance ce premier moi de septembre',
      loveIts: 2,
      create_at: Date.now()
    },
    {
      title: 'plus un post encore',
      content: 'Ceci est un post supplémentaire...',
      loveIts: 0,
      create_at: Date.now()
    }
  ];

  constructor() {}
}
