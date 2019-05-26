import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'], 
  providers: [ArticleService],  
})
export class ArticleComponent implements OnInit {

  articles = [];
  page = 1;
  pageSize = 5;
  total = 0;

  constructor(
    private articleService: ArticleService,
    public router: Router, 
  
  ) { }

  ngOnInit() {
    this.getAllArticle();
  }
  pageChange () {
    this.getAllArticle();
  }

  getAllArticle() {
    const that = this;
    this.articleService.getAllArticle(this.page, this.pageSize).subscribe({
      next: function (val) {
        console.log(val);
        that.articles = val.data;
        that.total = val.total;
      },
      complete: function () { },
      error: function (error) {
        console.log(error);
      }
    });
  }
  gotoDetail(article) {
    console.log(article);
    this.router.navigate(['/details', { id: article}]);
  }
  updataArticle(article) {
    console.log(article);
  }
  delArticle(article) {
    console.log(article);
    const that = this;
    this.articleService.deleteArticle(article).subscribe({
      next: function (val) {
        console.log(val);

      },
      complete: function () {
        that.getAllArticle();
       },
      error: function (error) {
        console.log(error);
      }
    });
  }


}
