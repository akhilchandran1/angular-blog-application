import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireServices: AngularFirestore) { }

  create_newBlogPost(Record) {
    return this.fireServices.collection('Blogs').add(Record);
  }
}
