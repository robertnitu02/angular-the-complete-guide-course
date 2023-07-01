import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    // console.log(postData);
    this.http.post(
      'https://angular-course-a0eb0-default-rtdb.firebaseio.com/posts.json',
      postData
    ).subscribe((responseData: any) => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get('https://angular-course-a0eb0-default-rtdb.firebaseio.com/posts.json')
      .pipe(map((responseData: any) => {
        const responseArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            responseArray.push({...responseData[key], id: key});
          }
        }
        return responseArray;
      }))
      .subscribe((posts: any) => {
        console.log(posts);
      });
  }
}
