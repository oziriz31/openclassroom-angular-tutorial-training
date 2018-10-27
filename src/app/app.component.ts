import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    new Post('Journal des étudiants', 'Aujourd\'hui c\'est la rentrée scolaire', -2),
    new Post('journées porte ouverte', 'Participer à la journée porte ouverte tout les mercredis durance ce premier moi de septembre', 2),
    new Post('plus un post encore', 'Ceci est un post supplémentaire...', 0)
  ];

  constructor() {}
}

export class Post {

  created_at: Date;

  constructor(private title: string, private content: string, private loveIts) {
    this.created_at = new Date();
    // console.log(this.created_at);
  }

}
