import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .pipe(map(res => res.json()));
  }

  getPost(postID){
    return this.http.post('/api/post',{
      postID:postID
    }).pipe(map(res => res.json()));
  }
}