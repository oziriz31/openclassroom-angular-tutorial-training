import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: any;
  // checked: boolean;
  // previousAction: string;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.post.loveIts++;
    // this.checked = true;
    // this.previousAction = 'love it';
    console.log('love it +1');
  }

  onDontLoveIt() {
    this.post.loveIts--;
    // this.checked = true;
    // this.previousAction = 'don\'t love it -1';
    console.log('don\'t love it -1');
  }

/**
  onCancel() {
    this.checked = false;
    if (this.previousAction === 'love it') {
      this.post.loveIts--;
    } else if ( this.previousAction === 'don\'t love it -1') {
      this.post.loveIts++;
    }
  }
  */
}
