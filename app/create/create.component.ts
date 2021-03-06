import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {PostService} from '../post.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private postService:PostService) { }

  ngOnInit() {
    this.createForm = this.formbuilder.group({
      title:['',Validators.required],
      author:['',Validators.required],
      post:['',Validators.required]
    })
  }
  saveForm(){
    this.postService.savePost(this.createForm.value)
  }
}
