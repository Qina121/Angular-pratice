import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-three',
  templateUrl: './detail-three.component.html',
  styleUrls: ['./detail-three.component.css']
})
export class DetailThreeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      console.log(id);
    });
  }

}
