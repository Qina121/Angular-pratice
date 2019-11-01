import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  percent = 0;
  array = [
    {id: '1', src: '/assets/img/1.jpg'},
    {id: '2', src: '/assets/img/2.jpg'},
    {id: '3', src: '/assets/img/3.jpg'},
    {id: '4', src: '/assets/img/4.jpg'}
  ];
  constructor() { }

  ngOnInit() {
  }
  increase(): void {
    this.percent = this.percent + 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }

  decline(): void {
    this.percent = this.percent - 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }

}
