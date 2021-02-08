import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{

  constructor() { }

  // posts=[
  //   {title:'First Post',content:'This is the first post content'},
  //   {title:'Second Post',content:'This is the second post content'},
  //   {title:'Third Post',content:'This is the Third post content'}

  // ]

  @Input() posts:Post[]=[];

}
