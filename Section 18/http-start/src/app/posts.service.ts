import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {PostData} from "./post.model";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable()
export class PostsService {
  // dataSend = new Subject<{posts: PostData[], isFetching: boolean}>()

  constructor(private http: HttpClient) {
  }

  createPost(postData: PostData) {
    this.http.post<{ name: string }>(
      'https://angular-course-a0eb0-default-rtdb.firebaseio.com/posts.json',
      postData
    ).subscribe((responseData: any) => {
      console.log(responseData);
    });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: PostData }>('https://angular-course-a0eb0-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          const responseArray: PostData[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              responseArray.push({...responseData[key], id: key});
            }
          }
          return responseArray;
        }));
      // .subscribe((posts: PostData[]) => {
      //   this.dataSend.next({posts: posts, isFetching: false});
      // });
  }

  deletePosts() {
    return this.http.delete('https://angular-course-a0eb0-default-rtdb.firebaseio.com/posts.json');
  }
}
