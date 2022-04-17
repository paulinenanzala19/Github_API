import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repo } from '../repo';
import { User } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user!:any
  public_repos!:number
  // repos:any
  repo:any

  constructor(private githubService:GithubService) {
    

  }
  

  ngOnInit(): void {
    this.githubService.githubUser().subscribe(
      user=>{
        this.user=user
        console.log(user)
      }
    )
    this.githubService.githubRepos().subscribe(
      repo=>{
        this.repo=repo
        console.log(repo)
      }
    )

  }

}
