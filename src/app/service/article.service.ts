
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ArticleService {
    public url: string;
    constructor(private http: HttpClient) {
        // this.url = 'blog-api/articles';
        this.url = '/articles'

    }

    // 获取所有article
    getArticle(): Observable<any> {
        return this.http.get(`${this.url}/article`)
            .pipe(map((res: Response) => {
                return res;

            }));
    }
    getArticleById(id): Observable<any> {
        return this.http.get(`${this.url}/articleById?id=${id}`)
            .pipe(map((res: Response) => {
                return res;

            }));
    }

    // 获取所有article - 分页
    getAllArticle( page: number, pageSize: number): Observable<any> {
        // return Observable.of(ARTICLESTYPE);

        return this.http.get(`${this.url}/article?page=${page}&pageSize=${pageSize}`)
            .pipe(map((res: Response) => {
                return res;
            }));
    }

    // 新增Article
    addNewArticle(body): Observable<any> {
        return this.http.post(`${this.url}/article`, body)
            .pipe(map((res: Response) => {
                return res;

            }));
    }
    // 修改Article
    updateArticle(body): Observable<any> {
        return this.http.put(`${this.url}/article`, body)
            .pipe(map((res: Response) => {
                const data = { status: 200 };
                return data;
            }));
    }

    // 删除Article
    deleteArticle(id) {
        return this.http.delete(`${this.url}/article?id=${id}`)
            .pipe(map((res: Response) => {
                const data = { status: 200 };
                return data;

            }));
    }


}
