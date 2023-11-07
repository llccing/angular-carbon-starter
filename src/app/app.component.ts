import { Component } from '@angular/core';
import { ButtonModule } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-v17';
}
