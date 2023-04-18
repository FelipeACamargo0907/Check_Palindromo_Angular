import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  text : string = '';

   IsPalindromo() : boolean{
    let inverso = this.text.split('').reverse().join('');

    if(this.text == '' || inverso == '' || this.text.length < 2)
      return false;

    return this.text == inverso;
  }

}

