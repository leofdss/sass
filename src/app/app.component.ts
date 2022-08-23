import { Component } from '@angular/core';

enum theme {
  light = "light",
  dark = "dark"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sass';

  theme: theme = theme.dark;

  changeTheme(): void {
    if(this.theme === theme.light) {
      this.theme = theme.dark;
    } else {
      this.theme = theme.light;
    }
  }
}
