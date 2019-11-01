import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(
    private _router: Router
    ) {}

  ngOnInit() {
    console.log(location.pathname);
  }

  one() {
    this._router.navigate(['/on']);
  }

}
