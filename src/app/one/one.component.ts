import { Component, OnInit, NgModule, } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  data: any = [
    {id: '1', name: '王林', sex: '女', age: '20岁'},
    {id: '2', name: '赵宇', sex: '男', age: '30岁'},
    {id: '3', name: '王建林', sex: '男', age: '40岁'}
  ];
  constructor() { }

  ngOnInit() {
  }

  listdetail(e) {
    console.log(e);
  }

}
