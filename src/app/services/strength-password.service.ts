import { Injectable } from '@angular/core';
import { PasswordStrength } from '../types/password-strength';

@Injectable({
  providedIn: 'root',
})
export class StrengthPasswordService {
  constructor() {}

  checkPasswordStrength(value: string): PasswordStrength {
    if (!value.length) return 'clear';
    if (value.length < 8) return 'short';

    return value.match(/^[a-zA-Z]+$/) ||
      value.match(/^[0-9]+$/) ||
      value.match(/^[!@#$%^&*()\-=_+{};':"|,.<>?]+$/)
      ? 'easy'
      : value.match(/[a-zA-Z]+/) &&
        value.match(/[0-9]+/) &&
        value.match(/[!@#$%^&*()\-=_+{};':"|,.<>?]+/)
      ? 'strong'
      : 'medium';
  }
}
