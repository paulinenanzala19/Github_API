import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  githubApiUrl = 'https://api.github.com';
  

  // userurl = `https://api.github.com/users/${this.username}`;
  // repourl = `https://api.github.com/users/${this.username}/repos`;

  // githubUser(): Observable<any> {
  //   return this.http.get<any>(this.userurl);
  // }
  githubRepos(username:string): Observable<any> {
    return this.http.get<any>(`${this.githubApiUrl}/users/${username}/repos`);
  }
  async getUser(username: string) {
    const client = this.http.get<any>(`${this.githubApiUrl}/users/${username}`);
    return await lastValueFrom(client).then((response) => response);
  }

  constructor(private http: HttpClient) {}
}
