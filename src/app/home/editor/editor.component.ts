import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [ArticleService],  
})
export class EditorComponent implements OnInit {

  title = 'app';
  data = {
    title: '', // 标题
    type: 1, // 类型
    cont: '', // 内容
    tags: '', // 标签
    categories: '', // 分类
    chnl: 36,
    level: 0,
    artid: 0,
    private: false,
    stat: 'publish'
  };
  categories = [
    { id: 1001, name: 'ionic' },
    { id: 1002, name: 'Angular' },
    { id: 1003, name: 'vue' },
    { id: 1004, name: 'react' },
    { id: 1005, name: 'Javascript' },
  ];
  category = this.categories[0];
  types = [
    { id: 1, name: '原创' },
    { id: 2, name: '转载' },
    { id: 3, name: '分类' },
  ]
  type = this.types[0];
  editorContent: any;
  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
  }

  addAirtical() {
    this.data.type = this.type.id;
    this.data.categories = this.category.name;
    this.data.cont = this.editorContent;
    console.log(this.data);

    const data = {
      title: this.data.title, // 标题
      type: this.data.type, // 类型
      cont: this.data.cont, // 内容
      tags: this.data.tags, // 标签
      categories: this.data.categories, // 分类
      chnl: this.data.chnl,
      level: this.data.level,
      artid: this.data.artid,
      private: this.data.private,
      stat: this.data.stat,
      date: new Date()
    };

    const that = this;
    this.articleService.addNewArticle(data).subscribe({
      next: function (val) {
        console.log(val);
      },
      complete: function () { },
      error: function (error) {
        console.log(error);
      }
    });
  }



}