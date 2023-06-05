import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

imports: [LandingComponent];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayLanding: boolean = true;
  displaySuccess: boolean = false;

  toggleDisplayLanding(): void {
    this.displayLanding = !this.displayLanding;
    this.displaySuccess = !this.displaySuccess;
  }

  toggleDisplaySuccess(): void {
    this.displaySuccess = !this.displaySuccess;
    this.displayLanding = !this.displayLanding;
  }
}
