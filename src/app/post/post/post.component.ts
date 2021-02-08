import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor() { }

  savedPosts:Post[] =[];

  onPostAdded(post:any){
    this.savedPosts.push(post);
  }


}
