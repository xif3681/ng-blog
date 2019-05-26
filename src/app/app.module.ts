import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http'; // HTTP_INTERCEPTORS,
import { FormsModule } from '@angular/forms';
// import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
// 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './home/article/article.component';
import { EditorComponent } from './home/editor/editor.component';
import { PageNotFoundComponent } from './not-found.component';
import { DetailsComponent } from './home/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    EditorComponent,
    PageNotFoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    // NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
