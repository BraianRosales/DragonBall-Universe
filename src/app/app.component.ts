import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DragonBall Universe';
  renderSidenav = true;

  renderChange() {
    if (this.renderSidenav == true) {
      this.renderSidenav = false;
    } else {
      this.renderSidenav = true;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
