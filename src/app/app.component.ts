import { Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parseValue = parseInt(value);
    if (!isNaN(parseValue)) {
      this.passwordLength = parseValue;
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const number = '1234567890';
    const symbol = '&$!?@}{()/.';
    let valideChar = '';
    if (this.includeLetters) {
      valideChar += letters;
    }
    if (this.includeNumbers) {
      valideChar += number;
    }
    if (this.includeSymbols) {
      valideChar += symbol;
    }
    let generatedPassword = '';
    for (let i = 0; i <= this.passwordLength; i++) {
      let index = Math.floor(Math.random() * valideChar.length);
      generatedPassword += valideChar[index];
    }
    this.password = generatedPassword;
  }
}
