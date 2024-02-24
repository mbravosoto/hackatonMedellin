import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BobTest } from './bob.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BobTest, FormsModule], // Include FormsModule here
  selector: 'dapp-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected from 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'dapp-angular';
  sliderValue = 20; 
  updateValue() {
    console.log(this.sliderValue);
  }
}


