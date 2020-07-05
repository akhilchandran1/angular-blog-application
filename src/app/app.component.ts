import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog-application';

  // variables
  blogTitle: string;
  blogDescription: string;
  blogContent: string;
  message: string;

  constructor(public crudService: CrudService) {}
  createBlog() {

    let Record = {};
    Record['title'] = this.blogTitle;
    Record['discription'] = this.blogDescription;
    Record['content'] = this.blogContent;

    this.crudService.create_newBlogPost(Record).then(res => {
      this.blogTitle = '';
      this.blogDescription = '';
      this.blogContent = '';
      console.log(res);
      this.message = 'Blog post successfully saved';
    }).catch(error => {
      console.log(error);
    });
  }
}
