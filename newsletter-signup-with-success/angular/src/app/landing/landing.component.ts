import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  @Output() toggle = new EventEmitter<void>();

  emitEvent(): void {
    this.toggle.emit();
  }
}
