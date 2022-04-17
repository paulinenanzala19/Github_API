import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  @Output()  newUsername=new EventEmitter()
  username:string=""
  submitForm(username:string){
    this.newUsername.emit(username)
    // console.log(username)
   
    
  }

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {

  }

}
