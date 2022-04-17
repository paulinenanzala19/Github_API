import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { DateAgoPipe } from './date-ago.pipe';
import { RepohighlightDirective } from './repohighlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubFormComponent,
    DateAgoPipe,
    RepohighlightDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
