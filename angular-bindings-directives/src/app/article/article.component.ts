import {Article} from './article';
import {Component, OnInit, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';

  @Input() article: Article;


  voteUp() {
    this.article.voteUp();
    return false; // don't reload browser when click
  }

  voteDown() {
    this.article.voteDown();
    return false; // don't reload browser when click
  }

  constructor() {

  }

  ngOnInit() {
  }

}
