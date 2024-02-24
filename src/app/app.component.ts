import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BobTest } from './bob.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterModule, BobTest, FormsModule], // Include FormsModule here
  selector: 'dapp-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})

export class AppComponent {
  title = 'dapp-angular';
  sliderValue = 18;
  backgroundImage = '/assets/Verde.png'; 

  constructor() {
    this.updateBackgroundImage(); 
  }

  updateValue() {
    this.updateBackgroundImage(); 
  }

  updateBackgroundImage() {
    if (this.sliderValue <= 7) {
      this.backgroundImage = '/assets/Azul.png'; 
    } else if (this.sliderValue > 7 && this.sliderValue <= 21) {
      this.backgroundImage = '/assets/Verde.png'; 
    } else if (this.sliderValue > 21) {
      this.backgroundImage = '/assets/Rojo.png'; 
    }
  }
}
