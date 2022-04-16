import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user!:any
  public_repos!:number

  constructor(private githubService:GithubService) {}
  

  ngOnInit(): void {
    this.githubService.githubUser().subscribe(
      user=>{
        this.user=user
        console.log(user)
      }
    )

  }

}
