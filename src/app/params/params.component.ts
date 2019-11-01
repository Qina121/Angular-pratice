import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {
  arr = [
    {id: '1', name: '大洼', age: '20岁', sex: '男', interest: '写代码'},
    {id: '2', name: '二洼', age: '23岁', sex: '女', interest: '打游戏'},
    {id: '3', name: '三洼', age: '26岁', sex: '男', interest: '打麻将'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
