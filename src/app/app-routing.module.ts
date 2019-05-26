import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './home/article/article.component';
import { EditorComponent } from './home/editor/editor.component';
import { PageNotFoundComponent } from './not-found.component';
import { DetailsComponent } from './home/details/details.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ArticleComponent },
    { path: 'edit', component: EditorComponent },
    { path: 'details', component: DetailsComponent },
    
    // { path: 'home', loadChildren: './login/login.module#LoginModule' }, // 懒加载
    // { path: 'home', loadChildren: './home/home.module#HomeModule', data: { preload: true } }, // 懒加载 + 预加载
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        
    ]
})
export class AppRoutingModule { }


/*

Copyright(c): 2018 深圳创新设计研究院
Author: luo.shuqi@live.com
@file: app-routing.module.ts
@time: 2018 / 7 / 2 17: 18

*/
