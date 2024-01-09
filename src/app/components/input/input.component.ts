import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PasswordStrength } from '../../types/password-strength';

type PasswordInputType = 'text' | 'password';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Output() inputChange: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() inputValue:string = '';

  showPassword: boolean = false;
  inputType: PasswordInputType = 'password';
  passwordStrength: PasswordStrength = 'clear';

  onInputChange(event: Event) {
    this.inputChange.emit(event);
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
