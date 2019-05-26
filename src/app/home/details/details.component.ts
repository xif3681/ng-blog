import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ArticleService], 
})
export class DetailsComponent implements OnInit {

  articles: any;
  urlSafe: SafeResourceUrl;

  constructor(
    private routerinfo: ActivatedRoute,
    private articleService: ArticleService,
    public sanitizer: DomSanitizer,
  
  ) { }

  ngOnInit() {

    // const articleId = this.routerinfo.snapshot.params.id;
    const articleId = this.routerinfo.snapshot.paramMap.get('id');
    console.log(articleId)
    this.getArticleById(articleId)
  }

  safeResourceUrl(url) {
    this.urlSafe =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  getArticleById(id) {
    const that = this;
    this.articleService.getArticleById(id).subscribe({
      next: function (val) {
        console.log(val);
        that.articles = val.data[0];
        that.safeResourceUrl(val.data[0].cont);
        // that.safeResourceUrl('http://149.28.77.81/resource/html/1558796280433.html');
      },
      complete: function () { 
        console.log(that.urlSafe)
      },
      error: function (error) {
        console.log(error);
      }
    });
  }

}
