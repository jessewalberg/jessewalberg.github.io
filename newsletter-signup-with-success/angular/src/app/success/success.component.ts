import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  @Output() toggle = new EventEmitter<void>();
  emitEvent(event: MouseEvent) {
    event?.preventDefault();
    this.toggle.emit();
  }
}
