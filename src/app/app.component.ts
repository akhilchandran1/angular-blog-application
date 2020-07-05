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
  blogs: string;
  blogTitle: string;
  blogDescription: string;
  blogContent: string;
  message: string;

  constructor(public crudService: CrudService) {}

  ngOnInit(){
    this.crudService.get_allBlogPost().subscribe(data => {
      this.blogs = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          title: e.payload.doc.data()['title'],
          discription: e.payload.doc.data()['discription'],
          content: e.payload.doc.data()['content'],
        };
      });
      console.log(this.blogs);
    });
  }

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
      this.message = 'Blog Post Successfully Saved !!!';
    }).catch(error => {
      console.log(error);
    });
  }

  editBlogPost(Record) {
    Record.isedit = true;
    Record.editTitle = Record.title;
    Record.editDiscription = Record.discription;
    Record.editContent = Record.content;
  }
  updateBlogPost(recordData) {
    let record = {};
    record['title'] = recordData.editTitle;
    record['discription'] = recordData.editDiscription;
    record['content'] = recordData.editContent;
    this.crudService.update_blogPost(recordData.id, record);
    recordData.isedit = false;
  }
  deleteBlogPost(Record) {

  }
}
