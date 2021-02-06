import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{

  constructor() { }
  contentTitle='';
  contentMessage='';

  @Output() postCreated=new EventEmitter();

  onAddPost()
  {
    const post = {title:this.contentTitle,message:this.contentMessage};
    this.postCreated.emit(post);
  }


}