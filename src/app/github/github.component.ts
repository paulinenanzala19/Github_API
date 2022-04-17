import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repo } from '../repo';
import { User } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  username = 'paulinenanzala19';
  user!: any;
  public_repos!: number;
  // repos:any
  repo: any;

  constructor(private githubService: GithubService) {}
  getOutput(newUsername: any): void {
    this.username = newUsername;
    this.getRepos(newUsername)
    this.githubUser(newUsername)

    // this.githubService.getUser(username).then((user) => {
    //   this.user = user;
    //   console.log(user);
    // });
  }
  getRepos(username: string): void {
    this.githubService.githubRepos(username).subscribe((repo) => {
      this.repo = repo;
      // console.log(repo)
    });
  }
  githubUser(username: string): void {
    this.githubService.getUser(username).then((user) => (this.user = user));
  }

  ngOnInit(): void {
    // this.githubService.githubUser().subscribe((user) => {
    //   this.user = user;
    // console.log(user)
    // });
    this.getRepos(this.username);
    this.githubUser(this.username);
  }
}
