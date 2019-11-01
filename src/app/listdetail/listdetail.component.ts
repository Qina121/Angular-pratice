import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.component.html',
  styleUrls: ['./listdetail.component.css']
})
export class ListdetailComponent implements OnInit {
  @Input() item;
  @Input() serial;
  constructor(
    private _router: Router
    ) {}

  ngOnInit() {
  }

  detialshow(e) {
    this._router.navigate(['/one/' + e]);
  }

}
