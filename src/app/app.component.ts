import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
  private _router: Router
  ) {}
  title = '测试';
  one() {
    this._router.navigate(['/on']);
  }
}
