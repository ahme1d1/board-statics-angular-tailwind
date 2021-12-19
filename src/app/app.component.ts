import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tailwind';
  darkModeChecked!: boolean;

  dark(event: any) {
    this.darkModeChecked = event.target.checked
  }

}
