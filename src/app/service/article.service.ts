
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ArticleService {
    public url: string;
    constructor(private http: HttpClient) {

    }

    // 获取所有角色
    getAllRole(): Observable<any> {
        return this.http.get(`/blog/articles/article`)
            .pipe(map((res: Response) => {
                return res;

            }));
    }


    // 获取所有article - 分页
    getAllArticle(queryStr: String, page: number, pageSize: number): Observable<any> {
        // return Observable.of(ARTICLESTYPE);

        return this.http.get(`/articles/article?queryStr=${queryStr}&page=${page}&pageSize=${pageSize}`)
            .pipe(map((res: Response) => {
                return res;
            }));
    }

    // 新增Article
    addNewArticle(body): Observable<any> {
        return this.http.post('/articles/article', body)
            .pipe(map((res: Response) => {
                return res;

            }));
    }
    // 修改Article
    updateArticle(body): Observable<any> {
        return this.http.put('/articles/article', body)
            .pipe(map((res: Response) => {
                const data = { status: 200 };
                return data;
            }));
    }

    // 删除Article
    deleteArticle(id) {
        return this.http.delete(`/articles/article?id=${id}`)
            .pipe(map((res: Response) => {
                const data = { status: 200 };
                return data;

            }));
    }


}
