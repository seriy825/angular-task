import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { PasswordStrength } from './types/password-strength';
import { StrengthPasswordService } from './services/strength-password.service';
import { SectionsComponent } from './components/sections/sections.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, InputComponent, SectionsComponent],
})
export class AppComponent {
  title = 'testTask';
  passwordStrength: PasswordStrength = 'clear';

  constructor(private passwordStrengthService: StrengthPasswordService) {}

  handleInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const result = this.passwordStrengthService.checkPasswordStrength(value);
    this.passwordStrength = result;
  }
}
