import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BobTest } from './bob.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BobTest],
  selector: 'dapp-angular-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dapp-angular';
}
