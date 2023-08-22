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
  //passwordLength =10

  onChangeLength(value: string) {
    // const updateValue=value ? value : '0'
    // const updateValue=value.length ? value : '0'
    //const updateValue=value.length >0 ? value : '0'
    const updateValue = value || '0';
    // const parseValue = parseInt(updateValue);
    const parseValue = value ? parseInt(value) : 0;
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
  isPassLenghtValid() {
    return (
      this.passwordLength &&
      (this.passwordLength < 8 || this.passwordLength > 20)
    );
  }
}
