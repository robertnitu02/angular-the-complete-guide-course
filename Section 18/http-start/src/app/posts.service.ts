import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Subject, tap} from "rxjs";

import {PostData} from "./post.model";
import {map} from "rxjs/operators";


@Injectable()
export class PostsService {
  // dataSend = new Subject<{posts: PostData[], isFetching: boolean}>()
  error = new Subject<Error>();

  constructor(private http: HttpClient) {
  }

  createPost(postData: PostData) {
    this.http.post<{ name: string }>(
      'https://angular-course-a0eb0-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response'
      }
    ).subscribe((responseData: any) => {
      console.log(responseData);
    }, (error: Error) => {
      this.error.next(error);
    });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: PostData }>('https://angular-course-a0eb0-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Hello': ' World!'}),
          params: new HttpParams()
            .set('print', 'pretty')
            .set('custom', 'key')
        })
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
    return this.http
      .delete('https://angular-course-a0eb0-default-rtdb.firebaseio.com/posts.json', {
        observe: 'events'
      })
      .pipe(tap(events => {
        console.log(events);
        if (events.type === HttpEventType.Sent)
          console.log(events.type);
      }));
  }
}
