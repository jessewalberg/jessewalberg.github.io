import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  @Output() toggle = new EventEmitter<void>();

  email = new FormControl('', [Validators.required, Validators.email]);

  emitEvent(event: MouseEvent): void {
    this.email.markAsTouched();
    event.preventDefault();
    if (this.email.invalid) return;
    this.toggle.emit();
  }
}
