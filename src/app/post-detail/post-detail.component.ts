import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post = {};
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postsService: PostsService) { }

  getPost() {
    const id = +this.route.snapshot.paramMap.get('postID');
    this.postsService.getPost(id)
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getPost();
  }

}
