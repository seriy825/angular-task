import { Component, Input } from '@angular/core';
import { PasswordStrength } from '../../types/password-strength';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss',
})
export class SectionsComponent {
  @Input() passwordStrength: PasswordStrength = 'clear';
}
