import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {PostData} from "./post.model";
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // subscription: Subscription;

  loadedPosts: PostData[] = [];
  isFetching = true;

  constructor(private http: HttpClient, private postsService: PostsService) {
  }

  ngOnInit() {
    this.fetchPosts();
    // this.postsService.dataSend
    //   .subscribe((data: {posts: PostData[], isFetching: boolean}) => {
    //     // console.log(data);
    //     this.loadedPosts = data.posts;
    //     this.isFetching = data.isFetching;
    //   });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onCreatePost(postData: PostData) {
    // Send Http request
    // console.log(postData);
    // <{name: string}> -> not necessary
    this.postsService.createPost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts()
      .subscribe(() => {
        this.loadedPosts = [];
      });
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts()
      .subscribe((data: PostData[]) => {
        this.loadedPosts = data;
        this.isFetching = false;
      });
  }
}
