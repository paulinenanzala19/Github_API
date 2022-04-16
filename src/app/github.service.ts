import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
   username='paulinenanzala19';

   userurl=`https://api.github.com/users/${this.username}`
   repourl=`https://api.github.com/users/${this.username}/repos`

githubUser():Observable<any>{
  
  return this.http.get<any>(this.userurl)

}
githubRepos():Observable<any>{
  return this.http.get<any>(this.repourl)
}
  
  constructor( private http:HttpClient) { }
}
